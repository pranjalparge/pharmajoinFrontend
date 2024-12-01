import Consultant from "../consultantSection/index";
import Elearning from "../eLearningSection/index";
import OnlineAddmission from "../onlineAdmission/index";
import JobsByQuali from "../jobsbyqual/index";
import JobCard from "../jobCard";

function App() {
  return (
    <>
      <JobCard />
      <Consultant />

      <Elearning />
      <JobsByQuali />
      {/* <OnlineAddmission/>
      <Dynamic/> */}
    </>
  );
}

export default App;
