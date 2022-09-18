# 05 transclude dialog box

- child element can access to parent variables
  - do not need to pass value
  - too open scope, risky scope -> to component and declarative scope
  ```
    <div ng-repeat="user in users">
        <some-directive>
            {{user.name}}
        </some-directive>
    </div>
  ```
