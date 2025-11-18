import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TODO } from './todo';

describe('TODO', () => {
  let component: TODO;
  let fixture: ComponentFixture<TODO>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TODO]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TODO);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
