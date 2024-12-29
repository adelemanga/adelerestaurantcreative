"use client";
import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import FoodList from "../app/components/FoodList";
import Header from "./components/Header";
// import AddFood from "../app/components/AddFood";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>Hello, plat!</h1>
        {/* <AddFood /> */}
        <FoodList />
      </div>
    </ApolloProvider>
  );
}
