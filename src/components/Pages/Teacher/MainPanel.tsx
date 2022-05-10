import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Course from './Course';
import CreateCourse from './CreateCourse';
import Dashboard from "./Dashboard";
import MyCourses from "./MyCourses";

import Settings from "./Settings";
import TeacherProfile from "./TeacherProfile";


const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Dashboard />,
  },
  {
    path: "/mycourses",
    main: () => <MyCourses />,
  },

  {
    path: "/settings",
    main: () => <Settings />,
  },
  {
    path: "/userprofile",
    main: () => <TeacherProfile />,
  },
  {
    path: "/createcourse",
    main: () => <CreateCourse />,
  },

  {
    path: "/course",
    main: () => (
      <Course />
    ),
  },
];

export default function MainPanel() {
  return (
    <div className="MainPanel">
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          caseSensitive={route.exact}
          element={<route.main />}
        />
      ))}
    </Routes>
    </div>
  );
}

