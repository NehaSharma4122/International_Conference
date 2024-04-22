import "./Organizers.css"
import organizer_info from '../assets/organizer_info'
import Card from './Card'

const Organizers = () =>{
    return(
        <div className="org-container">
            {organizer_info.map((item)=>{
                    return (<Card key={item.id} id={item.id} image={item.image} name={item.name} prof={item.prof} date_time={item.date_time} mail={item.mail} linkedin={item.linkedin}/>)
                })}

        </div>
    )
}
export default Organizers;