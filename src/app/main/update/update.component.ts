import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintsService } from '../../global/complaints.service';
import { Complaint } from '../../global/complaint.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: number;
  showid: number;
  complaint: Complaint;
  complaintForm : FormGroup;
  private sub: any;
  constructor(private _router: Router, private route: ActivatedRoute, private complaintService: ComplaintsService) { }

  mainBack(){
    this._router.navigateByUrl('/main');
  }

  ngOnInit() {
    this.complaintForm = new FormGroup({
      ComplaintId: new FormControl(),
      Year: new FormControl(),
      ReportReference: new FormControl(),
      Domain: new FormControl(),
      CompanyEmp: new FormControl(),
      ComplaintType: new FormControl(),
      Comment: new FormControl(),
      ComplaintStatus: new FormControl(),
      EmailReference: new FormControl(),
    });

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });

    if(this.id) {
      this.complaintService.findById(this.id).subscribe(
        complaint => {
            this.id = complaint.ComplaintId;
            this.complaintForm.patchValue({
            ComplaintId: complaint.ComplaintId,
            Year: complaint.Year,
            ReportReference: complaint.ReportReference,
            Domain: complaint.Domain,
            CompanyEmp: complaint.CompanyEmp,
            ComplaintType: complaint.ComplaintType,
            Comment: complaint.Comment,
            ComplaintStatus: complaint.ComplaintStatus,
            EmailReference: complaint.EmailReference
          });
         },error => {
          console.log(error);
         }
      );
 
    }
  }

  updateSubmit(){
    if(this.id){
    let complaint: Complaint = new Complaint(this.id,
      this.complaintForm.controls['Year'].value,
      this.complaintForm.controls['ReportReference'].value,
      this.complaintForm.controls['Domain'].value,
      this.complaintForm.controls['CompanyEmp'].value,
      this.complaintForm.controls['ComplaintType'].value,
      this.complaintForm.controls['ComplaintStatus'].value,
      this.complaintForm.controls['Comment'].value,
      this.complaintForm.controls['EmailReference'].value);
      
      if(confirm("Are you sure you want to Update this data?") == true){
          this.complaintService.updateComplaint(complaint).subscribe();
          alert("Complain has been Updated!");
          this.complaintForm.reset();
      }
    }
  }


}
