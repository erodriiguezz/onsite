import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/lounge">Go to lounge</Link>
    </>
  );
};

export default UserDashboard;
