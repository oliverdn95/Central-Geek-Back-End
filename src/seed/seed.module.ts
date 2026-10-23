import { Module } from '@nestjs/common';
import { MangaModule } from '../manga/manga.module.js';
import { NegociacaoModule } from '../listing/negociar.module.js';
import { UsuarioModule } from '../usuarios/usuario.module.js';
import { SeedService } from './seed.service.js';

@Module({
  imports: [UsuarioModule, MangaModule, NegociacaoModule],
  controllers: [],
  providers: [SeedService],
  exports: [SeedService]
})
export class SeedModule {}
