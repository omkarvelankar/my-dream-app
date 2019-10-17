import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EployeelistComponent } from './eployeelist.component';

describe('EployeelistComponent', () => {
  let component: EployeelistComponent;
  let fixture: ComponentFixture<EployeelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EployeelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
