import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  immagine_1 =
    {
      path: '../../../../assets/img/estetica.jpg',
      alt: 'estetica'
    }

    immagine_2 =
    {
      path: '../../../../assets/img/plastic-surgery.jpg',
      alt: 'plastic-surgery'
    }

    testo = {
      titolo: 'Il potere della chirurgia estetica femminile',
      descrizione: "La chirurgia estetica femminile offre molto più di un semplice miglioramento estetico. Al nostro studio, riconosciamo l'importanza di prendersi cura non solo dell'aspetto fisico, ma anche del benessere emotivo delle nostre pazienti. Prima di ogni intervento, offriamo un incontro con uno psicologo specializzato per comprendere appieno la situazione di ogni cliente e garantire che il percorso di chirurgia estetica sia guidato dal benessere emotivo. Scopri come il potere della chirurgia estetica femminile si fonde con l'attenzione all'equilibrio interiore."
    }
}
