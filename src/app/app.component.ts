import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sivaAPP';
  otp = {
    otp_title : 'Enter OTP',
    otp_subtitle : 'OTP will be sent to your registered mobile number, please verify...',
    otp_button_label : 'Verify OTP',
    otp_count : 4
  }

  loginForm!: FormGroup;

  arr:any = []
  constructor() {
   
  }
  ngOnInit(){
    this.loginForm = new FormGroup({  })
    for(let i=0; i<this.otp.otp_count;i++){
      this.arr.push(this.getFormConntrol(i));
      this.loginForm.addControl(this.getFormConntrol(i), new FormControl)
    }
  }
  

  getFormConntrol(index:number){
    return `crtl${index}`;
  }
  sublogin() {
    console.log(this.loginForm.value)
  }
  keyuppress(ev:any){
    console.log(ev.key)
  }
}
