export class Complaint{
	ComplaintId: number;
	Year: number;
	ReportReference: string;
	Domain: number;
	CompanyEmp: string;
	ComplaintType: number;
	ComplaintStatus: number;
	Comment: string;
	EmailReference:string;
	constructor(ComplaintId:number,Year: number,ReportReference: string,Domain: number, 
				CompanyEmp: string, ComplaintType: number,ComplaintStatus: number,
				comment: string,EmailReference:string){
		this.ComplaintId = ComplaintId;
		this.Year = Year;
		this.ReportReference = ReportReference;
		this.Domain = Domain;
		this.CompanyEmp = CompanyEmp;
		this.ComplaintType = ComplaintType;
		this.ComplaintStatus = ComplaintStatus;
		this.Comment = comment;
		this.EmailReference = EmailReference;
	}

}