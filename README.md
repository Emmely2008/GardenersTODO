## About The Project

#### Gardeners Todo App

Features:

- Create, update and delete todo tasks for your garden
- Add a description and prefered weather condition for the task.
- The tasks are organized according to the current weather conditon.
- Displays the current weather conditions for Copenhagen.

The Weather data comes from and illustrations comes from the open API `https://openweathermap.org/`.

## NEXT.js

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

npm run dev
Starts the development server.

npm run build
Builds the app for production.

npm start
Runs the built app in production mode.

### Build locally

#### System Requirements

- Node.js 10.13 or later

Download the project.

Create a `.env.local` file with the API-key for OpenWeather API.

Run the following commands:

`npm install`

`npm run dev`

## TODO

Improvemens

```
 type TodoListItem = {
   done: undefined || Date;
   value: string;
   condition: WeatherType[];
   created: Date;
   index: number;
 };
```

Use comments for complex logic

Handle response times with SWR

[screenshot](./screenshot.png)
