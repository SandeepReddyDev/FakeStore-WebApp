import { FaUserAlt } from "react-icons/fa";
import "./index.css";

const UsercredsComponent = () => {
  return (
    <div className="creds-container">
      <FaUserAlt className="user-icon" />
      <div className="user-creds">
        <span className="Creds">Username: mor_2314</span>
        <span className="Creds">Password: 83r5^_</span>
      </div>
    </div>
  );
};

export default UsercredsComponent;
