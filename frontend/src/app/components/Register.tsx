import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_NEW_USER } from "../../graphql/mutations";

export default function Register() {
  // Utilisation du hook useMutation avec onCompleted et onError
  const [createUser] = useMutation(CREATE_NEW_USER, {
    onCompleted: (data) => {
      console.log("Mutation completed with data:", data);
    },
    onError: (error) => {
      console.error("Erreur lors de la mutation:", error);
    },
  });

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        try {
          // Appel de la mutation avec les variables extraites du formulaire
          const response = await createUser({
            variables: formJson,
          });
          console.log("Mutation response:", response);
        } catch (error) {
          console.error("Erreur lors de la création de l'utilisateur:", error);
        }
      }}
    >
      <label>
        Email:
        <input className="textField" name="email" />
      </label>
      <br />
      <br />
      <label>
        Password:
        <input type="password" className="textField" name="password" />
      </label>
      <br />
      <button className="button2" type="submit">
        Enregistrer
      </button>
    </form>
  );
}
