import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AUTOMOVILES } from './../modelos/data';
import { Automovil } from './../modelos/models';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;
  closeResult = '';

  constructor(private modalService: NgbModal) { }

  open(avisoAuto) {
    this.modalService.open(avisoAuto, { ariaLabelledBy: 'modal-basic-title' });
  }
  // }
  ngOnInit() {
    this.autos = AUTOMOVILES;
  }

  onSelect(auto: Automovil, avisoAuto) {
    this.autoSeleccionado = auto;
    this.modalService.open(avisoAuto, { ariaLabelledBy: 'modal-basic-title' });
  }

}
