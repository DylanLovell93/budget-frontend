import './Button.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Button = ({ buttonType = 'Submit', param = '' }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const backURL = '/transactions';
  const editBackURL = '/transactions/' + param;
  const editURL = `/transactions/${param}/edit`;
  const deleteFunc = async () => {
    const errorCheck = await axios.delete(`${API_URL}/transactions/${param}`);
    errorCheck ? navigate('/transactions') : navigate('/unknown');
  };
  const linkButton = (
    <Link
      to={
        buttonType === 'Back'
          ? backURL
          : buttonType === 'EditBack'
          ? editBackURL
          : editURL
      }
    >
      <button className="Button">
        {buttonType === 'EditBack' ? 'Back' : buttonType}
      </button>
    </Link>
  );
  const submitButton = (
    <button className="Button" type="submit">
      Submit
    </button>
  );
  const deleteButton = (
    <button className="Button" onClick={deleteFunc}>
      {buttonType}
    </button>
  );

  return buttonType === 'Delete'
    ? deleteButton
    : buttonType === 'Submit'
    ? submitButton
    : linkButton;
};
export default Button;
