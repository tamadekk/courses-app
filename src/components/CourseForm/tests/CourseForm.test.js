import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';
import CourseForm from '../CourseForm';

jest.mock('../../../store/authors/thunk', () => ({
	performAddAuthor: jest.fn(),
}));
const setIsValid = jest.fn();

const mockedPreloadedState = {
	courses: [
		{
			id: '123',
			title: 'testCourse1',
			description: 'testCourseDescription1',
			duration: 125,
			authors: ['1'],
			creationDate: '01/01/2001',
		},
		{
			id: '124',
			title: 'testCourse2',
			description: 'testCourseDescription2',
			duration: 305,
			authors: ['2'],
			creationDate: '05/06/2026',
		},
		{
			id: '125',
			title: 'testCourse3',
			description: 'testCourseDescription3',
			duration: 50,
			authors: ['1', '2'],
			creationDate: '10/12/2025',
		},
	],
	authors: [
		{ id: '1', name: 'author1' },
		{ id: '2', name: 'author2' },
	],
};

describe('CourseForm component', () => {
	it('should show authors lists', () => {
		renderWithProviders(<CourseForm isValid={true} setIsValid={setIsValid} />, {
			preloadedState: mockedPreloadedState,
		});
		expect(screen.getByText('Authors List')).toBeInTheDocument();
		expect(screen.getByText('author1')).toBeInTheDocument();
		expect(screen.getByText('author2')).toBeInTheDocument();
		expect(screen.getByText('Course Authors')).toBeInTheDocument();
		expect(screen.getByText('Author list is empty')).toBeInTheDocument();
	});
	// it('Create author button click should call dispatch', () => {
	// 	renderWithProviders(<CourseForm isValid={true} setIsValid={setIsValid} />, {
	// 		preloadedState: mockedPreloadedState,
	// 	});
	// 	const authorInput = screen.getByTestId('authorName-input');
	// 	const createAuthorButton = screen.getByText('create author');
	// 	fireEvent.change(authorInput, { target: { value: 'newAuthor' } });
	// 	fireEvent.click(createAuthorButton);
	// });
});
