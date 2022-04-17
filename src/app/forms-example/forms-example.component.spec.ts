import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';

import { FormsExampleComponent } from './forms-example.component';

describe('FormsExampleComponent', () => {
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

  it('should check name field', ()=>{
    component.contactForm.get('name').setValue("guhan");
    expect(component.contactForm.get('name').value).toEqual('guhan');
    expect(component.contactForm.controls['name'].value).toEqual('guhan')
  })

  it('should check name field validation', ()=>{
    component.contactForm.get('name').setValue("");
    component.contactForm.controls['name'].touched;
    expect(component.contactForm.controls['name'].errors.required).toEqual(true);
  })

  it('should check email field validation', ()=>{  
    const emailInput = component.contactForm.controls.email;
    expect(emailInput.errors.required).toBeTruthy();
    emailInput.setValue('guhan@gmail.com');
    expect(emailInput.errors).toBeNull();
    emailInput.setValue("testing");
    expect(emailInput.errors).toEqual({email:true});
  })

});
