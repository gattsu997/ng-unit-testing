import { TestBed } from '@angular/core/testing';

import { DataServiceService } from './data-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Data } from './home/mockdata';

describe('DataServiceService', () => {
  let service: DataServiceService;
  let testingController : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports :[HttpClientTestingModule],
      providers: [DataServiceService]
    });

    service = TestBed.inject(DataServiceService);
    testingController=TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users',()=>{
    service.getAllUsers().subscribe((users:any)=>{
      expect(users).toBeTruthy();
    });
    const mockreq= testingController.expectOne('api/users');
    expect(mockreq.request.method).toEqual('GET');
    mockreq.flush(Object.values(Data));
  })
});
