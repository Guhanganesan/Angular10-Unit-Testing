import { Component } from '@angular/core';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytestapp';
  constructor(private authService : AuthenticationService)
  {
     this.authService.authenticate();
  }
  
  getSalarySlip()
  {
     if(this.authService.checkAthentication()){
       return "Salary Slip";
     }
     return "Not authenticated";
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


}
