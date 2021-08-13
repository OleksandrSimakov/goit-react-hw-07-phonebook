// import { useState } from 'react'
import ContactAddFormEl from './ContactAddForm.styled'
// import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import {
  addContact,
  contactsSelector,
} from '../../redux/contacts/contactsSlice'
import { v4 as uuidv4 } from 'uuid'

const styles = {
  input: {
    display: 'block',
    marginBottom: '10px',
    marginTop: '5px',
  },
  label: {
    marginBottom: '10px',
  },
  button: {
    width: '100px',
    fontSize: '12px',
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '1px solid gray',
    cursor: 'pointer',
  },
}

export default function ContactAddForm() {
  // const [name, setName] = useState('')
  // const [number, setNumber] = useState('')

  const dispatch = useDispatch()
  const contacts = useSelector(contactsSelector)

  const handleSubmit = (e) => {
    e.preventDefault()
    const contactsHaveDuplicate = contacts.find(
      (contact) => contact.name === e.target.elements.name.value,
    )
    contactsHaveDuplicate
      ? alert(`${e.target.elements.name.value} is already in contacts`)
      : // onSubmit(name, number)
        // setName('')
        // setNumber('')
        dispatch(
          addContact({
            id: uuidv4(),
            name: e.target.elements.name.value,
            number: e.target.elements.number.value,
          }),
        )
    e.target.reset()
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   switch (name) {
  //     case 'name':
  //       setName(value)
  //       break
  //     case 'number':
  //       setNumber(value)
  //       break
  //     default:
  //       return
  //   }
  // }

  return (
    <>
      <ContactAddFormEl onSubmit={handleSubmit}>
        <label style={styles.label}>
          Name
          <input
            style={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            // value={name}
            // onChange={handleChange}
          />
        </label>
        <label style={styles.label}>
          Number
          <input
            style={styles.input}
            type="tel"
            name="number"
            required
            // value={number}
            // onChange={handleChange}
          ></input>
        </label>
        <button type="submit" style={styles.button}>
          Add Contact
        </button>
      </ContactAddFormEl>
    </>
  )
}

// ContactAddForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// }

// export default class ContactAddForm extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   }

//   state = {
//     name: '',
//     number: '',
//   }

// handleSubmit = (e) => {
//   e.preventDefault()
//   this.props.onSubmit(this.state)
//   this.setState({
//     name: '',
//     number: '',
//   })
// }

// handleChange = (e) => {
//   const { name, value } = e.target
//   this.setState({
//     [name]: value,
//   })
// }

//   render() {
//     const { name, number } = this.state
//     return (
// <ContactAddFormEl onSubmit={this.handleSubmit}>
//   <label style={styles.label}>
//     Name
//     <input
//       style={styles.input}
//       type="text"
//       name="name"
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//       required
//       value={name}
//       onChange={this.handleChange}
//     />
//   </label>
//   <label style={styles.label}>
//     Number
//     <input
//       style={styles.input}
//       type="tel"
//       name="number"
//       required
//       value={number}
//       onChange={this.handleChange}
//     ></input>
//   </label>
//   <button type="submit" style={styles.button}>
//     Add Contact
//   </button>
// </ContactAddFormEl>
//     )
//   }
// }
