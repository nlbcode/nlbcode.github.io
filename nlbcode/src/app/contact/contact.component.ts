import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Contact } from './shared/contact';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model: Contact = new Contact('', '', '', '');
  formContact: FormGroup;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
  constructor(private _formbuilder: FormBuilder) {
    this.formContact = _formbuilder.group({
      'name': new FormControl(this.model.name, [
        Validators.required,

      ]),
      'email': new FormControl(this.model.email, [Validators.required, Validators.email]),
      'subject': new FormControl(this.model.subject, [Validators.required]),
      'message': new FormControl(this.model.message, [Validators.required]),

    });
  }
  // private _builderForm(){

  // }
  ngOnInit() {

  }
  OnSubmit(form: Contact){
    console.log('you submitted value:', form);

  }
}


