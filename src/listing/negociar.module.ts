import { Module } from '@nestjs/common';
import { NegociacaoController } from './negociar.controller.js';
import { NegociacaoCadastradas } from './negociar.service.js';
import { estadoNegociacaoValidator } from './validator/estadoNegociacao.validator.js';
import { tiposNegociacoesValidator } from './validator/tiposNegociacoes.validator.js';

@Module({
  imports: [],
  controllers: [NegociacaoController],
  providers: [NegociacaoCadastradas, tiposNegociacoesValidator, estadoNegociacaoValidator],
  exports: [NegociacaoCadastradas],
})
export class NegociacaoModule {}
