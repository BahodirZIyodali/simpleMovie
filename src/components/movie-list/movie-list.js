import './movie-list.css'

import MovieListItem from '../movie-list-item/movie-list-item'

const MovieList = ({data,onDelete,onToggleFavorite,onToggleLike}) => {
  return (
    <ul className='movie-list' >
      {data.map((e)=>{
        return (
        <MovieListItem key={e.id} {...e}  onDelete={()=>onDelete(e.id)}  onToggleFavorite={ ()=>onToggleFavorite (e.id)} onToggleLike={()=>onToggleLike(e.id)}  />   // ikkinchi usuli name={e.name} viewers={e.viewers} favourite={e.favourite}
        )
      })}
    </ul>
  )
}

export default MovieList
