import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ClassList } from "./components/ClassList";
import { Header } from "./components/Header";
import Landing from "./components/Landing";
import { useDbData } from "./utilities/firebase";
import { getUser} from "./components/User";
import { AddSession } from "./components/AddSession";

const App = () => {
    const user = getUser();
    const [users, uerror] = useDbData("/users");
    const [classes, cerror] = useDbData("/classes");
    console.log(users);
    console.log(classes);

    if (typeof user === "string" || user instanceof String)
      return <h1>{user}</h1>;

    if (uerror) return <h1>Error loading users: {uerror.toString()}</h1>;
    if (users === undefined) return <h1>Loading users...</h1>;
    if (!users) return <h1>No users found</h1>;

    if (cerror) return <h1>Error loading classes: {cerror.toString()}</h1>;
    if (classes === undefined) return <h1>Loading classes...</h1>;
    if (!classes) return <h1>No classes found</h1>;

  // const updateUserRides = "";


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
        <Route path="/" element={<Landing user={user} />}></Route>
        {/* <Route
          path="/learn"
          element={
            <div>
              <Header />
              <ClassList data={dataLearn} type="learn" />
            </div>
          }
        /> */}
        <Route
          path="/teach"
          element={
            <div>
              <Header />
              <ClassList data={dataTeach} type="teach" />
            </div>
          }
        />
        <Route
          path="/learn"
          element={
            <div>
              <Header />
              <AddSession />
            </div>
          }
        />
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
