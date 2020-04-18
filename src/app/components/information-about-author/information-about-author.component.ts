import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormControlDirective } from '@angular/forms';
import { AdminService } from '../../services/admin/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-information-about-author',
  templateUrl: './information-about-author.component.html',
  styleUrls: ['./information-about-author.component.sass']
})
export class InformationAboutAuthorComponent implements OnInit {
  biography = new FormControl('');
  adminRole:string;

  constructor(private adminService: AdminService, private router: Router) { }
  biographyContent;

  ngOnInit() {
    if(this.adminService.getRole() === 'admin') {
      this.adminRole = 'admin';
    }
    this.biographyContent = JSON.parse(localStorage.getItem('biography'));
    var about = document.querySelector('.about');
    about.innerHTML = this.biographyContent.value;
  }

}
