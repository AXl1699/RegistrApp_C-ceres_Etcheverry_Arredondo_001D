import { Component } from '@angular/core';
interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  componentes : Componente [] = [
    {
      icon:'bulb-outline',
      name:'¿Quiénes somos?',
      redirecTo: '/quienes'
    },
    {
        icon:'earth-outline',
        name:'Noticias de Negocios',
        redirecTo: '/noticias'
    },
    {
      icon:'camera-outline',
      name:'Abrir Cámara',
      redirecTo: '/registrar'
    },
    {
      icon: 'close-circle-outline',
      name: 'Salir',
      redirecTo:'/logout',
    },
  ]
}
