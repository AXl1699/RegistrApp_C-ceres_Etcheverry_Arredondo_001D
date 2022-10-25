import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';

interface component{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  datoUsuario: any;
  alertController: any;

  constructor( private menuController :MenuController) { }

  ngOnInit() {
  }
    mostrarMenu(){
    this.menuController.open('first');
  }

}
