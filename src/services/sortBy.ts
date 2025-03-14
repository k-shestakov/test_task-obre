import { Customer } from "../types/Customer";

export function getPreparedCustomers(
  customers: Customer[],
  { sortBy }: { sortBy: string }
) {
  const preparedCustomers = [...customers];

  if (sortBy) {
    preparedCustomers.sort((c1, c2) => {
      switch (sortBy) {
        case "name": {
          return c1.fullName.localeCompare(c2.fullName);
        }

        default:
          return 0;
      }
    });
  }

  return preparedCustomers;
}
