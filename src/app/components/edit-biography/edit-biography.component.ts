import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormControlDirective } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-biography',
  templateUrl: './edit-biography.component.html',
  styleUrls: ['./edit-biography.component.sass']
})
export class EditBiographyComponent implements OnInit {
  biography = new FormControl();
  biographyContent;


  constructor(private location: Location) { }

  ngOnInit() {
    this.biographyContent = JSON.parse(localStorage.getItem('biography'));
    this.biography.setValue(this.biographyContent.value);
  }

  addBiog() {
      localStorage.setItem('biography', JSON.stringify(this.biography));
  }
  back() {
    this.location.back();
  }

}
