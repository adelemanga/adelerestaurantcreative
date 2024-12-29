import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "../app/components/Header";
import Blog from "@/app/components/Blog";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>Le meilleur restaurant Français !</h1>
        <Blog />
      </div>
    </ApolloProvider>
  );
}
