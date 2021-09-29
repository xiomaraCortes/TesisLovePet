import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from './Componentes/Perfiles/usuarios/usuarios.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ModalRegistroUsuComponent } from './Componentes/Modales/modal-registro-usu/modal-registro-usu.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from './Modulos/sidenav/sidenav.component';
import {MatMenuModule} from '@angular/material/menu';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import { MascotasComponent } from './Componentes/Perfiles/mascotas/mascotas.component';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule  } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {DatePipe} from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { RegistrarMascotaComponent } from './Componentes/Modales/registrar-mascota/registrar-mascota.component';
import { ModalAgregarNovedadComponent } from './Componentes/Modales/modal-agregar-novedad/modal-agregar-novedad.component';
import { ChartsModule } from 'ng2-charts';
import { VeterinariasComponent } from './Componentes/veterinarias/veterinarias.component';
import { BlogComponent } from './Componentes/blog/blog.component';
import { FiltroPipe } from './filtro.pipe';
import { NotificacionesComponent } from './Componentes/notificaciones/notificaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    LoginComponent,
    ModalRegistroUsuComponent,
    SidenavComponent,
    DashboardComponent,
    MascotasComponent,
    RegistrarMascotaComponent,
    ModalAgregarNovedadComponent,
    VeterinariasComponent,
    BlogComponent,
    FiltroPipe,
    NotificacionesComponent,
  ],
  imports: [
    ChartsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    MatBadgeModule,
    MatDividerModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton:true,
      progressAnimation:'decreasing',

    })
  ],
  providers: [
    MatNativeDateModule,
    DatePipe
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
