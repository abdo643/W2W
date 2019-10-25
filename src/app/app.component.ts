import { Component, OnInit, Pipe,PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser'
import { MessageService } from './message.service';

export interface Items{
  netflixid: string;
  title: string;
  image: string;
  synopsis: string;
  rating: string;
  type: string;
  released: string;
  runtime: string;
  largeimage: string;
  unogsdate: string;
  imdbid: string;
  download: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* ={
  netflixid: "",
  title: "",
  image: "",
  synopsis: "",
  rating: "",
  type: "",
  released: "",
  runtime: "",
  largeimage: "",
  unogsdate: "",
  imdbid: "",
  download: "", };
*/
export class AppComponent 
{
  title = 'Welcome to W2W';
  public data:any;
  public dataValue: Items[]=[];

  private isDataAvailable:boolean=false;

  constructor(private http: HttpClient,private messageService: MessageService)
  { 
    console.log("Hi");
    let headers = new HttpHeaders().set('x-rapidapi-host', 'unogs-unogs-v1.p.rapidapi.com');
    headers = headers.set('x-rapidapi-key', '2e75f12489msh4881df0eea4530ap1d9974jsnb1c9075c37c4');
    headers.append('Content-Type', 'application/json');
    this.http.get<Items[]>("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew7%3AUS&p=1&t=ns&st=adv",{ headers: headers}).
    subscribe(data => {this.dataValue = data;console.log(this.dataValue);});      
    /*this.http.get('https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew7%3AUS&p=1&t=ns&st=adv',{ headers: headers}),
    function Data(data:any)
    {
      console.log(data);   
    }*/
  }    
}
