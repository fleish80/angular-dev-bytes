import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BytButtonComponent} from './byt-button.component';

describe('ButtonComponent', () => {
  let component: BytButtonComponent;
  let fixture: ComponentFixture<BytButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BytButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BytButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
