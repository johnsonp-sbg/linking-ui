import { render, screen } from '@testing-library/react';
import App from '../App';

test('Entity manager can be rendered', () => {
    const { container } = render(<App/>);

    const title = container.querySelector('h1');

    expect(title).toBeInTheDocument();
    expect(title?.innerHTML).toBe('Entity Manager');
});
