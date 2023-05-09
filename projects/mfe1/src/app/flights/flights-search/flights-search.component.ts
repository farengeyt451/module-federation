import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css'],
})
export class FlightsSearchComponent implements OnInit {
  public user: string | null = null;

  constructor(private service: AuthLibService) {}

  ngOnInit(): void {
    this.user = this.service.user;
  }

  search(): void {
    alert('Not implemented for this demo!');
  }

  terms(): void {
    alert('Not implemented for this demo!');
  }
}
