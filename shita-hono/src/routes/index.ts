//import hono
import { Hono } from 'hono';
import { createPerson, deletePerson, getPerson, getPersonById, updatePerson } from '../controllers/PersonController.js';

//import controller

//inistialize router
const router = new Hono()

//routes posts index
router.get('/data', (c) => getPerson(c));
router.post('/data', (c) => createPerson(c));
router.get('/data/:id', (c) => getPersonById(c));
router.put('/data/:id', (c) => updatePerson(c)); // Biasain pake PUT 
router.patch('/data/:id', (c) => updatePerson(c));
router.delete('/data/:id', (c) => deletePerson(c));


export const Routes = router;