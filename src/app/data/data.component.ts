import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  userData: any = [];
  fname: any;
  username: any;
  email: any;
  city: any;
  zip: any;
  searchName: any;
  test: any = '1';

  constructor(private _httpClient: HttpClient) {}

  ngOnInit() {}
  showRec() {
    this._httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => {
        this.userData = res;
      });
  }
  removeItem(userRec) {
    this.userData.splice(this.userData.indexOf(userRec), 1);
  }
  addRecord() {
    this.userData.push({
      name: this.fname,
      username: this.username,
      email: this.email,
      address: { city: this.city, zipcode: this.zip },
    });
  }
  searchItem(val) {
    console.log(val);
    let result = [];
    this.userData.forEach((item) => {
      // console.log(item.name);
      if (item.name == val) {
        result.push(item);
      }
    });
    // console.log(result);
    this.userData = result;
  }
}
