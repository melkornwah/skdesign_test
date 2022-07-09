import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface FormState {
  name: string,
  phone: string,
  email: string,
  instagram: string,
  city: string,
  company: string,
  reciever: string,
  source: string,
}

// Define the initial state using that type
const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  instagram: "",
  city: "",
  company: "",
  reciever: "",
  source: "",
}

export const formSlice = createSlice({
  name: 'form',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeFieldValue: (state: FormState, action: PayloadAction<{ fieldName: string, value: string }>) => {
      const { fieldName, value } = action.payload;

      const requiredField = fieldName as keyof typeof state;
      
      const newState = { ...state, [requiredField]: value }

      return newState;
    },
  },
})

export const { changeFieldValue } = formSlice.actions

export default formSlice.reducer