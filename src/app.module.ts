import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { UsuarioModule } from './usuarios/usuario.module.js';
import { MangaModule } from './manga/manga.module.js';
import { NegociacaoModule } from './listing/negociar.module.js';
import { SeedModule } from './seed/seed.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [UsuarioModule, MangaModule, NegociacaoModule, SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
