import * as React from "react";
import { Button } from "react-bootstrap";
import { BsBoxArrowUp } from "react-icons/bs";
import UploadButton from "../../Button/UploadButton";

const AddCourse = () => {
  return (
    <div className="AddCourse">
      <h3>Add a new Course</h3>
      <div className="AddCourseForm">
        <form className="Form">
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Grade" />
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="Monthly Payment" />
          <input type="Date" placeholder="Started Date" />
          <input type="text" placeholder="Institute" />
          <input type="text" placeholder="Duration" />
          
          {/* <Button className="Button">
            <BsBoxArrowUp />
            Upload Course Thumbnail
          </Button> */}

          <UploadButton />
          <br></br>
          <Button className="Button">Create Course</Button>
        </form>
      </div>
    </div>
  );};

export default AddCourse;
