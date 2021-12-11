import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

import {
  ActionColumn,
  ActionItem,
  CustomTemplateColumn,
  DateColumn,
  DropDownItem,
  IconColumn,
  LinkColumn,
  ReadMoreColumn,
  StatusColumn
} from "../../../grid-lib/src/lib/model/column";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {Pagination} from "../../../grid-lib/src/lib/model/pagination";
import {SimpleSearch} from "../../../grid-lib/src/lib/model/simpleSearch";
import {HttpParams} from '@angular/common/http';
import {AdvanceFormModel} from '../../../grid-lib/src/lib/advance-search/models/AdvanceForm.model';
import {SelectWithApiType} from '../../../grid-lib/src/lib/advance-search/models/SelectWithApiType';
import {TextType} from '../../../grid-lib/src/lib/advance-search/models/TextType';
import {SelectType} from '../../../grid-lib/src/lib/advance-search/models/SelectType';
import {DateRangeType} from '../../../grid-lib/src/lib/advance-search/models/DateRangeType';
import {ExportConfig} from '../../../grid-lib/src/lib/model/export';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'grid-app';
  public advancedSearch!: AdvanceFormModel;
  public flagObservable = new BehaviorSubject<boolean>(false);

  constructor(private route: Router) {
  }

  public grid: any;
  public search: any;
  public export!: ExportConfig;
  public refresh = new BehaviorSubject<boolean>(false);
  @ViewChild('mediaTitle', {static: true}) mediaTitle!: TemplateRef<any>;

  @ViewChild('readMore1', {static: true}) readMore1!: TemplateRef<any>;
  @ViewChild('readMore2', {static: true}) readMore2!: TemplateRef<any>;
  @ViewChild('readMore3', {static: true}) readMore3!: TemplateRef<any>;


  @ViewChild('humanReadAbleNumber', {static: true}) humanReadAbleNumber!: TemplateRef<any>;
  @ViewChild('buttonTemp', {static: true}) buttonTemp!: TemplateRef<any>;

  ngOnInit(): void {
    this.getSearchConfig();
    this.getExportConfig();
    this.loadGrid();
    this.getAdvanceForm();
  }

  loadGrid(): void {
    this.grid = {
      uniqueName: 'mediaGrid',
      columns: [
        {
          headerTableCell: 'read more',
          value: 'id',
          type: 'ReadMore',
          modelType: 'UserModel',
          url: '//localhost/api/media/admin/media/{{value}}/more',
          iconName: 'fa fa-caret-right',
          disableHeaderTableCell: true,
          tableConfig: [
            {
              header: 'data1',
              value: 'id',
              customTemplate: this.readMore1
            },
            {
              header: 'data2',
              value: 'title',
              customTemplate: this.readMore3
            },
            {
              header: 'data3',
              value: 'title',
              // customTemplate:this.readMore3
            }
          ]
        } as ReadMoreColumn,
        {

          headerTableCell: 'Media Name',
          value: 'title',
          type: 'Custom',
          sortAble: false,
          // sortableName: 'maualData',
          customTemplate: this.mediaTitle,
        } as CustomTemplateColumn,
        {
          headerTableCell: 'linkable',
          value: 'type',
          type: 'Link',
          sortAble: false,
          onclick: (row: any) => {
          },
        } as LinkColumn,
        {
          headerTableCell: 'release Date',
          value: 'releaseDate',
          type: 'Date',
          dateFormat: 'dd-mm-YYY',
          pipeFormat: 'date',
          customWidth: 10
        } as DateColumn,
        {
          headerTableCell: 'Genre',
          value: 'mediaGenres',
          type: 'Custom',
          customTemplate: this.humanReadAbleNumber,
        } as CustomTemplateColumn,
        {
          headerTableCell: 'status',
          value: 'status',
          type: 'Status',
          icon: 'fas fa-circle',
          color: 'red'
        } as StatusColumn,
        {
          headerTableCell: 'action',
          customWidth: 20,
          value: 'type',
          type: 'Action',
          position: 'left',
          buttonPadding: '12px',
          dropDownIcon: 'fa fa-add',
          buttonItems: [
            {
              // tooltip: {
              //   tooltipText: 'action',
              //   placement: 'bottom',
              //   tooltipAnimation: true,
              // } as TooltipConfig,
              name: 'inerLink',
              icon: 'fa fa-add',
              customClass: 'btn-custom',
              marginRight: 2,
              onclick: (row: any) => {
                return this.route.navigateByUrl(`/customer?type=${row.playCount}`);
              },
              classCallback: (row: any) => {
                if (row.type === 2) {
                  return 'badge badge-pill badge-primary';
                }
                return false;
              },
            } as ActionItem,
            {
              margin: 3,
              name: 'gav',
              icon: 'fa fa-add',
              customClass: 'btn-custom',
              customTemplate: this.buttonTemp
            } as ActionItem,
            {
              name: 'add item',
              icon: 'fa fa-add',
              customClass: 'btn-custom',
              marginRight: 5,
              buttonType: 'DropDownButton',
              dropDownIcon: 'fa fa-kesfat',
              dropDownItems: [
                {
                  name: 'view',
                  icon: 'fa fa-caret-right',
                  customClass: 'btn-custom aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  dropdownDivider: true,
                  onclick: (row: any) => {
                    this.refresh.next(true);
                  }
                } as DropDownItem,
                {
                  name: (row: any) => {
                    if (row.status === 0) {
                      return 'item1';
                    }
                    if (row.status === 3) {
                      return 'item2';
                    } else {
                      return 'item3';
                    }
                  },
                  icon: (row: any) => {
                    if (row.status === 1) {
                      return 'fas fa-play text-color-3 mr-2';
                    } else if (row.status === 2) {
                      return 'fas fa-pause text-color-3 mr-2';
                    } else {
                      return 'x';
                    }
                  },

                  customClass: 'btn-custom',
                  onclick: (row: any) => {
                    return this.route.navigateByUrl(`/customer?type=${row.playCount}`);
                  }
                } as DropDownItem,
                {
                  name: 'delete',
                  icon: 'fa fa-caret-right',
                  customClass: 'btn-custom',
                  onclick: (row: any) => {
                  }
                } as DropDownItem,
              ]
            } as ActionItem,
          ],
        } as ActionColumn,
        {
          headerTableCell: 'company',
          value: 'company',
          type: 'Icon',
          icons: [
            {
              name: 'icon-1',
              icon: 'icon-1',
              color: 'red',
              customClass: 'asal',
              tooltip: {
                tooltipText: 'hello ',
              }
            },
            {
              name: 'icon-2',
              icon: 'icon-2',
              color: 'green',
              customClass: 'asal2',
              tooltip: {
                tooltipText: 'hello2 '
              }
            },

            {
              name: 'icon-3',
              icon: 'icon-3',
              color: 'blue',
              customClass: 'asal3',
              tooltip: {
                tooltipText: 'hello3 '
              }
            }
          ]
        } as IconColumn,
      ],
      modelType: 'UserModel',
      baseUrl: 'https://jsonplaceholder.typicode.com',
      // baseUrl: '//localhost/api/media',
      relativeGetMethodUrl: 'posts',
      relativeAdvancedSearchMethodUrl: 'admin/media/filter',
      relativeExportMethodUrl: 'admin/media/export/Csv',
      simpleSearch: {
        active: true,
        queryParamName: 'q'
      } as SimpleSearch,
      pagination: {
        itemsPerPage: 10,
        maxSize: 5,
        boundaryLinks: true,
        rotate: true,
        itemPerPageSelectorOption: [10, 25, 50, 100],

      } as Pagination,
      rowClassCallback: (row: any) => {
        if (row.status === 2) {
          return '222222222222222222222222';
        }
        if (row.status === 3) {
          return '333333333333333333333';
        } else {
          return '44444444444444444444';
        }
      },
      // defaultSort: {
      //   sortColumn: 'title',
      //   sortDir: 'DESC',
      // } as DefaultSortConfig,

    };
  }

  getSearchConfig() {
    this.search = {
      placeHolder: 'placeholder aa',
      inputLabel: 'label search',
      haveButton: false,
      icon: 'sss sss',
      buttonName: 'search'
    };
  }

  getExportConfig() {
    this.export = new ExportConfig('true', 'fa fa-search', 'btn btn-primary', 'Export')
    this.export.exportResponse.subscribe(res => console.log('res', res));
  }

  getAdvanceForm() {
    this.advancedSearch = new AdvanceFormModel([
      new TextType({
        label: 'Title',
        id: 'title',
        formControlName: 'title',
        placeholder: 'Search by title',
      }),
      new SelectType({
        label: 'Record Label',
        id: 'recordLabel',
        formControlName: 'recordLabel',
        placeholder: 'Select record label',
        multiple: true,
        clearable: true,
        searchable: false,
        bindValue: 'id',
        bindLabel: 'fullName',
        relativeUrl: 'http://localhost/api/users/admin/record-labels/',
        pluckParam: 'data',
        isStatic: false,
      }),
      new SelectWithApiType({
        label: 'Artists',
        id: 'artist',
        formControlName: 'artist',
        placeholder: 'Search and select artist',
        multiple: true,
        clearable: true,
        searchable: true,
        relativeUrl: 'http://localhost/api/users/admin/artists',
        parameterName: 'q',
      }),
      new SelectWithApiType(
        {
          label: 'Albums',
          id: 'album',
          formControlName: 'album',
          placeholder: 'Search and select album',
          multiple: true,
          clearable: true,
          searchable: true,
          relativeUrl: 'http://localhost/api/media/admin/libraries',
          params: this.setTypeParams(),
          parameterName: 'q',
          bindLabel: 'title',
          bindValue: 'id'
        }
      ),
      new DateRangeType({
        formControlName: 'releaseDate',
        fromPlaceHolder: 'From',
        toPlaceHolder: 'To',
        label: 'Release date',
        dateFormat: 'YYYY-MM-DD h:mm:ss'
      })
    ], this.flagObservable.asObservable(), {text: 'Title', class: 'mb-0'});
  }

  setTypeParams() {
    let params = new HttpParams();
    params = params.append('type[]', '1');
    return params;
  }

  openAdvanceSearch() {
    this.flagObservable.next(true);
  }
}
