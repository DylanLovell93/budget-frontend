import './ErrorMessage.css';
import Button from '../Button/Button';

const ErrorMessage = () => {
  return (
    <div className="ErrorMessage">
      <div className="container">
        <h1>Error: 808 &#128148;</h1>
        <h6>(It's actually 404, just sadder)</h6>
        <h3>Page not found</h3>
      </div>
      <div className="buttons">
        <Button buttonType="Back" />
      </div>
    </div>
  );
};

export default ErrorMessage;
