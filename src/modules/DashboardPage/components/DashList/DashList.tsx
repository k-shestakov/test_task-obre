import React from "react";
import { DashItem } from "../DashItem";
import "./DashList.scss";
import { Customer } from "../../../../types/Customer";

type Props = {
  customersList: Customer[];
};

export const DashList: React.FC<Props> = ({ customersList }) => {
  return (
    <table className="dash">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Customer Name</th>
          <th scope="col">Addreess</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>

      <tbody>
        {customersList.map((customer) => (
          <DashItem key={customer.id} customer={customer} />
        ))}
      </tbody>
    </table>
  );
};
