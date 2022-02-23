import { ApiUsuarioService } from './services/api-usuario.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Home2Component } from './components/home2/home2.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OffCanvasMenuComponent } from './components/off-canvas-menu/off-canvas-menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home2Component,
    LoginComponent,
    CadastroComponent,
    NavBarComponent,
    OffCanvasMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiUsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
