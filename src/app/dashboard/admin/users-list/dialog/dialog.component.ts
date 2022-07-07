import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../../admin.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {


  editUser!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogComponent>,
    private adminService : AdminService 
    ) { }


  ngOnInit(): void {
    this.editUser = this.formBuilder.group({
      name: ['whyy'],
      lastname: ['whyy'],
      email: ['whyy'],
      phone: ['whyy'],
      role: ['whyy yyyyyyyyyyyyyy']
  });

      // this.editUser = this.formBuilder.group({
      //             name: ['name'],
      //             lastname: ['lastname'],
      //             email: ['email'],
      //             phone: ['phone'],
      //             role: ['role'],
      //         });
     
    
    this.adminService.userSelected
          .subscribe(       
            (user:User)=>{
                console.log(user)

                  this.editUser.controls['name'].setValue(user.name);
                  this.editUser.controls['lastname'].setValue(user.lastName);
                  this.editUser.controls['email'].setValue(user.email);
                  this.editUser.controls['phone'].setValue(user.phone);
                  this.editUser.controls['role'].setValue(user.role);
                

             // console.log(user.email , user.name)
             this.editUser = this.formBuilder.group({
              name: [user.name],
              lastname: [user.lastName],
              email: ['whyy'],
              phone: ['whyy'],
              role: ['whyy yyyyyyyyyyyyyy']
          });
              
            }
          )
        

        
}

  update() {
    console.log("hello "  + this.editUser.value)
    this.editUser.reset();
    this.dialogRef.close('save');
  }
  
}
