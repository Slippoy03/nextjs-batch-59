import styled from "styled-components";

const CardContainer = styled.div`
  background-color: ${(props) => props.bgColor || "red"};
  color: white;
  padding: 1rem;
  :hover {
    background-color: blac
  }
`;

const CardHeader = styled.div`
  border-bottom: 1px solid black;
`;

const CardContent = styled.div`
  margin: 1rem 0;
`;

const CardFooter = styled.div`
  border-top: 1px solid black;
`;

export default function Card({ bgColor }) {
  return (
    <CardContainer bgColor={bgColor}>
      <CardHeader>
        <p>Header</p>
      </CardHeader>
      <CardContent>
        <p>Content</p>
      </CardContent>
      <CardFooter>
        <p>Footer</p>
      </CardFooter>
    </CardContainer>
  );
}
