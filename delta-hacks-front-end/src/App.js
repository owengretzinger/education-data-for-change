import './App.css';
import Header from "./sections/Header.js";
import Footer from "./sections/Footer.js";
import QueryItem from "./elements/QueryItem.js";

let retrievedData;

function App() {
    // Make users be able to search schools by 
    const onSubmitQuery = (query) => {
        console.log(`SELECT * FROM ____ WHERE school LIKE "\%${query}\%"`);
    };

    return (
        <>
            <Header />
            <div className="middle">
                {/* Introduction */}
                <div className="intro">
                    <h1>We are Education Data for Change</h1>
                    <p>We believe every student should have quality education available independent of where they are located in Ontario. We provide the tools to analyze the schools of Ontario through <a href="https://data.ontario.ca/en/dataset">Ontario's public datasets</a>.</p>
                </div>
                <div className="quote">
                    <p className="text">"Ontario is committed to the success and well-being of every student and child.
                        Learners in the province's education system will develop the knowledge, skills
                        and characteristics that will lead them to become personally successful, economically
                        productive and actively engaged citizens." </p>
                    <p className="author">- <a href="http://ncee.org/wp-content/uploads/2017/01/Ont-non-AV-10-Ontario-Government-Achieving-Excellence-A-renewed-vision-for-education-in-Ontario.pdf">Achieving Excellence: A Renewed Vision for Education in Ontario</a></p>
                </div>

                {/* Search School */}
                <div className="school-name" id="#lookup">
                    <h1>Query a School</h1>
                    <div>
                        School name: <QueryItem onSubmitQuery={onSubmitQuery} buttonName="Search" />
                    </div>
                    <div>
                        {retrievedData.map()}
                    </div>
                </div>

                {/* Map View */}
                <div id="#maps">

                </div>

                {/* School Stats */}
                <div className="slider" id="#graphs">
                    <div className="slides">
                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                        <div>
                            3
                        </div>
                        <div>
                            4
                        </div>
                        <div>
                            5
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
