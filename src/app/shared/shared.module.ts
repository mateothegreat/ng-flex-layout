import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MaterialModule } from './MaterialModule';
import { DataTableComponent } from './lib/DataTableComponent';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({

    imports: [

        CommonModule,
        MaterialModule,
        NgxDatatableModule,

    ],
    declarations: [

        CardComponent,
        DataTableComponent

    ],
    exports: [

        CardComponent,
        MaterialModule,
        NgxDatatableModule,

        DataTableComponent

    ]

})
export class SharedModule {
}
