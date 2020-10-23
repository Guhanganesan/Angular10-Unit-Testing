import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytestapp';

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
