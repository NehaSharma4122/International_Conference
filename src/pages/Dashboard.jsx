import Footer from "../Components/Footer";
import Organizers from "../Components/Organizers";
import Timeline from "../Components/Timeline";
import Home from "../Components/Home/Home"
import About from "../Components/About/About";

const Dashboard = () => {
  return (
    <>
      <Home/>
      <About/>
      <Timeline/>
      <Organizers />
      <Footer />
    </>
  );
};

export default Dashboard;
