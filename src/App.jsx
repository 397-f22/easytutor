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

  const dataTeach = {
    courses: {
      0: {
        name: "CS343 - Operating Systems",
        location: "Mudd Building - 2nd Floor",
        time: "December 16, 2:00 pm - 4:00 pm",
        credits: 20,
      },
      1: {
        name: "CS330 - Human Computer Interaction",
        location: "Garage",
        time: "December 20, 2:00 pm - 3:00 pm",
        credits: 10,
      },
      2: {
        name: "CS340 - Intro to Networking",
        location: "Tech M164",
        time: "December 12, 1:00 pm - 4:00 pm",
        credits: 30,
      },
    },
  };

  const dataLearn = {
    courses: {
      0: {
        name: "CS397 - Rapid Prototyping",
        location: "Tech Auditorium",
        time: "December 20, 2:00 pm - 3:00 pm",
        credits: 10,
      },
      1: {
        name: "CS343 - Operating Systems",
        location: "Main Building - 2nd Floor",
        time: "December 16, 2:00 pm - 4:00 pm",
        credits: 20,
      },
      2: {
        name: "CS340 - Intro to Networking",
        location: "Tech M169",
        time: "December 11, 3:00 pm - 4:00 pm",
        credits: 10,
      },
    },
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <ClassList data={dataLearn} type="learn" />
            </div>
          }
        ></Route>
        <Route
          path="/teach"
          element={
            <div>
              <Header />
              <ClassList data={dataTeach} type="teach" />
            </div>
          }
        ></Route>
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
