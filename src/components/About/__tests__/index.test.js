// the imported 'render' function will render the component for testing
// 'cleanup' is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests
import { render, cleanup } from '@testing-library/react';

// import the extend-expect library from the jest-dom package.
// jest-dom offers access to custom matchers that are used to test DOM elements.
import '@testing-library/jest-dom/extend-expect';

// import the component we will be testing
import About from '..';

// This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

// we use the 'describe()' function to declare the component we're testing
// renders the About test
describe('About component', () => {
    // First Test
    //  - the first argument is a string that states what is being tested, in this case 'renders'
    //  - the second argument is a callback function that runs the test
    test('renders', () => {
        // we use the render function to render the 'About' component using JSX. 
        render(<About />);
    });

    // Second Test
    // we'll compare snapshot versions of the DOM node structure
    //  a 'snapshot' is a serialized version of the DOM node structure, enabled by Jest.
    test('matches snapshot DOM node structure', () => {
        // render About
        // we'll use the 'asFragment' function, which returns a snapshot of the 'About' component
        const { asFragment } = render(<About />);

        // we'll test and compare whether the expected and actual outcomes match.
        //  - use the 'expect' function with a matcher to assert something about a value
        //  - we'll use the 'toMatchSnapshot' matcher to assert that snapshots will match
        // sample
        // sample
        expect(asFragment()).toMatchSnapshot();
    })
})
