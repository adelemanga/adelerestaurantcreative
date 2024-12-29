import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "../app/components/Header";
import FoodDetails from "../app/components/FoodDetails";

export default function FoodDetailsPage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>Les détails de vos plats préféré !</h1>
        <FoodDetails />
      </div>
    </ApolloProvider>
  );
}
