import { responseInterceptor } from "http-proxy-middleware";
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
    // try .. catch 문은 동기적으로 동작한다.

    fetch("/user/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          console.log(res);

          throw new Error(`${res.status} 에러가 발생했습니다.`);
        }
        return res.json();
      })
      .then((data) => console.log("데이터", data))
      .catch((error) => console.log("에러 메시지", error));
  };

  return (
    <div>
      <h3>회원가입</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
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
        </div>
        <div>
          <input
            placeholder="password"
            type="password"
            {...register("password")}
          />
        </div>
        <div>
          <input
            placeholder="비밀 번호 확인"
            type="password"
            {...register("confirmPassword")}
          />
          <Button>회원가입</Button>
        </div>
      </form>
    </div>
  );
};

export default Join;
