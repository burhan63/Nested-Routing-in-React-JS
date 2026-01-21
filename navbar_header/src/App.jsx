import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Route, Routes } from 'react-router'
import HomeComponent from './Home'
import AboutComponent from './About'
import ContactUsComponent from './ContactUs'
import Navbar from './Navbar'
import PageNotFoundComponent from './PagenotFound'
import CollegeComponent from './College'
import StudentComponent from './Student'
import DepartmentComponent from './Department'
import SectionComponent from './Section'
import CourseComponent from './Course'
// import './App.css'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomeComponent/>}></Route>
        <Route path="/about" element={<AboutComponent/>}></Route>
        <Route path="/contactus" element={<ContactUsComponent />}></Route>

        {/* //Nested Routing */}
        <Route path="/college" element={<CollegeComponent />}>
        <Route path="student" element={<StudentComponent />}></Route>
        <Route path="department" element={<DepartmentComponent />}></Route>
        <Route path="section" element={<SectionComponent />}></Route>
        <Route path="course" element={<CourseComponent />}></Route>
        </Route>

        {/* //404 Page Not Found */}
        <Route path="/*" element={<PageNotFoundComponent />}></Route>
      </Routes>
    </>
  )
}

export default App
