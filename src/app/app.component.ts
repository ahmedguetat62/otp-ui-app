import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit {
  title = 'otp-app';

  otp!: string;
  inputDigitLeft: string = "Verify code";
  btnStatus: string = "btn-light";
  validOtp: any = 0;
  public configOptions = {
    length: 6,
    inputClass: 'digit-otp',
    containerClass: 'd-flex justify-content-between',
    allowNumbersOnly:true
  }
  
  ngOnInit() {
      
  }

  onOtpChange(event: any) {
    this.otp = event;
    if(this.otp.length < this.configOptions.length) {
      this.inputDigitLeft = this.configOptions.length - this.otp.length + " digits Left";
      this.validOtp = 0;
      this.updateInputClass()
      this.btnStatus = 'btn-light';
    }

    if(this.otp.length == this.configOptions.length) {
      this.inputDigitLeft = "Let's go!";
      this.btnStatus = 'btn-primary';
    }
  }
  check(){
    if(this.otp ==="111111"){
      this.validOtp = 1;
      this.btnStatus = 'btn-success';
    }else{
      this.btnStatus = 'btn-danger';
      this.validOtp = 2;

    }
    this.updateInputClass();
  }
  updateInputClass() {
    switch(this.validOtp) {
      case 0:
        this.configOptions.inputClass = 'digit-otp';
        break;
      case 1:
        this.configOptions.inputClass = 'digit-otp-success';
        break;
      case 2:
        this.configOptions.inputClass = 'digit-otp-error shake';
        break;
    }
  }
  
}
