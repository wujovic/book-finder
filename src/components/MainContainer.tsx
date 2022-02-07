import { useState } from "react";
import List from "./List";
import Search from "./Search";
import request from "superagent";

export default function MainContainer() {

    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');

    function handleChange(e: any) {
        setQuery(e.target.value);
    }

    function handleSearch(e: any) {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: query })
            .then((data) => {
                console.log(data.body.items);
                setBooks(data.body.items)
            })
    }

    return (
        <div className="main-container">
            <Search
                handleChange={handleChange}
                handleSearch={handleSearch}
            />
            <List books={books} />
        </div>
    )
}