import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/api-rest.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from "ngx-toastr";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-modal-registro-usu',
  templateUrl: './modal-registro-usu.component.html',
  styleUrls: ['./modal-registro-usu.component.css']
})
export class ModalRegistroUsuComponent implements OnInit {
  raidbarrios:any=[]
  raiddocumentos:any=[]
  barrio
  Apellidos
  Nombres
  TipoDoc
  documento
  fechanacimiento
  email
  direccion
  pass
  pass2
  idgenero
  Telefono
  Celular
  genero
  constructor(
    public dialogRef: MatDialogRef<ModalRegistroUsuComponent>,
    private api:ApiRestService,
    private date: DatePipe,
    private msn :ToastrService
  ) { }

  ngOnInit() {
    this.inicio()
  }
  inicio(){
    this.api.Get("barrios").subscribe(data=>{
      console.log(data);
      this.raidbarrios=data
    })

    this.api.Get("tipodoc").subscribe(data=>{
      console.log(data);
      this.raiddocumentos=data
    })
  }
// Funcion para guardar información
  Guardar(){
    if(this.pass == this.pass2){
      this.api.Post("CrearUsuario",{
        "email":this.email,
        "pass":this.pass,
        "documento":this.documento,
        "TipoDoc":this.TipoDoc,
        "Nombres":this.Nombres,
        "Apellidos":this.Apellidos,
        "telefono":this.Telefono,
        "Celular":this.Celular,
        "barrio":this.barrio,
        "direccion": this.direccion,
        "fechanacimiento": this.date.transform(this.fechanacimiento, 'yyyy-MM-dd'),
        "idgenero":this.idgenero
      }).subscribe(data=>{
        console.log(data);
        var reg:any = data
        if(data!=null && reg.length ==1){
          console.log("emtra");
          this.dialogRef.close();
          this.msn.success("Usuario registrado con éxito.","¡Atención!")
        }
      })
    }else{
      console.log("error");

        this.msn.warning("Las contraseñas no coinciden, por favor validar la información.","¡Atención!")
    }


  }
}
