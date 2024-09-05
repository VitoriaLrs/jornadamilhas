import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCardComponent } from '../modal-card/modal-card.component';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() valor: string = '';
  @Input() nome: string = '';
  @Input() descricao: string = '';
    constructor(public dialog: MatDialog) {}
  
    openDialog(nome: string, descricao: string) {
        this.dialog.open(ModalCardComponent,{
          data:{
            nome: nome,
            descricao: descricao
          },
          width: '50%'
        });
    }
}
