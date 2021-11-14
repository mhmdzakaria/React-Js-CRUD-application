import React, { Component } from 'react'

class CourseList extends Component {



    state = {
        isEdit: false
    }


    // toggle state


    toggleState = () => {

        let isEdit = this.state.isEdit;
        this.setState({

            isEdit: !isEdit
        })

    }


    renderCourse = () => {
        return (
            <li>
                <span>{this.props.details.name}</span>
                <button className="edit" onClick={() => { this.toggleState() }}>     Edit course   </button> &nbsp;
                <button className="delete" onClick={() => { this.props.deleteCourse(this.props.index) }}> Delete course</button>
            </li>
        )
    }

    // updateCourseItem

    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleState();
    }

    // render update Form

    renderUpdateForm = () => {
        return (
            <form onSubmit={this.updateCourseItem}>

                <input type="text" ref={(v) => {
                    this.input = v

                }}


                    defaultValue={this.props.details.name} />
                <button> update Course</button>




            </form>

        )

    }



    render() {


        let isEdit = this.state.isEdit;
        return (
            <React.Fragment>

                {isEdit ? this.renderUpdateForm() : this.renderCourse()}

            </React.Fragment>
        )
    }
}


export default CourseList;
