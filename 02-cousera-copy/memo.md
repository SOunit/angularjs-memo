# lecture url

https://www.coursera.org/learn/single-page-web-apps-with-angularjs/home/week/5

# demo

https://damp-eyrie-18477.herokuapp.com/

# point

# template

# create files

- src
- index.html
- src/restaurant.module.js

# initialize AngularJS

- `ng-app=<module name>`

# add route

- add lib file
- dependency `ui.router`
- `$stateProvider` for route
- `$urlRouterProvider` for default route
- `ui-sref` for link

# fetch data

# service

- create service
- add service to service-module
- in main-module, add dependency to service-module
- pull service to main-module

- `service('NameService', function)`

  - `NameService` is the reference to use from other places

- create `UserService` function
- set `var service = this`
- `service.getUser = function`
