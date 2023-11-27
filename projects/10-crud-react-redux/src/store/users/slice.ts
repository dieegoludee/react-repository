import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
	{
		id: "1",
		name: "Peter Doe",
		email: "peterdoe@gmail.com",
		github: "midudev",
	},
	{
		id: "2",
		name: "Yazman Rodriguez",
		email: "yazmanito@gmail.com",
		github: "yazmanito",
	},
	{
		id: "3",
		name: "Diego Ludeña",
		email: "diegolude.martin@gmail.com",
		github: "dieegoludee",
	},
	{
		id: "4",
		name: "Leo Doe",
		email: "leodoe@gmail.com",
		github: "leo",
	},
];

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: string;
}

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			// Con Redux podemos mutar el estado original (no se genera ni genera un nuevo estado)
			state.push({ id, ...action.payload });
			//return [...state, { id, ...action.payload }];
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlreadyDefined = state.find(
				(user) => user.id === action.payload.id,
			);
			if (!isUserAlreadyDefined) {
				state.push(action.payload);
				//return [...state, action.payload];
			}
		},
	},
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions;
