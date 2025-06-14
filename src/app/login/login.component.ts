import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

declare var grecaptcha: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm!: FormGroup;
  captchaError: string | undefined = '';
  // emailError: string | undefined = '';
  siteKey: string = '6Lfp8qEUAAAAANnVOJvodJwo9zJuXjjoACz08Pdg';
  loginEmails: string[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    const storedEmails = localStorage.getItem('loginEmails');
    this.loginEmails = storedEmails ? JSON.parse(storedEmails) : [];

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      service: ['', Validators.required],
      captcha: ['']
    });
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const onloadCallback = () => {
      grecaptcha.render('dvCaptcha', {
        sitekey: this.siteKey,
        callback: (response: string) => {
          this.verifyCaptcha(response);
        }
      });
    };

    if (typeof grecaptcha !== 'undefined') {
      onloadCallback();
    } else {
      const interval = setInterval(() => {
        if (typeof grecaptcha !== 'undefined') {
          clearInterval(interval);
          onloadCallback();
        }
      }, 100);
    }
  }

  verifyCaptcha(response: string) {
    this.http.get<any>('http://localhost:3000/captcha/1').subscribe({
      next: (res) => {
        if (res.success) {
          this.loginForm.get('captcha')?.setValue('true');
          this.captchaError = '';
        } else {
          this.loginForm.get('captcha')?.setValue('');
          this.captchaError = 'Captcha invalid';
        }
      },
      error: () => {
        this.captchaError = 'Captcha verification failed';
      }
    });
  }

  onSubmit() {
   if (this.loginForm.invalid || this.loginForm.get('captcha')?.value !== 'true') {
  this.captchaError = 'Please complete the CAPTCHA and fill all required fields';
  this.loginForm.markAllAsTouched();  // to show validation errors
  return;
}

    const { email, password, service } = this.loginForm.value;

    this.http.get<any>(`http://localhost:3000/users?email=${email}&password=${password}&service=${service}`).subscribe({
      next: (res) => {
        if (res.length > 0) {
          alert('Login successful');

          // Save email for future suggestions
          if (!this.loginEmails.includes(email)) {
            this.loginEmails.push(email);
            localStorage.setItem('loginEmails', JSON.stringify(this.loginEmails));
          }

          localStorage.setItem('userEmail', email);
          localStorage.setItem('user', JSON.stringify(res[0]));

          this.router.navigate(['/erp/selectform-new']);
        } else {
          alert('Invalid credentials');
        }
      },
      error: () => {
        alert('Server error');
      }
    });
  }
}
