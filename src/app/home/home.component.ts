import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name = "Đăng";
  public age = 22;
  public traicay = ['Táo', 'Cam', 'Dâu tây'];
  public traicay1 = [
    { Ten: 'táo', gia: 12, haGia: true },
    { Ten: 'Cam', gia: -22, haGia: false },
    { Ten: 'Dâu tây', gia: 32, haGia: true }
  ]
  public district: string[] = [];
  public cities = [
    { city: 'Chọn thành phố', district: ['Quận / Huyện'] },
    {
      city: 'Thanh Hóa',
      district: [
        'Huyện Nông Cống',
        'Huyện Hoằng Hóa',
        'Huyện Như Thanh',
        'Huyện Triệu sơn',
        'Huyện Cẩm thủy',
        'Huyện Nga Sơn',
        'Huyện Quảng Xương',
      ],
    },
    {
      city: 'Hà Nội',
      district: [
        'Huyện Ba Vì',
        'Huyện Chương Mỹ',
        'Huyện Đan Phuong',
        'Huyện Đông Anh',
        'Huyện Gia Lâm',
        'Huyện Hoài Đức',
        'Huyện Mê Linh',
      ],
    }
  ]
  constructor( private common: CommonService){}
  public dem = 0;
  public couterBinhphuong = 0;
  ngOninit(): void{
    console.log("Trai nay la:", this.traicay);
    console.log("City:", this.cities);
    this.dem = this.common.dem;
    this.couterBinhphuong = this.common.BinhPhuong(this.dem);
    this.common.dem++;
  }

  public Onchange(event: any): void {
    const city = event.target.value;
    if (!city) {
      return;
    }
    //cach 1
    // const search = this.cities.filter((data) => data.city === city);
    // console.log('search', search);
    // if (search && search.length > 0) {
    //   this.district = search[0].district;
    // }
    //Cach 2
    this.district = this.cities.find(data => data.city === city)?.district || [];
  }

  public resetName(): void {
    console.log('Reset name');
    this.name = '';
  }
}