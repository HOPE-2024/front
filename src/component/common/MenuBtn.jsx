import React from "react";
import styled, { css } from "styled-components";

const StyledBody = styled.body`
  background: #f5f5f5;
  height: 100vh;
  margin: 0;
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px 50px;
  place-content: center;
  align-items: end;
`;

export const Hover1 = styled.h3`
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  margin: 0 auto;
  cursor: pointer;
  padding: 0 0.1em;
  --c: #1095c1; /* the color */
  --s: 0.15em;

  line-height: 1.1em;
  padding-bottom: calc(2.1 * var(--s));
  background: conic-gradient(from 135deg at top, var(--c) 90deg, #0000 0) left 0
      bottom var(--s) / calc(2 * var(--s)) var(--s) repeat-x,
    conic-gradient(from -45deg at bottom, var(--c) 90deg, #0000 0) left var(--s)
      bottom 0 / calc(2 * var(--s)) var(--s) repeat-x;
  -webkit-mask: linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0) 0 / var(--_p, 0%) padding-box no-repeat;
  transition: 0.5s;
  &:hover {
    --_p: 100%;
    color: var(--c);
  }
`;

export const Hover2 = styled.h3`
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  margin: 0 auto;
  cursor: pointer;
  padding: 0 0.1em;
  --c: #1095c1; /* the color */
  --b: 0.1em; /* border length*/
  --d: 20px; /* the cube depth */

  --_s: calc(var(--d) + var(--b));

  color: var(--c);
  border: solid #0000;
  border-width: var(--b) var(--b) var(--_s) var(--_s);
  background: conic-gradient(
        at left var(--d) bottom var(--d),
        #0000 90deg,
        rgb(255 255 255 /0.3) 0 225deg,
        rgb(255 255 255 /0.6) 0
      )
      border-box,
    conic-gradient(at left var(--_s) bottom var(--_s), #0000 90deg, var(--c) 0)
      0 100% / calc(100% - var(--b)) calc(100% - var(--b)) border-box;
  transform: translate(calc(var(--d) / -1), var(--d));
  clip-path: polygon(
    var(--d) 0%,
    var(--d) 0%,
    100% 0%,
    100% calc(100% - var(--d)),
    100% calc(100% - var(--d)),
    var(--d) calc(100% - var(--d))
  );
  transition: 0.5s;
  &:hover {
    transform: translate(0, 0);
    clip-path: polygon(
      0% var(--d),
      var(--d) 0%,
      100% 0%,
      100% calc(100% - var(--d)),
      calc(100% - var(--d)) 100%,
      0% 100%
    );
  }
`;

export const Hover3 = styled.div`
  font-size: 1em;
  cursor: pointer;
  padding: 0 0.1em;
  --b: 0.2em; /* the thickness of the line */
  --c: var(--NAVY); /* the color */

  color: #0000;
  padding-block: var(--b);
  background: linear-gradient(var(--c) 50%, #000 0) 0%
      calc(100% - var(--_p, 0%)) / 100% 200%,
    linear-gradient(var(--c) 0 0) 0% var(--_p, 0%) / var(--_p, 0%) var(--b)
      no-repeat;
  -webkit-background-clip: text, padding-box;
  background-clip: text, padding-box;
  transition: 0.3s var(--_s, 0s) linear,
    background-size 0.3s calc(0.3s - var(--_s, 0s));
  &:hover,
  &.clicked {
    --_p: 100%;
    --_s: 0.3s;
  }
`;

export const Hover4 = styled.h3`
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  margin: 0 auto;
  cursor: pointer;
  padding: 0 0.1em;
  border: 8px solid;
  border-image: repeating-linear-gradient(
      135deg,
      #f8ca00 0 10px,
      #e97f02 0 20px,
      #bd1550 0 30px
    )
    8;
  -webkit-mask: conic-gradient(
        from 180deg at top 8px right 8px,
        #0000 90deg,
        #000 0
      )
      var(--_i, 200%) 0 /200% var(--_i, 8px) border-box no-repeat,
    conic-gradient(at bottom 8px left 8px, #0000 90deg, #000 0) 0
      var(--_i, 200%) / var(--_i, 8px) 200% border-box no-repeat,
    linear-gradient(#000 0 0) padding-box no-repeat;
  transition: 0.3s, -webkit-mask-position 0.3s 0.3s;
  &:hover {
    --_i: 100%;
    color: #cc333f;
    transition: 0.3s, -webkit-mask-size 0.3s 0.3s;
  }
`;

export const TabComponent = () => {
  return (
    <StyledBody>
      <Hover1>첫번째 버튼 Hover1</Hover1>
      <Hover2>두번째 버튼 Hover2</Hover2>
      <Hover3>세번째 버튼 Hover3</Hover3>
      <Hover4>네번째 버튼 Hover4</Hover4>
    </StyledBody>
  );
};
