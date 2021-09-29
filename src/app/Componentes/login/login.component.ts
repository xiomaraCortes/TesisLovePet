import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ModalRegistroUsuComponent } from '../Modales/modal-registro-usu/modal-registro-usu.component';
import { ApiRestService } from 'src/app/api-rest.service';
import { ToastrService } from "ngx-toastr";


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email
  pass
  constructor(
    private router:Router,
    public dialog: MatDialog,
    private api:ApiRestService,
    private msn :ToastrService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem("token") ){
      var user:any = JSON.parse(localStorage.getItem("user"))
      this.router.navigate(['/Dash/'+user["IdUsuario"]])
    }
  }
// Funcion para el login
  Login(){
    this.api.Post("auth",{
      "email":this.email,
      "pass":this.pass
    }).subscribe(data=>{
      console.log(data);
      localStorage.setItem("token",data[0]["token"])
      localStorage.setItem("user",JSON.stringify(data[1][0]))
      var user:any = JSON.parse(localStorage.getItem("user"))
      this.router.navigate(['/Dash/'+user["IdUsuario"]])
      location.reload();
    },err=>{
      console.log(err);

      this.msn.warning(err.error,"Atención!")
    })

  }
  //Funcion crear un usuario
  Crear(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(ModalRegistroUsuComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
