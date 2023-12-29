import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaOrigemComponent } from './rota-origem.component';

describe('RotaOrigemComponent', () => {
  let component: RotaOrigemComponent;
  let fixture: ComponentFixture<RotaOrigemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotaOrigemComponent]
    });
    fixture = TestBed.createComponent(RotaOrigemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
