/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VistasComponent } from './vistas.component';

describe('VistasComponent', () => {
  let component: VistasComponent;
  let fixture: ComponentFixture<VistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
