import { Module } from '@nestjs/common';
import { MangaController } from './manga.controller.js';
import { mangaCadastrados } from './manga.service.js';
import { mangaCondition } from './validator/mangaCondition.validator.js';

@Module({
  imports: [],
  controllers: [MangaController],
  providers: [mangaCadastrados, mangaCondition],
  exports: [mangaCadastrados],
})
export class MangaModule {}
