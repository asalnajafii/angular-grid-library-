import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMoreColumnComponent } from './read-more-column.component';

describe('ReadMoreColumnComponent', () => {
  let component: ReadMoreColumnComponent;
  let fixture: ComponentFixture<ReadMoreColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMoreColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMoreColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
