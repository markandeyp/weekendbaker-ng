import { Component } from '@angular/core';

@Component({
  selector: 'wb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'WeekendBaker by PC';

  onSelectChange(event: Event) {
    console.log('Selection changed:', event.target);
  }
}
