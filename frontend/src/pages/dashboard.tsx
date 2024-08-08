import * as icon from '@mdi/js';
import Head from 'next/head';
import React from 'react';
import axios from 'axios';
import type { ReactElement } from 'react';
import LayoutAuthenticated from '../layouts/Authenticated';
import SectionMain from '../components/SectionMain';
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton';
import BaseIcon from '../components/BaseIcon';
import { getPageTitle } from '../config';
import Link from 'next/link';

import { hasPermission } from '../helpers/userPermissions';
import { fetchWidgets } from '../stores/roles/rolesSlice';
import { WidgetCreator } from '../components/WidgetCreator/WidgetCreator';
import { SmartWidget } from '../components/SmartWidget/SmartWidget';

import { useAppDispatch, useAppSelector } from '../stores/hooks';
const Dashboard = () => {
  const dispatch = useAppDispatch();
  const iconsColor = useAppSelector((state) => state.style.iconsColor);
  const corners = useAppSelector((state) => state.style.corners);
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);

  const [users, setUsers] = React.useState('Loading...');
  const [companies, setCompanies] = React.useState('Loading...');
  const [contacts, setContacts] = React.useState('Loading...');
  const [documents, setDocuments] = React.useState('Loading...');
  const [emails, setEmails] = React.useState('Loading...');
  const [leads, setLeads] = React.useState('Loading...');
  const [notifications, setNotifications] = React.useState('Loading...');
  const [reports, setReports] = React.useState('Loading...');
  const [tasks, setTasks] = React.useState('Loading...');
  const [roles, setRoles] = React.useState('Loading...');
  const [permissions, setPermissions] = React.useState('Loading...');
  const [company, setCompany] = React.useState('Loading...');

  const [widgetsRole, setWidgetsRole] = React.useState({
    role: { value: '', label: '' },
  });
  const { currentUser } = useAppSelector((state) => state.auth);
  const { isFetchingQuery } = useAppSelector((state) => state.openAi);

  const { rolesWidgets, loading } = useAppSelector((state) => state.roles);

  const organizationId = currentUser?.organization?.id;

  async function loadData() {
    const entities = [
      'users',
      'companies',
      'contacts',
      'documents',
      'emails',
      'leads',
      'notifications',
      'reports',
      'tasks',
      'roles',
      'permissions',
      'company',
    ];
    const fns = [
      setUsers,
      setCompanies,
      setContacts,
      setDocuments,
      setEmails,
      setLeads,
      setNotifications,
      setReports,
      setTasks,
      setRoles,
      setPermissions,
      setCompany,
    ];

    const requests = entities.map((entity, index) => {
      if (hasPermission(currentUser, `READ_${entity.toUpperCase()}`)) {
        return axios.get(`/${entity.toLowerCase()}/count`, {
          params: {
            organization: organizationId,
          },
        });
      } else {
        fns[index](null);
        return Promise.resolve({ data: { count: null } });
      }
    });

    Promise.allSettled(requests).then((results) => {
      results.forEach((result, i) => {
        if (result.status === 'fulfilled') {
          fns[i](result.value.data.count);
        } else {
          fns[i](result.reason.message);
        }
      });
    });
  }

  async function getWidgets(roleId) {
    await dispatch(fetchWidgets(roleId));
  }
  React.useEffect(() => {
    if (!currentUser) return;
    loadData().then();
    setWidgetsRole({
      role: {
        value: currentUser?.app_role?.id,
        label: currentUser?.app_role?.name,
      },
    });
  }, [currentUser]);

  React.useEffect(() => {
    if (!currentUser || !widgetsRole?.role?.value) return;
    getWidgets(widgetsRole?.role?.value || '').then();
  }, [widgetsRole?.role?.value]);

  return (
    <>
      <Head>
        <title>{getPageTitle('Dashboard')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={icon.mdiChartTimelineVariant}
          title='Overview'
          main
        >
          {''}
        </SectionTitleLineWithButton>

        {hasPermission(currentUser, 'CREATE_ROLES') && (
          <WidgetCreator
            currentUser={currentUser}
            isFetchingQuery={isFetchingQuery}
            setWidgetsRole={setWidgetsRole}
            widgetsRole={widgetsRole}
          />
        )}
        {!!rolesWidgets.length &&
          hasPermission(currentUser, 'CREATE_ROLES') && (
            <p className='  text-gray-500 dark:text-gray-400 mb-4'>
              {`${widgetsRole?.role?.label || 'Users'}'s widgets`}
            </p>
          )}

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-4 mb-6 grid-flow-dense'>
          {(isFetchingQuery || loading) && (
            <div
              className={` ${
                corners !== 'rounded-full' ? corners : 'rounded-3xl'
              } dark:bg-dark-900 text-lg leading-tight   text-gray-500 flex items-center ${cardsStyle} dark:border-dark-700 p-6`}
            >
              <BaseIcon
                className={`${iconsColor} animate-spin mr-5`}
                w='w-16'
                h='h-16'
                size={48}
                path={icon.mdiLoading}
              />{' '}
              Loading widgets...
            </div>
          )}

          {rolesWidgets &&
            rolesWidgets.map((widget) => (
              <SmartWidget
                key={widget.id}
                userId={currentUser?.id}
                widget={widget}
                roleId={widgetsRole?.role?.value || ''}
                admin={hasPermission(currentUser, 'CREATE_ROLES')}
              />
            ))}
        </div>

        {!!rolesWidgets.length && (
          <hr className='my-6 text-skyBlueTheme-mainBG  ' />
        )}

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6'>
          {hasPermission(currentUser, 'READ_USERS') && (
            <Link href={'/users/users-list'}>
              <div
                className={`${
                  corners !== 'rounded-full' ? corners : 'rounded-3xl'
                } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
              >
                <div className='flex justify-between align-center'>
                  <div>
                    <div className='text-lg leading-tight   text-gray-500 dark:text-gray-400'>
                      Users
                    </div>
                    <div className='text-3xl leading-tight font-semibold'>
                      {users}
                    </div>
                  </div>
                  <div>
                    <BaseIcon
                      className={`${iconsColor}`}
                      w='w-16'
                      h='h-16'
                      size={48}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      path={icon.mdiAccountGroup || icon.mdiTable}
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {hasPermission(currentUser, 'READ_COMPANIES') && (
            <Link href={'/companies/companies-list'}>
              <div
                className={`${
                  corners !== 'rounded-full' ? corners : 'rounded-3xl'
                } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
              >
                <div className='flex justify-between align-center'>
                  <div>
                    <div className='text-lg leading-tight   text-gray-500 dark:text-gray-400'>
                      Companies
                    </div>
                    <div className='text-3xl leading-tight font-semibold'>
                      {companies}
                    </div>
                  </div>
                  <div>
                    <BaseIcon
                      className={`${iconsColor}`}
                      w='w-16'
                      h='h-16'
                      size={48}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      path={icon.mdiOfficeBuilding || icon.mdiTable}
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {hasPermission(currentUser, 'READ_CONTACTS') && (
            <Link href={'/contacts/contacts-list'}>
              <div
                className={`${
                  corners !== 'rounded-full' ? corners : 'rounded-3xl'
                } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
              >
                <div className='flex justify-between align-center'>
                  <div>
                    <div className='text-lg leading-tight   text-gray-500 dark:text-gray-400'>
                      Contacts
                    </div>
                    <div className='text-3xl leading-tight font-semibold'>
                      {contacts}
                    </div>
                  </div>
                  <div>
                    <BaseIcon
                      className={`${iconsColor}`}
                      w='w-16'
                      h='h-16'
                      size={48}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      path={icon.mdiAccountBox || icon.mdiTable}
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {hasPermission(currentUser, 'READ_DOCUMENTS') && (
            <Link href={'/documents/documents-list'}>
              <div
                className={`${
                  corners !== 'rounded-full' ? corners : 'rounded-3xl'
                } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
              >
                <div className='flex justify-between align-center'>
                  <div>
                    <div className='text-lg leading-tight   text-gray-500 dark:text-gray-400'>
                      Documents
                    </div>
                    <div className='text-3xl leading-tight font-semibold'>
                      {documents}
                    </div>
                  </div>
                  <div>
                    <BaseIcon
                      className={`${iconsColor}`}
                      w='w-16'
                      h='h-16'
                      size={48}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      path={icon.mdiFileDocument || icon.mdiTable}
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {hasPermission(currentUser, 'READ_EMAILS') && (
            <Link href={'/emails/emails-list'}>
              <div
                className={`${
                  corners !== 'rounded-full' ? corners : 'rounded-3xl'
                } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
              >
                <div className='flex justify-between align-center'>
                  <div>
                    <div className='text-lg leading-tight   text-gray-500 dark:text-gray-400'>
                      Emails
                    </div>
                    <div className='text-3xl leading-tight font-semibold'>
                      {emails}
                    </div>
                  </div>
                  <div>
                    <BaseIcon
                      className={`${iconsColor}`}
                      w='w-16'
                      h='h-16'
                      size={48}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      path={icon.mdiEmail || icon.mdiTable}
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {hasPermission(currentUser, 'READ_LEADS') && (
            <Link href={'/leads/leads-list'}>
              <div
                className={`${
                  corners !== 'rounded-full' ? corners : 'rounded-3xl'
                } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
              >
                <div className='flex justify-between align-center'>
                  <div>
                    <div className='text-lg leading-tight   text-gray-500 dark:text-gray-400'>
                      Leads
                    </div>
                    <div className='text-3xl leading-tight font-semibold'>
                      {leads}
                    </div>
                  </div>
                  <div>
                    <BaseIcon
                      className={`${iconsColor}`}
                      w='w-16'
                      h='h-16'
                      size={48}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      path={icon.mdiAccountPlus || icon.mdiTable}
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {hasPermission(currentUser, 'READ_NOTIFICATIONS') && (
            <Link href={'/notifications/notifications-list'}>
              <div
                className={`${
                  corners !== 'rounded-full' ? corners : 'rounded-3xl'
                } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
              >
                <div className='flex justify-between align-center'>
                  <div>
                    <div className='text-lg leading-tight   text-gray-500 dark:text-gray-400'>
                      Notifications
                    </div>
                    <div className='text-3xl leading-tight font-semibold'>
                      {notifications}
                    </div>
                  </div>
                  <div>
                    <BaseIcon
                      className={`${iconsColor}`}
                      w='w-16'
                      h='h-16'
                      size={48}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      path={icon.mdiBell || icon.mdiTable}
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {hasPermission(currentUser, 'READ_REPORTS') && (
            <Link href={'/reports/reports-list'}>
              <div
                className={`${
                  corners !== 'rounded-full' ? corners : 'rounded-3xl'
                } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
              >
                <div className='flex justify-between align-center'>
                  <div>
                    <div className='text-lg leading-tight   text-gray-500 dark:text-gray-400'>
                      Reports
                    </div>
                    <div className='text-3xl leading-tight font-semibold'>
                      {reports}
                    </div>
                  </div>
                  <div>
                    <BaseIcon
                      className={`${iconsColor}`}
                      w='w-16'
                      h='h-16'
                      size={48}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      path={icon.mdiChartBar || icon.mdiTable}
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {hasPermission(currentUser, 'READ_TASKS') && (
            <Link href={'/tasks/tasks-list'}>
              <div
                className={`${
                  corners !== 'rounded-full' ? corners : 'rounded-3xl'
                } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
              >
                <div className='flex justify-between align-center'>
                  <div>
                    <div className='text-lg leading-tight   text-gray-500 dark:text-gray-400'>
                      Tasks
                    </div>
                    <div className='text-3xl leading-tight font-semibold'>
                      {tasks}
                    </div>
                  </div>
                  <div>
                    <BaseIcon
                      className={`${iconsColor}`}
                      w='w-16'
                      h='h-16'
                      size={48}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      path={icon.mdiClipboardCheck || icon.mdiTable}
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {hasPermission(currentUser, 'READ_ROLES') && (
            <Link href={'/roles/roles-list'}>
              <div
                className={`${
                  corners !== 'rounded-full' ? corners : 'rounded-3xl'
                } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
              >
                <div className='flex justify-between align-center'>
                  <div>
                    <div className='text-lg leading-tight   text-gray-500 dark:text-gray-400'>
                      Roles
                    </div>
                    <div className='text-3xl leading-tight font-semibold'>
                      {roles}
                    </div>
                  </div>
                  <div>
                    <BaseIcon
                      className={`${iconsColor}`}
                      w='w-16'
                      h='h-16'
                      size={48}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      path={
                        icon.mdiShieldAccountVariantOutline || icon.mdiTable
                      }
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {hasPermission(currentUser, 'READ_PERMISSIONS') && (
            <Link href={'/permissions/permissions-list'}>
              <div
                className={`${
                  corners !== 'rounded-full' ? corners : 'rounded-3xl'
                } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
              >
                <div className='flex justify-between align-center'>
                  <div>
                    <div className='text-lg leading-tight   text-gray-500 dark:text-gray-400'>
                      Permissions
                    </div>
                    <div className='text-3xl leading-tight font-semibold'>
                      {permissions}
                    </div>
                  </div>
                  <div>
                    <BaseIcon
                      className={`${iconsColor}`}
                      w='w-16'
                      h='h-16'
                      size={48}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      path={icon.mdiShieldAccountOutline || icon.mdiTable}
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {hasPermission(currentUser, 'READ_COMPANY') && (
            <Link href={'/company/company-list'}>
              <div
                className={`${
                  corners !== 'rounded-full' ? corners : 'rounded-3xl'
                } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
              >
                <div className='flex justify-between align-center'>
                  <div>
                    <div className='text-lg leading-tight   text-gray-500 dark:text-gray-400'>
                      Company
                    </div>
                    <div className='text-3xl leading-tight font-semibold'>
                      {company}
                    </div>
                  </div>
                  <div>
                    <BaseIcon
                      className={`${iconsColor}`}
                      w='w-16'
                      h='h-16'
                      size={48}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      path={icon.mdiTable || icon.mdiTable}
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </SectionMain>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default Dashboard;
