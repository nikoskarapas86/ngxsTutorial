import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RemoveTutorial } from '../actions/tutorial.action';
import { tutorial } from '../models/tutorial.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  tutorials$: Observable<any>;
  constructor(private store: Store) {
    this.tutorials$ = this.store.select((state) => state.tutorials.tutorials);
  }
  delTutorial(name: tutorial) {
    this.store.dispatch(new RemoveTutorial(name));
  }
  ngOnInit(): void {}
}
