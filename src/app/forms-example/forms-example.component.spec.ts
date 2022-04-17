import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';

import { FormsExampleComponent } from './forms-example.component';

fdescribe('FormsExampleComponent', () => {
  let component: FormsExampleComponent;
  let fixture: ComponentFixture<FormsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsExampleComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form using formbuilder', () => {
    expect(component.contactForm instanceof FormGroup).toBeTruthy();
  });

  it('should require valid email', () => {
    component.contactForm.setValue({
      "name": "", 
      "email": "invalidemail", 
      "message": ""
    });
    expect(component.contactForm.valid).toEqual(false);
  });

  it('should be valid if form value is valid', () => {
    component.contactForm.setValue({
      "name": "guhan", 
      "email": "guhanganesan@gmail.com", 
      "message": "Email me a soda, please."
    });
    expect(component.contactForm.valid).toEqual(true);
  });


});
