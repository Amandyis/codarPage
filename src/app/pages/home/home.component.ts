import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  telefoneForm: FormGroup;
  erro: boolean = false;

  constructor(private fb: FormBuilder) {
    this.telefoneForm = this.fb.group({
      telefone: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
    });
  }

  ligar() {
    if (this.telefoneForm.get('telefone')?.valid) {
      alert('Ligando para ' + this.telefoneForm.get('telefone')?.value);
    }
    this.telefoneForm.get('telefone')?.reset();
  }
}
