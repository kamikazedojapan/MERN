import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../Images/logo.png";
import { Button, Nav, Search, Logo, ErrorSpan } from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "O campo de pesquisa está vazio" })
    .refine((value) => !/^\s*$/.test(value), {message: "A pesquisa não pode conter somente espaço"}),
});

export function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();

  function onSearch({ title }) {
    navigate(`/search/${title}`);
    reset();
  }

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <Search>
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
            <input
              {...register("title")}
              type="text"
              placeholder="Pesquise por um título"
            />
          </Search>
        </form>

        <Link to="/">
          <Logo src={logo} alt="News Flash" />
        </Link>

        <Button>Entrar</Button>
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
