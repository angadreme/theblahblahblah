namespace SOS.Services {

  export class CourseServices {
    private COURSE_RESOURCE = this.$resource('/api/v1/course/:id');

    constructor(private $resource) {}

    public getAll() {
      return this.COURSE_RESOURCE.query();
    }

    public get(id) {
      return this.COURSE_RESOURCE.get({id: id});
    }
  }

  angular.module('SOS').service('questionService', QuestionService);
}
