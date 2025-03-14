import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomerState } from "../types/CustomerState";
import { Customer } from "../types/Customer";

export const init = createAsyncThunk<Customer[], void>(
  "customers/fetch",
  () => {
    return fetch("http://localhost:5000/customers").then((response) => {
      if (!response.ok) {
        throw new Error("Fetch failed");
      }

      return response.json();
    });
  }
);

export const addCustomer = createAsyncThunk(
  "customers/addCustomer",
  (newProduct: Omit<Customer, "id">) => {
    return fetch("http://localhost:5000/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then((response) => response.json());
  }
);

export const deleteCustomer = createAsyncThunk(
  "customers/removeCustomer",
  (customerId: number) => {
    return fetch(`http://localhost:5000/customers/${customerId}`, {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Delete failed");
      }
      return customerId;
    });
  }
);

const initialState: CustomerState = {
  customers: [],
  loading: false,
  error: "",
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.customers = action.payload;
      state.loading = false;
    });

    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = "Something went wrong";
    });

    builder.addCase(addCustomer.fulfilled, (state, action) => {
      state.customers.push(action.payload);
    });

    builder.addCase(deleteCustomer.fulfilled, (state, action) => {
      state.customers = state.customers.filter(
        (customer) => customer.id !== action.payload
      );
    });
  },
});

export default customerSlice.reducer;
