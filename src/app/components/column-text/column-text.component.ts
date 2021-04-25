import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-column-text',
  templateUrl: './column-text.component.html',
  styleUrls: ['./column-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: ColumnTextComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: ColumnTextComponent
    }
  ]
})

export class ColumnTextComponent implements ControlValueAccessor, Validator{
  
  @Input() label:string='';
  @Input() isRequired:boolean=false;
  result =new FormControl(null);

  ngOnInit():void{
    this.result.valueChanges.subscribe(res=>{
        this.onChange(res);
    })
  }

  onChange = (value:any) => {};

  onTouched = () => {};

  writeValue(value: any) {
    this.result.setValue(value);
    if(this.isRequired){
      this.result.setValidators([Validators.required]);
    }
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    if(disabled){
      this.result.disable();
    }else{
      this.result.enable();
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
      return this.result.validator;
  }

}