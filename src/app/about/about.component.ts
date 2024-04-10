import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public loginName = "user";
  constructor( private common: CommonService){}
  public dem = 0;
  public counterBinhPhuong = 0;

  ngOninit(): void{
    this.dem = this.common.dem;
    this.counterBinhPhuong = this.common.BinhPhuong(this.dem);
    this.common.dem++;
  }
}
