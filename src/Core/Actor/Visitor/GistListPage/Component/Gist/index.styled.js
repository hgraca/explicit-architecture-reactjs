import styled from '@emotion/styled';
import { Link } from 'react-router-dom'

export const GistTitle = styled(Link)`
  background-color:rgba(0, 0, 0, 0);
  box-sizing:border-box;
  color:rgb(24, 188, 156);
  display:inline;
  font-size:32px;
  font-weight:400;
  height:auto;
  line-height:35.2px;
  text-decoration-color:rgb(24, 188, 156);
  // text-decoration-style:solid;
  text-decoration:none;
  text-size-adjust:100%;
  width:auto;
  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
  transparent
`;

export const GistDate = styled.span`
  box-sizing:border-box;
  color:rgb(180, 188, 194);
  display:inline;
  font-family:Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size:16px;
  height:auto;
  line-height:22.8571px;
  margin-right:24px;
  text-size-adjust:100%;
  width:auto;
  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
`;

export const GistAuthor = styled.span`
  box-sizing:border-box;
  color:rgb(180, 188, 194);
  display:inline;
  font-family:Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size:16px;
  height:auto;
  line-height:22.8571px;
  margin-right:24px;
  text-size-adjust:100%;
  width:auto;
  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
`;

export const GistDescription = styled.div`
  box-sizing:border-box;
  color:rgb(44, 62, 80);
  display:block;
  font-family:Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size:19px;
  height:81px;
  line-height:27.1428px;
  margin-block-end:9.5px;
  margin-block-start:0px;
  margin-bottom:9.5px;
  margin-inline-end:0px;
  margin-inline-start:0px;
  margin-left:0px;
  margin-right:0px;
  margin-top:0px;
  text-size-adjust:100%;
  width:814.5px;
  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
`;
