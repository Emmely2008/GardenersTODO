import {
  GetServerSideProps,
  GetStaticProps,
  GetStaticPropsContext
} from "next";
import Head from "next/head";
import React from "react";
import Layout from "../components/layout/layout";
import Todo from "../components/todo/todo";
import TodoForm from "../components/todo/todo-form/todo-form";
import TodoList from "../components/todo/todo-list/todo-list";
import TodoListItem, {
  WeatherType
} from "../components/todo/todo-list/todo-list-item/todo-list-item";
import WeatherOverview, {
  Weather
} from "../components/weather-overview/weather-overview";

interface HomeProps {
  weather: Weather[];
  city: string;
}

export default function Home(props: HomeProps) {
  const todoItems: TodoListItem[] = [];
  const { weather } = props;
  todoItems.push({
    index: 1,
    value: "Study Plants",
    done: false,
    created: Date.now(),
    condition: [WeatherType.THUNDERSTORM, WeatherType.DRIZZLE]
  });
  todoItems.push({
    index: 2,
    value: "Go shopping",
    done: true,
    created: Date.now(),
    condition: [WeatherType.RAIN]
  });
  todoItems.push({
    index: 3,
    value: "Plant flowers",
    done: true,
    created: Date.now(),
    condition: [WeatherType.CLOUDS, WeatherType.CLEAR]
  });

  return (
    <Layout>
      <Head>
        <title>Garden Todo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white rounded shadow p-2 m-2 w-full lg:w-3/4 lg:max-w-xlg">
        <div className="flex flex-wrap text-gray-900 ">
          <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 mb-4 bg-gradient-to-r from-green-100 to-green-50 rounded">
            <h1 className="text-2xl my-2 text-green-600">Gardeners Todo App</h1>
            <p className="text-base my-2  text-green-600">
              Create, update and delete todo tasks for your garden
            </p>
            <p className="text-base my-2 text-green-600">
              Add a description and prefered weather condition for the task.
            </p>
            <p className="text-base my-2 text-green-600">
              The tasks are organized according to the current weather conditon.
            </p>
          </div>
          <div className="w-full sm:w-1/1 md:w-1/2 p-2 mb-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded">
            <WeatherOverview {...props}></WeatherOverview>
          </div>
        </div>

        <Todo
          initItems={todoItems}
          currentWeather={weather[0].main as WeatherType}
        />
      </main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </footer>
    </Layout>
  );
}
export async function getStaticProps(context: GetStaticPropsContext) {
  const city = "Copenhagen";
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { ...data, city } // will be passed to the page component as props
  };
}
