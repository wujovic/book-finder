import { useState } from "react";
import List from "./List";
import Search from "./Search";
import request from "superagent";

export default function MainContainer() {

    const [books, searchField] = useState("");

    function handleChange(e: any) {
        searchField(e.target.value);
    }

    function handleSearch(e: any) {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: searchField })
            .then((data) => {
                console.log(data);
            })
    }

    return (
        <div className="main-container">
            <Search
                handleChange={handleChange}
                handleSearch={handleSearch}
            />
            <List />
        </div>
    )
}