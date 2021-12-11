import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTableCellComponent } from './header-table-cell.component';

describe('HeaderTableCellComponent', () => {
  let component: HeaderTableCellComponent;
  let fixture: ComponentFixture<HeaderTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTableCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
