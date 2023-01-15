import './App.css';
import Header from "./sections/Header.js";
import Footer from "./sections/Footer.js";
import QueryItem from "./elements/QueryItem.js";

function App() {
    // Make users be able to search schools by 
    const onSubmitQuery = (query) => {
        console.log(`SELECT * FROM ____ WHERE school LIKE "\%${query}\%"`);
    };

    return (
        <>
            <Header />
            <div className="middle">
                <div className="quote">
                    <p className="text">"Ontario is committed to the success and well-being of every student and child.
                        Learners in the province's education system will develop the knowledge, skills
                        and characteristics that will lead them to become personally successful, economically
                        productive and actively engaged citizens." </p>
                    <p className="author">- <a href="http://ncee.org/wp-content/uploads/2017/01/Ont-non-AV-10-Ontario-Government-Achieving-Excellence-A-renewed-vision-for-education-in-Ontario.pdf">Achieving Excellence: A Renewed Vision for Education in Ontario</a></p>
                </div>
                <div className="school-name">
                    School name: <QueryItem onSubmitQuery={onSubmitQuery} buttonName="Go!" />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
