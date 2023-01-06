import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorComponent } from './contador.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDisComponent } from './button-dis/button-dis.component';

describe('ContadorComponent Unit', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContadorComponent],
    }).compileComponents();
  });

  it('Se debe crear el componente contador', () => {
    const fixture = TestBed.createComponent(ContadorComponent);

    expect(fixture.componentInstance).toBeTruthy(true);
  });

  it('Debe crear el texto Contador: 0', () => {
    const fixture = TestBed.createComponent(ContadorComponent);

    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;

    // console.log(compiled);

    expect(compiled.querySelector('h1')?.textContent).toEqual('Counter: 0');
  });

  it('El valor del contador es 0', () => {
    const counter = new ContadorComponent();

    expect(counter.contador).toBe(0);
  });
});

// TODO:########################_Button ADD_DIS_###############################

describe('Integration Testing ', () => {
  // let fixture
  let component: ContadorComponent;
  let fixture: ComponentFixture<ContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContadorComponent, ButtonAddComponent, ButtonDisComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Evento click', () => {
    const compiled: HTMLElement = fixture.nativeElement;

    const countervalue = compiled.querySelector('h1')!;

    const btnAdd: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('#add');

    const btnDis: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('#dis');

    // btnAdd.click();

    btnDis.click();

    fixture.detectChanges();

    expect(countervalue.textContent).toEqual('Counter: -1');

    // console.log(btnAdd.textContent);

    console.log(btnDis.textContent);
  });
});
