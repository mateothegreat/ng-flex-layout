import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';

@NgModule({

    imports: [

        MatIconModule,
        MatButtonModule,
        MatToolbarModule

    ],

    exports: [

        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule

    ]

})
export class MaterialModule {
}

