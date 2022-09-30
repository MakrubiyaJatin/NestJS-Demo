import { Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';
import {InjectModel} from '@nestjs/mongoose'
import {  Courses, coursesDocument } from 'src/schemas/courses.schema';
import { Model } from 'mongoose';
@Injectable()
export class CoursesService {
    courses = COURSES;
    constructor(@InjectModel(Courses.name) private courseModel : Model<coursesDocument>){}
    async getCourses(): Promise<Courses[]> {
        // return new Promise(resolve => { resolve(this.courses) })
        return await this.courseModel.find().exec();
    }

    async getCoursesById(courseId): Promise<Courses> {
        let id = courseId;
        return await this.courseModel.findById(id);
    }

    async addCourses(course: Courses): Promise<Courses> {
        const courses = await new this.courseModel(course);
        return courses.save()
    }

    async updateCourse(courseId: string , course : Courses) : Promise<any>
    {
        return await this.courseModel.findByIdAndUpdate(courseId,course,{new:true})
    }

    async deleteCourses(courseId): Promise<Courses> {
        return await this.courseModel.findByIdAndRemove(courseId)
    }
}
