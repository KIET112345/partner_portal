import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Select } from 'primeng/select';
import { FloatLabel } from "primeng/floatlabel";
import { FormsModule } from '@angular/forms';
import { Menu } from '../../interfaces/menu.model';

@Component({
  selector: 'app-header',
  imports: [CommonModule, Select, FloatLabel, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  optionMenu: Menu[] = [];
  selectedMenu: Menu = { label: 'Dashboard', icon: 'pi pi-home' };

  ngOnInit(): void {
    this.optionMenu = [
      { label: 'Dashboard', icon: 'pi pi-home' },
      { label: 'About', icon: 'pi pi-info' },
      { label: 'Contact', icon: 'pi pi-envelope' },
      { label: 'Help', icon: 'pi pi-question' }
    ];
  }
}
