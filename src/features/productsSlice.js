import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



const initialState = {
	items: [],
	status: null

}

export const productsFetch = createAsyncThunk(
	"bakedProducts/productsFetch",
	async(id=null, {rejectWithValue}) => {
		try{
			const response = await axios.get("http://localhost:5000/bakedProducts");
		return response?.data
	}catch(error) {
		return rejectWithValue("An error occured.");
		
	}
	
	}
);

const productsSlice = createSlice({
	name: "bakedProducts",
	initialState, 
	reducers: {},
	extraReducers: {
		[productsFetch.pending]: (state, action) =>{
			state.status = "pending"

		},
		[productsFetch.fulfilled]: (state, action) =>{
			state.status = "success"
			state.items = action.payload

		},
		[productsFetch.rejected]: (state, action) =>{
			state.status = "rejected";
			state.error = action.payload;

		},


	},

});

export default productsSlice.reducer;