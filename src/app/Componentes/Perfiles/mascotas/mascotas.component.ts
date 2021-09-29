import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiRestService } from 'src/app/api-rest.service';
import { ToastrService } from "ngx-toastr";
import { MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ModalAgregarNovedadComponent } from '../../Modales/modal-agregar-novedad/modal-agregar-novedad.component';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
  // Variables de informacion mascotas
  raidnovedades:any=[]
  id = this.activateroute.snapshot.paramMap.get("id");
  estado:boolean=true
  Eeditar
  Eguardar
  raidcolores
  raidrazas
  nombre
  documento
  fechanacimiento
  raza
  genero
  color
  estatura
  peso
  barrio
  direccion
  edad
  fecha:any =this.date.transform(new Date(), 'yyyy')
  constructor(
    private date: DatePipe,
    private api: ApiRestService,
    private msn :ToastrService,
    private activateroute: ActivatedRoute,
    private router:Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.Inicio()
  }

  // Verificacion que exista un token y traerme informacionde est
  Inicio(){
    this.api.Get("razas").subscribe(data=>{
      console.log(data);
      this.raidrazas = data
    })
    this.api.Get("colores").subscribe(data=>{
      console.log(data);
      this.raidcolores = data
    })
    this.api.Post("BuscarMascota",{
      "token":localStorage.getItem("token"),
      "IdMascota": this.id
    }).subscribe(data=>{
      console.log(data);
      if(data != null){
        this.nombre= data[0]["Nombre"]
        this.documento= data[0]["Documento"]
        this.fechanacimiento= data[0]["Fechanacimiento"]
        this.raza= data[0]["Raza"]
        this.genero= data[0]["Genero"]
        this.color= data[0]["Color"]
        this.estatura= data[0]["Altura"]
        this.peso= data[0]["Peso"]
        var fe1:any =this.date.transform(this.fechanacimiento, 'yyyy')
        this.edad = this.fecha - fe1
        this.barrio = data[0]["Barrio"]
        this.direccion = data[0]["Direccion"]
      }else{

      }
    })
  }
// Funcion editar
  Editar(){
    this.estado = false
    this.Eeditar = true
    this.Eguardar = true
  }

  tabClick(event){
    if(event ==1){
      this.api.Post("ListarNovedad",{
        "token":localStorage.getItem("token"),
        "IdMascota":this.id
      }).subscribe(data=>{
        console.log(data);
        this.raidnovedades =data
      })
    }

  }
// Funcion Guardar
  Guardar(){
    var json={
      "token":localStorage.getItem("token"),
      "IdMascota":this.id,
      "nombre":this.nombre,
      "fechanaciomiento":this.date.transform(this.fechanacimiento, 'yyyy-MM-dd'),
      "raza":this.raza,
      "genero":this.genero,
      "color":this.color,
      "estatura":this.estatura,
      "peso":this.peso
    }
    this.api.Post("ActualizarMascota",json).subscribe(data=>{
     console.log(data);
     var inf:any = data
     if(inf != null && inf.length == 1){
       this.msn.success("Datos guardados correctamente.")
       this.estado = true
       this.Eeditar = null
       this.Eguardar = null
     }
    })
    this.Inicio()

  }
// Funcion para agregar novedad mascota
  AgregarNov(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data =this.id
    const dialogRef = this.dialog.open(ModalAgregarNovedadComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
