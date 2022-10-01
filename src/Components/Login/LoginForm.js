import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helper/Error';
import { UserContext } from '../../UserContext';
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className="appForm" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos.'} />
      </form>
      <Link to="/login/perdeu" className="appPerdeu">
        Perdeu a senha ?
      </Link>
      <div className="appCadastro">
        <h2 className="appSubtitle">Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link to="/login/criar" className="appButton">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
