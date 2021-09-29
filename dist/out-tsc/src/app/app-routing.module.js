import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { UsuariosComponent } from './Componentes/Perfiles/usuarios/usuarios.component';
import { ModalRegistroUsuComponent } from './Componentes/Modales/modal-registro-usu/modal-registro-usu.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { MascotasComponent } from './Componentes/Perfiles/mascotas/mascotas.component';
import { RegistrarMascotaComponent } from './Componentes/Modales/registrar-mascota/registrar-mascota.component';
import { ModalAgregarNovedadComponent } from './Componentes/Modales/modal-agregar-novedad/modal-agregar-novedad.component';
import { VeterinariasComponent } from './Componentes/veterinarias/veterinarias.component';
import { BlogComponent } from './Componentes/blog/blog.component';
const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'Usuarios', component: UsuariosComponent },
    { path: 'ModalUsu', component: ModalRegistroUsuComponent },
    { path: 'Dash/:id', component: DashboardComponent },
    { path: 'Mascotas/:id', component: MascotasComponent },
    { path: 'RegistrarMascota', component: RegistrarMascotaComponent },
    { path: 'AgregarNov', component: ModalAgregarNovedadComponent },
    { path: 'Vete', component: VeterinariasComponent },
    { path: 'Blog', component: BlogComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map