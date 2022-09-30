"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.CoursesService = void 0;
var common_1 = require("@nestjs/common");
var courses_mock_1 = require("./courses.mock");
var CoursesService = /** @class */ (function () {
    function CoursesService() {
        this.courses = courses_mock_1.COURSES;
    }
    CoursesService.prototype.getCourses = function () {
        var _this = this;
        return new Promise(function (resolve) { resolve(_this.courses); });
    };
    CoursesService.prototype.getCoursesById = function (courseId) {
        var _this = this;
        var id = Number(courseId);
        return new Promise(function (resolve, rejects) {
            var course = _this.courses.find(function (ele) { return ele.id == id; });
            course ? resolve(course) : rejects({ message: "Course Not Found" });
        });
    };
    CoursesService.prototype.addCourses = function (course) {
        var _this = this;
        return new Promise(function (resolve, rejects) {
            _this.courses = __spreadArray(__spreadArray([], _this.courses, true), [course], false);
            resolve(_this.courses);
        });
    };
    CoursesService.prototype.deleteCourses = function (courseId) {
        var _this = this;
        var id = Number(courseId);
        return new Promise(function (resolve, rejects) {
            var courseIndex = _this.courses.findIndex(function (ele) { return ele.id == id; });
            _this.courses.slice(courseIndex, 1);
            courseIndex == -1 ? rejects({ message: "Index Not found" }) : resolve(_this.courses);
        });
    };
    CoursesService = __decorate([
        (0, common_1.Injectable)()
    ], CoursesService);
    return CoursesService;
}());
exports.CoursesService = CoursesService;
