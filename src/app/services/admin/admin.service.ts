import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private role = localStorage.getItem('role') || 'guest';
  private roleSourse$ = new BehaviorSubject(this.role);

  constructor() { }
  public getRole() {
    return this.role;
  }
  public getRoleSubject() {
    return this.roleSourse$;
  }
  public setRole(role: string) {
    this.role = role;
    localStorage.setItem('role', role);
    this.roleSourse$.next(role);
  }
  public logOut() {
    this.role = 'guest';
    this.roleSourse$.next(this.role);
    localStorage.removeItem('role');
  }
}
