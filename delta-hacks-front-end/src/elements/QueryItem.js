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
        <>
            <input type="text" value={query} onChange={handleChangeQuery} />
            <button onClick={handleSubmitQuery}></button>
        </>
    );
};

export default QueryItem