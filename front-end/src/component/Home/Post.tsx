import React from "react";
import styled from "styled-components";

const PostWrap = styled.div``;

const PostItem = styled.div`
  background: url("/images/post1.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  /* background-position: center; */
  width: 100%;
  height: ${() => window.innerHeight}px;
`;
const Post: React.FC = () => {
  return (
    <PostWrap>
      <PostItem />
    </PostWrap>
  );
};

export default Post;
