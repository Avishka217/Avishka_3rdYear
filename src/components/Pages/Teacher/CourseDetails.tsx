

import * as React from "react";
import { useState } from "react";
import CourseTab1 from "./CourseTab1";
import CourseTab2 from "./CourseTab2";
import CourseTab3 from "./CourseTab3";
import "../../../Assets/Styles/main.scss";
import CourseTab4 from "./CourseTab4";

type CourseDetailsProps = {
title:string;
desription:string;
subject:string;
grade:string;
month:string;
image:string;
index:any;
};


export const CourseDetails = (props:CourseDetailsProps) => {

const [toggleState, setToggleState] = useState(1);

  
  
    return (
      <div className="Container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => setToggleState(1)}
          >
            Course Details
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => setToggleState(2)}
          >
            Enrollments
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => setToggleState(3)}
          >
            Notes and Course Content
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => setToggleState(4)}
          >
            Earnings
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            {/* ADD A COMPONENT HERE */}
            <CourseTab1 />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <CourseTab2 />
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <CourseTab3 />
          </div>

          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <CourseTab4 />
          </div>
        </div>
      </div>
    );

}


export default CourseDetails;