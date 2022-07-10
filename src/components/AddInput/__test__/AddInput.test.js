import { screen, render, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput.js';

const mockSetTodos = jest.fn()
const renderAddInput = <AddInput todos={[]} setTodos={mockSetTodos} />;
describe('Add Todo', () => {
    it('Should render Input Element', async () => {
      render(renderAddInput);
      const inputElement = screen.getByPlaceholderText('Add a new task here...');
      expect(inputElement).toBeInTheDocument();
    });

    it('Should be able to type input', async () => {
      render(renderAddInput);
      const inputElement = screen.getByPlaceholderText(
        'Add a new task here...'
      );
      fireEvent.change(inputElement, { target: { value: 'Go Grocery shopping'} });
      expect(inputElement.value).toBe('Go Grocery shopping');
    });

    it('Should have empty input when add button is clicked', async () => {
      render(renderAddInput);
      const inputElement = screen.getByPlaceholderText(
        'Add a new task here...'
      );
      const addButton = screen.getByRole('button', {name: 'Add'})
      fireEvent.change(inputElement, {
        target: { value: 'Go Grocery shopping' },
      });
      fireEvent.click(addButton);
      expect(inputElement.value).toBe('');
    });
});
