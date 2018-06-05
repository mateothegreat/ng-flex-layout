import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule, MatExpansionModule,
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
        MatCardModule,
        MatExpansionModule,

    ],

    exports: [

        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatExpansionModule,

    ]

})
export class MaterialModule {
}
