import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Building Re-usable Components with Mosh';

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged() {
    console.log('Favorite Changed');
  }
}
