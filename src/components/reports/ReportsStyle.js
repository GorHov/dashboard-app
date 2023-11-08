import styled from "styled-components";

export const ReportsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReportItem = styled.div`
  padding: 20px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
`;

export const UpdateButton = styled(Button)`
  background-color: #ffca28;
`;

export const DeleteButton = styled(Button)`
  background-color: #f44336;
  padding: 10px 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px 16px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
`;

export const Message = styled.p`
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
`;

export const ReportTitle = styled.h3`
  width: 20%;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ReportContent = styled.p`
  width: 20%;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ReportDate = styled.small`
  width: 20%;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
