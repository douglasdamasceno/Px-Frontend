import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-top: 34px;
  gap: 175px;
`;

export const Title = styled.h1`
  font-size: 1rem;
  width: 125px;
  height: 24px;

  font-weight: 400;
  line-height: 24px;

  color: ${({ theme }) => theme.colors.text};
`;

export const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 82px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 50px;
`;
