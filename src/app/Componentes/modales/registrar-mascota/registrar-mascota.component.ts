import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiRestService } from 'src/app/api-rest.service';
import { ToastrService } from "ngx-toastr";
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-registrar-mascota',
  templateUrl: './registrar-mascota.component.html',
  styleUrls: ['./registrar-mascota.component.css']
})
export class RegistrarMascotaComponent implements OnInit {
  raidcolores
  raidrazas
  nombre
  documento
  fechanaciomiento
  raza
  genero
  color
  estatura
  peso
  barrio
  direccion
  constructor(
    public dialogRef: MatDialogRef<RegistrarMascotaComponent>,
    private date: DatePipe,
    private api: ApiRestService,
    private msn :ToastrService
  ) { }

  ngOnInit(): void {
    this.Inicio()
  }

  Inicio(){
    this.api.Get("razas").subscribe(data=>{
      console.log(data);
      this.raidrazas = data
    })
    this.api.Get("colores").subscribe(data=>{
      console.log(data);
      this.raidcolores = data
    })
  }

  // Funcion guardar datos modal
  Guardar(){
    var json={
      "token":localStorage.getItem("token"),
      "nombre":this.nombre,
      "documento":this.documento,
      "fechanaciomiento":this.date.transform(this.fechanaciomiento, 'yyyy-MM-dd'),
      "raza":this.raza,
      "genero":this.genero,
      "color":this.color,
      "estatura":this.estatura,
      "peso":this.peso
    }

    this.api.Post("NuevaMascota",json).subscribe(data=>{
      var mas:any =data
      if(mas != null && mas.length ==1){
        this.msn.success("Mascota registrada con éxito.","¡Atención!")
        this.dialogRef.close();
      }else{
        this.msn.warning("Error al registrar la mascota, Contáctese con un administrador","¡Atención!")
      }

    })


  }
}
