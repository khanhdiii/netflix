import styled from 'styled-components';

import { TemplateItemPropsStyles } from '.';

export const TemplateItemWrapper = styled.div<TemplateItemPropsStyles>`
  display: block;
  overflow: hidden;
  margin-bottom: 16px;
  border-radius: ${({ theme }) => theme?.radius?.mediumRadius};
  padding: 10px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
  }
`;

export const ImageWrapper = styled.div<TemplateItemPropsStyles>`
  display: block;
  border-radius: ${({ theme }) => theme?.radius?.normalRadius};
  position: relative;

  img {
    border-radius: ${({ theme }) => theme?.radius?.normalRadius};
    max-width: 100%;
    height: auto;
  }
`;

export const TemplateType = styled.div<TemplateItemPropsStyles>`
  display: inline-block;
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 2px 8px;
  background: linear-gradient(180deg, #ffa227 0%, #ee6d2d 100%);
  border-radius: ${({ theme }) => theme?.radius?.largeRadius};
  color: #fff;
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
  font-size: ${({ theme }) => theme?.fontSize?.sm};
  line-height: 1.4;
`;

export const TemplateInfo = styled.div<TemplateItemPropsStyles>`
  display: block;
`;

export const TemplateInfoTop = styled.div<TemplateItemPropsStyles>`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    background-color: #ffffff;
  }
`;

export const TemplateInfoName = styled.div<TemplateItemPropsStyles>`
  display: block;
  margin-left: 5px;
`;

export const Subtitle = styled.div<TemplateItemPropsStyles>`
  display: block;
`;

export const CreatedBy = styled.div<TemplateItemPropsStyles>`
  display: block;
  color: ${({ theme }) => theme?.colors?.other?.text2};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
  font-size: ${({ theme }) => theme?.fontSize?.xs};
  line-height: 1.4;
  margin-bottom: 4px;
`;

export const TemplateMission = styled.div<TemplateItemPropsStyles>`
  display: block;
`;

export const TemplateMissionItem = styled.div<TemplateItemPropsStyles>`
  display: inline-block;
  padding: 2px 8px;
  background: #fff5cf;
  border-radius: 24px;
  color: ${({ theme }) => theme?.colors?.other?.text1};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
  font-size: ${({ theme }) => theme?.fontSize?.xs};
  line-height: 1.4;
  margin: 0 4px 4px 0;
`;

export const TemplateIndustry = styled.div<TemplateItemPropsStyles>`
  display: block;
`;

export const TemplateIndustryItem = styled.div<TemplateItemPropsStyles>`
  display: inline-block;
  padding: 2px 8px;
  background: #c8c3ff;
  border-radius: 24px;
  color: ${({ theme }) => theme?.colors?.other?.text1};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
  font-size: ${({ theme }) => theme?.fontSize?.xs};
  line-height: 1.4;
  margin: 0 4px 4px 0;
`;

export const TemplateInfoBottom = styled.div<TemplateItemPropsStyles>`
  display: flex;
  margin-top: 4px;
`;

export const Subtitle2 = styled.div<TemplateItemPropsStyles>`
  display: block;
  color: ${({ theme }) => theme?.colors?.other?.text2};
  margin-bottom: 4px;
`;
export const TemplateReward = styled.div<TemplateItemPropsStyles>`
  display: block;
  width: 70%;
`;

export const TemplateRewardContent = styled.div<TemplateItemPropsStyles>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme?.colors?.other?.text2};

  img {
    margin-right: 7px;
  }
`;

export const TemplateParticipants = styled.div<TemplateItemPropsStyles>`
  display: block;
  width: 30%;
  min-with: 120px;
`;

export const TemplateParticipantsContent = styled.div<TemplateItemPropsStyles>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme?.colors?.other?.text2};

  img {
    margin-right: 7px;
  }
`;
