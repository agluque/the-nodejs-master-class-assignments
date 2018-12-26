# The NodeJS Masterclass homework assignment #1

## Overview
Create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice.

1. When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want.

## Running the application
The application will run by default using the `prod` configuration in the port `3000` typing the following command:
```bash
node index.js
```
### Configuration profiles

The following table shows the available profiles in order to run the application. You could switch to a different profile using the `NODE_ENV` variable (default `prod`):

| Profile       | PORT            |
| ------------- |:--------------- |
| dev           | 5000            |
| prod          | 3000            |

## API
The application exposes an endpoint `/hello` which accept a `POST` request with the following payload format:

```json
{
  "name": "your_name"
}
```
The application will respond with a greeting message:

```json
{
  "greeting": "Welcome your_name!"
}
```
### HTTP Status Codes

The following is the list of HTTP status codes returned by the API:

| Code          | Description            |
| ------------- |:---------------------- |
| 200           | OK                     |
| 404           | Not Found              |
| 405           | Method not allowed     |
| 500           | Internal Server Error  |
