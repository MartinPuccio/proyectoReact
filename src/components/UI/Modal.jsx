import { Link } from "react-router-dom";
import Card from "./Card";
// import "./Modal.css";

const Modal = (props) => {
  return (
    <div>
      <div ></div>
      <Card >
        <Link to='/'><span >X</span></Link>
        {props.children}
      </Card>
      ;
    </div>
  );
};

export default Modal;
