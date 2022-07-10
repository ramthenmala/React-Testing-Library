import { screen, render } from '@testing-library/react';
import Header from '../Header.js';

describe('Header', () => {
  it('The element should be heading', () => {
    render(<Header title="My Text" />);
    const headingElement = screen.getByText('My Text');
    expect(headingElement).toBeInTheDocument();
  });
});

// it('should render same text as passed via prop', async () => {
//     render(<Header title="my heading" />);
//     const elementRead = screen.getByRole('heading', {
//         name: 'my heading',
//     });
//     expect(elementRead).toBeInTheDocument()
// })

// it('should render same text as passed via prop getByTestId', async () => {
//   render(<Header title="My Heading" />);
//   const elementRead = screen.getByTestId('header-1');
//   expect(elementRead).toBeInTheDocument();
// });

// it('should render same text as passed via prop findBy', async () => {
//   render(<Header title="My Heading" />);
//   const elementRead = await screen.findByText(/My Heading/i);
//   expect(elementRead).toBeInTheDocument();
// });

// // QUERY BY
// it('should render queryBy not', () => {
//   render(<Header title="My Heading" />);
//   const elementRead =  screen.queryByText(/my title/i);
//   expect(elementRead).not.toBeInTheDocument();
// });

// // QUERY all

// it('should render getall', () => {
//   render(<Header title="My Heading" />);
//   const elementRead = screen.queryAllByRole(/heading/i);
//   expect(elementRead.length).toBe(2);
// });
