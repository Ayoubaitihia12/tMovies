import React from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const MovieCart = ({movie}) => {

    const getPosterImage = (imgPath) =>{
        return `https://image.tmdb.org/t/p/w500${imgPath}`;
    }

    const link = '/details/' + movie.media_type + '/' + movie.id;

    return (
        <div className='group min-w-[180px]'>
            <Link to={link} >
                <div className='relative h-[350px] overflow-hidden rounded-3xl cursor-pointer max-w-[280px] mx-auto'>
                    <img className='h-full object-cover group-hover:scale-110 duration-500' src={getPosterImage(movie.backdrop_path)} alt="" />
                    <div className='opacity-0 group-hover:opacity-100 duration-500 z-10 absolute w-full h-full top-0 left-0 flex items-center justify-center'>
                        <AiFillPlayCircle size={80} className='z-20 text-red-600'/>
                        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
                    </div>
                </div>
            </Link>
            <h1 className='mt-3 font-semibold group-hover:text-red-600 text-center sm:text-left'>
                {movie.title || movie.name}
            </h1>
        </div>
    )
}

export default MovieCart