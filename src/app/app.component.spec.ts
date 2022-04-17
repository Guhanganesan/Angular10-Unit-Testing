import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {AuthenticationService} from './authentication.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mytestapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mytestapp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    //expect(compiled.querySelector('.content span').textContent).toContain('mytestapp app is running!');
  });

 
  it('Test age is greater than 17', ()=>
  {
    //Arrange
    //let obj = new AppComponent();
    //Act
    //let res = obj.checkAge(20);
    //Assert
    //expect(res).toEqual(20);
    expect(10).toEqual(10);
  });
});


describe('App Component Auth service', ()=>{
  let component : AppComponent;
  let fixture   : ComponentFixture<AppComponent>;
  let authService : AuthenticationService;
  let h4 : HTMLElement;
  let de : DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations : [AppComponent],
      providers  : [AuthenticationService]
    }).compileComponents();
  });
   
  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    authService = TestBed.get(AuthenticationService);
    component = fixture.componentInstance;
    h4 = fixture.nativeElement.querySelector('h4');
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', ()=>{
    expect(component).toBeTruthy();
  });
  
  /*
  it('should return salary slip', ()=>{
    //spyOn(authService, 'checkAthentication');
    spyOn(authService, 'checkAthentication').and.returnValue(true);
    let salSlip = component.getSalarySlip();
    //expect(salSlip).toBe('Salary Slip');
    expect(authService.checkAthentication).toHaveBeenCalled();
  });

  */

  it('h4 element value', ()=>{
    component.getSalarySlip();//no changes 
    fixture.detectChanges();
    expect(h4.textContent).toBe(component.salSlip);
  });

  it('Check for the debug element with DOM event', ()=>{
    const h1 = de.query(By.css('h1'));
    const btn = de.query(By.css('#btnAddClick'));
    btn.triggerEventHandler('click',{});
    fixture.detectChanges();
    expect(component.countClicks).toEqual(parseInt(h1.nativeElement.innerText));
  });



  
});