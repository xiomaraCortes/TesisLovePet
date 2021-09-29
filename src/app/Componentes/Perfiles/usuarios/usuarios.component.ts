import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ModalRegistroUsuComponent } from '../../Modales/modal-registro-usu/modal-registro-usu.component';
import { ApiRestService } from 'src/app/api-rest.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from "ngx-toastr";

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  // Variables informacion ususario
  raidbarrios:any=[]
  raiddocumentos:any=[]
  Estado:boolean = true
  Eeditar
  Eguardar
  barrio
  barrio2
  Apellidos
  Nombres
  TipoDoc
  documento
  fechanacimiento
  email
  direccion
  pass ="ninguna"
  pass2 ="ninguna"
  idgenero
  Telefono
  Celular
  genero
  data:any=[]
  constructor(
    private router:Router,
    public dialog: MatDialog,
    private api: ApiRestService,
    private date: DatePipe,
    private msn :ToastrService,
  ) { }

  ngOnInit(): void {
    this.Eguardar = true
    this.Inicio()
  }
// Traer informacion segun el token
  Inicio(){
    this.api.Get("barrios").subscribe(data=>{
      this.raidbarrios=data
    })
    this.api.Get("tipodoc").subscribe(data=>{
      this.raiddocumentos=data
    })
    this.data= JSON.parse(localStorage.getItem("user"))
    console.log(this.data);
    this.Nombres = this.data["Nombre"]
    this.Apellidos = this.data["Apellidos"]
    this.TipoDoc = this.data["Id_Tipo_Documento"]
    this.documento = this.data["N_Identidicacion"]
    this.fechanacimiento = this.data["FechaNacimiento"]
    this.email = this.data["Email"]
    this.Telefono = this.data["Telefono"]
    this.Celular = this.data["Celular"]
    this.barrio = this.data["IdBarrio"]
    this.direccion = this.data["Direccion"]
    this.barrio2 = this.data["Barrio"]
  }
  // Funcion boton editar
  Editar(){
    this.Eguardar = null
    this.Eeditar = true
    this.Estado = false
  }
  // Funcion boton guardar
  Guardar(){
    var json ={
      "token":localStorage.getItem("token"),
      "Email":this.email,
      "Pass":this.pass,
      "N_Identificacion":this.documento,
      "Id_Tipo_Documento":this.TipoDoc,
      "Nombre":this.Nombres,
      "Apellidos":this.Apellidos,
      "Telefono":this.Telefono,
      "Celular":this.Celular,
      "IdBarrio":this.barrio,
      "Direccion":this.direccion,
      "FechaNacimiento":this.date.transform(this.fechanacimiento, 'yyyy-MM-dd'),
      "IdGenero":this.genero
    }
    if(this.pass == "ninguna" && this.pass2 == "ninguna"){
      this.api.Post("ActualizarUsuario",json).subscribe(data=>{
        console.log(data);
        localStorage.setItem("user",JSON.stringify(data[0]))
        this.Eguardar = true
        this.Eeditar = null
        this.Estado = true
        this.msn.success("Datos cambiados con exito.")
      },err=>{
        this.msn.error(err.error,"Atención!")
      })
    }else if(this.pass == this.pass2 && this.pass != "ninguna"){
      this.api.Post("ActualizarUsuarioPass",json).subscribe(data=>{
        console.log(data);
        localStorage.setItem("user",JSON.stringify(data[0]))
        this.Eguardar = true
        this.Eeditar = null
        this.Estado = true
        this.msn.success("Datos cambiados con exito.")
      },err=>{
        this.msn.error(err.error,"Atención!")
      })
    }
    location.reload()
  }
}
