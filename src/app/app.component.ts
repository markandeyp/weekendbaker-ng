import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'wb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'WeekendBaker by PC';
  notification: String = '';
  constructor(
    private notificationService: NotificationService,
    private store: AngularFirestore
  ) {}

  ngOnInit() {
    this.notificationService.getNotifications().subscribe((notification) => {
      this.notification = notification;
      setTimeout(() => {
        this.notification = '';
      }, 2000);
    });
  }
}
