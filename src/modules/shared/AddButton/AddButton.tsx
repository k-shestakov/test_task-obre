import React from "react";
import "./AddButton.scss";

type Props = {
  onOpen: (v: boolean) => void;
};

export const AddButton: React.FC<Props> = ({ onOpen }) => {
  return (
    <div className="add-customer">
      <button className="add-customer__btn" onClick={() => onOpen(true)}>
        Add Customer
      </button>
    </div>
  );
};
