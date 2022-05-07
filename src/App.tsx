import * as React from 'react';
import '../src/Assets/Styles/main.scss';
import LeftSidebar from './components/Sidebar/LeftSidebar';
import LeftSidebarTeacher  from "./components/Sidebar/LeftSidebarTeacher";
import RightSidebar from './components/Sidebar/RightSidebar';
import MainPanel from './components/Pages/Teacher/MainPanel';
import { Container, Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router} from "react-router-dom";
import TopNavbar from './components/Navbars/TopNavbar';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <TopNavbar />
        </div>
        <div className="Page">
          <Col xl={2}>
            <LeftSidebarTeacher />
          </Col>
          <Col xl={10}>
            <MainPanel />
          </Col>
        </div>
      </div>
    </Router>
  );
}

export default App;
