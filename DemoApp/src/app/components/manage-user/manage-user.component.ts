import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  users: IUser[]=[];

  constructor(private route:Router, private userService:UserService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  navigateToList(){
    this.route.navigate(['/create-user']);
  }

  getUserList(){
    this.userService.getUserList().subscribe(data=>{
      this.users=data;
    });

  }

  updateUser(_id:any){
    localStorage.setItem('CurrentUserId', _id);
    localStorage.setItem('action', 'UPDATE')
    this.route.navigate(['/create-user']);
  }

}
