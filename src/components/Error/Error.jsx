import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <div className="container text-center">
        <h2>404 Error</h2>
        <p>
          The page you are looking for is does not exists or may be deleted.
        </p>
        <Link to="/">Back To Home</Link>
      </div>
    </div>
  );
};

export default Error;
