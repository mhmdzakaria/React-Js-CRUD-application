import React, { Component } from 'react';
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

class App extends Component {

  state = {
    courses: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JAVASCRIPT" }

    ],
    current: ''
  }



  // delete course


  deleteCourse = (index) => {

    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses: courses
    })


  }


  // update course

  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }





  // add course

  addCourse = (e) => {
    e.preventDefault();
    console.log('addCourse')
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current });
    this.setState({
      courses: courses,
      current: ''
    })


  }


  // editCourse

  editCourse = (index, value) => {

    let courses = this.state.courses;

    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses: courses
    })

  }




  render() {

    const courses = this.state.courses
    const courseList = courses.map((course, index) => {
      return <CourseList details={course} key={index} deleteCourse={this.deleteCourse} index={index} editCourse={this.editCourse} />
    })


    return (
      <section className="App">

        <h1>React Js CRUD application</h1>

        <h2> Add course</h2>


        <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current} />

        <ul>

          {courseList}
        </ul>



      </section>
    );
  }
}




export default App;

