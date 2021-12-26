import './Form.css';

function Form({ title, button, onSubmit, children, }) {
  return (
    <form className='form' onSubmit={onSubmit}>
      {children}
      <button className='form__button'>{button}</button>
    </form>
  );
};

export default Form;