import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaDestinoComponent } from './rota-destino.component';

describe('RotaDestinoComponent', () => {
  let component: RotaDestinoComponent;
  let fixture: ComponentFixture<RotaDestinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotaDestinoComponent]
    });
    fixture = TestBed.createComponent(RotaDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
