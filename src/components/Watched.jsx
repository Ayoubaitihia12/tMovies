import React from 'react'
import { useSelector } from 'react-redux';
import WatchedMovieCart from './WatchedMovieCart'

const Watched = () => {

    const movies = useSelector(state => state.watched);

    return (
        <div className='w-full bg-slate-800 py-10 min-h-[83.2vh] mt-24'>
            <div className='w-full max-w-[1100px] mx-auto px-8 text-white gap-8'>

                <div className='flex flex-col items-start'>
                    <h1 className='text-4xl font-bold pb-2'>Watched</h1>
                    <div className='bg-white w-[80px] h-[3px]'/>
                </div>

                {movies.length > 0 &&(
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 py-10 gap-6'>
                    {
                        movies.map((movie)=>(
                            <WatchedMovieCart key={movie.id} movie={movie} />
                        ))
                    }
                </div>
                )}

                {movies.length === 0 &&(
                    <div className='py-32 text-center text-lg text-slate-300'>
                        <h1>Watched is empty</h1>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Watched