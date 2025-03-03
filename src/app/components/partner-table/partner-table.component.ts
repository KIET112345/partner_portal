import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PaginatorModule } from 'primeng/paginator';
import { Subject, takeUntil } from 'rxjs';

import { PartnerModel } from '../../interfaces/header.model';
import { Column } from '../../interfaces/column.model';
import { MESSAGE } from '../../constants/message.constant';
import { PartnerService } from '../../services/parter.service';

@Component({
  selector: 'app-partner-table',
  imports: [
    TableModule,
    ButtonModule,
    DatePickerModule,
    MultiSelectModule,
    CommonModule,
    FormsModule,
    ToastModule,
    ProgressSpinnerModule,
    PaginatorModule
  ],
  templateUrl: './partner-table.component.html',
  styleUrl: './partner-table.component.scss',
})
export class PartnerTableComponent {
  selectedColumns!: Column[];
  cols!: Column[];
  first = 0;
  rows = 16;
  partners: PartnerModel[] = [];
  displayedPartners: PartnerModel[] = []
  selectedPartner!: PartnerModel;
  destroy$ = new Subject<void>();
  messageEmail: string = MESSAGE.sendMail;
  messageExport: string = MESSAGE.exportMessage;
  rangeDates!: Date[];
  loading: boolean = true;

  constructor(
    private partnerService: PartnerService,
    private messageService: MessageService
  ) {
    this.partnerService
      .getDataPartners()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.partners = Object.values(data).map((partner) => {
          return {
            ...partner,
            id: Number(partner.id),
          };
        });
        this.updateDisplayedPartners();
        this.loading = false;
      });
  }

  ngOnInit() {
    this.partners = this.partners.map((partner) => {
      return {
        ...partner,
        id: Number(partner.id),
      };
    });
    this.cols = [
      { field: 'id', name: 'ID', width: '5%', sortOrder: false },
      { field: 'partnerName', name: 'Name', width: '20%', sortOrder: false },
      { field: 'partnerType', name: 'Type', width: '15%', sortOrder: false },
      { field: 'contract', name: 'Contract', width: '15%', sortOrder: false },
      { field: 'grosssales', name: 'Gross Sales', width: '15%', sortOrder: false },
      { field: 'commissions', name: 'Commissions', width: '15%', sortOrder: false },
      { field: 'conversions', name: 'Conversions', width: '20%', sortOrder: false },
      { field: '', name: '', width: '5%', sortOrder: false},
    ];

    this.selectedColumns = this.cols;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.updateDisplayedPartners();
  }

  showSuccess(message: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }

  toggleSort(column: Column): void {
    if (!column.sortOrder || column.sortOrder === 0) {
      column.sortOrder = 1;
    } else if (column.sortOrder === 1) {
      column.sortOrder = -1;
    } else {
      column.sortOrder = 0;
    }
  }

  goToPage(first: number): void {
    if (first >= 0 && first < this.partners.length) {
      this.first = first;
    }
    this.updateDisplayedPartners();
  }

  getPages(): number[] {
    const pages = Math.ceil(this.partners.length / this.rows);
    return Array.from({ length: pages }, (_, i) => i);
  }

  updateDisplayedPartners(): void {
    this.displayedPartners = this.partners.slice(this.first, this.first + this.rows);
  }

}
