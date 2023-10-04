import { Container, Content, LineName } from "./style";
import { UserResponse } from "../../type";
import { Tag } from "antd";


function CardRepo({ full_name, owner, visibility, svn_url }: UserResponse) {

  return (
    <Container onClick={() => window.open(svn_url)}>
      <Content>
        <LineName>
            <div style={{display: "flex", alignItems: "center"}}>
          {full_name}
            </div>
          <img src={owner?.avatar_url} />
        </LineName>
        <div>
            <Tag color="#2667ff">{visibility == "public" && "Publico"}</Tag>
        </div>
      </Content>
    </Container>
  );
}

export default CardRepo;
