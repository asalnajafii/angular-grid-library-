import {HttpClient} from '@angular/common/http';
import {ReadMoreParams} from '../model/readMoreParams';
import {ReadMoreResult} from '../model/readMoreResult';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ReadMoreService{
  private readMoreParams: ReadMoreParams = new ReadMoreParams();

  /**
   * @param http
   */
  constructor(private http: HttpClient) {
  }

  // -------------------------------------------------READ MORE: Start ---------------------------------------------------------//
  loadReadMore(readMoreParams: ReadMoreParams): ReadMoreResult{
    this.readMoreParams = readMoreParams;
    this.createReadMoreHtml();
    this.setReadMoreDefaultValues();
    // get element which we have id
    let readMoreHtmlElement!: HTMLElement | null ;
    readMoreHtmlElement = this.setReadMoreElementById(this.readMoreParams.data);
    // we have loop in config and then make html
    // read more column tables config have 3 property header value and template
    this.createDataFromTableConfig(this.readMoreParams.data);
    // here we must create table dynamically
    this.appendMainContainerForReadMore(this.readMoreParams.data);
    let result = new ReadMoreResult();
    result.readMoreHtml = this.readMoreParams.readMoreHtml;
    result.readMoreHtmlElement = readMoreHtmlElement;
    return result;
  }
  /**
   *
   * @param data
   */
  createDataFromTableConfig(data: any): void {
    data.tableConfig.forEach((i: any) => {
      // @ts-ignore
      this.readMoreParams.readMoreHeader.push(i.header);
      // read more value contain value and template
      // @ts-ignore
      this.readMoreParams.readMoreValue.push({value: data.data[i.value], customTemplate: i.customTemplate});
    });
  }

  /**
   * Step 1: Create main appended table for new row
   */
  createReadMoreHtml(){
    this.readMoreParams.readMoreHtml = document.createElement('td');
    this.readMoreParams.readMoreHtml.setAttribute('class', 'append-table');
    this.readMoreParams.readMoreHtml.setAttribute('colspan', `${(this.readMoreParams.grid != undefined
      && this.readMoreParams.grid.columns != undefined
      && this.readMoreParams.grid.columns.length ? this.readMoreParams.grid.columns.length : 1)}`
    );
  }

  /**
   * Step 2: Reset all read more varibale to empty array
   */
  setReadMoreDefaultValues(){
    this.readMoreParams.readMoreValue = [];
    this.readMoreParams.readMoreHeader = [];
  }

  /**
   * Step 3: Set a specific ID for read more row to get it by ID
   * @param data
   */
  setReadMoreElementById(data: any){
    // get element which we have id
    let readMoreHtmlElement!: HTMLElement | null;
    readMoreHtmlElement = document.getElementById('read-more' + data.id);
    return readMoreHtmlElement;
  }

  /**
   * Step 4: Append first and main container of read more and it's own classes
   * @param data
   */
  appendMainContainerForReadMore(data: any){
    // we need one div and it must have id and class then we must append it to read more Html field
    const div = this.htmlGenerator(
      'div',
      'child_data_local_1',
      'datatable datatable-default  datatable-scroll datatable-loaded'
    );
    this.readMoreParams.readMoreHtml.appendChild(div);
    this.appendMainTableForReadMore(div , data);
  }

  /**
   * Step 5: Append first and main table of read more and it's own classes
   * @param div
   * @param data
   */
  appendMainTableForReadMore(div: any , data: any){
    // we need one table and it must have class then div element we make before must append it
      const table = this.htmlGenerator(
      'table',
      null,
      'datatable-table table'
    );
    div.appendChild(table);
    this.appendTableHeadForReadMore(table);
    this.appendTableRowContainerForReadMore(table , data);
  }

  /**
   *
   * @param table
   */
  appendTableHeadForReadMore(table: any){
    // we need one thead and it must have class then table element we make before must append it
    const thead = this.htmlGenerator('thead', null, 'datatable-head');
    table.appendChild(thead);
    this.appendTableHeadRowForReadMore(thead);
  }
  /**
   * Step 6: Append first and main TR of read more and it's own classes, it will use for thead cells in read more
   */
  appendTableHeadRowForReadMore(thead: any){

    // we need one tr and it must have class then thead element we make before must append it
    const trHead = this.htmlGenerator(
      'tr',
      'null',
      'datatable-row'
    );
    thead.appendChild(trHead);
    // we need make td dynamically and last tr must append it (it makes header of table )

    this.readMoreParams.readMoreHeader.forEach((header: any) => {
      const tdHead = this.htmlGenerator(
        'th',
        null,
        null
      );
      trHead.appendChild(tdHead);
      tdHead.innerText = header;
    });
  }

  /**
   * Step 7: Start for adding tbody of read more
   * @param table
   * @param data
   */
  appendTableRowContainerForReadMore(table: any , data: any){
    // we need one tbody and it must have class then table must append it
    const tabBody = this.htmlGenerator(
      'tbody',
      null,
      'datatable-body'
    );
    table.appendChild(tabBody);
    this.appendEachValueForReadMore(tabBody, data);
  }

  /**
   * Step 8: Start to check each column of read more to find the correct way for showing them
   * @param tabBody
   * @param data
   */
  appendEachValueForReadMore(tabBody: any , data: any){

    let tBodyRow = this.provideMainTRForReadMore(tabBody);
    // we need make td dynamically and last tr must append it (it makes value tr of table )
    this.readMoreParams.readMoreValue.forEach((rowItem: any) => {
      // @ts-ignore
      if (this.hasCustomTemplate(rowItem)) {
        this.createCellByCustomTemplate(tBodyRow, rowItem, data);
      } else {
        this.createCellWithoutTemplate(tBodyRow, rowItem);
      }

    });
  }

  /**
   * Step 9: Create the main TR for the only row of read more
   * @param tabBody
   */
  provideMainTRForReadMore(tabBody: any){
    // we need one tr and it must have class then  tBody  must append it
    const tBodyRow = this.htmlGenerator(
      'tr',
      null,
      'datatable-row'
    );
    tabBody.appendChild(tBodyRow);
    return tBodyRow;
  }

  /**
   * Step 10: Check that this column has a customized template or not
   * @param rowItem
   */
  hasCustomTemplate(rowItem: any): boolean{
    return rowItem.customTemplate ? true : false;
  }

  /**
   * Step 11: The way for appending the cell with custom template
   * @param tBodyRow
   * @param rowItem
   * @param data
   */
  createCellByCustomTemplate(tBodyRow: any , rowItem: any , data: any){
    // we need make td dynamically and last tr must append it (it makes value tr of table )
    const td = this.htmlGenerator(
      'td',
      null,
      null
    );
    tBodyRow.appendChild(td);
    // we have custom template this part and we need read it from read more config so we need to use createEmbeddedView
    // we detectChanges it for confidence (it must be safe)
    // @ts-ignore
    const embeddedViewRef = this.readMoreParams.viewContainerRef.createEmbeddedView(rowItem.customTemplate, {row: data.data});
    embeddedViewRef.detectChanges();
    // here we have embeddedViewRef and it can be have more than one node so we need to have for on it
    for (let i = 0; i < embeddedViewRef.rootNodes.length; i++) {
      // we have 2 condition here 1-have template 2-dont have (simple value we read simply from req)
      // here we have template
      const element = embeddedViewRef.rootNodes[i];
      td.appendChild(element);
    }
  }

  /**
   * Step 12: The way for appending the cell without custom template
   * @param tBodyRow
   * @param rowItem
   */
  createCellWithoutTemplate(tBodyRow: any , rowItem: any){
    // here dont have template
    const valueTd = this.htmlGenerator(
      'td',
      null,
      null);
    // @ts-ignore
    const spanValue = this.htmlGenerator(
      'span',
      null,
      null,
      rowItem.value
    );
    tBodyRow.appendChild(valueTd);
    valueTd.appendChild(spanValue);
  }

  /**
   * its need for showReadMore method
   * @param _elementName tag name
   * @param _idName if we have id
   * @param _className if we have class
   * @param _elementValue if we have value for element
   */
  // tslint:disable-next-line:variable-name typedef
  htmlGenerator(_elementName: any, _idName?: any, _className?: any, _elementValue?: any) {
    const element = document.createElement(_elementName);
    if (_idName !== null) {
      element.setAttribute('id', _idName);
    }
    if (_className !== null) {
      element.setAttribute('class', _className);
    }
    if (_elementValue) {
      element.innerText = _elementValue;
    }
    return element;
  }

  // -------------------------------------------------READ MORE: End ---------------------------------------------------------//
}
