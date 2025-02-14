'use client'
import { fetcher } from '@/app/libs'
import { use } from 'react';
import useSWR from 'swr';

export default function Detail({ params }: { params: Promise<{ id: number }> }) {
<<<<<<< HEAD

=======
    
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
    const resolvedParams = use(params);
    const { data: person, isLoading, error } = useSWR(`/queries/person/${resolvedParams.id}`, fetcher);

    if (isLoading) return <div><span>Loading...</span></div>;
    if (error) return <div><span>Error fetching data</span></div>;
    if (!person) return <div><span>No user found</span></div>;
<<<<<<< HEAD
    
=======

>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
    return (
        <div className='w-full'>
            <h2 className='text-center font-bold text-3xl py-3'>{person.name}</h2>
            <div className='w-full max-w-4xl m-auto border-[1px] p-3 border-gray-500 rounded-md'>
                <p >{person.address}</p>
            </div>
            <div className='w-full max-w-4xl m-auto border-[1px] p-3 border-gray-500 rounded-md'>
                <p >{person.phone}</p>
            </div>
        </div>
    );
<<<<<<< HEAD
}

=======

}
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
