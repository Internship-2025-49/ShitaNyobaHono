import React from 'react'
import Link from 'next/link'
import { PersonModel } from '../types/person'
export default function Post(params: PersonModel) {
    return (
        <tr>
            <td className='w-10 border border-slate-300 text-center'>{params.id}</td>
            <td className='border border-slate-300 text-center'>{params.name}</td>
            <td className='border border-slate-300 text-center'>{params.address}</td>
            <td className='border border-slate-300 text-center'>{params.phone}</td>
            <td className='w-52 border border-slate-300'>
<<<<<<< HEAD
            <span onClick={()=>params.deletePerson(params.id)} className='bg-red-500 p-2 inline-block text-white text-sm'>Delete</span>
=======
            <span onClick={()=>params.deleteUser(params.id)} className='bg-red-500 p-2 inline-block text-white text-sm'>Delete</span>
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
            <Link href={`/person/edit/${params.id}`} className='bg-yellow-500 p-2 inline-block ml-3 text-white text-sm'>Edit</Link>
            <Link href={`/person/read/${params.id}`} className='bg-yellow-500 p-2 inline-block ml-3 text-white text-sm'>View</Link>
            </td>
        </tr>
    )
<<<<<<< HEAD
}




=======
}
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
