import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''], // Optional
      message: ['', Validators.required],
    });
  }

  getError(field: string): string {
    const control = this.validateForm.get(field);
    if (control?.touched || control?.dirty) {
      if (control.errors?.['required']) {
        return 'This cannot be empty';
      }
      if (control.errors?.['email']) {
        return 'Enter a valid email id';
      }
    }
    return '';
  }

  onSubmit(): void {
    if (this.validateForm.valid) {
      console.log('Form submitted:', this.validateForm.value);
      // Add form submission logic here (API call etc.)
    } else {
      this.validateForm.markAllAsTouched(); // Trigger validation errors
    }
  }

  options: AnimationOptions = {
    path: '/assets/line.json',
    loop: true,
    autoplay: true,
  };
}
