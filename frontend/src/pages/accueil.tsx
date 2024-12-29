import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "../app/components/Header";
import Home from "../app/components/Home";

export default function HomePage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <Home />
      </div>
    </ApolloProvider>
  );
}
