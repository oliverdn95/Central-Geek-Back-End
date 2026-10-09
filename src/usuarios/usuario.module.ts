import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller.js';
import { usuarioCadastrados } from './usuario.service.js';
import { emailUnicoValidator } from './validator/emailUnico.validator.js';
import { senhaForteValidator } from './validator/senhaForte.validator.js';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [usuarioCadastrados, senhaForteValidator , emailUnicoValidator],
})
export class UsuarioModule {}
