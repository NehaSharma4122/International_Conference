import "./Timeline.css";
const Timeline = () => {
  return (
    <div className="timeline">
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
            <td>14-01-24 10:00</td>
            <td>Inaugration Ceremony</td>
            <td>Anna Auditorium</td>
          </tr>
          <tr>
            <td>14-01-24 15:00 - 15-01-24 19:00</td>
            <td>AI ML hackathon</td>
            <td>CS hall</td>
          </tr>
          <tr>
            <td>14-01-24 15:00 - 15-01-24 21:00</td>
            <td>Make-a-thon</td>
            <td>Ambedkar Auditorium, TT</td>
          </tr>
          <tr>
            <td>14-01-24 15:00 - 15-01-24 21:00</td>
            <td>Closing Ceremony</td>
            <td>Ambedkar Auditorium, TT</td>
          </tr>
          <tr>
            <td>14-01-24 15:00 - 15-01-24 21:00</td>
            <td>Paper Submission Due</td>
            <td>Ambedkar Auditorium, TT</td>
          </tr>
          <tr>
            <td>14-01-24 15:00 - 15-01-24 21:00</td>
            <td>Acceptance Notification</td>
            <td>Ambedkar Auditorium, TT</td>
          </tr>
          <tr>
            <td>14-01-24 15:00 - 15-01-24 21:00</td>
            <td>Submission of Camera Ready Paper & Registration</td>
            <td>Ambedkar Auditorium, TT</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Timeline;
