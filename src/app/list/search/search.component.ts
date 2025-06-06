import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output() searchText: EventEmitter<string> = new EventEmitter<string>();
  searchForm: FormGroup;
  searchParam: string = '';

  constructor() {
      this.searchText = new EventEmitter();
       this.searchForm = new FormGroup({
      name: new FormControl('', 
        [
          Validators.minLength(4),
        ]
      )
    }, [

    ])
   }

   getData(): void {
    this.searchText.emit(this.searchForm.value.name);
  }

}
