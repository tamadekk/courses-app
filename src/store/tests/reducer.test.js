// import { authorsReducer, authorsInitialState } from '../authors/reducer';
// import { ADD_AUTHORS, ADD_AUTHOR, DELETE_AUTHOR } from '../authors/types';

// describe('authorsReducer', () => {
// 	it('should return the initial state', () => {
// 		expect(authorsReducer(undefined, {})).toEqual(authorsInitialState);
// 	});

// 	it('should handle ADD_AUTHORS', () => {
// 		const initialState = [{ id: 1, name: 'Author 1' }];
// 		const action = {
// 			type: ADD_AUTHORS,
// 			payload: [
// 				{ id: 2, name: 'Author 2' },
// 				{ id: 3, name: 'Author 3' },
// 			],
// 		};
// 		const expectedState = [
// 			{ id: 1, name: 'Author 1' },
// 			{ id: 2, name: 'Author 2' },
// 			{ id: 3, name: 'Author 3' },
// 		];
// 		expect(authorsReducer(initialState, action)).toEqual(expectedState);
// 	});

// 	it('should handle ADD_AUTHOR', () => {
// 		const initialState = [{ id: 1, name: 'Author 1' }];
// 		const action = {
// 			type: ADD_AUTHOR,
// 			payload: { id: 2, name: 'Author 2' },
// 		};
// 		const expectedState = [
// 			{ id: 1, name: 'Author 1' },
// 			{ id: 2, name: 'Author 2' },
// 		];
// 		expect(authorsReducer(initialState, action)).toEqual(expectedState);
// 	});

// 	it('should handle DELETE_AUTHOR', () => {
// 		const initialState = [
// 			{ id: 1, name: 'Author 1' },
// 			{ id: 2, name: 'Author 2' },
// 		];
// 		const action = {
// 			type: DELETE_AUTHOR,
// 			payload: 1,
// 		};
// 		const expectedState = [{ id: 2, name: 'Author 2' }];
// 		expect(authorsReducer(initialState, action)).toEqual(expectedState);
// 	});

// 	it('should handle unknown action types', () => {
// 		const initialState = [{ id: 1, name: 'Author 1' }];
// 		const action = { type: 'UNKNOWN_ACTION' };
// 		expect(authorsReducer(initialState, action)).toEqual(initialState);
// 	});
// });
