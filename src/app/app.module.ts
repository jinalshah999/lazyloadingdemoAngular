import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routingArr } from './app.routing';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    routingArr

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
