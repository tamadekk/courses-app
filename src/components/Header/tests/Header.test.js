import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';
import Header from '../Header';

describe('Header component', () => {
	it("Header displays logout button and doesn't display username when the user is not logged in ", () => {
		renderWithProviders(<Header />);
		expect(screen.queryByText('Logout')).toBeNull();
		expect(screen.getByText('Login')).toBeInTheDocument();
		expect(screen.queryByText('Test User')).toBeNull();
	});
	it('Header displays login button and username when the user is logged in', () => {
		renderWithProviders(<Header />);
		expect(screen.queryByText('Logout')).toBeInTheDocument();
		expect(screen.getByText('Login')).toBeNull();
		expect(screen.queryByText('Test User')).toBeInTheDocument();
	});
});
