const Header = () => {
    const projectName = "Education for Change";

    return (
        <div className="header">
            <h1>{projectName}</h1>
            <ul>
                <li><a href="#lookup">Lookup</a></li>
                <li><a href="#maps">Maps</a></li>
                <li><a href="#graphs">Graphs</a></li>
            </ul>
        </div>
    );
}

export default Header;