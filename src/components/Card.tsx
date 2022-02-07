import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faLink } from '@fortawesome/free-solid-svg-icons'

const icon = <FontAwesomeIcon icon={faStar} size="xs"/>
const icon2 = <FontAwesomeIcon icon={faLink} size="xs"/>

export default function Card(props: any) {

    return (
        <div className="card">

            <img className="cover" src={props.image} alt="" />

            <div className="card-desc">

                <div className="card-top">

                    <div className="card-head">
                        <h4 className="title">{props.title}</h4>
                        {props.subtitle ?
                            <p className="subtitle"> - {props.subtitle}</p> : null
                        }
                    </div>

                    <div className="card-head-details">
                        <h4 className="author">Author: {props.author}</h4>
                        <p className="published">Published: <strong>{props.published}</strong></p>
                        {props.rating ?
                            <p className="rating">Rating: <strong>{props.rating}</strong> {icon}</p> : null
                        }
                    </div>

                </div>

                <div className="card-bottom">
                    <a target="_blank" href={props.link} rel="noreferrer">More about this book {icon2}</a>
                </div>

            </div>

        </div>
    )
}