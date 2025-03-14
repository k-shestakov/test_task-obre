import React, { useEffect, useState } from "react";
import "./DashboardPage.scss";
import cn from "classnames";
import { DashList } from "./components/DashList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as customersActions from "../../features/customersSlice";
import { AddButton } from "../shared/AddButton";
import { ModaAddWindow } from "../shared/ModaAddWindow";
import { getPreparedCustomers } from "../../services/sortBy";

export const DashboardPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortyBy] = useState("");
  const dispatch = useAppDispatch();
  const { loading, error, customers } = useAppSelector(
    (state) => state.customers
  );

  const preparedCustomers = getPreparedCustomers(customers, { sortBy });

  useEffect(() => {
    dispatch(customersActions.init());
  }, [dispatch]);

  return (
    <section className="dashboard">
      <div className="dashboard__container">
        {loading && <p className="loading">loading...</p>}

        {customers.length === 0 && !error && !loading && (
          <p className="message">Your`e have no customers</p>
        )}

        {customers.length > 0 && !error && !loading && (
          <>
            <div className="filter">
              <button
                className={cn("filter__btn", {
                  active: sortBy,
                })}
                onClick={() =>
                  setSortyBy((curr) => (curr === "name" ? "" : "name"))
                }
              >
                By name
              </button>
            </div>

            <DashList customersList={preparedCustomers} />
          </>
        )}

        <AddButton onOpen={setIsOpen} />

        <div
          className={cn("overlay", {
            open: isOpen,
          })}
        >
          <ModaAddWindow onClose={setIsOpen} />
        </div>
      </div>
    </section>
  );
};
