import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class DataService{
    private apiUrl ='http://localhost:5984/crud';

    constructor(private http:HttpClient)
    {}

    postData(formData: any):Observable<any>
    {
        return this.http.post(this.apiUrl,formData)
    }
}