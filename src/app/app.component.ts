import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerTableComponent } from './components/partner-table/partner-table.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarMenuComponent, PartnerTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
