import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {
  private isThresholdSource = new BehaviorSubject<boolean>(this.getStoredThreshold());
  isThreshold$ = this.isThresholdSource.asObservable();

  setIsThreshold(value: boolean) {
    this.isThresholdSource.next(value);
    localStorage.setItem('isThreshold', JSON.stringify(value)); // Lưu trạng thái vào localStorage
  }

  getIsThreshold() {
    return this.isThresholdSource.getValue();
  }

  private getStoredThreshold(): boolean {
    const storedValue = localStorage.getItem('isThreshold');
    return storedValue ? JSON.parse(storedValue) : false;
  }
}
