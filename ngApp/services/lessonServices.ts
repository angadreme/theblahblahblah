namespace SOS.Services {

    export class LessonService {

      private LESSON_RESOURCE = this.$resource('/api/v1/lessons/:id');
      private COURSELESSON_RESOURCE = this.$resource('/api/v1/lessons/course/:id/lessons');

      constructor(private $resource) {}

      public getAll() {
        return this.LESSON_RESOURCE.query();
      }

      public get(id) {
        return this.LESSON_RESOURCE.get({id: id});
      }

      public getAllCourseLessons(courseId) {
        return this.COURSELESSON_RESOURCE.query({id: courseId});
      }
    }

    angular.module('SOS').service('lessonService', LessonService);
}
