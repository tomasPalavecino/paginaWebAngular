import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

formularioContacto: FormGroup;
tipoDni: string = 'DNI';
usuarioActivo: any = {
  name: 'Pedro',
  apellido: 'Pepe',
  dni: '123485',
}

constructor(private form: FormBuilder){
  this.formularioContacto = this.form.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    apellido: [''],
    dni: [''],
    email: ['', [Validators.required, Validators.email]],
    tipoDni: [''],
  });
}

ngOnInit(): void {
  this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value =>{
    this.tipoDni = value;
  })
  this.formularioContacto.get('apellido')?.setValidators([Validators.required, Validators.minLength(3)]);
  this.formularioContacto.get('dni')?.setValidators([Validators.required, Validators.minLength(3)]);
  this.formularioContacto.patchValue({
    name: this.usuarioActivo.name,
    apellido: this.usuarioActivo.apellido,
    dni: this.usuarioActivo.dni,
  });
  this.formularioContacto.get('name')?.disable();
  this.formularioContacto.get('apellido')?.disable();
  this.formularioContacto.get('dni')?.disable();
}

hasErrors(controlName: string, errorType: string){
  return this.formularioContacto.get(controlName)?.hasError(errorType) &&
  this.formularioContacto.get(controlName)?.touched;
}

  enviar(){
    console.log(this.formularioContacto);
  }
}
