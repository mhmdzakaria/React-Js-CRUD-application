import React from 'react'

const CourseForm = (props) => {
    return (
        <form onSubmit={props.addCourse} >

            <input type="text" onChange={props.updateCourse} value={props.current} /> &nbsp;
            <button type="submit" className="add"> Add course</button>




        </form>
    )
}

export default CourseForm;
