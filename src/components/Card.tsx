export default function Card(props: any) {
    return (
        <div className="card">

            <img src={props.image} alt="" />
            <div className="card-desc">

                <h3 className="title">{props.title}</h3>
                <h4 className="author">Author: {props.author}</h4>
                <p className="published">Published: {props.published}</p>

            </div>

        </div>
    )
}