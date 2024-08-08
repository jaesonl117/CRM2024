import { mdiChartTimelineVariant, mdiUpload } from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

import CardBox from '../../components/CardBox';
import LayoutAuthenticated from '../../layouts/Authenticated';
import SectionMain from '../../components/SectionMain';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import { getPageTitle } from '../../config';

import { Field, Form, Formik } from 'formik';
import FormField from '../../components/FormField';
import BaseDivider from '../../components/BaseDivider';
import BaseButtons from '../../components/BaseButtons';
import BaseButton from '../../components/BaseButton';
import FormCheckRadio from '../../components/FormCheckRadio';
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup';
import FormFilePicker from '../../components/FormFilePicker';
import FormImagePicker from '../../components/FormImagePicker';
import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { SwitchField } from '../../components/SwitchField';
import { RichTextField } from '../../components/RichTextField';

import { update, fetch } from '../../stores/companies/companiesSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

import { hasPermission } from '../../helpers/userPermissions';

const EditCompanies = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    name: '',

    address: '',

    phone: '',

    email: '',

    company: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { companies } = useAppSelector((state) => state.companies);

  const { currentUser } = useAppSelector((state) => state.auth);

  const { companiesId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: companiesId }));
  }, [companiesId]);

  useEffect(() => {
    if (typeof companies === 'object') {
      setInitialValues(companies);
    }
  }, [companies]);

  useEffect(() => {
    if (typeof companies === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = companies[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [companies]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: companiesId, data }));
    await router.push('/companies/companies-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit companies')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit companies'}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='CompanyName'>
                <Field name='name' placeholder='CompanyName' />
              </FormField>

              <FormField label='Address' hasTextareaHeight>
                <Field name='address' as='textarea' placeholder='Address' />
              </FormField>

              <FormField label='Phone'>
                <Field name='phone' placeholder='Phone' />
              </FormField>

              <FormField label='Email'>
                <Field name='email' placeholder='Email' />
              </FormField>

              <FormField label='company' labelFor='company'>
                <Field
                  name='company'
                  id='company'
                  component={SelectField}
                  options={initialValues.company}
                  itemRef={'company'}
                  showField={'name'}
                ></Field>
              </FormField>

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/companies/companies-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditCompanies.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_COMPANIES'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditCompanies;
