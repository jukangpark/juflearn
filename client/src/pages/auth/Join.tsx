import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/auth/Button";

interface User {
  email: string;
  password: string;
  confirmPassword: string;
}

const Join = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = ({ email, password, confirmPassword }: User) => {
    setValue("email", "");
    setValue("password", "");
    setValue("confirmPassword", "");
    if (password !== confirmPassword) {
      return alert("비밀번호 확인이 일치하지 않습니다.");
    }

    fetch("/user/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => console.log("data:", data))
      .catch((err) => console.log("error:", err));
  };

  return (
    <div>
      <h3>회원가입</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="email"
          {...register("email", {
            required: "email 을 입력해주세요",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "올바르지 않은 이메일 형식입니다.",
            },
          })}
        />
        <p>{errors.email?.message}</p>
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
