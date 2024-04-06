import { Link, useNavigate } from "react-router-dom";
import { Title } from "../components/Title";
import { Spacer } from "../components/Spacer";

const ForgotPassword = () => {
  return (
    <div className="container">
      <Spacer size={3} />
      <Title title="Recuperação de senha" subtitle="Cheque o seu email!" />

      <Spacer size={2} />

      <p>Email enviado para:</p>
      <p>teste.atitusound@qa.com</p>

      <Spacer size={2} />

      <Link to="/login">
        <button style={{ width: 180 }} className="btn btnPrimary">
          Voltar
        </button>
      </Link>
    </div>
  );
};

export default ForgotPassword;
