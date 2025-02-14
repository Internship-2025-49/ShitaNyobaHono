import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { Routes } from './routes/index.js'
import { handle } from 'hono/vercel'
import { cors } from 'hono/cors'

// Initialize the Hono app
const app = new Hono().basePath('/api')

<<<<<<< HEAD
app.use('*', cors());
=======
// app.use('*', cors());
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})

app.route('/person', Routes)

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);

export default app
