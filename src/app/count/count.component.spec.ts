/**
 * The CountComponent should have a counter value, init value should be 0
 * There should be two buttons, one named Increase, other named Decrease
 * When increase is clicked(), counter value should increase by 1
 * When decrease is clicked(), counter value should decrease by 1
 * counter value should be displayed in the h1
 */

import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { CountService } from '../services/count.service';
import { CountComponent } from './count.component';

class MockCountService {
  count: number = 0;
  getCounter(): number {
    return this.count;
  }
  setCounter(value: number) {
    this.count = value;
  }
  getValues(): Observable<number[]> {
    return of([1, 2, 3, 4, 5, 6]);
  }
}

fdescribe('CountComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountComponent],
      providers: [{ provide: CountService, useValue: new MockCountService() }],
    }).compileComponents();
  });

  it('should be created', () => {
    let fixture = TestBed.createComponent(CountComponent);
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should have a counter value 0', () => {
    let fixture = TestBed.createComponent(CountComponent);
    const component = fixture.componentInstance;
    expect(component.count).toBe(0);
  });

  it('should have h1 with counter value', () => {
    let fixture = TestBed.createComponent(CountComponent);
    fixture.detectChanges();
    let h1 = fixture.elementRef.nativeElement.querySelector(
      'h1'
    ) as HTMLHeadingElement;
    let counter = fixture.componentInstance.count;
    expect(counter.toString()).toBe(h1.innerText);
  });

  it('should have two buttons', () => {
    let fixture = TestBed.createComponent(CountComponent);
    let buttons = fixture.elementRef.nativeElement.querySelectorAll('button');
    expect(buttons).toBeDefined();
    expect(buttons.length).toBe(2);
  });

  it('should increase counter when increase is clicked', () => {
    let fixture = TestBed.createComponent(CountComponent);
    let component = fixture.componentInstance;
    let primaryButton =
      fixture.elementRef.nativeElement.querySelector('.btn-primary');
    const previousValue = component.count;
    primaryButton.click();
    expect(component.count).toBe(previousValue + 1);
  });

  it('should decrease counter when decrease is clicked', () => {
    let fixture = TestBed.createComponent(CountComponent);
    let component = fixture.componentInstance;
    let secondaryButton =
      fixture.elementRef.nativeElement.querySelector('.btn-secondary');
    const previousValue = component.count;
    secondaryButton.click();
    expect(component.count).toBe(previousValue - 1);
  });

  it('should have h1 with counter value updated', () => {
    let fixture = TestBed.createComponent(CountComponent);
    let h1 = fixture.elementRef.nativeElement.querySelector(
      'h1'
    ) as HTMLHeadingElement;
    let primaryButton =
      fixture.elementRef.nativeElement.querySelector('.btn-primary');
    primaryButton.click();
    primaryButton.click();
    primaryButton.click();
    fixture.detectChanges();
    expect(h1.innerText).toBe(fixture.componentInstance.count.toString());
  });

  it('should fetch data from api', () => {
    let fixture = TestBed.createComponent(CountComponent);
    fixture.componentInstance.values$?.subscribe((values) => {
      expect(values).toEqual([1, 2, 3, 4, 5, 6]);
    });
    fixture.detectChanges();
  });
});
