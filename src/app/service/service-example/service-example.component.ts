import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent implements OnInit {

  constructor(private _http: DataService) { }

  ngOnInit(): void {
    this.getAPIData();
  }

  getAPIData(){
    this._http.getPostData().subscribe(val =>{
      console.log(val);
    })
  }

}
