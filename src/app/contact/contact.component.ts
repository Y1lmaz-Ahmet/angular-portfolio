import { Component,ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('email') emailInput!: ElementRef;
  @ViewChild('message') messageTextarea!: ElementRef;
  constructor(private formbuilder: FormBuilder, private httpClient: HttpClient) { }

  secretKey: string = "mrgwjdqz";
  emailForm = this.formbuilder.group({
    name: [""],
    email: [""],
    message: [""]
  });

  sendEmail(name: string, email: string, message: string) {
    //Set the url with your secretKey from formspree.io
    let url = "https://formspree.io/f/" + this.secretKey;
  
    //Set Headers
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };
  
    let data = `name=${name}&email=${email}&message=${message}`;
    let errorMessage: string = "";
  
    this.httpClient.post<any>(url, data, httpOptions).subscribe({
      error: error => {
        errorMessage = error.message;
        console.log('error!', errorMessage);
      }
    });
    //reset form after sending.
    this.nameInput.nativeElement.value = '';
    this.emailInput.nativeElement.value = '';
    this.messageTextarea.nativeElement.value = '';
  }
}


