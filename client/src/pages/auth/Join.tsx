import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/auth/Button";

interface User {
  id: string;
  password: string;
  confirmPassword: string;
}

const Join = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = ({ id, password, confirmPassword }: User) => {
    console.log(id, password, confirmPassword);
    fetch("/user/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h3>회원가입</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="id" {...register("id")} />
        <input
          placeholder="password"
          type="password"
          {...register("password")}
        />
        <input
          placeholder="비밀 번호 확인"
          type="password"
          {...register("confirmPassword")}
        />
        <Button>회원가입</Button>
      </form>
    </div>
  );
};

export default Join;
