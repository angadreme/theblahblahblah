namespace theblahblahblah.Services {

  export class CourseServices {
    private COURSE_RESOURCE = this.$resource('/api/v1/course/:id');

    constructor(private $resource) {}

    public getAll() {
      return this.COURSE_RESOURCE.query();
    }

    public get(id) {
      return this.COURSE_RESOURCE.get({id: id});
    }

    public add(course) {
      return this.COURSE_RESOURCE.save(course).$promise;
    }

    public edit(id) {
      return this.COURSE_RESOURCE.post({id: id}).$promise;
    }
  }

  angular.module('theblahblahblah').service('questionService', QuestionService);
}
