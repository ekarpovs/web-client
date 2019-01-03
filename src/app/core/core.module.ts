import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaterialModule } from '../material/material.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CoreComponent } from './core.component';
import { JwtService } from './services/jwt.service';
import { CanActivateAutGuard } from './guards/can-activate-aut.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent,
    HomePageComponent,
    CoreComponent
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CoreComponent
  ],
  providers: [
    JwtService,
    CanActivateAutGuard
  ]
})
export class CoreModule { }
