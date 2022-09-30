import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose';

export type coursesDocument = Courses & Document

@Schema()
export class Courses {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    url: string;
}

export const CoursesSchema = SchemaFactory.createForClass(Courses)


