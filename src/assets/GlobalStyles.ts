import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    box-sizing: border-box;
    margin:  0px;
    padding: 0px;
    font-family: 'Onest', sans-serif;
  }


  *::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
	border-radius: 10px;
	background-color: rgba(0,0,0,0.1);
}

*::-webkit-scrollbar
{
	width: 12px;
	border-radius: 10px;

	background-color: rgba(0,0,0,0.1);
}

*::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #2667ff;
}
  
`;
