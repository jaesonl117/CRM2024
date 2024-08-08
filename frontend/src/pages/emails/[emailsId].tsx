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

import { update, fetch } from '../../stores/emails/emailsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

import { hasPermission } from '../../helpers/userPermissions';

const EditEmails = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    subject: '',

    body: '',

    sent_by: '',

    lead: '',

    company: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { emails } = useAppSelector((state) => state.emails);

  const { currentUser } = useAppSelector((state) => state.auth);

  const { emailsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: emailsId }));
  }, [emailsId]);

  useEffect(() => {
    if (typeof emails === 'object') {
      setInitialValues(emails);
    }
  }, [emails]);

  useEffect(() => {
    if (typeof emails === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = emails[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [emails]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: emailsId, data }));
    await router.push('/emails/emails-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit emails')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit emails'}
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
              <FormField label='Subject'>
                <Field name='subject' placeholder='Subject' />
              </FormField>

              <FormField label='Body' hasTextareaHeight>
                <Field name='body' id='body' component={RichTextField}></Field>
              </FormField>

              <FormField label='SentBy' labelFor='sent_by'>
                <Field
                  name='sent_by'
                  id='sent_by'
                  component={SelectField}
                  options={initialValues.sent_by}
                  itemRef={'users'}
                  showField={'firstName'}
                ></Field>
              </FormField>

              <FormField label='Lead' labelFor='lead'>
                <Field
                  name='lead'
                  id='lead'
                  component={SelectField}
                  options={initialValues.lead}
                  itemRef={'leads'}
                  showField={'name'}
                ></Field>
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
                  onClick={() => router.push('/emails/emails-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditEmails.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_EMAILS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditEmails;
