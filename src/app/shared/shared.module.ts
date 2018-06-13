import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MaterialModule } from './MaterialModule';
import { DataTableComponent } from './lib/DataTableComponent';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppFormButtonsComponent } from '../app-form-buttons/app-form-buttons.component';
import { RouterModule } from '@angular/router';

@NgModule({

    imports: [

        CommonModule,
        MaterialModule,
        NgxDatatableModule,
        RouterModule,

    ],
    declarations: [

        CardComponent,
        DataTableComponent,
        AppFormButtonsComponent,


    ],
    exports: [

        CardComponent,
        MaterialModule,
        NgxDatatableModule,

        DataTableComponent,
        AppFormButtonsComponent,


    ]

})
export class SharedModule {
}
