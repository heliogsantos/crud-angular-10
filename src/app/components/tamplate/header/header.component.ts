import { Component, OnInit } from '@angular/core';

import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get title(): string {
    return this.headerService.headerData.title;
  }

  get icon(): string {
    return this.headerService.headerData.icon;
  }

  get url(): string {
    return this.headerService.headerData.routerUrl;
  }

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
  }

}
