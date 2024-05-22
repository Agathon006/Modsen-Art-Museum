// import { render, screen, fireEvent } from '@testing-library/react';
// import Counter from '../components/Counter';

// describe('Counter Component', () => {
//     it('renders initial count', () => {
//         render(<Counter />);
//         const counterElement = screen.getByText('Count: 0');
//         expect(counterElement).toBeInTheDocument();
//     });

//     it('increments count on button click', () => {
//         render(<Counter />);
//         const incrementButton = screen.getByText('Increment');
//         fireEvent.click(incrementButton);
//         const counterElement = screen.getByText('Count: 1');
//         expect(counterElement).toBeInTheDocument();
//     });
// });