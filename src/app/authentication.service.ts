import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate()
  {
    localStorage.setItem('name','Guhan Ganesan');
  }

  checkAthentication()
  {
    return (localStorage.getItem('name') === 'Guhan Ganesan');
  }
  
}
