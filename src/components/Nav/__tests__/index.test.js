import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {

    // baseline test
    test('renders', () => {
        render(<Nav />);
    });

    // snapshot test
    test('matches snapshot', () => {
        const { asFragment } = render(<Nav />);

        expect(asFragment()).toMatchSnapshot();
    })

})

describe('emoji is visible', () => {
    test('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav />);

        // Assert
        // we use the 'getByLabelText' method and query by the 'aria-label' value
        // we have used a custom matcher to compare the expected value to the one recieved by our query
        // these matchers come from '@testing-library/jest-dom'
        expect(getByLabelText('camera')).toHaveTextContent('📸');  
    })
})

describe('links are visible', () => {
    test('inserts text into the links', () => {

        // Arrange
        const { getByTestId } = render(<Nav />);

        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})