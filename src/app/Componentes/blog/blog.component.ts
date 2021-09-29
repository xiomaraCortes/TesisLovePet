import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/api-rest.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  arrayblog:any = []
  searchText
  constructor(
    private api:ApiRestService
  ) { }

  ngOnInit(): void {
    this.Inicio()
  }

  Inicio(){
    this.api.Post("Blog",{
      "token":localStorage.getItem("token")
    }).subscribe(data=>{
       console.log(data);
       this.arrayblog = data
    },err=>{
       console.log(err);
    })
  }
  link(a){
    window.open(a, "_blank");
  }
}
