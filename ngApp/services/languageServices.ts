namespace SOS.Services {

  export class LanguageService {

    private LANGUAGE_RESOURCE = this.$resource('/api/v1/lessons/:id');

    private COURSELANGUAGE_RESOURCE = this.$resource('/api/v1/languages/course/:id/languages');

    constructor( private $resource) {}

    public getAll() {
      return this.LANGUAGE_RESOURCE.query();
    }

    public get(id) {
      return this.LANGUAGE_RESOURCE.get({id: id});
    }

    public getAllCourseLanguages(courseId) {
      return this.COURSELANGUAGE_RESOURCE.query({id: courseId});
    }

  }

  angular.module('SOS').service('languageService', LanguageService);
}
