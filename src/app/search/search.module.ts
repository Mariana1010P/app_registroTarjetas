import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule
  ],exports:[SearchbarComponent]
})
export class SearchModule { }
