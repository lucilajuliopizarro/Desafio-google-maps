//este componente se encarga de importar y exportar los elementos del material
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports: [MatToolbarModule, MatButtonModule, MatProgressBarModule]
})
export class MaterialModule {}
