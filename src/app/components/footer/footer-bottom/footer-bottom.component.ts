import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-bottom',
  templateUrl: './footer-bottom.component.html',
  styleUrls: ['./footer-bottom.component.css']
})
export class FooterBottomComponent {
  footer = {
    copyright: '© Tutti i diritti riservati',
    company: 'CHRISTIAN RUSSO s.r.l. (Società con unico socio)',
    sede_it: 'Centro Storico di Genova, 19 -16124 Genova, Italia',
    sede_usa: 'Miami Centro, 34 - 33101 Florida, Stati Uniti',
    capitale: 'Capitale sociale Euro 2.000.000 interamente versato',
    partita_iva: 'P.IVA IT03802730154'
  }
}
