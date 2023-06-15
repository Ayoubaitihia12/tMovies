import React , {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import key from '../api/key';
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import {addWatchList} from '../redux/watchedList/watchlistActions';
import Loading from './Loading';

const Movie = () => {

    const {id , category} = useParams();
    const [movie,setMovie] = useState({});
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);

        const getMovies = async()=>{
            axios.get(`https://api.themoviedb.org/3/${category}/${id}?api_key=${key}`)
            .then((response)=>{
                setMovie(response.data);
                setLoading(false);
            }).catch((error)=>{
                console.log(error);
                setLoading(false);
            })
        }

        setTimeout(()=>{
            getMovies();
        },1200)

    },[])

    const getPosterImage = (imgPath) =>{
        return `https://image.tmdb.org/t/p/w500${imgPath}`;
    }

    const watchlist = useSelector((state)=> state);
    const dispatch = useDispatch();

    console.log(movie);

    return(
            <div className='w-full bg-slate-800 py-12 mt-24 min-h-[83.2vh]'>
                {loading && (<Loading loading={loading}/>)}
                
                {!loading && (

                    <div className='w-full max-w-[1100px] mx-auto px-8 text-white grid md:grid-cols-2 gap-8'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='sm:text-6xl text-4xl font-bold'>{movie.original_title || movie.name}</h1>
                            <div className='flex items-center gap-2'>
                                {
                                    movie.genres && movie.genres.map((genre)=>(
                                        <span className='cursor-pointer border-[1.5px] sm:text-xs text-[10px] border-white px-4 py-1 rounded-full'>
                                            {genre.name}
                                        </span>
                                    )) 
                                }
                            </div>
                            <p className='sm:text-sm text-xs font-semibold max-w-[90%]'>{movie.overview}</p>
                                <div className='flex items-center gap-4'>
                                    <button 
                                    onClick={()=>dispatch(addWatchList(movie))}
                                    className='bg-red-600 px-6 py-2 font-semibold rounded-full sm:text-sm text-xs'>
                                        Add To Watch List
                                    </button>
                                    <button className='sm:text-md text-sm bg-transparent border-2 border-white px-6 py-[5px] font-semibold rounded-full'>Watch trailer</button>
                                </div>
                        </div>
                        <div className='md:block hidden h-[380px] w-[290px] rounded-3xl overflow-hidden'>
                            <img className='object-cover h-full' src={getPosterImage(movie.backdrop_path)} alt={movie.original_title || movie.name} />
                        </div>
                    </div>
                )}

            </div>

    )
}

export default Movie