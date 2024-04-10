import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  // public formData: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  // });
  public formData2 = this.formBuilder.group({      //Xây dựng formBuilder thay vì dùng formGroup và new control //FormBuilder được gọi từ services của nó
    name: ['', Validators.required],
    age: ['', Validators.required],
  })

  public name = '';
  constructor( private common: CommonService, private formBuilder: FormBuilder) {}

  ngOninit():void{}

  public onSubmit(){
    // console.log('submit form: name = '+ this.formData.value);
    this.common.submitData(this.formData2.value);
  }
}
