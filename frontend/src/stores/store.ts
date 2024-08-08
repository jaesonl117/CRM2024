import { configureStore } from '@reduxjs/toolkit';
import styleReducer from './styleSlice';
import mainReducer from './mainSlice';
import authSlice from './authSlice';
import openAiSlice from './openAiSlice';

import usersSlice from './users/usersSlice';
import companiesSlice from './companies/companiesSlice';
import contactsSlice from './contacts/contactsSlice';
import documentsSlice from './documents/documentsSlice';
import emailsSlice from './emails/emailsSlice';
import leadsSlice from './leads/leadsSlice';
import notificationsSlice from './notifications/notificationsSlice';
import reportsSlice from './reports/reportsSlice';
import tasksSlice from './tasks/tasksSlice';
import rolesSlice from './roles/rolesSlice';
import permissionsSlice from './permissions/permissionsSlice';
import companySlice from './company/companySlice';

export const store = configureStore({
  reducer: {
    style: styleReducer,
    main: mainReducer,
    auth: authSlice,
    openAi: openAiSlice,

    users: usersSlice,
    companies: companiesSlice,
    contacts: contactsSlice,
    documents: documentsSlice,
    emails: emailsSlice,
    leads: leadsSlice,
    notifications: notificationsSlice,
    reports: reportsSlice,
    tasks: tasksSlice,
    roles: rolesSlice,
    permissions: permissionsSlice,
    company: companySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
