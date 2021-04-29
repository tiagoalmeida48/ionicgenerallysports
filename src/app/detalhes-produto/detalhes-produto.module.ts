import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesProdutoPageRoutingModule } from './detalhes-produto-routing.module';

import { DetalhesProdutoPage } from './detalhes-produto.page';
import { ComponentesModule } from '../componentes/componentes.module';
import { LoginPageRoutingModule } from '../login/login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesModule,
    DetalhesProdutoPageRoutingModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DetalhesProdutoPage]
})
export class DetalhesProdutoPageModule {}
