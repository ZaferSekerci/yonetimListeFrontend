import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'yonetimListeFrontend';

  constructor(private http: HttpClient, public restService: RestService) {}
  //ag-grid columns
  payOk: string = 'Evet';
  columnDefs = [
    { headerName: 'Teklif No', field: 'id', sortable: true, filter: true },
    { headerName: 'Adı', field: 'firstName', sortable: true, filter: true },
    { headerName: 'Soyadı', field: 'lastName', sortable: true, filter: true },
    {
      headerName: 'Poliçe İsmi',
      field: 'policyName',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Ödeme Tipi',
      field: 'paymentType',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Toplam Prim',
      field: 'policyPrice',
      sortable: true,
      filter: true,
    },
  ];
  rowData: any;

  ngOnInit(): void {
    this.restService.getAll().subscribe((data: string) => {
      this.rowData = data;
    });
  }
}
