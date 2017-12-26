import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOtoComponent } from './item-oto.component';

describe('ItemOtoComponent', () => {
  let component: ItemOtoComponent;
  let fixture: ComponentFixture<ItemOtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemOtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
