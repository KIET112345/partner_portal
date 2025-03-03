import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-sidebar-menu',
  imports: [MenuModule, BadgeModule, RippleModule, AvatarModule, CommonModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent {
  items: MenuItem[] | undefined;
  activeItem: string = '';

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        command: () => this.setActive('Dashboard'),
      },
      {
        label: 'Partners',
        icon: 'pi pi-user',
        command: () => this.setActive('Partners'),
      },
      {
        label: 'Approvals',
        icon: 'pi pi-check-square',
        command: () => this.setActive('Approvals'),
      },
    ];
    this.activeItem = this.items[0].label ?? '';
  }

  setActive(label: string): void {
    this.activeItem = label;
  }
}
