import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // disponibiliza o modulo para ser importado por tod o projeto.
@Module({
  providers: [PrismaService],
  /**
   * para o serviço ter a capacidade de ser usado em outros modulos é necessário ao modulo informar quais classes
   * podem ser exportadas, não entendi bem o sentido disso já que se importamos um modulo queremos suas classes,
   * mas isso deve ser bom para um modulo que pode conter mais de um serviço e certos serviços devem ser usados apenas
   * em no proprio modulo e outros podem ser exportdos.
   */
  exports: [PrismaService]
})
export class PrismaModule {}
