import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { ServiceExampleComponent } from './service-example.component';

import { DataService } from '../../data.service';
import {GetAllData} from '../../post.model';

describe('ServiceExampleComponent', () => {
  let component: ServiceExampleComponent;
  let fixture: ComponentFixture<ServiceExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceExampleComponent ],
      imports:[HttpClientModule],
      providers: [DataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //-----------------

    it('should be created', () => {
      const service: DataService = TestBed.get(DataService);
      expect(service).toBeTruthy();
    });

    it('should test GET method', () => {
      const dummyData: GetAllData[] = [{
          userId: '1',
          id: 1,
          body: 'Http Client',
          title: 'Testing Angular Service'
          }, {
          userId: '2',
          id: 2,
          body: 'Hello World2',
          title: 'Testing Angular Services'
      }];

      const service: DataService = TestBed.get(DataService);
      service.getPostData().subscribe(posts => {
          expect(posts.length).toBe(2);
          expect(posts).toEqual(dummyData);
      });
    });


});
