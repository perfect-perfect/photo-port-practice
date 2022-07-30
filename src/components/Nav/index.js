function Nav() {
    const categories = [
        {
            name: "commercial",
            description: "Photos of grocery stores, food trucks, and other commercial projects"
        },
        {
            name: "portraits",
            description: "Portraits of people in my life"
        },
        {
            name: "food",
            description: "Delicious delicacies"
        },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty if nature"
        }
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    };

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera">📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* When you map over an array in a JSX express, you should return only a single JSX element */}
                    {categories.map((category) =>(
                        // When ever we map over something in JSX, the outermost element must have a 'key' attribute, that is set to be something unique. This helps React keep track of items in the virtual DOM
                        <li className="mx-1" key={category.name}>
                            {/* the 'onClick()' attribute is expecting a callback function declaration. */}
                            {/* it is important that we wrap it in a function declartion rather than calling 'categorySelected(category.name), which would cause the function get called whenever the component renders as well */}
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;