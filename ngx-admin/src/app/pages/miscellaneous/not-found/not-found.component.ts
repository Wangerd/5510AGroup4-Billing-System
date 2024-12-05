import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {OrderData} from '../../../@core/data/order';

@Component({
  selector: 'ngx-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {


  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      orderNumber: {
        title: 'Settlement Number',
        type: 'number',
      },
      tradingCountry: {
        title: 'Trading Country',
        type: 'string',
      },
      orderAmount: {
        title: 'Withdrawal Amount',
        type: 'string',
      },
      settlementStatus: {
        title: 'Settlement Status',
        type: 'string',
      },
      paymentMethod: {
        title: 'Payment Method',
        type: 'string',
      },
      settlementDate: {
        title: 'Settlement Date',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: OrderData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
