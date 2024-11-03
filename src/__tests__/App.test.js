import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App'; // Adjusted path to App

// Make sure to include jest-dom for the extended matchers
import '@testing-library/jest-dom'; // Import jest-dom for extended matchers

beforeEach(() => {
  render(<App />);
});

test('should include "Now" in the header instead of a time', () => {
  expect(screen.getByText(/Now/i)).toBeInTheDocument(); // Check for "Now" in the header
});

test('should include the <ExampleComponent />', () => {
  expect(screen.getByText("Whoa!")).toBeInTheDocument(); // Ensure ExampleComponent renders correctly
});

test('should include the <TestComponent />', () => {
  expect(screen.queryByTitle("time video")).toBeInTheDocument(); // Ensure TestComponent has title "time video"
});
