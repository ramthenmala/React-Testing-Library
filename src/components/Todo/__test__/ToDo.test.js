import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo.js';

const MockTodo = () => {
    return(
        <BrowserRouter>
            <Todo/>
        </BrowserRouter>
    )
}

const addTodo = (task) => {
    const inputElement = screen.getByPlaceholderText('Add a new task here...');
    const addButton = screen.getByRole('button', { name: /Add/i });
    task.forEach(() => {
        fireEvent.change(inputElement, {
          target: { value: task },
        });
        fireEvent.click(addButton);
    })
}

describe('Testsuite for Todo', () => {
    it('Should render same text passed into title prop', () => {
        render(<MockTodo />);
        
        addTodo(['Go Grocery shopping']);
        const divElement = screen.getByText(/Go Grocery shopping/i);
        expect(divElement).toBeInTheDocument();
    })

    it('Should render dev items', () => {
      render(<MockTodo />);
      addTodo(['Go Grocery shopping', 'Pet my Cat', 'Wash my Hands']);
      const divElements = screen.getAllByTestId('task-container');
      expect(divElements.length).toBe(3);
    });

    it('Task should not have completed class', () => {
      render(<MockTodo />);
      addTodo(['Go Grocery shopping']);
      const divElement = screen.getByText(/Go Grocery shopping/i);
      expect(divElement).not.toHaveClass('todo-item-active');
    });
    it('Task should have completed class', () => {
      render(<MockTodo />);
      addTodo(['Go Grocery shopping']);
      const divElement = screen.getByText(/Go Grocery shopping/i);
      fireEvent.click(divElement);
      expect(divElement).toHaveClass('todo-item-active');
    });
})