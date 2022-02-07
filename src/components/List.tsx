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
                                image={
                                    book.volumeInfo.imageLinks === undefined
                                        ? ""
                                        : `${book.volumeInfo.imageLinks.thumbnail}`
                                }
                                title={book.volumeInfo.title}
                                subtitle={book.volumeInfo.subtitle}
                                author={book.volumeInfo.authors}
                                published={book.volumeInfo.publishedDate}
                                rating={book.volumeInfo.averageRating}
                                link={book.volumeInfo.infoLink}
                            />
                        )
                    }) : null
            }

        </div>
    )
}