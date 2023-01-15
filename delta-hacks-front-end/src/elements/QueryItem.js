import { useState } from "react"

const QueryItem = (props) => {
    const [query, setQuery] = useState("");

    const handleChangeQuery = (events) => {
        setQuery(events.target.value);
    };

    const handleSubmitQuery = () => {
        props.onSubmitQuery(query);
    };

    return (
        <div>
            <input type="text" value={query} onChange={handleChangeQuery} />
            <button onClick={handleSubmitQuery}>{props.buttonName}</button>
        </div>
    );
};

export default QueryItem