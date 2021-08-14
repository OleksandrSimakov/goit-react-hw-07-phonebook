import ContactListEl from './ContactList.styled'
import PropTypes from 'prop-types'
import ContactListItem from '../ContactListItem/ContactListItem'
import { useDeleteContactMutation } from '../../redux/contacts/apiService'
// import { useDispatch } from 'react-redux'

function ContactList({ contacts }) {
  const [deleteContact] = useDeleteContactMutation()

  // const dispatch = useDispatch()
  return (
    <ContactListEl>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelBtnClick={() => deleteContact(id)}
        />
      ))}
    </ContactListEl>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
}

export default ContactList
