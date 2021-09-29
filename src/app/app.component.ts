import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LovePet';
  Estado:boolean= true
  constructor(
    private router:Router
  ) { }
  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      this.Estado = false
      console.log(this.Estado);
      this.router.navigate(['/login'])
    }
  }
  BtnPerfil(){
    this.router.navigate(['/Usuarios'])
  }
  BtnControl(){
    this.router.navigate(['/Dash/:id'])
  }
  BtnCerrar(){
    localStorage.clear()
    this.router.navigate(['/login'])
    location.reload();
  }
  BtnMascotas(){
    this.router.navigate(['/Mascotas'])
  }
  BtnBlog(){
    this.router.navigate(['/Blog'])
  }

}
