import { Component, OnInit } from '@angular/core';
import { AutorizacaoService } from '../service/autorizacao.service';
import { ProdutosService } from '../service/produtos.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public produtos: any;
  constructor(private produtoService: ProdutosService, public autorizacaoService: AutorizacaoService, public storage: StorageService) { }

  ngOnInit() {
    this.produtoService.getProdutos()
      .subscribe((resposta) => {
        this.produtos = resposta;
      });
  }

  logout() {
    this.storage.setLocalUser(null);
    location.reload();
  }
}
