"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../libs";
import Link from "next/link";
import { PersonModel } from "../types/person";
import Person from "../components/person";

export default function Users() {
    const [person, setUsers] = useState<PersonModel[]>([]);
    const { data, error } = useSWR<{ result: PersonModel[] }>(`/queries/person`, fetcher);
<<<<<<< HEAD

=======
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
    useEffect(() => {
        console.log("Data fetched:", data);
        if (data && data.result && Array.isArray(data.result)) {
            setUsers(data.result);
        } else if (data !== undefined) {
            console.error("Invalid data format:", data);
        }
    }, [data]);
<<<<<<< HEAD

=======
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
    if (error) {
        console.error("Error fetching data:", error);
        return <div>Failed to load</div>;
    }
<<<<<<< HEAD

    if (!data) return <div>Loading...</div>;
    const delete_person: PersonModel['deletePerson'] = async (id: number) => {
=======
    if (!data) return <div>Loading...</div>;
    const delete_User: PersonModel['deleteUser'] = async (id: number) => {
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
        const res = await fetch(`/queries/person/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
<<<<<<< HEAD
        
        const content = await res.json();
        if (content.success > 0) {
            setUsers(person.filter((person: PersonModel) => person.id !== id));
        }
    };

=======
        const content = await res.json();
        if (content.success > 0) {
            setUsers(person.filter((user: PersonModel) => user.id !== id));
        }
    };
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
    return (
        <div className="w-full max-w-7xl m-auto">
            <table className="w-full border-collapse border border-slate-400">
                <caption className="caption-top py-5 font-bold text-green-500 text-2xl">
<<<<<<< HEAD
                    List Person - Counter: 
=======
                    List Users - Counter: 
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
                    <span className="text-red-500 font-bold">{person.length}</span>
                </caption>
                <thead>
                    <tr className="text-center">
                        <th className="border border-slate-300">ID</th>
                        <th className="border border-slate-300">Name</th>
                        <th className="border border-slate-300">Address</th>
                        <th className="border border-slate-300">Phone</th>
                        <th className="border border-slate-300">Action Button</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={6}>
                            <Link href={`/person/create`} className="bg-green-500 p-2 inline-block text-white">Create</Link>
                        </td>
                    </tr>
                    {person.map((item: PersonModel) => (
<<<<<<< HEAD
                        <Person key={item.id} {...item} deletePerson={delete_person} />
=======
                        <Person key={item.id} {...item} deleteUser={delete_User} />
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
                    ))}
                </tbody>
            </table>
        </div>
    );
<<<<<<< HEAD
}

=======
}
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
