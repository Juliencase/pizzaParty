import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isCollapsed = false;
  @Input() title;

  toggleCollapseNavbar () {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor() { }

  ngOnInit() {
  }

}
