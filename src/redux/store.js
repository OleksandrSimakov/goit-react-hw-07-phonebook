import { configureStore } from '@reduxjs/toolkit'
// import { contactsReducer } from './contacts/contactsSlice'
import { contactsApi } from './contacts/apiService'

export default configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
})
