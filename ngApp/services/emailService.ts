namespace SOS.Services {
  class EmailService {
    public EMAIL_RESOURCE = this.$resource('api/v1/emails/:action');
    public userEmail;

    constructor(private $resource, private $window) {}

    public getOne(email, name, action) {
      this.userEmail = this.EMAIL_RESOURCE.get({action: action}, {email: email, name: name})
      .$promise.then((data) => {
        if(data.token) {
          this.$window.sessionStorage.setItem('token', data.token);
        }
      });
      return this.userEmail;
    }
  }
  angular.module('SOS').service('emailService', EmailService);
}
