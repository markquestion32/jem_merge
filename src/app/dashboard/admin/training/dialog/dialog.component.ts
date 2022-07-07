import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  sessionForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: ApiService,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.sessionForm = this.formBuilder.group({
      sessionName: ['', Validators.required],
      sessionTrainer: ['', Validators.required],
      sessionField: ['', Validators.required],
      sessiondate: ['', Validators.required]
    });
    
  }
  addSession() {
    console.log("hello "  + this.sessionForm.value)
    if (this.sessionForm.valid) {
      this.api.postSession(this.sessionForm.value)
        .subscribe({
          next: (res) => {
            alert("session added succeesfully");
            this.sessionForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert("error while adding the session")

          }
        })
    }
  }
}
