import { Component } from '@angular/core';
import { Student } from './interfaces/student.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public studentList: Student[] = [];

  public addStudent(student: Student): void {
    this.studentList.push(student);
  }

  public clearTable(): void {
    this.studentList = [];
  }
}
