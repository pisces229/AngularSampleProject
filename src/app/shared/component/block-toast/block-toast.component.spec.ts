import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockToastComponent } from './block-toast.component';

describe('BlockToastComponent', () => {
  let component: BlockToastComponent;
  let fixture: ComponentFixture<BlockToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
