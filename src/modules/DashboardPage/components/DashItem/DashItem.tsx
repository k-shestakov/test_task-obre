import React from "react";
import "./DashItem.scss";
import { deleteCustomer } from "../../../../features/customersSlice";
import { Customer } from "../../../../types/Customer";
import { useAppDispatch } from "../../../../store/hooks";

type Props = {
  customer: Customer;
};

export const DashItem: React.FC<Props> = ({ customer }) => {
  const { id, fullName, address, email, phone } = customer;
  const dispatch = useAppDispatch();

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{fullName}</td>
      <td>{address}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td className="interactive">
        <button
          className="interactive__btn interactive__btn--delete"
          onClick={() => dispatch(deleteCustomer(id))}
        >
          Delete
        </button>
      </td>
      <td className="interactive">
        <button className="interactive__btn interactive__btn--edit">
          Edit
        </button>
      </td>
    </tr>
  );
};
