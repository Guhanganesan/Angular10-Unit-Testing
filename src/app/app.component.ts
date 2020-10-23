import { Component } from '@angular/core';
import {AuthenticationService} from './authentication.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytestapp';
  salSlip : string;
  constructor(private authService : AuthenticationService)
  {
     this.authService.authenticate();
  }
  
  getSalarySlip()
  {
     if(this.authService.checkAthentication()){
      this.salSlip = "Salary Slip";
     }
     else{
      this.salSlip = "Not authenticated";
     } 
  }

  checkAge(age:number)
  {
    if(age>=18){
      return age;
    }
    else{
      return 0;
    }
  }

  countClicks:number = 0;
  addClick(){
   this.countClicks++;
  }

  removeClick(){
    this.countClicks--;
  }

}
