import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDatasoruce } from "../../domain";
import { TodoDatasoruceImpl } from "../../infrastructure/datasoruce/todo.datasouirce.impl";
import { TodoRepositoryImpl } from "../../infrastructure/repositories/todo.repository.impl";


export class TodoRoutes {
    static get routes(): Router {
        const router = Router();

        const todoDatasource = new TodoDatasoruceImpl();
        const todoRepository = new TodoRepositoryImpl(todoDatasource);
        const todoController = new TodosController(todoRepository);
    
        // router.get('/api/todos', (req, res) => todoController.getTodos(req, res));    //* Esto es lo mismo
        router.get('/', todoController.getTodos);  // ? Se manda la referencia de la funcion
        router.get('/:id', todoController.getTodoById);
        router.post('/', todoController.createTodo);
        router.put('/:id', todoController.updateTodo);
        router.delete('/:id', todoController.deleteTodo);

        return router;
    }
}