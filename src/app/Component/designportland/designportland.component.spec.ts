import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignportlandComponent } from './designportland.component';

describe('DesignportlandComponent', () => {
  let component: DesignportlandComponent;
  let fixture: ComponentFixture<DesignportlandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignportlandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignportlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
