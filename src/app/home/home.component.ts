// home.component.ts
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { addVote, removeVote } from '../state/vote.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  votes$ = this.store.pipe(select((state: any) => state.vote.items));

  constructor(private store: Store) {}

  addVote(name: string) {
    this.store.dispatch(addVote({ name }));
  }

  removeVote(name: string) {
    this.store.dispatch(removeVote({ name }));
  }

}
