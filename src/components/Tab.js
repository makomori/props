import Hobby from "./Hobby";
import Job from "./Job";

const Tab = ({ index }) => {
  return (
    <>
      {index === 0 && <Hobby />}
      {index === 1 && <Job />}
    </>
  );
};

export default Tab;
