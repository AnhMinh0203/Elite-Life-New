import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedStateService {
  private isThresholdSource = new BehaviorSubject<boolean>(false); // Mặc định là false
  isThreshold$ = this.isThresholdSource.asObservable();

  setIsThreshold(value: boolean) {
    this.isThresholdSource.next(value);
  }

  getIsThreshold() {
    return this.isThresholdSource.getValue();
  }
}
