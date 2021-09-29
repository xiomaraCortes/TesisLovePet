import { Component, OnInit,Inject } from '@angular/core';
import { ApiRestService } from 'src/app/api-rest.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MascotasComponent } from '../../Perfiles/mascotas/mascotas.component';
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-modal-agregar-novedad',
  templateUrl: './modal-agregar-novedad.component.html',
  styleUrls: ['./modal-agregar-novedad.component.css']
})
export class ModalAgregarNovedadComponent implements OnInit {
  raidnovedades
  novedad
  descripcion
  observacion
  constructor(
    private api: ApiRestService,
    private activateroute: ActivatedRoute,
    private msn :ToastrService,
    public dialogRef: MatDialogRef<ModalAgregarNovedadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MascotasComponent
  ) { }

  ngOnInit(): void {
    this.Inicio()
    console.log(this.data);

  }
  Inicio(){
    this.api.Post("TipoNovedades",{
      "token":localStorage.getItem("token"),
    }).subscribe(data=>{
      console.log(data);
      this.raidnovedades=data
    })
  }
  // Funcion guardar datos
  Guardar(){
    var json ={
      "token":localStorage.getItem("token"),
      "IdMascota":this.data,
      "IdNovedad":this.novedad,
      "Descripcion":this.descripcion,
      "Observacion":this.observacion
    }
    this.api.Post("NuevaNovedad",json).subscribe(data=>{
      var nov:any=data
      if(nov != null && nov.length ==1){
        this.msn.success("Novedad generada con exito.")
        this.dialogRef.close();
      }
    },err=>{
      this.msn.warning(err.error,"Atención!")
    })
  }
}
