import { configureStore } from "@reduxjs/toolkit";
import { BasketSlice } from "./basketSlice";

export const store = configureStore({ reducer: BasketSlice.reducer });
