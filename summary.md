# image / how to create AngularJS app

# module

- create `module`
- `module` has everything
  - controllers
  - services
  - directives
  - components
- add `module` to `dependency`
- Angular take care passing items inside module
- `module('user', [])` is declaration
- `module('user')` is retrieving module

# route

- use `ui-router`
- can set `path`, `controller`, `resolve` for http request
- `resolve` to fetch data
- `controller` to pass data to `html page`

# page

- page can show data

# controller

- `route resolve` pass data to `controller`
- `controller` pass data to `page`

# data flow

- route call `service` in `resolve`
- `service` execute `http request` and pass data to `controller`
- `controller` pass data to `page`
- `page` show data

# DI / Dependency Injection

- angular pass data using DI
- items inside module can get by DI of AngularJS
- steps
  - import module file
  - import script file / controller, service, etc.
  - add dependency to module
  - (Angular execute DI)
  - get objects through argument by DI
