import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Complaint } from '../../global/complaint.model';
import { ComplaintsService } from '../../global/complaints.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  complaint: Complaint;
  complaintForm : FormGroup;
  constructor(private complaintService: ComplaintsService, private _router: Router, private route: ActivatedRoute){ }
	
	mainBack(){
    this._router.navigateByUrl('/main');
	}
	
  ngOnInit() {
  	this.complaintForm = new FormGroup({
  		Year: new FormControl(),
  		ReportReference: new FormControl(),
  		Domain: new FormControl(),
  		CompanyEmp: new FormControl(),
  		ComplaintType: new FormControl(),
  		Comment: new FormControl(),
  		ComplaintStatus: new FormControl(),
  		EmailReference: new FormControl(),
  	});
  }
  onSubmit(){
  	let complaint: Complaint = new Complaint(null,
  		this.complaintForm.controls['Year'].value,
  		this.complaintForm.controls['ReportReference'].value,
  		this.complaintForm.controls['Domain'].value,
  		this.complaintForm.controls['CompanyEmp'].value,
  		this.complaintForm.controls['ComplaintType'].value,
  		this.complaintForm.controls['ComplaintStatus'].value,
  		this.complaintForm.controls['Comment'].value,
  		this.complaintForm.controls['EmailReference'].value);
      
      if(confirm("Are you sure you want to create this Complain?") == true){
          this.complaintService.createComplaint(complaint).subscribe();
          this.complaintForm.reset();
			}
  }
}