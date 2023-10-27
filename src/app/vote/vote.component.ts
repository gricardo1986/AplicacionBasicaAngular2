import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
})
export class VoteComponent {
  voteForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.voteForm = this.fb.group({
      voteOption: ['', Validators.required],
      // Otros campos y validaciones personalizadas
    });
  }

  @Output() voteEvent = new EventEmitter<string>();

  submitVote() {
    if (this.voteForm.valid) {
      // Emitir el evento con la opción de voto
      this.voteEvent.emit(this.voteForm.value.voteOption);
    }
  }


}
