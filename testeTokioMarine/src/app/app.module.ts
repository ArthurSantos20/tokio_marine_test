import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Routing,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBn0YjHeoS_qBsHh_Y7sd2zBkeG6oHnC2Y'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
