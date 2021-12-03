import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { FormEvent } from "react";

const LoginPage = () => {
  const router = useRouter();

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const username = (document.querySelector("#username") as HTMLInputElement)
      .value;
    const password = (document.querySelector("#password") as HTMLInputElement)
      .value;

    try {
      const { data } = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      console.log(data);
      router.push("/users");
    } catch (e) {
      console.error(e);
      alert("Login deu zebra!!");
    }
  }

  return (
    <div>
      <h1>Faça seu login</h1>
      <form onSubmit={onSubmit}>
        <input id="username" type="text" placeholder="usuário" />
        <br />
        <br />
        <input id="password" type="password" placeholder="senha" />
        <br />
        <br />
        <button type="submit">Fazer login</button>
      </form>
    </div>
  );
};

export default LoginPage;
