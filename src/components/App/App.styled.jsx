import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 50px auto 0;
  padding: 25px;
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  border-radius: 20px;
`;

export const MainTitle = styled.h1`
  margin-bottom: 20px;

  font-size: 32px;
  text-align: center;
  color: white;
`;

export const ContactsTitle = styled.p`
  margin-bottom: 10px;

  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: white;
`;

export const FilterTitle = styled.p`
  margin-bottom: 3px;

  font-size: 18px;
  text-align: center;
  color: white;
`;

export const NoContacts = styled.p`
  color: white;
`;
