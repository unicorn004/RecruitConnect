import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        if (query.trim()) {
            dispatch(setSearchedQuery(query));
            navigate("/browse");
        }
    }

    return (
        <div className='text-center py-20 bg-gradient-to-r from-teal-500 to-purple-600'>
            <div className='flex flex-col gap-6 items-center'>
                <span className='text-[#F83002] bg-gray-100 px-6 py-2 rounded-full text-lg font-semibold shadow-md'>
                    No. 1 Job Hunt Website
                </span>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight'>
                    Your Dream Job is Just a Click Away! <br />
                    <span className='text-[#6A38C2]'>Search, Apply, and Succeed</span>
                </h1>
                <p className='text-white text-lg sm:text-xl max-w-2xl mx-auto'>
                    Unlock your career potential with the perfect job opportunities. Find your ideal role today and take the first step towards success!
                </p>
                <div className='flex w-full max-w-md mx-auto mt-6 bg-white shadow-xl rounded-full p-2'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className='w-full py-3 px-5 rounded-l-full text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#6A38C2] focus:border-transparent transition duration-300'
                    />
                    <Button 
                        onClick={searchJobHandler} 
                        className="bg-[#6A38C2] text-white px-6 py-3 rounded-r-full hover:bg-[#5a2b9b] transition duration-300"
                    >
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;