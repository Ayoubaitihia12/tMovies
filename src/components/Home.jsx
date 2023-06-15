import React , {useState,useEffect} from 'react'
import key from '../api/key';
import axios from 'axios';
import MovieCart from './MovieCart';
import ClipLoader from "react-spinners/ClipLoader";
import Loading from './Loading';

const Home = () => {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [open,setOpen] = useState(true);

    useEffect(()=>{
        setLoading(true);

        const getMovies = async()=>{
            axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}&page=${page}`)
            .then((response)=>{
                setData(prev => [...prev,...response.data.results]);
                setLoading(false);
            }).catch((error)=>{
                console.log(error);
                setLoading(false);
            })
        }

        setTimeout(()=>{
            getMovies();
        },1700); 

        setTimeout(()=>{
            setOpen(false);
        },2200)

        
    },[page]);


    const LoadingButton = ()=>{
        return (
            <span className='flex items-center gap-2'>
                <ClipLoader
                    size={18}
                    speedMultiplier={0.7}
                />
                Loading
            </span>
        )
    }

    return (
        <div className='w-full bg-slate-800 py-10 mt-24 min-h-[83.2vh]'>
            <div className='w-full max-w-[1100px] mx-auto px-8 text-white flex flex-col items-center gap-8'>

                {loading && open && <Loading loading={loading}/>}
    
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6'>
                    {
                        data && data.map((movie)=>(
                            <MovieCart key={movie.id} movie={movie}/>
                        ))
                    }
                </div>

                {!open && (
                    <button 
                    onClick={()=>{setPage(page+1);}}
                    className='text-center bg-white text-slate-800 px-6 py-3 font-bold rounded-md'>
                        {loading ? (<LoadingButton/>) : ('Load More')}
                    </button>
                )}

            </div>
        </div>
    )
}

export default Home