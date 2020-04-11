import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Task } from './task'

@Injectable()
export class TasksService {
    constructor(private http: HttpClient) { }

    getTasks (owner_id: number): Observable<Task[]> {
      const url = `api/tasks/${owner_id}`
        return this.http.get<Task[]>(url)
    }

    addTask (task: Task): Observable<Task> {
        console.log(task)
        return this.http.post<Task>('api/tasks', task)//has 2 parameters from add (component)
    }

    deleteTask (id: number): Observable<{}> {
        const url = `api/tasks/${id}`
        return this.http.delete(url)
    }

    updateTask (task: Task): Observable<{}> {
        const url = `api/tasks/${task.id}`
        return this.http.put<Task>(url, task)
    }
}
