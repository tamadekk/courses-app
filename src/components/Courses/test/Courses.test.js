import { screen, cleanup, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';
import Courses from '../Courses';

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
	user: {
		name: 'John',
		role: 'admin',
	},
};
const setAuthenticated = jest.fn();
const isAuthenticated = true;

afterEach(() => {
	cleanup();
});

describe('Courses component', () => {
	it('Courses should display amount of CourseCard equal length of courses array.', () => {
		renderWithProviders(
			<Courses
				isAuthenticated={isAuthenticated}
				setAuthenticated={setAuthenticated}
			/>,
			{ preloadedState: mockedPreloadedState }
		);
		const coursesRenderedAmount = screen.getAllByTestId('course-card');
		expect(mockedPreloadedState.courses.length).toBe(
			coursesRenderedAmount.length
		);
	});
	it('CourseForm should be shown after a click on the "Add new course" button', () => {
		jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
			return key === 'token' ? 'mockToken' : null;
		});
		renderWithProviders(
			<Courses
				isAuthenticated={isAuthenticated}
				setAuthenticated={setAuthenticated}
			/>,
			{
				preloadedState: mockedPreloadedState,
			}
		);
		const addNewCourseButton = screen.getByText('Add new course');
		fireEvent.click(addNewCourseButton);
		expect(window.location.pathname).toBe('/courses/add');
	});
});
