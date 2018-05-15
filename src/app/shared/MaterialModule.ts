import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({

    imports: [

        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule

    ],

    exports: [

        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule

    ]

})
export class MaterialModule {
}
