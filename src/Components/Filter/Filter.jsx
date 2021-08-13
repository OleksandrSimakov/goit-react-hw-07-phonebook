import FilterEl from './Filter.styled'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { filterContact } from '../../redux/contacts/contactsSlice'

const styles = {
  input: {
    display: 'block',
    marginTop: '5px',
  },
}

function Filter() {
  const dispatch = useDispatch()

  const handleFilterChange = ({ target }) => {
    const filterInput = target.value
    dispatch(filterContact(filterInput))
  }

  return (
    <FilterEl>
      <label>
        Find contacts by name
        <input
          style={styles.input}
          type="text"
          name="filter"
          // value={filter}
          onChange={handleFilterChange}
        ></input>
      </label>
    </FilterEl>
  )
}

Filter.propTypes = {
  filter: PropTypes.string,
  handleFilterChange: PropTypes.func,
}

Filter.defaultProps = {
  filter: null,
  handleFilterChange: null,
}

export default Filter
