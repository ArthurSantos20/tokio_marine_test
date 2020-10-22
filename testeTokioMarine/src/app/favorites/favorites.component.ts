import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

	list: any;

  	constructor() { }

  	ngOnInit(): void {
  		this.list = JSON.parse(sessionStorage.getItem('favoritesList'));
  	}

  	favoriteUser(user) {
  		const objIndex = this.list.findIndex((obj => obj.id == user.id));
		this.list[objIndex].favorite = !this.list[objIndex].favorite;
		
		this.list.splice(objIndex, 1);

		var favorites_json = JSON.stringify(this.list);
		sessionStorage.setItem('favoritesList', favorites_json);
  	}

  	openDetails(user) {
  		this.selectedUser = user;
  		if(user.address){
  			this.lat = Number(user.address.geo.lat);
	  		this.lng = Number(user.address.geo.lng);
	  		this.zoom = 15;
  		}
  	}
}