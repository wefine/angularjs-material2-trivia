import { NgModule } from '@angular/core';
import {
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdSelectModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdTabsModule,
    MdToolbarModule
} from '@angular/material';
import 'hammerjs';

@NgModule({
    imports: [
        // Material
        MdInputModule, MdButtonModule, MdCheckboxModule, MdSelectModule,
        MdCardModule, MdListModule, MdTabsModule,
        MdMenuModule, MdSidenavModule, MdToolbarModule,
        MdIconModule, MdChipsModule,
        MdDialogModule, MdSnackBarModule
    ],
    exports: [
        MdInputModule, MdButtonModule, MdCheckboxModule, MdSelectModule,
        MdCardModule, MdListModule, MdTabsModule,
        MdMenuModule, MdSidenavModule, MdToolbarModule,
        MdIconModule, MdChipsModule,
        MdDialogModule, MdSnackBarModule
    ]
})
export class SharedMaterialModule {
}
