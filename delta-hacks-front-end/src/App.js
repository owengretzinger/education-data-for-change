import './App.css';
import Header from "./sections/Header.js";
import Footer from "./sections/Footer.js";
import QueryItem from "./elements/QueryItem.js";

function App() {
    // Make users be able to search schools by 

    return (
        <>
            <Header />
            <div className="middle">
                <div>
                    <QueryItem />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
