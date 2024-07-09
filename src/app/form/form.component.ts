import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
 BO = {
    title: '',
    body: ''

}
submitted=false;
onsubmit(){
this.submitted=true;
console.log(this.submitted);
}

}


