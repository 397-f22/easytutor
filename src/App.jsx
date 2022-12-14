import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AddSession } from "./components/AddSession";
import { Header } from "./components/Header";
import Landing from "./components/Landing";
import { SessionList } from "./components/SessionList";
import { UserProfile } from "./components/UserProfile";
import { getUser } from "./components/User";
import { useDbData } from "./utilities/firebase";

const App = () => {
  const user = getUser();
  const [users, uerror] = useDbData("/users");
  const [courses, c_error] = useDbData("/courses");
  const [sessions, s_error] = useDbData("/sessions");

  if (typeof user === "string" || user instanceof String)
    return <h1>{user}</h1>;

  if (uerror) return <h1>Error loading users: {uerror.toString()}</h1>;
  if (users === undefined) return <h1>Loading users...</h1>;
  if (!users) return <h1>No users found</h1>;

  if (c_error) return <h1>Error loading courses: {c_error.toString()}</h1>;
  if (courses === undefined) return <h1>Loading courses...</h1>;
  if (!courses) return <h1>No courses found</h1>;

  if (s_error) return <h1>Error loading sessions: {s_error.toString()}</h1>;
  if (sessions === undefined) return <h1>Loading sessions...</h1>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing user={user} />}></Route>
        <Route
          path="/teach"
          element={
            <div className="background">
              <Header />
              <SessionList
                sessions={Object.fromEntries(
                  Object.entries(sessions).filter(
                    ([_, s]) => s.tutor === undefined || s.tutor === "" //&&
                    //(user.uid === undefined || s.student != user.uid)
                  )
                )}
                courses={courses}
                user={user}
                showSearch={true}
              />
            </div>
          }
        />
        <Route
          path="/learn"
          element={
            <div className="background">
              <Header />
              <AddSession courses={courses} user={user} />
            </div>
          }
        />
        <Route
          path="/mySessions"
          element={
            <div className="background">
              <Header />
              <UserProfile sessions={sessions} user={user} courses={courses} />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
