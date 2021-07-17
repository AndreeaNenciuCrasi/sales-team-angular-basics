import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup.kumar@yahoo.com", 50000),
    new SalesPerson("John", "Doe", "john.doe@yahoo.com", 40000),
    new SalesPerson("Claire", "Murphy", "claire.murphy@yahoo.com", 90000),
    new SalesPerson("Mai", "Truong", "mai.truong@yahoo.com", 60000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
