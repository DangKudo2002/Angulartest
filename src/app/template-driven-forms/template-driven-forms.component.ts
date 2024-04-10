import { CommonService } from './../services/common.service';
import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent {
  public name = '';

  constructor( private common: CommonService) {}

  public submitForm(){
    // console.log('submit form: name '+ this.name);
    this.common.submitData({name: this.name, age:12});
  }
}