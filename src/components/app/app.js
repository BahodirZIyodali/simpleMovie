import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-from'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const App = () => {
  const [data,setData]=useState( [
    { name: 'Spiderman',viewers:81 ,favourite:false , like:false ,id:1  },                         
    // { name: 'Benji',  viewers:21 ,favourite:false , like:false  ,id:2   },
    // { name: 'Naruto', viewers:11 ,favourite:false  , like:false  ,id:3   },
    // { name: 'Kobe',   viewers:11 , favourite:false , like:false  , id:4     },
  ])
  const onDelete = (id)=>{
    setData(data.filter(item=>item.id!==id))
      }
      const addForm=(item)=>{setData([...data,{...item ,id:uuidv4()}])
      }

       const onToggleFavorite=(id)=>{
        setData(data.map(item=>{
                  if(item.id===id){
                    item.favourite=!item.favourite
                    return item
                  }else{
                    return item
                  }
                }))
       }
       const onToggleLike=(id)=>{
           setData(data.map(item=>{
            if(item.id===id){
              item.like=!item.like
              return item
            }
            else{
              return item
            }
          }))
          //  }))
      }


       const allMoviesCount=data.length;
       const favoriteCount=data.filter(c=>c.favourite===true).length;
       const likeCount=data.filter(c=>c.like===true).length;
  return (
  <div className='app font-monospace'>
    <div className='content'>
    <AppInfo allMoviesCount={allMoviesCount} favoriteCount={favoriteCount}  likeCount={likeCount}  />
    <div className='search-panel'>
    <SearchPanel />
    <AppFilter />
    </div>
    <MovieList onToggleFavorite={onToggleFavorite}  onToggleLike={onToggleLike}    data={data}  onDelete={onDelete} />
    <MoviesAddForm addForm={addForm}/>
    </div >   
  
  </div>
  )
}

export default App
