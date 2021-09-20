import { createAsyncThunk } from "@reduxjs/toolkit";
import { counterService } from "../../../services/counter";

export const getCounter = createAsyncThunk(
  "counter/get",
  counterService.getCounter
);
