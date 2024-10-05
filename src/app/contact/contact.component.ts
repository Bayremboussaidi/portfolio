import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    
    console.log('Map functionality has been removed.');
   
  }

  onSubmit() {
    const formData = this.contactForm.value;

    emailjs.send('gmail', 'template_exx4pat', formData, 'DpPdpxQ--5M-syP4t')
      .then((response) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Error sending message.');
      });
  }
}
