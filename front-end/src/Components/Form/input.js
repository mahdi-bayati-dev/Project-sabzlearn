import { useReducer } from "react";
import "./input.css";
function Input(props) {
  const inputReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          value: action.value,
          isValid: action.value.trim().length > 3, // اعتبارسنجی اولیه
        };
      default:
        return state;
    }
  };

  const [mainInput, dispatchInput] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const handler = (event) => {
    
    dispatchInput({
      type: "CHANGE",
      value: event.target.value,
    });
  };

  const inputClasses = `${props.className} ${
    mainInput.isValid ? "sasses" : "error"
  }`;

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={inputClasses}
        onChange={handler}
        value={mainInput.value}
      />
    ) : (
      <textarea
        placeholder={props.placeholder}
        className={inputClasses}
        onChange={handler}
        value={mainInput.value}
      />
    );

  return <div>{element}</div>;
}

export default Input;
