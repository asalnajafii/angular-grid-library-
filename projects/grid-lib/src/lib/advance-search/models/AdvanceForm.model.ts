import {Observable} from 'rxjs';
import {FieldInterface} from './FieldInterface';

/**
 * Base class to create advance form configuration
 *
 */

export interface ButtonConfig {
  icon?: string;
  text?: string;
  class?: string;
}

export interface TitleConfig {
  icon?: string;
  text?: string;
  class?: string;
}


export class AdvanceFormModel {
  inputs!: FieldInterface[];
  filters!: any;
  callAdvanceSearch!: Observable<boolean>;
  // Title
  title: TitleConfig = {
    text: 'Advance Search'
  }
  searchButton: ButtonConfig = {
    class: 'btn btn-primary',
    text: 'Search'
  };
  resetButton: ButtonConfig = {
    class: 'btn btn-danger ml-3',
    text: 'Reset'
  };

  constructor(inputs: any[],
              callAdvanceSearch: Observable<boolean>,
              title?: TitleConfig,
              searchButton?: ButtonConfig,
              resetButton?: ButtonConfig,
              filters?: object) {
    this.inputs = inputs;
    this.callAdvanceSearch = callAdvanceSearch;
    this.searchButton = {...this.searchButton, ...searchButton};
    this.resetButton = {...this.resetButton, ...resetButton};
    this.title = {...this.title, ...title};
    this.filters = {...this.filters, ...filters}
  }

}
