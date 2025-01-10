import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private orderDialogStatus = new Subject<boolean>();
  orderDialogStatus$ = this.orderDialogStatus.asObservable();

  showOrderDialog(status: boolean) {
    this.orderDialogStatus.next(status);
  }
}
