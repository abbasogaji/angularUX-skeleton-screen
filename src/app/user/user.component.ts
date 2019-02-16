import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  dataLoaded = false;
  constructor() { }

  ngOnInit() {
    setTimeout( () => {
        this.dataLoaded = true;
    }, 2000)
  }

}
