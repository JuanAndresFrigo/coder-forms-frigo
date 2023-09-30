import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/interfaces/studen.interface';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss'],
})
export class FormCursoComponent {
  public studentForm: FormGroup = new FormGroup({});
  public showErrors: boolean = false;

  @Output() public studentOut = new EventEmitter<Student>();

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  private buildForm(): void {
    this.studentForm = this.formBuilder.group({
      controlName: ['', Validators.required],
      controlLastName: ['', Validators.required],
      controlSubject: ['', Validators.required],
      controlNote: ['', Validators.required],
      controlCondition: ['', Validators.required],
    });
  }

  private get isStudentFormValid(): boolean {
    return this.studentForm.valid;
  }

  private resetForm(): void {
    this.studentForm.reset();
  }

  public isControlValid(control: string): boolean {
    return this.studentForm.controls[`${control}`].valid;
  }

  public onSubmit(): void {
    if (this.isStudentFormValid) {
      this.showErrors = false;
      console.log('valido');

      const newStudent: Student = {
        name: this.studentForm.controls['controlName'].value,
        lastName: this.studentForm.controls['controlLastName'].value,
        subject: this.studentForm.controls['controlSubject'].value,
        finalNote: this.studentForm.controls['controlNote'].value,
        condition: this.studentForm.controls['controlCondition'].value,
      };

      this.studentOut.emit(newStudent);
      this.resetForm();
    } else {
      this.showErrors = true;
    }
  }
}
