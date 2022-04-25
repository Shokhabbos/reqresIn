import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUser } from "../store/slices/users";

const Index = () => {
  let mylocation = useLocation();
  let params = useParams();
  let [location, setLocation] = useState(mylocation);

//   const dispatch = useDispatch();
//   const mySelector = useSelector((state) => state.users);
//   useEffect(() => {
//     dispatch(getUser(Number(params.id)));
//     console.log(params.id);
//   }, []);
  const selector = useSelector((state) => state.auth);
  let token = localStorage.getItem("token");
  useEffect(() => {}, [selector.is_auth]);
  useEffect(() => {
    setLocation(mylocation);
  }, [mylocation]);

  return (
    <div>
      {(location.pathname == "/" ||
        location.pathname == "/profile" ||
        location.pathname == `/user/${params.id}`) &&
      token ? (
        <header className="header">
          <Link to="/">Home</Link>
         
          <Link to="/profile">Profile</Link>
        </header>
      ) : (
        <header className="header">
         
          <div>
          <Link to="/">  Home</Link>
          <Link to="/login">Login</Link>

          </div>
        </header>
      )}
    </div>
  );
};

export default Index;
