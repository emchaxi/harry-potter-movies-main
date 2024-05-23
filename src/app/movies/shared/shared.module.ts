import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterMoviesPipe } from './filter-movies.pipe';

@NgModule({
  declarations: [FilterMoviesPipe],
  exports: [FilterMoviesPipe],
  imports: [CommonModule],
})
export class SharedModule {}
