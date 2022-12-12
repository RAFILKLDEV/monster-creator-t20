import React from "react";
import { InputBox } from "../../components/InputBox/InputBox";

export function Combat(props) {
  const renderInputBox = (n) => {
    return (
      <div>
        <div className="ComboLabel-Label">{props.extras[n].name}</div>
        {Array(props.extras[n].number)
          .fill()
          .map((_, index) => (
            <InputBox
              key={props.extras[n].name + index}
              name={props.extras[n].name}
              placeholder={props.extras[n].name}
            />
          ))}
      </div>
    );
  };
  return (
    <div className="Combat">
      <div className="Monster-Combat">
        {props.extras[2].marked && renderInputBox(2)}
        {props.extras[3].marked && renderInputBox(3)}
        {props.extras[4].marked && renderInputBox(4)}
        {props.extras[5].marked && renderInputBox(5)}
      </div>
    </div>
  );
}
