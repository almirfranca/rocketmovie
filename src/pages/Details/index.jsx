import { Container, Content } from "./styles";
import { Rating } from "../../components/Rating";

import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import avatarImg from "../../assets/avatarImg.png";

import { TiArrowLeft } from "react-icons/ti";
import { FiClock } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import { format } from "date-fns";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// const fivePositionArray = [1, 2, 3, 4, 5];

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();
  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarImg;

  function handleBack() {
    navigate(-1);
  }

  async function handleDeleteMovie() {
    const confirm = window.confirm("Deseja mesmo deletar o filme?");

    if (confirm) {
      await api.delete(`/movies/${params.id}`);
      handleBack();
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText
              title="Voltar"
              icon={TiArrowLeft}
              onClick={handleBack}
            />

            <h1>{data.title}</h1>
            <Rating data={data} />
            {/* <div className="arrayStars">
              {fivePositionArray.map((number) => {
                const shouldPaint = number <= data.rating;

                return (
                  <IoMdStar key={number} className={shouldPaint && "star"} />
                );
              })}
            </div> */}

            <div className="userCreated">
              <span>
                <img src={avatarURL} alt="Foto do usuário" />
                {`Por - ${user.name}`}
              </span>
              <span>
                <FiClock className="clock" />
                {format(data.created_at, "dd/mm/yy 'às' kk:mm")}
              </span>
            </div>

            {data.tags && (
              <Section>
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}

            <p>{data.description}</p>

            <Button title="Excluir filme" onClick={handleDeleteMovie} />
          </Content>
        </main>
      )}
    </Container>
  );
}
