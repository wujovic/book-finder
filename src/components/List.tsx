import Card from "./Card"

export default function List(props: any) {

    let data = props.books;

    return (
        <div className="list-container">

            {

                data && data.length > 0 ?

                    data.map(function (book: any) {
                        return (
                            <Card
                                key={book.id}
                                image={book.volumeInfo.imageLinks.smallThumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                published={book.volumeInfo.publishedDate}
                            />
                        )
                    }) : <p className="np-data">No books yet...</p>
            }

        </div>
    )
}