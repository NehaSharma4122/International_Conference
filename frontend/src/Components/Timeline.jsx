import "./Timeline.css";
import tech from "../assets/tech.jpg";

const Timeline = () => {
  return (
    <>
      <div className="big">
        <h2>Timeline</h2>
        <br />
        <hr />
      </div>

      <ul className="days">
        <li><div className="day">Day 1</div><hr /></li>
        <li><div className="day">Day 2</div><hr /></li>
        <li><div className="day">Day 3</div><hr /></li>
      </ul>

      <div className="timeline">
        <img className="time_pic" src={tech} alt="" />
        <table className="timetable">
          <thead>
            <tr>
              <th>Date and Time</th>
              <th>Event</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20-05-24 10:00</td>
              <td>Inaugration Ceremony</td>
              <td>Anna Auditorium</td>
            </tr>
            <tr>
              <td>21-05-24 15:00 - 22-05-24 19:00</td>
              <td>AI ML hackathon</td>
              <td>CS hall</td>
            </tr>
            <tr>
              <td>21-05-24 15:00 - 22-05-24 21:00</td>
              <td>Make-a-thon</td>
              <td>Ambedkar Auditorium, TT</td>
            </tr>
            <tr>
              <td>23-05-24 14:00</td>
              <td>Closing Ceremony</td>
              <td>Anna Auditorium</td>
            </tr>
            <tr>
              <td>18-05-24 9:00-17:00</td>
              <td>Paper Submission Due</td>
              <td>MB, G14</td>
            </tr>
            <tr>
              <td>19-05-24</td>
              <td>Acceptance Notification</td>
              <td>Through Mail</td>
            </tr>
            <tr>
              <td>18-05-24 9:00-17:00</td>
              <td>Submission of Camera Ready Paper & Registration</td>
              <td>MB, G17</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Timeline;
