# Stage 1: Build the Angular application
FROM node:22-alpine3.19 AS build
WORKDIR /usr/local/app
COPY ./ /usr/local/app
RUN npm install
RUN npm run build

# Stage 2: Serve the Angular application with Nginx
FROM nginx:latest
COPY --from=build /usr/local/app/dist/task-management-system/browser /usr/share/nginx/html
EXPOSE 80
