const initialState = {
	mode: 'light',
};

const themeReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'changeTheme':
			return {
				...state,
				mode: payload,
			};

		default:
			return state;
	}
};

export default themeReducer;
