import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { response } from 'express';
import { Courses } from 'src/schemas/courses.schema';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private coursesService : CoursesService)
    {}

    @Get()
    async getCourses(@Res() response){
        const courses = await this.coursesService.getCourses()
        return response.status(HttpStatus.OK).json({data: courses});
    }

    @Get(":courseId")
    async getCourse(@Res() response,@Param('courseId') courseId)
    {
        const course = await this.coursesService.getCoursesById(courseId);
        return response.status(HttpStatus.OK).json({data: course});
    }
    
    @Post()
    async addCourses(@Res() response, @Body() course : Courses)
    {
        const courses = await this.coursesService.addCourses(course);   
        return response.status(HttpStatus.CREATED).json({
            data:courses
        }) 
    }

    @Put(":courseId")
    async updateCourses(@Res() response,@Param('courseId') courseId ,@Body() course: Courses)
    {
        const courses = await this.coursesService.updateCourse(courseId, course);
        return response.status(HttpStatus.OK).json({
            data : courses
        })
    }

    @Delete(":courseId")
    async deletecourse(@Res() response,@Param('courseId') courseId)
    {
        const course = await this.coursesService.deleteCourses(courseId);
        return response.status(HttpStatus.OK).json({data: course})        
    }
}
