// import { useState } from 'react'
import ContactAddForm from './ContactAddForm/ContactAddForm'
import ContactListItem from './ContactListItem/ContactListItem'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'
import { deleteContact } from '../redux/contacts/contactsSlice'

import { useSelector, useDispatch } from 'react-redux'

export default function App() {
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ])

  const contacts = useSelector((state) => state.contacts.items)
  const filter = useSelector((state) => state.contacts.filter)
  const dispatch = useDispatch()

  // const [filter, setFilter] = useState('')

  // const addContact = (name, number) => {
  // const contactsHaveDuplicate = contacts.find(
  //   (contact) => contact.name === name,
  // )
  // contactsHaveDuplicate
  //   ? alert(`${name} is already in contacts`)
  //   : setContacts((prevState) => [
  //       ...prevState,
  //       { id: uuidv4(), name: name, number: number },
  //     ])
  // }

  // const handleFilterChange = ({ target }) => {
  //   const filterInput = target.value
  //   setFilter(filterInput)
  // }

  function getFilteredNames() {
    const normilizedFilterState = filter.toLowerCase()

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normilizedFilterState),
    )
  }

  // const deleteContact = (contactId) => {
  //   setContacts((prevState) =>
  //     [...prevState].filter((contact) => contact.id !== contactId),
  //   )
  // }

  return (
    <>
      <h2>Phonebook</h2>

      <ContactAddForm />

      <h2>Contacts</h2>

      {/* <Filter filter={filter} handleFilterChange={handleFilterChange}></Filter> */}
      <Filter />

      <ContactList>
        {getFilteredNames().map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onDelBtnClick={() => dispatch(deleteContact(id))}
          />
        ))}
      </ContactList>
    </>
  )
}

// export default class App extends Component {
//   state = {
//     contacts: [
// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   }

// addContact = (name, number) => {
//   const contactsHaveDuplicate = this.state.contacts.find(
//     (contact) => contact.name === name,
//   )
//   contactsHaveDuplicate
//     ? alert(`${name} is already in contacts`)
//     : this.setState((prevState) => ({
//         contacts: [
//           ...prevState.contacts,
//           { id: uuidv4(), name: name, number: number },
//         ],
//       }))
// }

// handleFilterChange = ({ target }) => {
//   const filterInput = target.value
//   this.setState({
//     filter: filterInput,
//   })
// }

// getFilteredNames = () => {
//   const { filter, contacts } = this.state
//   const normilizedFilterState = filter.toLowerCase()

//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normilizedFilterState),
//   )
// }

// deleteContact = (contactId) => {
//   this.setState((prevState) => ({
//     contacts: prevState.contacts.filter(
//       (contact) => contact.id !== contactId,
//     ),
//   }))
// }

//   render() {
//     const { filter } = this.state

//     const filteredContactNames = this.getFilteredNames()

//     return (
//       <>
// <h2>Phonebook</h2>

// <ContactAddForm onSubmit={this.addContact} />

// <h2>Contacts</h2>

// <Filter
//   filter={filter}
//   handleFilterChange={this.handleFilterChange}
// ></Filter>

// <ContactList>
//   {filteredContactNames.map(({ id, name, number }) => (
//     <ContactListItem
//       key={id}
//       name={name}
//       number={number}
//       onDelBtnClick={() => this.deleteContact(id)}
//     />
//   ))}
// </ContactList>
//       </>
//     )
//   }
// }
