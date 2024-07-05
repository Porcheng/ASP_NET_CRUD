import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

// Mock the fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, name: 'John Doe', birthdate: '1990-01-01', gender: 'Male' },
      { id: 2, name: 'Jane Smith', birthdate: '1985-05-12', gender: 'Female' }
    ])
  })
);

test('renders staff members', async () => {
  render(true);

  await waitFor(() => {
    expect(screen.getByText('John Doe - 1990-01-01 - Male')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith - 1985-05-12 - Female')).toBeInTheDocument();
  });
});
