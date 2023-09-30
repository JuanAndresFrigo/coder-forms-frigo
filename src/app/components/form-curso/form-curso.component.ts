import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss'],
})
export class FormCursoComponent {
  studentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.studentForm = this.formBuilder.group({
      controlName: ['', Validators.required],
      controlLastName: ['', Validators.required],
      controlSubject: ['', Validators.required],
      controlNote: ['', Validators.required],
      controlCondition: ['', Validators.required],
    });
  }
  
  public onSubmit() {}
}
