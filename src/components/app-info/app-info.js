import './app-info.css'
function AppInfo({allMoviesCount ,favoriteCount ,likeCount}) {
    return (
        <div className='app-info'>
            <p className='fs-3 text-uppercase'> Barcha kinolar soni: {allMoviesCount}</p>
            <p className='fs-4 text-uppercase'> Sevimli filmlar soni:{favoriteCount}</p>
            <p className='fs-4 text-uppercase'>  Like bosgan filmlarimiz :{likeCount} </p>
            
        </div>
    )
}

export default AppInfo
