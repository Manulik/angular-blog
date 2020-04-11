import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormControlDirective } from '@angular/forms';
import {AdminService} from '../../services/admin/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginFrom = new FormGroup({
    login: new FormControl(''),
    password:  new FormControl(''),
  });

  constructor(private adminService: AdminService,
              private router: Router) { }

  ngOnInit() {
  }
  onButtonClick() {
    console.log(this.loginFrom.value);
    if (this.loginFrom.valid) {
      if(this.loginFrom.value.login === 'adminNikitos@mail.ru' && this.loginFrom.value.password === 'admin') {
        console.log('Valiod form');
        console.log(this.adminService.getRole);
        this.adminService.setRole('admin');
        this.router.navigate(['/articles']);
      }
    }
  }
  onSubmit() {
    
  }

}
