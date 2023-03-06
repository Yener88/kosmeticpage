import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BLeistungenComponent } from './b-leistungen.component';

describe('BLeistungenComponent', () => {
  let component: BLeistungenComponent;
  let fixture: ComponentFixture<BLeistungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BLeistungenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BLeistungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
