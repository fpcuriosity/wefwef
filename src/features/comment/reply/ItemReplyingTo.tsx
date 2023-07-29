import styled from "@emotion/styled";
import { IonIcon } from "@ionic/react";
import { returnDownForwardSharp } from "ionicons/icons";
import { CommentView, PostView } from "lemmy-js-client";
import { getHandle } from "../../../helpers/lemmy";
import Vote from "../../labels/Vote";
import Ago from "../../labels/Ago";
import CommentContent from "../CommentContent";
import Edited from "../../labels/Edited";

const Container = styled.div`
  padding: 1rem;
  background: var(--ion-color-light);
  pointer-events: none;
  font-size: 0.875em;

  a {
    color: inherit !important;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--ion-color-medium);
  font-size: 0.875em;
  margin-bottom: 0.5rem;
`;

const StyledAgo = styled(Ago)`
  margin-left: auto;
`;

interface ItemReplyingToProps {
  item: CommentView | PostView;
}

export default function ItemReplyingTo({ item }: ItemReplyingToProps) {
  const payload = "comment" in item ? item.comment : item.post;

  return (
    <Container>
      <Header>
        <IonIcon icon={returnDownForwardSharp} /> {getHandle(item.creator)}{" "}
        <Vote item={item} />
        <Edited item={item} />
        <StyledAgo date={payload.published} />
      </Header>
      <CommentContent item={payload} />
    </Container>
  );
}
