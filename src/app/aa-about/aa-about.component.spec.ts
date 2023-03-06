import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaAboutComponent } from './aa-about.component';

describe('AaAboutComponent', () => {
  let component: AaAboutComponent;
  let fixture: ComponentFixture<AaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
