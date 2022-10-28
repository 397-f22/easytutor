import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ClassList } from "./components/ClassList";
import { Header } from "./components/Header";

const App = () => {
  // const user = getUser();
  // const [rides, rerror] = useDbData("/rides");
  // const [users, uerror] = useDbData("/users");
  // const updateUserRides = "";

  // if (rerror) return <h1>Error loading rides: {rerror.toString()}</h1>;
  // if (rides === undefined) return <h1>Loading rides...</h1>;
  // if (!rides) return <h1>No rides found</h1>;

  // if (uerror) return <h1>Error loading users: {uerror.toString()}</h1>;
  // if (users === undefined) return <h1>Loading users...</h1>;
  // if (!users) return <h1>No users found</h1>;

  // if (typeof user === "string" || user instanceof String)
  //   return <h1>{user}</h1>;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header></Header>
              <ClassList />
            </div>
          }
        ></Route>
        {/* <Route
          path="/allRides"
          element={
            <div>
              <Header showAddRides={true} user={user} />
              <RideList
                rides={rides}
                user={user}
                users={users}
                updateUserRides={updateUserRides}
              />
            </div>
          }
        ></Route> */}
        {/* <Route
          path="/myRides"
          element={
            <div>
              <Header showAddRides={true} user={user} />
              <MyRides rides={rides} user={user} users={users} />
            </div>
          }
        ></Route> */}
        {/* <Route
          path="/addRide"
          element={
            <div>
              <Header showAddRides={false} user={user} />
              <AddRide user={user} />
            </div>
          }
        ></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
