import React from 'react'
import { useSelector } from 'react-redux';
import WatchMovieCart from './WatchMovieCart';

const WatchList = () => {

    const movies = useSelector((state) => state.watchlist);
    console.log(movies);

    return (
        <div className='w-full bg-slate-800 py-10 mt-24 min-h-[83.2vh]'>
            <div className='w-full max-w-[1100px] mx-auto px-8 text-white gap-8'>
                
                <div className='flex flex-col items-start'>
                    <h1 className='text-4xl font-bold pb-2'>Watch List</h1>
                    <div className='bg-white w-[80px] h-[3px]'/>
                </div>

                {movies.length > 0 &&(
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 py-10 gap-6'>
                        {
                            movies.map((movie)=>(
                                <WatchMovieCart key={movie.id} movie={movie}/>
                            ))
                        }
                    </div>
                )}

                {movies.length == 0 &&(
                    <div className='py-32 text-center text-lg text-slate-300'>
                        <h1>Watch list is empty</h1>
                    </div>
                )}

            </div>
        </div>
    )
}

export default WatchList