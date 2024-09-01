import { TestBed } from "@angular/core/testing";
import { CalcService } from "./calc.service"
import { SharedService } from "./shared.service";

let shar : SharedService;
let calc : CalcService;

describe ("calc service",()=>{
  beforeEach(()=>
    {

      shar=jasmine.createSpyObj('SharedService',['sharedservicefunction']);
      TestBed.configureTestingModule({
        providers:[CalcService,{
          provide:SharedService,useValue:shar
        }]
      });

    shar=TestBed.inject(SharedService);
    calc=TestBed.inject(CalcService);
    });
  it('should multiply two numbers',()=>{
    const res=calc.multiply(2,5);
    expect(res).toBe(10);
  })

  it('should add two numbers',()=>{

    const res=calc.add(2,5);
    expect(res).toBe(7);
  })

  // it('should check whether shared function is called',()=>{
  //   const shar=new SharedService()
  //   spyOn(shar,"sharedservicefunction");
  //   const calc=new CalcService(shar);
  //   const res=calc.multiply(2,5);
  //   expect(shar.sharedservicefunction).toHaveBeenCalled();
  // })

  //mock the service
  it("should call the service",()=>{
    const shared=jasmine.createSpyObj("SharedService",['sharedservicefunction']);
    const calc=new CalcService(shared);
    const res=calc.multiply(2,5);
    expect(res).toBe(10);
  })
})
