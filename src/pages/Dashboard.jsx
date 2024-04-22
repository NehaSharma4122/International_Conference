import Footer from "../components/Footer";
import Organizers from "../components/Organizers";
import Timeline from "../components/Timeline";

const Dashboard = () => {
  return (
    <>
      <div className="Home">
        <div className="Home-heading">
          <p>ADS Conference</p>
        </div>
        <div className="Home-text">
          <h5>5th IEEE CS International Conference on</h5>
          <p>ANALYTICS AND DATA SUMMIT 2024</p>
        </div>
      </div>
      <Timeline />
      <Organizers />
      <Footer />
    </>
  );
};

export default Dashboard;
