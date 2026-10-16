import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { UsuarioModule } from './usuarios/usuario.module.js';
import { MangaModule } from './manga/manga.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [UsuarioModule, MangaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
