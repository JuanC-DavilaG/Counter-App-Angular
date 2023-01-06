import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDisComponent } from './button-dis/button-dis.component';
import { CommonModule } from "@angular/common";

@NgModule({ 

    declarations: [ContadorComponent, ButtonAddComponent, ButtonDisComponent],

    imports: [CommonModule],

    exports: [ContadorComponent],

})
export class ContadorModule {

}