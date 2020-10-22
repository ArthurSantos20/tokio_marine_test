import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';

const APP_ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'favoritos', component: FavoritesComponent },
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(APP_ROUTES) ]
})

export class Routing {}