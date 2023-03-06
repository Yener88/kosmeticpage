import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIntroComponent } from './a-intro.component';

describe('AIntroComponent', () => {
  let component: AIntroComponent;
  let fixture: ComponentFixture<AIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
