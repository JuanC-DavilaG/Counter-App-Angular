import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDisComponent } from './button-dis.component';

// describe('ButtonDisComponent', () => {
//   let component: ButtonDisComponent;
//   let fixture: ComponentFixture<ButtonDisComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ButtonDisComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ButtonDisComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('ButtonDisComponent', () => {
  let component: ButtonDisComponent;
  let fixture: ComponentFixture<ButtonDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonDisComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe Inicializar el contador en 0', () => {
    console.log(component.contador);
  });

  it('Debe emitor el valor de menos uno', () => {
    let newcounter = 0;

    component.onDis.subscribe((contador) => {
      newcounter = contador;
    });

    component.dis();

    expect(newcounter).toBe(-1);
  });
});
