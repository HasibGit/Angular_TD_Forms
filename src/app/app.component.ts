import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @ViewChild('f') signupForm: NgForm;
  
  defaultQuestion: string = 'pet';
  answer: string = '';
  genders: string[] = ['male', 'female'];
  submitted: boolean = false;

  formData = {
    name: '',
    email: '',
    gender: '',
    question: '',
    answer: ''
  }

    

  suggestUserName() {
    const suggestedName = 'Superuser';


    // IF WE WANT TO SET All FORM VALUES 

    // this.signupForm.setValue({
    //   userData: {
    //     userName: '',
    //     email: '',
    //     gender: ''
    //   },
    //   secret: 'pet',
    //   answer: ''
    // });


    // SETTING Some Particular field using patchValue
    this.signupForm.form.patchValue({
      userData: {
        userName: suggestedName
      }
    });

  }

  onSubmit(){

    // getting data from the form
    this.submitted = true;
    this.formData.name = this.signupForm.form.value.userData.userName;
    this.formData.email = this.signupForm.form.value.userData.email;
    this.formData.gender = this.signupForm.form.value.userData.gender;
    this.formData.question = this.signupForm.form.value.secret;
    this.formData.answer = this.signupForm.form.value.answer;

    this.signupForm.reset();   // reset the form along with field states
  }
}
