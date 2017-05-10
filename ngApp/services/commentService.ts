namespace theblahblahblah.Services {

class CommentService {

  public COMMENT_RESOURCES = this.$resource('api/v1/comments/:id');
  public ANSWERCOMMENT_RESOURCES = this.$resource('api/v1/comments/answers/:id/comment');

  constructor(private $resource, private $window, private $state){}

  public getAll() {
    return this.COMMENT_RESOURCES.query();
  }
  public getOne() {
    return this.COMMENT_RESOURCES.get()
  }

  public save(comment) {
    return this.COMMENT_RESOURCES.save({id: comment}, comment).$promise
  }

  public delete(commentId) {
    return this.COMMENT_RESOURCES.delete({id: commentId}).$promise
  }

  public getCommentByAnswer(answerId) {
    return this.ANSWERCOMMENT_RESOURCES.query({id: answerId});
  }

}

angular.module('theblahblahblah').service('commentService', CommentService);

}
