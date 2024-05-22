import { coursesReducer } from '../reducer';
import { ADD_COURSE } from '../types';

describe('courses Reducer', () => {
	it('should return the initial state', () => {
		expect(coursesReducer([], { type: 'unknown' })).toEqual([]);
	});

	it('should handle ADD_COURSE', () => {
		const initialState = [
			{
				id: '1',
				title: 'Course 1',
				description: 'Course 1 description',
				duration: 458,
				authors: ['10', '20', '30'],
			},
		];
		const action = {
			type: ADD_COURSE,
			payload: {
				id: '2',
				title: 'Course 2',
				description: 'Course 2 description',
				duration: 300,
				authors: ['10', '20'],
			},
		};
		const expectedState = [
			{
				id: '1',
				title: 'Course 1',
				description: 'Course 1 description',
				duration: 458,
				authors: ['10', '20', '30'],
			},
			{
				id: '2',
				title: 'Course 2',
				description: 'Course 2 description',
				duration: 300,
				authors: ['10', '20'],
			},
		];
		expect(coursesReducer(initialState, action)).toEqual(expectedState);
	});
});
