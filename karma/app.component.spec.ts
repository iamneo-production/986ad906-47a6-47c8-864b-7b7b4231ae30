import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoService } from './todo.service';
import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  });

  it(`test_case7`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const btn = fixture.debugElement.nativeElement.querySelector('#addbtn');
    expect(btn).toBeTruthy();
  });

  it(`test_case8`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const btn = fixture.debugElement.nativeElement.querySelector('#submitbtn');
    expect(btn).toBeTruthy();
  });

  it(`test_case9`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const btn = fixture.debugElement.nativeElement.querySelector('#updatebtn');
    expect(btn).toBeTruthy();
  });

  it(`test_case10`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const btn = fixture.debugElement.nativeElement.querySelector('#deleteallbtn');
    expect(btn).toBeTruthy();
  });
});
