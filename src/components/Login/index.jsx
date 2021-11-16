import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container } from "./style";
import axios from "axios";

const Login = ({ setText, setSucess }) => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = (formData) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", formData)
      .then((response) => {
        setText("Login feito com sucesso");
        setSucess(true);
      })
      .catch((err) => {
        setText("Email ou senha inválidos");
        setSucess(false);
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <input placeholder="Nome de usuário" {...register("username")} />
        {errors.email?.message}
        <input placeholder="Senha" type="password" {...register("password")} />
        {errors.password?.message}
        <button type="submit">Login</button>
      </form>
    </Container>
  );
};

export default Login;
