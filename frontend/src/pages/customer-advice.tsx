import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "../app/components/Header";
import Advice from "../app/components/Advice";

export default function HomePage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <Advice />
      </div>
    </ApolloProvider>
  );
}
