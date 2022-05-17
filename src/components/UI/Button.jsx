import './Button.css';

const Button = (props) => {
  return <button
            type={props.type || "button"}
            className={`${props.className} button`}
            onClick={props.onEventClick}
  >
      {props.children}
      </button>;
};

export default Button;