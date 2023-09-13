- each file should have its own module
- to create new module, the syntax is this
  - using `[]` is sign for creating new module
  - without `[]` is adding object to the existing module
  ```
  angular.module("module-name", [
    // dependency here
  ])
  ```