import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModasPageRoutingModule } from './modas-routing.module';

import { ModasPage } from './modas.page';
import { PipesModule } from '../pipes/pipes.module';
import { CabecalhoBackComponent } from '../componentes/cabecalho-back/cabecalho-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModasPageRoutingModule,
    PipesModule
  ],
  declarations: [ModasPage, CabecalhoBackComponent]
})
export class ModasPageModule {}
