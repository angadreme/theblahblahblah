namespace SOS.Services {

  export class AnswerService {
    private ANSWER_RESOURCE = this.$resource('/api/v1/answers/:id');
    private QUESTION_RESOURCE = this.$resource('/api/v1/answers/question/:id/answers');
    private SEARCH_RESOURCE = this.$resource('/api/v1/answers/search/:search');

    constructor(private $resource) {}

    public getAll() {
      return this.ANSWER_RESOURCE.query();
    }

    public getOne(Id) {
      return this.ANSWER_RESOURCE.get({id: Id});
    }

    public getAllbyQuestion(QuestionID) {
      return this.QUESTION_RESOURCE.query({id: QuestionID});
    }

    public searchAnswerContent(keywords) {
      return this.SEARCH_RESOURCE.query({search: keywords});
    }

    public add(answer) {
      return this.ANSWER_RESOURCE.save(answer).$promise;
    }

    public update(answer) {
      return this.ANSWER_RESOURCE.save({id: answer._id}, answer).$promise;
    }

    public delete(Id) {
      return this.ANSWER_RESOURCE.delete({id: Id}).$promise;
    }

  }

  angular.module('SOS').service('AnswerService', AnswerService);
}
