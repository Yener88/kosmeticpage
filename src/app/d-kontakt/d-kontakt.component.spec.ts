import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DKontaktComponent } from './d-kontakt.component';

describe('DKontaktComponent', () => {
  let component: DKontaktComponent;
  let fixture: ComponentFixture<DKontaktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DKontaktComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
