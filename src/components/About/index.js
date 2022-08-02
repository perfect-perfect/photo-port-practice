import coverImage from "../../assets/cover/cover-image.jpg"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem et tortor consequat id porta nibh venenatis. Mauris nunc congue nisi vitae suscipit. Pretium aenean pharetra magna ac placerat. Lectus nulla at volutpat diam ut venenatis tellus in metus. Amet est placerat in egestas erat imperdiet sed euismod. Enim ut sem viverra aliquet eget sit. Magna ac placerat vestibulum lectus. Quam vulputate dignissim suspendisse in est ante in nibh. Facilisis volutpat est velit egestas. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Ridiculus mus mauris vitae ultricies. Vel risus commodo viverra maecenas accumsan lacus. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
            </p>
        </section>
    );
}

export default About;