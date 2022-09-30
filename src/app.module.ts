import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CoursesModule, MongooseModule.forRoot('mongodb://localhost/nest-demo-db'), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
