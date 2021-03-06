import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.text_label};
`;

export const Input = styled.input`
  width: 423px;
  height: 48px;

  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border_color};
`;
