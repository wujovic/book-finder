export default function Search(props: any) {

    return (
        <div className="search">

            <form onSubmit={props.handleSearch}>

                <input
                    id="search-field"
                    type="text"
                    onChange={props.handleChange}

                    placeholder="Search books"
                />

            </form>

        </div>
    )
}