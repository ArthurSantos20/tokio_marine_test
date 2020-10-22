import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

	userList: any;
	favoritesList: any;
	selectedUser: any;
	lat : any;
	lng: any;
	zoom: any;
  	urlToJson = 'https://jsonplaceholder.typicode.com/users';

  	constructor(public http: HttpClient) { }

  	ngOnInit(): void {
  		this.http.get<any>(this.urlToJson).subscribe(response => {
      		this.userList = response;
      		for(var i = 0; i < this.userList.length; i++){
      			this.userList[i].favorite = false;
      		}
    	});
  	}

  	favoriteUser(user) {
  		const objIndex = this.userList.findIndex((obj => obj.id == user.id));
		this.userList[objIndex].favorite = !this.userList[objIndex].favorite;
		if(!this.favoritesList){
			this.favoritesList = [];
		}
		if(this.userList[objIndex].favorite){
			this.favoritesList.push(this.userList[objIndex]);
		} else {
			const favoriteIndex = this.favoritesList.findIndex((obj => obj.id == this.userList[objIndex].id));
			this.favoritesList.splice(favoriteIndex, 1);
		}

		var favorites_json = JSON.stringify(this.favoritesList);
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
