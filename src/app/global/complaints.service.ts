import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Complaint } from './complaint.model';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ComplaintsService{
    private apiUrl = 'https://auditerp-api.azurewebsites.net/Complaint/Get_Complaints';
    private addApiUrl = 'https://auditerp-api.azurewebsites.net/Complaint/Add_Complaint';
    private idUrl = 'https://auditerp-api.azurewebsites.net/Complaint/Get_ComplaintById';
    private updateUrl = 'https://auditerp-api.azurewebsites.net/Complaint/Update_Complaint';

    constructor(private _http: Http) { }

  /* GET API URL */
  getAPI(){
  	return this._http.get(this.apiUrl)
  	.map((res: Response) => res.json())
  	.catch(this.handleError);
  }

  /*Create to API URL*/
  createComplaint(complaint: Complaint) : Observable <Complaint>{
    return this._http.post(this.addApiUrl, complaint)
    .catch((error:any) => Observable.throw(error.json()
    .error || "Server Error"));
  }
  
  /*Getting ComplaintID */
  findById(id: number): Observable<Complaint>{
    return this._http.get(this.idUrl+'?jsonData=%7B%22id%22%3A%20'+id+'%20%7D')
    .map((res: Response) => res.json())
    .catch((this.handleError));
  }
  /*Handle Error*/
  handleError(error: Response){
    console.error(error);
    return Observable.throw(error);
}
  updateComplaint(complaint: Complaint) : Observable<Complaint>{
    return this._http.put(this.updateUrl, complaint)
    .map((res: Response) => res.json())
    .catch((this.handleError));
  }

}