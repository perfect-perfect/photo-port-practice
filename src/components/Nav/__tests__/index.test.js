import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// these are mimics of all the props we passed into the Nav component
// we need to add the 'categories' array 
const categories = [
    {name: 'portraits', description: 'Portraits of people in my life'}
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);


describe('Nav component', () => {

    // baseline test
    test('renders', () => {
        render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
    });

    // snapshot test
    test('matches snapshot', () => {
        const { asFragment } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);

        expect(asFragment()).toMatchSnapshot();
    })

})

describe('emoji is visible', () => {
    test('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);

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
        const { getByTestId } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);

        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})