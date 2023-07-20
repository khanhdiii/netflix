import styled from 'styled-components';

export const WrapUpload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 12px;

  text-align: center;

  border: 1px dashed ${(props) => props.theme.colors.other.text2};
  border-radius: ${(props) => props.theme.radius.normalRadius};

  label {
    color: #949499;
    cursor: pointer;

    span {
      color: ${(props) => props.theme.colors.other.text1};
      font-weight: ${(props) => props.theme.fontWeight.bold};
    }
  }

  .hidden {
    display: none;
  }
`;
