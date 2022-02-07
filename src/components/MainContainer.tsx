import { useState } from "react";
import List from "./List";
import Search from "./Search";
import request from "superagent";

export default function MainContainer() {

    const [books, setBooks] = useState([]);

    function handleChange(e: any) {
        setBooks(e.target.value);
    }

    function handleSearch(e: any) {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: setBooks })
            .then((data) => {
                setBooks([...books])
            })
    }

    return (
        <div className="main-container">
            <Search
                handleChange={handleChange}
                handleSearch={handleSearch}
            />
            <List books={books}/>
        </div>
    )
}