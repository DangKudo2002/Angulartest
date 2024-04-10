import { HttpServerService } from './../services/http-server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.scss']
})
export class GetdataComponent implements OnInit{

  constructor( private HttpServerService: HttpServerService) {}

  public ngOnInit(): void{
    this.HttpServerService.getComments().subscribe((data) => {
      console.log('getComments = ', data);     
    })
    this.HttpServerService.getRandomUsers(5).subscribe((data) => {
      console.log('getRandomUsers = ', data.results);     
    })
  }
}
