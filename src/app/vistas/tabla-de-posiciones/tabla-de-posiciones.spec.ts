import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDePosiciones } from './tabla-de-posiciones';

describe('TablaDePosiciones', () => {
  let component: TablaDePosiciones;
  let fixture: ComponentFixture<TablaDePosiciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaDePosiciones],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaDePosiciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
