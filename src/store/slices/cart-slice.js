import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    itemsId: [1,2,3],
    totalQuantity : 0,
    totalPrice : 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
                state.itemsId.push(action.payload);
           
        },
        removeItem: (state, action) => {
            state.itemsId = state.itemsId.filter((item) => item !== action.payload);
        }
    }
})


export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;   