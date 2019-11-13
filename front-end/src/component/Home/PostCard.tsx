import React from "react";
import styled from "styled-components";

const PostWrap = styled.div`
  margin: 8px;
  width: 23%;
  height: auto;
  position: relative;
  min-width: 200px;
`;

const ImageWrap = styled.div`
  position: relative;
  padding-top: 125%; /* 4:3: 75%, 16:9: 56.25% */
  overflow: hidden;
`;

const Image = styled.img.attrs((props: any) => ({
  src: props.src
}))`
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const PostDescription = styled.div<any>`
  position: absolute;
  bottom: 0;
  left: 0;
  background: #ffffff;
  width: 100%;
  height: 50%;
`;

const PostCard: React.FC = () => {
  return (
    <>
      <PostWrap>
        <ImageWrap>
          <Image src="/images/post1.jpg" />
        </ImageWrap>
        <PostDescription>
          <h1>Post1</h1>
          <span>post test</span>
        </PostDescription>
      </PostWrap>
      <PostWrap>
        <ImageWrap>
          <Image src="/images/uiux2x.png" />
        </ImageWrap>
        <PostDescription>UI/UX</PostDescription>
      </PostWrap>
      <PostWrap>
        <ImageWrap>
          <Image src="/images/sort-down.png" />
        </ImageWrap>
        <PostDescription>Sort-down</PostDescription>
      </PostWrap>
      <PostWrap>
        <ImageWrap>
          <Image src="/images/post2.jpg" />
        </ImageWrap>
        <PostDescription>Post2</PostDescription>
      </PostWrap>
      <PostWrap>
        <ImageWrap>
          <Image src="/images/search.png" />
        </ImageWrap>
        <PostDescription>Search</PostDescription>
      </PostWrap>
      <PostWrap>
        <ImageWrap>
          <Image src="/images/post3.jpg" />
        </ImageWrap>
        <PostDescription>Post3</PostDescription>
      </PostWrap>
      <PostWrap>
        <ImageWrap>
          <Image src="/images/sort-up.png" />
        </ImageWrap>
        <PostDescription>Sort-up</PostDescription>
      </PostWrap>
    </>
  );
};

export default PostCard;
