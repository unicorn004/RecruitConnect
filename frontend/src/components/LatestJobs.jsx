import React, { useEffect, useState } from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
    const { allJobs, loading } = useSelector(store => store.job);
    const [isLoading, setIsLoading] = useState(loading);

    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);

    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold text-center mb-6'>
                <span className='text-[#6A38C2]'>Latest & Top </span> Job Openings
            </h1>
            
            {/* Loading state */}
            {isLoading && (
                <div className="flex justify-center items-center py-10">
                    <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-4 border-blue-600"></div>
                </div>
            )}

            {/* No jobs state */}
            {!isLoading && allJobs.length <= 0 && (
                <div className="text-center py-6">
                    <span className="text-lg font-semibold text-gray-600">No Job Available at the moment. Please check back later!</span>
                </div>
            )}

            {/* Jobs grid */}
            {!isLoading && allJobs.length > 0 && (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {allJobs?.slice(0, 6).map((job) => (
                        <LatestJobCards key={job._id} job={job} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default LatestJobs;