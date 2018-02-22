import { Injectable, Input } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


 @Injectable()
 export class DatabaseService {

   private API_URL = 'https://a6hghvxtg1.execute-api.us-east-1.amazonaws.com/qa/form/';

   constructor(private http: Http) { }

   createPerson(lastName, firstName, email, comments, option) {
     let headers = new Headers({
         'Content-Type' : 'application/json',
         'X-Api-Key' : '1x44beiGUh12LUYFyfOOj2w8TqTACjXB1JZ9beTm',
        });
     let options = new RequestOptions({ headers: headers});
     let INFO =  Object.assign(lastName, firstName, email, comments, option);
     let body = JSON.stringify(INFO);
     console.log(options)
     return this.http.post(this.API_URL, body, options)
        .map((res: Response) => res.json());
   }

   getInfo(id: string){
     let headers = new Headers({
         'Content-Type' : 'application/json',
         'X-Api-Key' : '1x44beiGUh12LUYFyfOOj2w8TqTACjXB1JZ9beTm',
     });
     let options = new RequestOptions({ headers: headers});
     return this.http.get(this.API_URL + id, options)
        .map((res:Response) => res.json());
   }

}
