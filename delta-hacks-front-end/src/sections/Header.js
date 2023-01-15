const Header = () => {
    const projectName = "Project Name";

    return (
        <div className="header">
            <h1>{projectName}</h1>
            <ul>
                <li><a href="https://github.com/owengretzinger/education-data-for-change" target="_blank">GitHub</a></li>
                <li><a href="https://deltahacks9.devpost.com/" target="_blank">DevPost</a></li>
                <li><a href="https://deltahacks.com/" target="_blank">DeltaHacksIX</a></li>
            </ul>
        </div>
    );
}

export default Header;