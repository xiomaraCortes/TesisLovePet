import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/api-rest.service';

@Component({
  selector: 'app-veterinarias',
  templateUrl: './veterinarias.component.html',
  styleUrls: ['./veterinarias.component.css']
})
export class VeterinariasComponent implements OnInit {
  searchText
  veterinarias:any = []
  constructor(
    private api:ApiRestService
  ) { }

  ngOnInit(): void {
    this.Inicio()
  }
  Inicio(){
    this.api.Post("Veterinarias",{
      "token":localStorage.getItem("token")
    }).subscribe(data=>{
      console.log(data);
      this.veterinarias = data
    })
  }

  ubicacion(ubi){
    console.log("ubicacion");
    window.open(ubi, "_blank");
  }

}
