import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
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
  selectedPartner!: PartnerModel;
  destroy$ = new Subject<void>();
  messageEmail: string = MESSAGE.sendMail;
  messageExport: string = MESSAGE.exportMessage;
  rangeDates!: Date[];

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
      { field: 'id', name: 'ID', width: '5%' },
      { field: 'partnerName', name: 'Name', width: '15%' },
      { field: 'partnerType', name: 'Type', width: '10%' },
      { field: 'contract', name: 'Contract', width: '15%' },
      { field: 'grosssales', name: 'Gross Sales', width: '15%' },
      { field: 'commissions', name: 'Commissions', width: '15%' },
      { field: 'conversions', name: 'Conversions', width: '15%' },
      { field: '', name: '', width: '10%' },
    ];

    this.selectedColumns = this.cols;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.partners
      ? this.first + this.rows >= this.partners.length
      : true;
  }

  isFirstPage(): boolean {
    return this.partners ? this.first === 0 : true;
  }

  showSuccess(message: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }
}
