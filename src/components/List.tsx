import Card from "./Card"

export default function List(props: any) {

    return (
        <div className="list-container">

            {

                props.books && props.books.length > 0 ?
                    props.books.map(function (book: any) {
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