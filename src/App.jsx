import React from "react"
import Navbar from "./Components/Navbar"
import Cards from "./Components/Cards"
import Card from "./Components/Card"
import Filter from "./Components/Filter"
import {filterData, apiUrl} from "./data"
import {useState, useEffect} from "react"
import {toast} from "react-toastify";

function App() {

  const [courses,setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const course_data = await response.json();
            console.log(course_data);
            setCourses(course_data.data);
        } catch (error) {
            toast.error("cant fetch");
        }
    };

    fetchData();
},[]);

  return (
    // <>
    <div className="App">
      <Navbar/>
 
      <Filter  filterData = {filterData} />

      <Cards courses = {courses}/>
    </div>
    // </>
    
  );
}

export default App;
