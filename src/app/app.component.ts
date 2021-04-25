import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formElement=[
    { 
      controlName: 'name',
      label : 'Name',
      required : true,
      component: 'inputText'
    }
  ];
  form: any;

  constructor() {
  }

  ngOnInit() {
    let group: any = {};
    this.formElement.map(e=>{
      if(e.required){
        group[e.controlName] = new FormControl(null, Validators.required);
      }else{
        group[e.controlName] = new FormControl(null);
      }
    });    
    this.form = new FormGroup(group);
  }

  save(){
    if(this.form.valid){
      console.log(this.form.value);
    }
  }
}
