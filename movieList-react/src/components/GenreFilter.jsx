import React from 'react'

const GenreFilter = ({movies,updateFilter}) => {
  let arr=movies.map((movies)=>movies.genre);
  let s=new Set(arr);
  let genres=[...s];
  genres.unshift("All");

  return (
    <div className='GenreFilter'>
        <h2>Filter By Genre</h2>
        <div className="genres">
        {
            genres.map((genre)=>{
                return <button onClick={()=>updateFilter(genre)} value={genre} name={genre} key={genre}>{genre}</button>
            })
        }
        </div>
    </div>
  )
}

export default GenreFilter