import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { Routes } from './routes/index.js'

// Initialize the Hono app
const app = new Hono().basePath('/api')

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})

app.route('/person', Routes)

export default app
