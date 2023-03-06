import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPreislisteComponent } from './c-preisliste.component';

describe('CPreislisteComponent', () => {
  let component: CPreislisteComponent;
  let fixture: ComponentFixture<CPreislisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPreislisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CPreislisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
