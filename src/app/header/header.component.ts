import { Component, OnInit, Inject } from '@angular/core';
import { Router} from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { ServiceService } from '../service.service';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public root:Router, public dialog: MatDialog,public gems: ServiceService) { }

home1()
{
  this.gems.gal=false;
  this.root.navigate(['./home'])
}
  about()
{
  this.root.navigate(['./about'])
}
home()
{
  this.root.navigate(['./home'])
}
gall()
{
  this.root.navigate(['./gallery'])
}
  ngOnInit(): void {
   

  }
  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      height: '420px',
      width: '400px',
     
    });
  }


}
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
 
  constructor(public jack: ServiceService,  private formBuilder:FormBuilder,
     public root1:Router, public dialog: MatDialog, public dialogRef: MatDialogRef<DialogDataExampleDialog>, )
   {
    console.log(this.jack.usersDB);
  }
  reaction= this.formBuilder.group({
    id: ['',[Validators.required] ],
    password:['',[Validators.required] ],
  });
  name:any
  pass:any;
  forshowmeaasge=true;
  passwordincrct=false;
  usernameincrct=false;
 
loop()
{
  if(this.reaction.valid)
  {
    this.forshowmeaasge=true;
    this.name=!!this.reaction.value.id? this.reaction.value.id:"";
    this.pass=!!this.reaction.value.password? this.reaction.value.password:"";
  for(let i=0; i<this.jack.usersDB.length; i++)
  {
  

if(this.jack.usersDB[i].userid== this.name)
{
  this.usernameincrct=false;
if(this.jack.usersDB[i].password== this.pass)
{
  this.passwordincrct=false;
  this.jack.gal=true;
  console.log("loginsuccess");
  this.root1.navigate(['./gallery'])
  this.jack.user=this.jack.usersDB[i].username;
  this.dialogRef.close();
  break;
}
else{
  this.passwordincrct=true;
  this.jack.gal=false;
}
}
else{
  this.usernameincrct=true;
  this.jack.gal=false;
}

  
  }

  }
  else
{
  this.forshowmeaasge=false;
  console.log("logi fail");
  
}

}







}