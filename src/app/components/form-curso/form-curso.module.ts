import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCursoComponent } from './form-curso.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormCursoComponent],
  exports: [FormCursoComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class FormCursoModule {}
