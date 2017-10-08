import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmAppComponent } from './qcm-app.component';

describe('QcmAppComponent', () => {
  let component: QcmAppComponent;
  let fixture: ComponentFixture<QcmAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcmAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
