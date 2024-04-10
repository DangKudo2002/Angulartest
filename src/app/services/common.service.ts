import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public dem = 0;
  constructor() { }

  public BinhPhuong(n: number): number{
    return n * n;
  }
  public getCounter(): number{
    return this.dem;
  }
  public setCounter(n: number): void{
    this.dem = n;
  }

  public submitData(data: any): void{
    console.log('Gui data len server. Data = ', data);

  }
}