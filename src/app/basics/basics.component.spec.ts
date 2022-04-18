import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser'
import { BasicsComponent } from './basics.component';

describe('BasicsComponent', () => {
  let component: BasicsComponent;
  let fixture: ComponentFixture<BasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicsComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test h1 tag element', ()=>{
   const complied =  fixture.debugElement.nativeElement;
   expect(complied.querySelector('h2').textContent).toContain("Basics");

    // Using By 
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('h2'));
    expect(de.nativeElement.textContent).toEqual('Basics'); 
  })

  it('should bind input text value to Component property', () => {
    const hostElement = fixture.nativeElement;
    //query to get input by id
    const nameInput: HTMLInputElement = hostElement.querySelector('#name');
    const ageInput: HTMLInputElement = hostElement.querySelector('#age');

    fixture.detectChanges();

    // set value to input 
    nameInput.value = 'Guhan';
    ageInput.value = '30';  

    nameInput.dispatchEvent(new Event('input'));
    ageInput.dispatchEvent(new Event('input'));

    expect(component.name).toBe('Guhan');
    expect(component.age).toBe('30');
  });

  it('should bind input text value to Component property using textcontent', () => {
    const hostElement = fixture.nativeElement;
    //query to get input by id
    const nameInput: HTMLInputElement = hostElement.querySelector('#name');
    const ageInput: HTMLInputElement = hostElement.querySelector('#age');

    fixture.detectChanges();

    // set value to input 
    nameInput.value = 'Guhan';
    ageInput.value = '30';  

    nameInput.dispatchEvent(new Event('input'));
    ageInput.dispatchEvent(new Event('input'));

    expect(component.name).toBe('Guhan');
    expect(component.age).toBe('30');

    //Test inner html using textContent
    const displayName: HTMLInputElement = hostElement.querySelector('#disp_name');
    const displayAge: HTMLInputElement = hostElement.querySelector('#disp_age');

    fixture.whenStable().then(val => {
      nameInput.value = 'Guhan';
      ageInput.value = '30';

      nameInput.dispatchEvent(new Event('input'));
      ageInput.dispatchEvent(new Event('input'));

      fixture.detectChanges();  
      expect(displayName.textContent).toBe('Guhan');
      expect(displayAge.textContent).toBe('30');
    });
  });


});
