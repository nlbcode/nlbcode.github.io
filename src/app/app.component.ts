import { Component, ViewChild,OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor( private _router: Router){

  }
  ngOnInit(): void {
    this._router.events.subscribe(() => {
      console.log("navigate detected")
      this.sidenav.close();
    });
  }
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  title = 'app';
}
