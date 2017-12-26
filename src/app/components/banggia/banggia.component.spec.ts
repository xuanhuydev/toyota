import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanggiaComponent } from './banggia.component';

describe('BanggiaComponent', () => {
  let component: BanggiaComponent;
  let fixture: ComponentFixture<BanggiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanggiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanggiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
