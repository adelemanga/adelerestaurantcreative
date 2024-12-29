import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import FoodList from "../app/components/FoodList";
import AddFood from "../app/components/AddFood";
import Header from "../app/components/Header";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>Le meilleur restaurant Français !</h1>
        <FoodList />
      </div>
    </ApolloProvider>
  );
}
