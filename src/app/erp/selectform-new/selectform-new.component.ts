import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectform-new',
  standalone: true,
  templateUrl: './selectform-new.component.html',
  styleUrls: ['./selectform-new.component.css']
})
export class SelectformNewComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (!user) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
