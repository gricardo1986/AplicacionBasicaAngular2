import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VoteComponent } from './vote/vote.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { voteReducer } from './state/vote.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ vote: voteReducer }), // Configura el store con el reducer
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
