import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmsEditComponent } from './qcms-edit.component';

describe('QcmsEditComponent', () => {
  let component: QcmsEditComponent;
  let fixture: ComponentFixture<QcmsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcmsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
