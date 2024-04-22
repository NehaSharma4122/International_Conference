import './Card.css'
const Card = (props) =>{
    console.log(props.name)
    return(
        <div className="card">
                <div className="photo">
                    <img src={props.image} alt="" />
                </div>
                <div className="info">
                    <h3>{props.name}</h3>
                    <h5>{props.prof}</h5>
                    <span><i className="bi bi-envelope-fill" href={props.mail}></i><i className="bi bi-linkedin" href={props.linkedin}></i></span>
                    {/* <span><p>{props.linkedin}{props.mail}</p></span> */}
                </div>
        </div>
    )
}
export default Card;