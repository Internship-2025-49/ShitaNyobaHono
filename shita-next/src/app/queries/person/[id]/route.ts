import { NextRequest, NextResponse } from 'next/server'
<<<<<<< HEAD

=======
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
const token = '33c09648982ba1044f11365135a4a597c848f0bf28e4831578e24dc81cd1ad5b';

export async function GET(request : NextRequest,{ params }: { params: { id: number } }) {
    const getApiKey = await fetch('http://localhost:3000/api/person/shita', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const apiKeyData = await getApiKey.json();
<<<<<<< HEAD
    const apiKey = apiKeyData.key;
    
    const res = await fetch(`http://localhost:3000/api/person/data/${params.id}`, {
=======

    const apiKey = apiKeyData.key;
    const resolvedParams = await params; 
    console.log("Resolved Params:", resolvedParams); 

    const res = await fetch(`http://localhost:3000/api/person/data/${resolvedParams.id}`, {
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
        next: { revalidate: 10 },
        headers: {
            'Authorization': `Bearer ${token}`,
            'api-key': apiKey
        }
    })
<<<<<<< HEAD

    const data = await res.json()
    return NextResponse.json(data)
}

=======
    const data = await res.json()

    return NextResponse.json(data)
}



>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
export async function PUT(request: NextRequest,{ params }: { params: { id: number } }) {
    const body = await request.json()
    
    const getApiKey = await fetch('http://localhost:3000/api/person/shita', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const apiKeyData = await getApiKey.json();
<<<<<<< HEAD
=======

>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
    const apiKey = apiKeyData.key;
    
    const res = await fetch(`http://localhost:3000/api/person/data/${params.id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'api-key': apiKey
        },
        body: JSON.stringify(body),
    })

    const data = await res.json();
<<<<<<< HEAD
    return NextResponse.json(data)
}

export async function DELETE(request: NextRequest,{ params }: { params: { id: number } }) {
=======

    return NextResponse.json(data)
}

export async function DELETE(request: NextRequest,{ params }: { params: { id: string } }) {
    try {
        if (!params || !params.id) {
            return new Response(JSON.stringify({ success: false, message: "ID is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
    const getApiKey = await fetch('http://localhost:3000/api/person/shita', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const apiKeyData = await getApiKey.json();
<<<<<<< HEAD
    const apiKey = apiKeyData.key;
    
    const res = await fetch(`http://localhost:3000/api/person/data/${params.id}`, {
        next: { revalidate: 10 },
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'api-key': apiKey
        }
    })

    const data = await res.json();
    return NextResponse.json(data)
}

=======

    const apiKey = apiKeyData.key;
    
     const res = await fetch(`http://localhost:3000/api/person/data/${params.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                'api-key': apiKey
            },
        });

        const data = await res.json();
        console.log("Delete Response:", data);

        return new Response(JSON.stringify(data), {
            status: res.status,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Delete Error:", error);
        return new Response(JSON.stringify({ success: false, message: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}


>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
