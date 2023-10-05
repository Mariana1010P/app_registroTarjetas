import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/DashboardModule';
import { LoginModule } from './login/login.module';
import { HeaderModule } from './header/header.module';
import { TarjetaModule } from './tarjeta/tarjeta.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    LoginModule,
    HeaderModule,
    TarjetaModule,
    SidenavModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
