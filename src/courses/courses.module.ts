import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Courses, CoursesSchema } from 'src/schemas/courses.schema';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

@Module({
  imports:[MongooseModule.forFeature([{name:Courses.name,schema:CoursesSchema}])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
