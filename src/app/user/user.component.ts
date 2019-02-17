import { Component, OnInit } from '@angular/core';
import { UserService } from './user.services';
import { trigger } from '@angular/animations';
import { fadeIn } from '../animation/fadeIn';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService],
  animations : [
    trigger('fadeIn', fadeIn())
  ]
})

export class UserComponent implements OnInit {
  dataLoaded = false;
  repodata : []
  user : {name : string, email: string} = {name : null, email : null }
  constructor(private userService : UserService) { 
    
  }

  ngOnInit() {
    this.userService.fetchData().subscribe((res : {userdata : {name : string, email: string}, repodata:[]}) => {
      this.repodata = res.repodata;
      this.user = res.userdata;
      this.dataLoaded = true;
    })
  }

}
