import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
    return(
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}
describe('FollowersList', () => {
  beforeEach(()=> {
    console.log('RUNNING BEFORE EACH TEST')
  })

  beforeAll(() => {
    console.log('RUNNING ONCE BEFORE ALL TEST');
  });

  afterEach(() => {
    console.log('RUNNING AFTER EACH TEST');
  });

  afterAll(() => {
    console.log('RUNNING ONCE AFTER ALL TEST');
  });
  it('Should render follower item', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('data-item-0');
    expect(followerDivElement).toBeInTheDocument();
  });

  it('Should render follower items', async () => {
    render(<MockFollowersList />);
    const followerDivElements = await screen.findAllByTestId(/data-item/i);
    expect(followerDivElements.length).toBe(5);
  });
});
