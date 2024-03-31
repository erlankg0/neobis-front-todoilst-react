import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TextState {
    text: string;
}

const initialState: TextState = {
    text: ''
};

const textSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    }
});

export const { setText } = textSlice.actions;

export default textSlice.reducer;
