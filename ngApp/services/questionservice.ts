namespace theblahblahblah.Services {

  export class QuestionService {
    private QUESTION_RESOURCE = this.$resource('/api/v1/questions/:id');
    private LESSION_RESOURCE = this.$resource('/api/v1/questions/lession/:id/questions');
    private SEARCH_RESOURCE = this.$resource('/api/v1/questions/search/:search');

    constructor(private $resource) {}

    public getAll() {
      return this.QUESTION_RESOURCE.query();
    }

    public getOne(Id) {
      return this.QUESTION_RESOURCE.get({id: Id});
    }

    public getAllbyQuestion(lessionID) {
      return this.LESSION_RESOURCE.query({id: lessionID});
    }

    public searchAnswerContent(keywords) {
      return this.SEARCH_RESOURCE.query({search: keywords});
    }

    public add(question) {
      return this.QUESTION_RESOURCE.save(question).$promise;
    }

    public update(question) {
      return this.QUESTION_RESOURCE.save({id: question._id}, question).$promise;
    }

    public delete(Id) {
      return this.QUESTION_RESOURCE.delete({id: Id}).$promise;
    }

  }

  angular.module('theblahblahblah').service('QuestionService', QuestionService);
}