import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm!: FormGroup;
  currentUserId: any;
  currentAction: any;
  constructor( private formBuilder:FormBuilder, private userService:UserService, private route:Router) { }

  ngOnInit(): void {
    this.initForm();
    this.currentUserId=localStorage.getItem('CurrentUserId');
    this.currentAction=localStorage.getItem('action');

    if(this.currentAction==='UPDATE'){
      this.getUserDataById(this.currentUserId);
    }
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      _id:[''],
      name: [''],
      position: [''],
      office: [''],
      salary: ['']
    });
  }

  getUserDataById(userId:any){

  }

  onFormSubmit(){
    //console.log("Form Data" + JSON.stringify(this.userForm.value));

    this.userService.postUserData(this.userForm.getRawValue()).subscribe(data=>{
      let response:any=data;
      if(response.Errorid==0){
        console.log(response);
        this.userForm.reset();
      }else{
        //console.log(response);
      }
    });
  }

  navigateToList(){
    this.route.navigate(['/manage-user']);
  }

}
