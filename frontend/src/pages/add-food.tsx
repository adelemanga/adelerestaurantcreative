import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "../app/components/Header";
import FoodList from "../app/components/FoodList";
import AddFood from "@/app/components/AddFood";

export default function AddFoodPage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>Ajoute un plat</h1>
        <AddFood />
        <FoodList />
      </div>
    </ApolloProvider>
  );
}
