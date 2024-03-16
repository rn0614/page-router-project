import styled from "styled-components"

export const  InputText: React.FC = () => {
  return (
    <Type>
      <Atom>
        <Text>Text</Text>
      </Atom>
    </Type>
  )
}

const Type = styled.div`
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1.25rem;
  gap: 0.625rem;
  background-color: #f6f6fc;
`
const  Atom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.625rem;
  background-color: #ffffff;
`
const  Text = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 1.5rem;
  color: #212121;
`
const  Img = styled.div`
  height: 24px;
  width: 24px;
  background-color: #ffffff;
`