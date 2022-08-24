import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css']
})
export class AddressInfoComponent implements OnInit {
  @Input() btnAdressTitle!: string
  constructor() { }

  ngOnInit(): void {
  }

}
