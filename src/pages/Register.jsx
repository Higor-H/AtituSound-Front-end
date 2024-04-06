import { Link, useNavigate } from "react-router-dom";
import { Title } from "../components/Title";
import { Spacer } from "../components/Spacer";
import { signup } from "../services/auth";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, password, passwordRepeat, username } = event.target;

    if (password.value !== passwordRepeat.value) {
      alert("Senha e repita sua senha não são iguais");
      return;
    }

    // fullName: Teste Higor
    // email: teste.higor@example.com
    // password: 123456
    // username: Teste_Higor

    try {
      const newUser = {
        name: name.value,
        email: email.value,
        password: password.value,
        username: username.value
      };

      await signup(newUser);

      alert("Cadastro realizado com sucesso!");
      // redirecionar o usuario para tela de login

      navigate("/login");
    } catch (error) {
      //Na tela de cadastro, quando ocorrer um erro, exibir uma mensagem não utilizando alert, mas criando uma div dizendo que houve um erro ao criar a conta
      alert("Erro ao efetuar seu cadastro, verifique os dados informados.");
      console.log("Erro de cadastro", error);

      if (error.response) {
        console.log(error.response.status);
      }
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Spacer size={2} />

        <Title
          title="Vamos criar uma conta"
          subtitle="Prencha os dados abaixo"
        />

        <Spacer size={2} />

        <input
          className="input"
          placeholder="Nome Completo"
          type="text"
          maxLength={120}
          name="name"
          required
        />

        <Spacer size={1} />

        <input
          className="input"
          placeholder="E-mail"
          type="email"
          maxLength={120}
          name="email"
          required
        />

        <Spacer size={1} />

        <input
          className="input"
          placeholder="Sua senha"
          type="password"
          maxLength={15}
          name="password"
          required
        />

        <Spacer size={1} />

        <input
          className="input"
          placeholder="Repita sua senha"
          type="password"
          maxLength={15}
          name="passwordRepeat"
          required
        />

        <Spacer size={1} />

        <input
          className="input"
          placeholder="Nome de usuário"
          type="text"
          maxLength={30}
          name="username"
          required
        />

        <Spacer size={1} />

        <button className="btn btnPrimary" type="submit">
          Criar conta
        </button>

        <Spacer size={2} />

        <hr />

        <Link to="/login">
          <button className="btn btnPrimary">Voltar para login</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
