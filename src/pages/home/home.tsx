import {
  ButtonSend,
  Container,
  ContainerRepo,
  ContentRepo,
  ListRepo,
  StyledInput,
  Title,
} from "./style";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { api } from "../../api/api";
import { UserResponse } from "../../type";
import CardRepo from "../../components/CardRepo/CardRepo";
import UseAnimations from "react-useanimations";
import loadingAnimation from "react-useanimations/lib/loading";
import { Button, message } from "antd";

function Home() {
  const [user, setUser] = useState<string | null>(null);
  const [result, setResult] = useState<UserResponse[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  function getRepositoriesWithUser() {
    setLoading(true);
    api
      .get(`users/${user}/repos`)
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          messageApi.error(
            "Não foi possível encontrar o usuário, verifique a ortografia!"
          );
        }
      })
      .finally(() => setLoading(false));
  }

  function clearList() {
    setResult(null);
    setUser(null);
  }

  return (
    <Container>
      {contextHolder}
      <h1>Repository Manager</h1>
      <ContainerRepo>
        <ContentRepo>
          <div>
            <Title>Nome de usuário</Title>
            <div style={{ display: "flex", marginTop: "6px" }}>
              <StyledInput
                placeholder="Digite seu nome de usuário do Github."
                onChange={(e) => setUser(e.target.value)}
              />
              <ButtonSend onClick={getRepositoriesWithUser}>
                <BiSearchAlt size={20} />
              </ButtonSend>
            </div>
          </div>
          <ListRepo>
            {result !== null ? (
              <>
                <Button
                onClick={clearList}
                  style={{
                    background: "transparent",
                    marginTop: "10px",
                    opacity: "0.5",
                    height: "40px",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  Limpar resultados
                </Button>
              </>
            ) : null}
            {loading && (
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <UseAnimations
                  animation={loadingAnimation}
                  strokeColor="#fff"
                />{" "}
              </div>
            )}
            {result?.map((i) => {
              return (
                <CardRepo
                  full_name={i.full_name}
                  id={i.id}
                  name={i.name}
                  owner={i.owner}
                  visibility={i.visibility}
                  svn_url={i.svn_url}
                />
              );
            })}
          </ListRepo>
        </ContentRepo>
      </ContainerRepo>
    </Container>
  );
}

export default Home;
