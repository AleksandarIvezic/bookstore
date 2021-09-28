import PropTypes from 'prop-types';
import Button from './Button';

const Form = ({ handleSubmit }) => (
  <form>
    <h3>Add new book</h3>
    <input name="title" type="text" placeholder="Book title" id="title" required />
    <input name="author" type="text" placeholder="Author" id="author" required />
    <Button handleSubmit={handleSubmit} buttonName="Add book" />
  </form>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
