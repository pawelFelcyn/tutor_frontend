import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from 'src/dtos/login.dto';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }
  

  public navigateTo(path: string): void{
    this.router.navigate([path]);
  }
}
