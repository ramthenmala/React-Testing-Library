import { screen, render } from '@testing-library/react';
import TodoFooter from '../TodoFooter.js';
import { BrowserRouter } from 'react-router-dom';

const MockFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe('TodoFooter', () => {
  describe('Testing function 1', () => {
    it('Should render the number of incomplete tasks', async () => {
      render(<MockFooter numberOfIncompleteTasks={5} />);
      const paraElement = screen.getByText('5 tasks left');
      expect(paraElement).toBeInTheDocument();
    });
  });

  describe('Test function 2', () => {
    it('Should render "task" when the number of tasks is one', async () => {
      render(<MockFooter numberOfIncompleteTasks={1} />);
      const paraElement = screen.getByText('1 task left');
      expect(paraElement).toBeInTheDocument();
    });
  });
});

// it('Should render "task" when the number of tasks is one with toBeTruthy', async () => {
//   render(<MockFooter numberOfIncompleteTasks={1} />);
//   const paraElement = screen.getByText('1 task left');
//   expect(paraElement).toBeTruthy();
// });

// it('Should render "task" when the number of tasks is one with toBeVisible', async () => {
//   render(<MockFooter numberOfIncompleteTasks={1} />);
//   const paraElement = screen.getByText('1 task left');
//   expect(paraElement).toBeVisible();
// });

// it('Should render "task" when the number of tasks is one with toContainHTML', async () => {
//   render(<MockFooter numberOfIncompleteTasks={1} />);
//   const paraElement = screen.getByText('1 task left');
//   expect(paraElement).toContainHTML('p');
// });

// it('Should render "task" when the number of tasks is one with toHaveTextContent', async () => {
//   render(<MockFooter numberOfIncompleteTasks={1} />);
//   const paraElement = screen.getByTestId('para');
//   expect(paraElement).toHaveTextContent('1 task left');
// });
