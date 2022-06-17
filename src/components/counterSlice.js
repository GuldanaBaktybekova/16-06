import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    number: 0
  },
  reducers: {
    increment: function(store) {
      store.number += 1;
      // store.number ++;
      // store.number =  store.number + 1;
      

    },
    
  },
});

export default counterSlice.reducer;