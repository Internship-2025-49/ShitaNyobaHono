import type { Context } from "hono";
import prisma from "../../prisma/client/index.js";


/**
 * Getting all posts
 */
export const getPerson = async (c: Context) => {
    try {
        //get all posts
        const person = await prisma.person.findMany({ orderBy: { id: 'asc' } });

        //return JSON
        return c.json(person);

    } catch (e: unknown) {
        console.error(`Error getting posts: ${e}`);
    }
}

export async function createPerson(c: Context) {
  try {
    
    const body = await c.req.json();

   
    const name = typeof body['name'] === 'string' ? body['name'] : '';
    const address = typeof body['address'] === 'string' ? body['address'] : '';
    const phone = typeof body['phone'] === 'string' ? body['phone'] : '';


    const person = await prisma.person.create({
      data: {
        name,
        address,
        phone
      }
    });

   
    return c.json(person);

  } catch (e) {
    console.error(`Error creating person: ${e}`);
    return c.json({ error: "Internal Server Error" }, 500);
  }
}


export async function getPersonById(c: Context) {
  try {
      
      const personId = parseInt(c.req.param('id'));

      
      if (isNaN(personId)) {
          return c.json({ error: "Invalid ID format" }, 400);
      }

      // Ambil data berdasarkan ID
      const person = await prisma.person.findUnique({
          where: { id: personId },
      });

      // Jika tidak ditemukan, kembalikan pesan error
      if (!person) {
          return c.json({ error: "Person not found" }, 404);
      }

      // Kembalikan data yang ditemukan
      return c.json(person);
  } catch (e: unknown) {
      console.error(`Error finding person: ${e}`);
      return c.json({ error: "Internal Server Error" }, 500);
  }
}

export async function updatePerson(c: Context) {
  try {

      // Konversi tipe id menjadi number
      const personId = parseInt(c.req.param('id'));

      //get body request
      const body = await c.req.json();

      //check if title and content is string
      const name   = typeof body['name'] === 'string' ? body['name'] : '';
      const address = typeof body['address'] === 'string' ? body['address'] : '';
      const phone = typeof body['phone'] === 'string' ? body['phone'] : '';

      //update food with prisma
      const person = await prisma.person.update({
          where: { id: personId },
          data: {
            name: name,
            address: address,
            phone: phone
          },
      });

      //return JSON
      return c.json({
          statusCode : 200,
          message: 'food Updated Successfully!',
          data: person
      });

  } catch (e: unknown) {
      console.error(`Error updating food: ${e}`);
  }
}

export async function deletePerson(c: Context) {
  try {
      const personId = parseInt(c.req.param("id"));

      const person = await prisma.person.findUnique({
          where: { id: personId },
      });

      if (!person) {
          return c.json({ success: false, message: "Person not found" }, 404);
      }

      await prisma.person.delete({
          where: { id: personId },
      });

      return c.json({ success: true, message: "Person deleted successfully!" });
  } catch (e) {
      console.error("Error deleting person:", e);
      return c.json({ success: false, message: "Error deleting person" }, 500);
  }
}
