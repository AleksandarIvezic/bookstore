import PropTypes from 'prop-types';

const Form = ({ handleSubmit }) => (
  <form>
    <h3>Add new book</h3>
    <input name="title" type="text" placeholder="Book title" id="title" required />
    <input name="author" type="text" placeholder="Author" id="author" required />
    <button
      type="submit"
      onClick={handleSubmit}
    >
      Add book
    </button>
  </form>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
