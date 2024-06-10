# Task Management System

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Pull the Docker Image

You can pull the latest version of this task management system Docker image from Docker Hub using the following command:

`docker pull abpira/task-management-system:v1`

## Run a Container

To run a Docker container with the task management system image, use the following command:

`docker run -d -p 4200:80 abpira/task-management-system:v1`

This command will start a container in detached mode (-d), exposing port 4200 on your host machine and forwarding it to port 80 inside the container. You can then access the application by navigating to `http://localhost:4200/` in your web browser.

