import PropTypes from 'prop-types';

const Filter = ({ filter, changeFilter }) => {
  return (
    <div className="filter">
      <label>
        <input
          className="filter-input"
          type="text"
          value={filter}
          placeholder="find contacts by name..."
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};
export default Filter;

Filter.protoType = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
};
