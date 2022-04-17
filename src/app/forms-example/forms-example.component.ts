import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.css']
})
export class FormsExampleComponent implements OnInit {

  contactForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });
  }

  sendMessage() {
    // if (this.contactForm.invalid) {
    //   return;
    // }
    var name = this.contactForm.get("name").value;
    var email = this.contactForm.get("email").value;
    var message = this.contactForm.get("message").value;
    console.log(name);
    console.log(email);
    console.log(message);
  }


}
