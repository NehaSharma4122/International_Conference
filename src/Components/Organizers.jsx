import "./Organizers.css";
import organizer_info from "../assets/organizer_info";
import Card from "./Card";

const Organizers = () => {
  return (
    <div className="here">
      <div className="big">
        <h2>Speakers</h2>
        <br />
        <hr />
      </div>
      <div className="org-container">
        {organizer_info.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              prof={item.prof}
              date_time={item.date_time}
              mail={item.mail}
              linkedin={item.linkedin}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Organizers;
