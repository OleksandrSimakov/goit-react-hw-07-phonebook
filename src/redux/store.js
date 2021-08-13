import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './contacts/contactsSlice'

export default configureStore({
  reducer: { contacts: contactsReducer },
})
