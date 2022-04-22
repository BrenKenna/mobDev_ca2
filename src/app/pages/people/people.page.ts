import { Component, OnInit } from '@angular/core';

// Modules for consuming API and routing to another page with results
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people: Observable<any>;
 
  constructor(private router: Router, private http: HttpClient) { }
 
  ngOnInit() {
    this.people = this.http.get('https://swapi.dev/api/people');
    this.people.subscribe(data => {
      console.log('my data: ', data);
    });
  }
 

  openDetails(person) {
    let split = person.url.split('/');
    let personId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/people/${personId}`);
  }

}