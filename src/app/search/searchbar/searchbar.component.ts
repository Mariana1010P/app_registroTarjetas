import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

  @Output() searchText = new EventEmitter<string>();
  searchTitular:string =""

  onSearch() {
    this.searchText.emit(this.searchTitular)
  }
}
