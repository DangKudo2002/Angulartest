import { HttpServerService } from './../services/http-server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit{
    constructor( private HttpServerService: HttpServerService){}

    ngOnInit(): void{
      const payload = { body: 'Xin chao', postId: 1};
      this.HttpServerService.postComments(payload).subscribe(data => {
        console.log('postComments = ', data);
       
      })
    }
}
