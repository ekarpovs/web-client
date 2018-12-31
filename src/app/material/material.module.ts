// A separate NgModule that imports all of the Angular Material components that you will
// use in your application. You can then include this module wherever you'd like to use the components.
// Whichever approach you use, be sure to import the Angular Material modules after Angular's BrowserModule,
// as the import order matters for NgModules.

import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatListModule,
    MatGridListModule,
    MatIconModule
  } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatListModule,
    MatGridListModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatListModule,
    MatGridListModule,
    MatIconModule
  ],
})
export class MaterialModule { }
