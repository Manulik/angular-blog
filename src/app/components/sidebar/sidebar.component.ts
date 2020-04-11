import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }
  role
  adminRole:string;

  ngOnInit() {
    this.role = localStorage.getItem('role') || 'guest';
    console.log(this.role)
      if(this.role === 'admin') {
        this.adminRole = 'admin';
      }
  }

}
