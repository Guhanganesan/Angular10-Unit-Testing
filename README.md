# Mytestapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## AAA 
1. Arrange inputs and targets. Arrange steps should set up the test case. Does the test require any objects or special settings? Does it need to prep a database? Does it need to log into a web app? Handle all of these operations at the start of the test.
2. Act on the target behavior. Act steps should cover the main thing to be tested. This could be calling a function or method, calling a REST API, or interacting with a web page. Keep actions focused on the target behavior.
3. Assert expected outcomes. Act steps should elicit some sort of response. Assert steps verify the goodness or badness of that response. Sometimes, assertions are as simple as checking numeric or string values. Other times, they may require checking multiple facets of a system. Assertions will ultimately determine if the test passes or fails.

# TestBed
1. One of the main utilities for unit testing components, directives, services in Angular.
2. It creates dynamically constructd angular test module that emulates an @NgModule.
3. It also prvides methods for creating components and services for uint test cases.

# Fixures
1. It is a combination of classes and templates

# Spies
1. It help us to mock the execution of methods / functions

# Spyon 
1. This method is used to get dummy return value using .and.returnvalue()
2. Spyon call the original function using .and.callThrough()

# Debug Element
1. It is an interface created to work safely across different platforms
2. It creates debugElement tree that wraps the native element paltforms instead of HTML element tree
3. The debugElement associated with the root element of the component
4. It comes methods and properties that are useful for testing
5. nativeElement returns platform specific object.



