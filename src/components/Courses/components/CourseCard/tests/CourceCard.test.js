import { screen, cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/test-utils';
import CourseCard from '../CourseCard';

const mockedCourses = [
	{
		id: '123',
		title: 'course1',
		description: 'lorem 1',
		duration: 55,
		authors: ['1'],
		creationDate: '08/03/2021',
	},
	{
		id: '124',
		title: 'course2',
		description: 'lorem 2',
		duration: 120,
		authors: ['1', '2'],
		creationDate: '10/05/2024',
	},
];

const mockedPreloadedState = {
	authors: [
		{ id: '1', name: 'author1' },
		{ id: '2', name: 'author2' },
	],
};
const setAuthenticated = jest.fn();
const isAuthenticated = true;
afterEach(cleanup);

describe('CourseCard component', () => {
	it('CourseCard should display title', () => {
		renderWithProviders(
			<CourseCard
				courses={mockedCourses}
				isAuthenticated={isAuthenticated}
				setAuthenticated={setAuthenticated}
			/>
		);
		expect(screen.getByText('course1')).toBeInTheDocument();
		expect(screen.getByText('course2')).toBeInTheDocument();
	});
	it('CourseCard should display description', () => {
		renderWithProviders(
			<CourseCard
				courses={mockedCourses}
				isAuthenticated={isAuthenticated}
				setAuthenticated={setAuthenticated}
			/>
		);
		expect(screen.getByText('lorem 1')).toBeInTheDocument();
		expect(screen.getByText('lorem 2')).toBeInTheDocument();
	});
	it('CourseCard should display authors list', () => {
		renderWithProviders(
			<CourseCard
				courses={mockedCourses}
				isAuthenticated={isAuthenticated}
				setAuthenticated={setAuthenticated}
			/>,
			{
				preloadedState: mockedPreloadedState,
			}
		);
		expect(screen.getByText('author1')).toBeInTheDocument();
		expect(screen.getByText('author1,author2')).toBeInTheDocument();
	});
	it('CourseCard should display duration in the correct format', () => {
		renderWithProviders(
			<CourseCard
				courses={mockedCourses}
				isAuthenticated={isAuthenticated}
				setAuthenticated={setAuthenticated}
			/>,
			{
				preloadedState: mockedPreloadedState,
			}
		);
		expect(screen.getByText('00:55 hours')).toBeInTheDocument();
		expect(screen.getByText('02:00 hours')).toBeInTheDocument();
	});
	it('CourseCard should display created date in the correct format.', () => {
		renderWithProviders(
			<CourseCard
				courses={mockedCourses}
				isAuthenticated={isAuthenticated}
				setAuthenticated={setAuthenticated}
			/>,
			{
				preloadedState: mockedPreloadedState,
			}
		);
		expect(screen.getByText('08.03.2021')).toBeInTheDocument();
		expect(screen.getByText('10.05.2024')).toBeInTheDocument();
	});
});
