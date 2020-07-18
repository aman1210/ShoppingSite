import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from '../shared/category.model';
import { Observable } from 'rxjs';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css'],
})
export class HomescreenComponent implements OnInit {
  categories : Observable<{categories :Category[]}>;
  
  offers=[
    "https://cdn-www.enfocus.com/sites/combell-www.enfocus.com/files/media/blog/2017-08-09-Lorem-Ipsum/lorem-ipsum.jpg",
    "https://lorem2.com/wp-content/uploads/2018/09/lorem2.png",
      "https://cdn-www.enfocus.com/sites/combell-www.enfocus.com/files/media/blog/2017-08-09-Lorem-Ipsum/lorem-ipsum.jpg",
      "https://lorem2.com/wp-content/uploads/2018/09/lorem2.png",
      "https://cdn-www.enfocus.com/sites/combell-www.enfocus.com/files/media/blog/2017-08-09-Lorem-Ipsum/lorem-ipsum.jpg",
      "https://lorem2.com/wp-content/uploads/2018/09/lorem2.png",
      "https://cdn-www.enfocus.com/sites/combell-www.enfocus.com/files/media/blog/2017-08-09-Lorem-Ipsum/lorem-ipsum.jpg",
      "https://lorem2.com/wp-content/uploads/2018/09/lorem2.png",
      "https://cdn-www.enfocus.com/sites/combell-www.enfocus.com/files/media/blog/2017-08-09-Lorem-Ipsum/lorem-ipsum.jpg",
      "https://lorem2.com/wp-content/uploads/2018/09/lorem2.png",
      "https://cdn-www.enfocus.com/sites/combell-www.enfocus.com/files/media/blog/2017-08-09-Lorem-Ipsum/lorem-ipsum.jpg",
      "https://lorem2.com/wp-content/uploads/2018/09/lorem2.png",
  ]

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.categories = this.store.select('categories');
  }
}
