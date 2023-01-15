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
                <div className="school-name">
                    School name: <QueryItem onSubmitQuery={onSubmitQuery} buttonName="Go!"/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
