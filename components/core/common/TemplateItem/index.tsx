import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import user from '@/public/icons/common/user.svg';
import ruby from '@/public/icons/common/ruby.svg';

import * as S from './TemplateItem';

export interface TemplateItemPropsStyles {
  backgroundColor?: string;
  borderColor?: string;
  padding?: string;
  margin?: string;
}

interface TemplateItemProps extends TemplateItemPropsStyles {
  className?: string;
  type?: string;
  thumbnail?: string;
  userAvartar?: string;
  userName?: string;
  title?: string;
  listMission?: Array<any>;
  listIndustry?: Array<any>;
  reward?: string;
  participants?: number;
  id?: string;
  [key: string]: any;
}

const TemplateItem = ({
  className,
  type,
  thumbnail,
  userAvartar,
  userName,
  title,
  listMission,
  listIndustry,
  reward,
  participants,
  id = Math.random().toString(36).substring(2, 12),
  ...props
}: TemplateItemProps) => {
  const { t } = useTranslation('template');

  return (
    <S.TemplateItemWrapper id={id} className={className} {...props}>
      <S.ImageWrapper>
        <S.TemplateType>{type}</S.TemplateType>
        <Image
          src={thumbnail || ''}
          alt={title || ''}
          width={500}
          height={300}
          object-fit="contain"
        />
      </S.ImageWrapper>
      <S.TemplateInfo>
        <S.TemplateInfoTop>
          <Image
            src={userAvartar || ''}
            alt={userName || ''}
            width={24}
            height={24}
          />
          <S.TemplateInfoName>
            <S.Subtitle className="subtitle">{title}</S.Subtitle>
            <S.CreatedBy>
              {t('templateCreated')} {userName}
            </S.CreatedBy>
          </S.TemplateInfoName>
        </S.TemplateInfoTop>
        <S.TemplateMission>
          {listMission?.map((item, index) => (
            <S.TemplateMissionItem key={index}>{item}</S.TemplateMissionItem>
          ))}
        </S.TemplateMission>
        <S.TemplateIndustry>
          {listIndustry?.map((item, index) => (
            <S.TemplateIndustryItem key={index}>{item}</S.TemplateIndustryItem>
          ))}
        </S.TemplateIndustry>
        <S.TemplateInfoBottom>
          <S.TemplateReward>
            <S.Subtitle2 className="subtitle2">{t('reward')}</S.Subtitle2>
            <S.TemplateRewardContent>
              <Image
                src={ruby}
                alt=""
                width={12}
                height={16}
                unoptimized={true}
              />
              <span>{reward}</span>
            </S.TemplateRewardContent>
          </S.TemplateReward>
          <S.TemplateParticipants>
            <S.Subtitle2 className="subtitle2">{t('participants')}</S.Subtitle2>
            <S.TemplateParticipantsContent>
              <Image
                src={user}
                alt=""
                width={17}
                height={17}
                unoptimized={true}
              />
              <span>{participants}</span>
            </S.TemplateParticipantsContent>
          </S.TemplateParticipants>
        </S.TemplateInfoBottom>
      </S.TemplateInfo>
    </S.TemplateItemWrapper>
  );
};

export default TemplateItem;
