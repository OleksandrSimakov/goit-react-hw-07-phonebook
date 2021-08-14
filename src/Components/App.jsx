import ContactAddForm from './ContactAddForm/ContactAddForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'
import { useSelector } from 'react-redux'
import { useGetContactsQuery } from '../redux/contacts/apiService'
import { Spinner } from './Spinner/Spinner'
import { Toaster } from 'react-hot-toast'

export default function App() {
  const { data, isFetching } = useGetContactsQuery()

  const filter = useSelector((state) => state.filter.filter)

  return (
    <>
      <h2>Phonebook</h2>

      <ContactAddForm />

      <h2>Contacts</h2>

      <Filter />

      {isFetching && <Spinner />}

      {data && (
        <ContactList
          contacts={data.filter((contact) =>
            contact.name.toLowerCase().includes(filter),
          )}
        ></ContactList>
      )}

      <Toaster />
    </>
  )
}
