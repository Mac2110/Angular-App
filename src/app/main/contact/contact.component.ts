import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  selected:""
  constructor(private formbuilder:FormBuilder){}

  formdetails = this.formbuilder.group({
    email:['',[Validators.email,Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    fullname:['',Validators.required],
    number:['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    address:['',Validators.required],
    city:['',Validators.required],
    postcode:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{6}$')]],
    gender:['',Validators.required],
    dob:['',Validators.required]
  })

  onSubmit(){
    console.log(this.formdetails.value)
  }
}
