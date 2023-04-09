import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Home() {
 const [movies,setMovies]=useState( [] );
 useEffect(()=>{
  loadMovies();
},[]) ;

const loadMovies=async ()=>{
  const movieresult=await axios.get("http://localhost:8080/movie/getAll");
  setMovies(movieresult.data);
  

}
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Movie Name</th>
      <th scope="col">Movie Description</th>
      
    </tr>
  </thead>
  <tbody>
    {
      movies.map((movie,index)=>(
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{movie.moviename}</td>
        <td>{movie.movieDescription}</td>
        
      </tr>

      ))
    }
  

  </tbody>
</table>

        </div>

    </div>
  )
}
