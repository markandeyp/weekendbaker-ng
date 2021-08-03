import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notification: Subject<string> = new Subject();

  getNotifications(): Observable<string> {
    return this.notification;
  }

  notify(msg: string) {
    this.notification.next(msg);
  }
}
