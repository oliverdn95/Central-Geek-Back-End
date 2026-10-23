import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { Listings, Mangas, Users } from '../MockData.js';
import { NegociacaoCadastradas } from '../listing/negociar.service.js';
import { mangaCadastrados } from '../manga/manga.service.js';
import { usuarioCadastrados } from '../usuarios/usuario.service.js';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  private readonly logger = new Logger(SeedService.name);

  constructor(
    private readonly usuariosService: usuarioCadastrados,
    private readonly mangasService: mangaCadastrados,
    private readonly negociacoesService: NegociacaoCadastradas,
  ) {}

  onApplicationBootstrap() {
    this.executaSeed();
  }

  executaSeed() {
    const jaTemDados =
      this.usuariosService.retornaUsuarios().length > 0 ||
      this.mangasService.retornaMangas().length > 0 ||
      this.negociacoesService.retornaNegociacoes().length > 0;

    if (jaTemDados) {
      this.logger.log('Seed já foi executado; pulando inserção duplicada.');
      return;
    }

    Users.forEach((usuario) => this.usuariosService.adicionaUsuario(usuario));
    Mangas.forEach((manga) => this.mangasService.adicionaManga(manga));
    Listings.forEach((listing) => this.negociacoesService.adicionaNegociacao(listing));

    this.logger.log(
      `Seed inicial concluído: ${Users.length} usuários, ${Mangas.length} mangás e ${Listings.length} negociações foram carregados.`,
    );
  }
}