import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from '../../global/complaints.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  complaints: any = [];
  errorMessage: any;

  constructor(private _complaintsService: ComplaintsService ) { }

  ngOnInit() {
    this._complaintsService.getAPI()
  	.subscribe(
  		complaints => this.complaints = complaints,
  			error => this.errorMessage = "Server ERROR!");
  }

}
