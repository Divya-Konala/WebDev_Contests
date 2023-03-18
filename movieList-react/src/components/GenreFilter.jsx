import React from 'react'

const GenreFilter = ({props}) => {
  return (
    <div className='GenreFilter'>
        <h2>Filter By Genre</h2>
        <div className="genres">
        {
            props.map((genre)=>{
                return <button onClick={(e)=>{console.log(`Filtering by ${e.target.name}`)}} key={genre} name={genre}>{genre}</button>
            })
        }
        </div>
    </div>
  )
}

export default GenreFilter