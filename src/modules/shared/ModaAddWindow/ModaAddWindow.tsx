import React, { useState } from "react";
import "./ModaAddWindow.scss";
import { useAppDispatch } from "../../../store/hooks";
import { addCustomer } from "../../../features/customersSlice";
import { Customer } from "../../../types/Customer";

type Props = {
  onClose: (v: boolean) => void;
};

export const ModaAddWindow: React.FC<Props> = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);

  const dispatch = useAppDispatch();

  function reset() {}

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const customer: Omit<Customer, "id"> = {
      fullName,
      address,
      email,
      phone,
    };

    dispatch(addCustomer(customer)).then(() => {
      onClose(false);
      reset();
    });
  };

  return (
    <div className="modal-add">
      <form method="POST" className="modal-add__form" onSubmit={submit}>
        <h2 className="modal-add__title">Create customer</h2>

        <div className="modal-add__wrapper">
          <p className="modal-add__inner">
            <h3 className="modal-add__subtitle">Full Name</h3>
            <input
              type="text"
              required
              placeholder="Custore Name"
              onChange={(e) => setFullName(e.target.value)}
            />
          </p>

          <p className="modal-add__inner">
            <h3 className="modal-add__subtitle">Address</h3>
            <input
              required
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </p>
        </div>

        <div className="modal-add__wrapper">
          <p className="modal-add__inner">
            <h3 className="modal-add__subtitle">Email</h3>
            <input
              required
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>

          <p className="modal-add__inner">
            <h3 className="modal-add__subtitle">Phone</h3>
            <input
              required
              type="tel"
              placeholder="Phone"
              onChange={(e) => setPhone(+e.target.value)}
            />
          </p>
        </div>

        <div className="modal-add__interactions">
          <button
            type="reset"
            className="modal-add__btn modal-add__btn--cancel"
          >
            Cancel
          </button>

          <button type="submit" className="modal-add__btn modal-add__btn--add">
            Add
          </button>
        </div>
      </form>

      <button className="modal-add__close" onClick={() => onClose(false)}>
        X
      </button>
    </div>
  );
};
