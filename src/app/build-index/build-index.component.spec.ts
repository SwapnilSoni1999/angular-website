import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildIndexComponent } from './build-index.component';

describe('BuildIndexComponent', () => {
  let component: BuildIndexComponent;
  let fixture: ComponentFixture<BuildIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
