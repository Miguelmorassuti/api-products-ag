import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://miguelguimaraesmorassuti:cSulNr3qsL4AKVWr@api-ag.2ezhy.mongodb.net/',
    ),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

// USUARIO: miguelguimaraesmorassuti
// SENHA: cSulNr3qsL4AKVWr
