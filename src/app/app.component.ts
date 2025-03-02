import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerTableComponent } from './components/partner-table/partner-table.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarMenuComponent, PartnerTableComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
