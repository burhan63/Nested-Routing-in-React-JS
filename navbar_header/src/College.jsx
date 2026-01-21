import { NavLink, Outlet } from "react-router";

export default function CollegeComponent(){
    return(
        <div className="college" style={{textAlign:'center'}}>
            <h1>College</h1>

            <NavLink className="link" to="student">Student</NavLink>
            <NavLink className="link" to="department">Department</NavLink>
            <NavLink className="link" to="section">Section</NavLink>
            <NavLink className="link" to="course">Course</NavLink>
            <Outlet/>
        </div>
    )
}