const React = require('react');
const { render, screen, waitFor } = require('@testing-library/react');
const userEvent = require('@testing-library/user-event');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const EmployeeSearch = require('../EmployeeSearch'); // Adjust the path as necessary

const mockAxios = new MockAdapter(axios);

describe('EmployeeSearch Component', () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  test('handleEdit fetches employee data', async () => {
    const mockEmployeeId = 'A001';
    const mockEmployeeData = {
      id: mockEmployeeId,
      name: 'John Doe',
    };

    mockAxios.onGet(`http://localhost:5000/api/Employee/search/${mockEmployeeId}`).reply(200, mockEmployeeData);

    render(<EmployeeSearch />);

    // Assuming the component has a button or some UI element to trigger handleEdit
    // Simulate user action to trigger handleEdit function
    // Adjust the text selector as per your actual component
    const editButton = screen.getByRole('button', { name: /edit/i });
    userEvent.click(editButton);

    // Wait for the API call to resolve and component to update
    await waitFor(() => expect(screen.getByText('John Doe')).toBeInTheDocument());

    // Add additional assertions as necessary
  });
});
