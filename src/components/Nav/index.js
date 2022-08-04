import { useEffect } from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    // ??? wjhat is happeneing here? we have a props object? but we never call props
    const {
        // why is this an empty array?
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    // useEffect(() => {},[])
    //  - the first argument is the callback function
    //  - the second argument is an array with a single element [currentCategory]
    //      - the second argument directs the hook to re-render the component on changes to the value of the state
    //  - if 'currentCategory' changes, the component will re-render so that the change in 'document.title' will be visable to the user
    // useEffect(() => {callback function}, [variable whose change in value will trigger a re-render])
    //  - ??? what components re-render?
    //      - this occured in the NAV, does NAv rerender?
    //      - however the state was initialized in App(), is that the componenet the re-renders? that includeds the Nav, so that would re-render everything
    useEffect(() => {
        // ??? can you change document.title anywhere in the application>
        // the DOM node we are changing
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        {/* if contactSelected is set to false by the 'setContactSelected' then the Gallery and About render */}
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    {/* if contact is selected we add the CSS class 'nanActive' which will highlight contact */}
                    {/* note the addition of '{}' to contain the JavaScript expresson, as well as the template literal to interpolate the JavaScript statement */}
                    <li className={`mx-2 ${contactSelected && 'nanActive'}`}>
                        {/* if contactSelected is set to 'true' by the 'setContactSelected' state setter, then the Contact will render. due to the ternary operator in APP */}
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {/* When you map over an array in a JSX express, you should return only a single JSX element */}
                    {categories.map((category) =>(
                        // When ever we map over something in JSX, the outermost element must have a 'key' attribute, that is set to be something unique. This helps React keep track of items in the virtual DOM
                        // '${currentCategory.name === category.name && 'nanActive'}
                        //      - this is called a short-circuit expression
                        //      - if 'currentCategory.name === category.name' is true, then 'nanActive' will be returned
                        // will assign the nanActive CSS class if the current category state is set to the that category AND contactSelected is set to false
                        <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                            {/* the 'onClick()' attribute is expecting a callback function declaration. */}
                            {/* it is important that we wrap it in a function declartion rather than calling 'categorySelected(category.name), which would cause the function get called whenever the component renders as well */}
                            <span onClick={() => {
                                // set the state of the currentCategory
                                setCurrentCategory(category);
                                // set the state of contactSelected to false so the contact is not rendered
                                setContactSelected(false);
                            }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;