import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ServiceExampleComponent } from './service-example.component';

import { DataService } from '../../data.service';
import {GetAllData} from '../../post.model';

describe('ServiceExampleComponent', () => {
  let component: ServiceExampleComponent;
  let fixture: ComponentFixture<ServiceExampleComponent>;
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceExampleComponent ],
      imports:[HttpClientModule, HttpClientTestingModule],
      providers: [DataService]
    })
    .compileComponents();
    service = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  }); 

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //-----------------Service Test --------------///

    it('should be created', () => {
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

      service.getPostData().subscribe(posts => {
          expect(posts.length).toBe(2);
          expect(posts).toEqual(dummyData);
      });
    });


    describe('Test using Http Testing Controller', ()=>{
      it('be able to retrieve posts from the API bia GET', () => {
        const dummyPosts: GetAllData[] = [{
            userId: '1',
            id: 1,
            body: 'Hello World',
            title: 'testing Angular'
            }, {
            userId: '2',
            id: 2,
            body: 'Hello World2',
            title: 'testing Angular2'
        }];

        const request = httpMock.expectOne(`${service.ROOT_URl}/posts`);
        expect(request.request.method).toBe('GET');
        request.flush(dummyPosts);
      });

      afterEach(() => {
        httpMock.verify();
      });
    })
    
});
