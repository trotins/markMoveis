import React from "react";
import "../styles/Popup.css";
import close from "../imgs/close-24px.svg";

//Funcao geral para as PopUps  
function PopUp(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <img
          alt="close"
          className="close-btn"
          src={close}
          onClick={() => props.setTrigger(false)}
        />
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
