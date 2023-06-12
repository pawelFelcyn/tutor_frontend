import { Component, OnInit } from '@angular/core';
import { LoggedUserContextService } from '../services/logged-user-context.service';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {

  constructor(public readonly loggedUserContextService: LoggedUserContextService) { }

  ngOnInit(): void {
  }

}
