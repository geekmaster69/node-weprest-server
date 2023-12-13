import { Router } from "express";
import { TodosController } from "./controller";


export class TodoRoutes {
    static get routes(): Router {
        const router = Router();
        const todoController = new TodosController();
    
        // router.get('/api/todos', (req, res) => todoController.getTodos(req, res));    //* Esto es lo mismo
        router.get('/', todoController.getTodos);  // ? Se manda la referencia de la funcion
        router.get('/:id', todoController.getTodoById);
        router.post('/', todoController.createTodo);
        router.put('/:id', todoController.updateTodo);
        router.delete('/:id', todoController.deleteTodo);

        return router;
    }
}