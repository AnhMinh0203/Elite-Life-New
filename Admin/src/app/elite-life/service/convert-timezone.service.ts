import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class TimeZoneService {

  convertUTCToTimezone(utcDateString: Date) {
    var timezone = 'Asia/Bangkok';
    const utcDate = moment.utc(utcDateString);
    const localDate = utcDate.tz(timezone);
    return localDate.format('YYYY-MM-DD');
  }
  convertUTCToTimezoneString(utcDateString: Date) {
    var timezone = 'Asia/Bangkok';
    const utcDate = moment.utc(utcDateString);
    const localDate = utcDate.tz(timezone);
    return localDate.format('DD/MM/YYYY');
  }

}
