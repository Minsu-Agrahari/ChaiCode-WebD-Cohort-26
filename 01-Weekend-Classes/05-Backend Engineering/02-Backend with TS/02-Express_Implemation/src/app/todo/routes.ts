import {Router} from 'express'
import TodoController from './controller.js';

const router = Router()
const controller = new TodoController();

// GET routs
router.get('/', controller.handleGetAllTodos.bind(controller));
// router.get('/:id');

// // POST routs
// router.post('/');

// // PUT routs
// router.put('/:id');

// // DELETE routs
// router.delete('/:id');

export default router;