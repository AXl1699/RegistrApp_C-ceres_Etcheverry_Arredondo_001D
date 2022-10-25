import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(public platform: Platform) { }

  ngOnInit() {
  }
  
  logoutAction(){
    localStorage.removeItem('ingresado');
  }

}