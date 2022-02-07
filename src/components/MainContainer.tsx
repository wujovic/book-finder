import { useState } from "react";
import List from "./List";
import Search from "./Search";

export default function MainContainer() {

    const [books, searchField] = useState("");

    function handleChange(e: any) {
        searchField(e.target.value);
    }

    return (
        <div className="main-container">
            <Search handleChange={handleChange}/>
            <List />
        </div>
    )
}