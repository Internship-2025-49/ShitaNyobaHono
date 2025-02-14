<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PersonCreate() {
    const router = useRouter();
    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    
    const addPerson = async (e: any) => {
        e.preventDefault();
        if (address !== "" && name !== "" && phone !== "") {
            const formData = {
                name: name,
                address: address,
                phone: phone,
            };

            const add = await fetch('/queries/person', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const content = await add.json();
            if (content.success > 0) {
                router.push('/person');
            }
        }
    };
    return (
        <div className="w-full max-w-7xl m-auto">
            <form className='w-full' onSubmit={addPerson}>
                <span className='font-bold text-yellow-500 py-2 block underline text-2xl'>Form Add</span>
                <div className='w-full py-2'>
                    <label htmlFor="" className='text-sm font-bold py-2 block'>Name</label>
                    <input type='text' name='name' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setName(e.target.value)} />
                </div>
                <div className='w-full py-2'>
                    <label htmlFor="" className='text-sm font-bold py-2 block'>Address</label>
                    <textarea name='address' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setAddress(e.target.value)} />
                </div>
                <div className='w-full py-2'>
                    <label htmlFor="" className='text-sm font-bold py-2 block'>Phone</label>
                    <input type='text' name='phone' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setPhone(e.target.value)} />
                </div>
                <div className='w-full py-2'>
                    <button className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400">Submit</button>
=======
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserCreate() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    const addUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !address || !phone) {
            alert("Semua field harus diisi!");
            return;
        }

        try {
            setLoading(true); 
            const formData = { name, address, phone };

            const res = await fetch("/queries/person", {  
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const content = await res.json();
            console.log("Response:", content);

            if (content.success) {
                alert("Gagal" + content.message);
                
            } else {
                alert("Berhasil: " + content.message);
                router.push("/person");
            }
        } catch (error) {
            console.error("Error saat menambahkan user:", error);
            alert("Terjadi kesalahan. Cek console untuk detail.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-7xl m-auto">
            <form className="w-full" onSubmit={addUser}>
                <span className="font-bold text-yellow-500 py-2 block underline text-2xl">Form Add</span>
                
                <div className="w-full py-2">
                    <label className="text-sm font-bold py-2 block">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="w-full py-2">
                    <label className="text-sm font-bold py-2 block">Address</label>
                    <textarea
                        name="address"
                        className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <div className="w-full py-2">
                    <label className="text-sm font-bold py-2 block">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="w-full py-2">
                    <button
                        type="submit"
                        className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400"
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Submit"}
                    </button>
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
                </div>
            </form>
        </div>
    );
<<<<<<< HEAD
}

=======
}
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
