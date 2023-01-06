import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddComponent } from './button-add.component';

describe('ButtonAddComponent', () => {
  let component: ButtonAddComponent;
  let fixture: ComponentFixture<ButtonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Debe Inicializar el contador en 0", () => {

    console.log(component.contador);

  })

  it("Debe emitor el valor de uno", () => {

    let newcounter = 0

    component.onAdd.subscribe( contador => {

      newcounter = contador

    })

    component.add()

    expect(newcounter).toBe(1)

  })

});
