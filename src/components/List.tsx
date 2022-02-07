import Card from "./Card"

export default function List(props: any) {

    let data = props.books;

    return (
        <div className="list-container">

            {

                data && data.length > 0 ?

                    data.map((book: any) => {
                        return (
                            <Card
                                key={book.id}
                                image={book.volumeInfo.imageLinks.smallThumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                published={book.volumeInfo.publishedDate}
                            />
                        )
                    }) : <p className="no-data">No books yet...</p>
                
            }

        </div>
    )
}


// data && data.length > 0 ?

// data.map((id: number, smallThumbnail: any, title: string, authors: string, publishedDate: any) => {
//     return (
//         <Card
//             key={id}
//             image={smallThumbnail}
//             title={title}
//             author={authors}
//             published={publishedDate}
//         />
//     )
// }) : <p className="no-data">No books yet...</p>