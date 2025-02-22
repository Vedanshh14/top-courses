import React from "react"
import Navbar from "./Components/Navbar"
import Cards from "./Components/Cards"
import Card from "./Components/Card"
import Filter from "./Components/Filter"
import { filterData, apiUrl } from "./data"
import { useState, useEffect } from "react"
import { toast } from "react-toastify";

function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const course_data = await response.json();
        console.log(course_data);
        setCourses(course_data.data);
      } catch (error) {
        toast.error("Check internet connection!");
      }
    };

    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const course_data = await response.json();
      console.log(course_data);
      setCourses(course_data.data);
    } catch (error) {
      toast.error("Check internet connection!");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (

    <div className="App" class="min-h-screen flex flex-col">
      <div><Navbar /></div>

      <div className="bg-slate-300">
        <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">{
          loading ? (console.log("wait")) :(<Cards courses={courses} category={category} />)}
        </div>
      </div>



    </div>


  );
}

export default App;



