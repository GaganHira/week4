import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccontComponent } from './accont/accont.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
{path: 'login', component: LoginComponent},
{path: 'accont/:valid', component: AccontComponent}, 
{path:'login/:valid:', component: AccontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
