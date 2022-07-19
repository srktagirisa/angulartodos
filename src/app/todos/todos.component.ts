import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] =[
    {task: 'Wash cloths', completed: true},
    {task: 'Fold cloths', completed: true},
    {task: 'Iron cloths', completed: false},
    {task: 'Relax', completed: false},
    {task: 'Go walking', completed: true},
    {task: 'Prepare food', completed: false}
  ]

  formTodo: Todo = {
    task: '', completed: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  completeTask(index: number) {
    this.todos[index].completed = true;
  }

  addTask(addForm: NgForm): void {

    this.formTodo.task = addForm.form.value.task;
    this.formTodo.completed = addForm.form.value.completed;
    let newObj = { ...this.formTodo};

    this.todos.push(newObj);
  }

}
