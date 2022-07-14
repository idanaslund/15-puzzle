import styled from "styled-components"

export const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)"
  }

export const Container = styled.section`
width: 375px;
margin: 0 auto;
@media ${devices.tablet} {
    width: 768px;
}
@media ${devices.desktop} {
  width: 1025px;
}
`

export const StyledHeader = styled.div`
display: flex;
justify-content: center;
`

export const TheBoard = styled.article`
  grid-template-columns: 70px 70px 70px 70px 70px;
  display: grid;
  padding: 10px;
  background: #D3D3D3;
  border-radius: 5px;

  @media ${devices.tablet} {
    grid-template-columns: auto auto auto auto auto;
  }
  @media ${devices.desktop} {
    grid-template-columns: auto auto auto auto auto;
  }

  .styled-board {
    margin: 1px;
    border-radius: 10px;
    background-color: #ADD8E6;
    border: solid black 1px;

    @media ${devices.tablet} {
      margin: 5px;
    }
    @media ${devices.desktop} {
      margin: 10px;
    }
  }
`

export const EachBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 75px;
border-radius: 10px;

@media ${devices.tablet} {
  height: 100px;
}
@media ${devices.desktop} {
  height: 150px;
}

&:hover {
    background-color: gray;
    cursor: pointer;
}


.NumberedBox {
  font-weight: bold;
  font-size: 20px;

  @media ${devices.tablet} {
    font-size: 24px;
  }
  @media ${devices.desktop} {
    font-size: 30px;
  }
}

.EmptyBox {
  display: none;
}
`

export const ShuffleButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  button {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 18px;
    color: white;
    width: 200px;
    padding: 10px;
    background-color: black;
    border-radius: 5px;
    border: none;
    margin: 10px;
  }

  button:hover {
    cursor: pointer;
  }

  button:active {
    background-color: white;
    color: black;
  }
`