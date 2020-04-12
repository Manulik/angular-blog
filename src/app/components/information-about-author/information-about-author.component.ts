import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormControlDirective } from '@angular/forms';
import { AdminService } from '../../services/admin/admin.service';
@Component({
  selector: 'app-information-about-author',
  templateUrl: './information-about-author.component.html',
  styleUrls: ['./information-about-author.component.sass']
})
export class InformationAboutAuthorComponent implements OnInit {
  biography = new FormControl('');
  adminRole:string;

  constructor(private adminService: AdminService) { }
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
