import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadIndexComponent } from './download-index.component';

describe('DownloadIndexComponent', () => {
  let component: DownloadIndexComponent;
  let fixture: ComponentFixture<DownloadIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
