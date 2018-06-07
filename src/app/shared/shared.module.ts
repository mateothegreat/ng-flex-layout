import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MaterialModule } from './MaterialModule';

@NgModule({

    imports: [

        CommonModule,
        MaterialModule

    ],
    declarations: [

        CardComponent

    ],
    exports: [

        CardComponent,
        MaterialModule

    ]

})
export class SharedModule {
}
