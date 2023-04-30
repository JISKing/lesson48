import { render, screen } from '@testing-library/react';
import Posts from `../components/Posts.js`;

test('Post has title', () => {
  render(<Posts />);
  const titleElement = screen.getByText(/news/i);
  expect(titleElement).toBeInTheDocument(); 
});