import Header from "../app/components/Header";
import client from "@/graphql/client";
import { ApolloProvider } from "@apollo/client";
import Register from "../app/components/Register";

export default function AddRegister() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <p>Register</p>
        <Register />
      </div>
    </ApolloProvider>
  );
}
