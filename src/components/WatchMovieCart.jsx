import React from 'react'
import {FaEye} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {removeWatchList} from '../redux/watchedList/watchlistActions'
import {addWatched} from '../redux/watched/watchedActions'

const WatchMovieCart = ({movie}) => {
    
    const getPosterImage = (imgPath) =>{
        return `https://image.tmdb.org/t/p/w500${imgPath}`;
    }

    const link = '/details/' + movie.media_type + '/' + movie.id;

    const dispatch = useDispatch();

    const moveToWatched = (movie)=>{
        dispatch(removeWatchList(movie));
        dispatch(addWatched(movie));
    }
  
    return (
        <div className='group min-w-[180px]'>
            <div className='relative h-[350px] overflow-hidden rounded-3xl cursor-pointer max-w-[280px] mx-auto'>
                <img className='h-full object-cover group-hover:scale-110 duration-500' src={getPosterImage(movie.backdrop_path)} alt="" />
                <div className='opacity-0 group-hover:opacity-100 duration-500 z-10 absolute w-full h-full top-0 left-0 flex items-center justify-center'>
                    <div className='z-10 absolute bottom-[-30%] group-hover:bottom-[8%] duration-300 left-[50%] translate-x-[-50%] flex items-center gap-4 bg-black px-3 py-2 rounded-md'>
                        <span>
                            <FaEye onClick={()=> moveToWatched(movie)} size={25}/>
                        </span>
                        <span onClick={()=>dispatch(removeWatchList(movie))}>
                            <AiOutlineClose size={25}/>
                        </span>
                        
                    </div>
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-20'></div>
                </div>
            </div>
            <h1 className='mt-3 font-semibold group-hover:text-red-600 text-center sm:text-left'>
                {movie.title || movie.name}
            </h1>
        </div>
    )
}

export default WatchMovieCart