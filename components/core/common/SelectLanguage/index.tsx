import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Select } from 'antd';
import { useRouter } from 'next/dist/client/router';

import { LanguageItemType, languageData } from '@/helpers/data/language';

import * as S from './SelectLanguage';

const SelectLanguage = () => {
  const router = useRouter();

  const [convertedLanguageData, setConvertedLanguageData] = useState<
    { value: string; label: JSX.Element }[]
  >([]);
  const [languageValue, setLanguageValue] = useState<{
    value: string;
    label: JSX.Element;
  }>();

  useEffect(() => {
    if (convertedLanguageData.length && router.locale) {
      setLanguageValue(
        convertedLanguageData.find((item) => item.value === router.locale),
      );
    }
  }, [convertedLanguageData, router.locale]);

  const renderLabelLanguage = (item: LanguageItemType) => {
    return (
      <div className="flag">
        <Image src={item.image} alt="flag" fill />
      </div>
    );
  };

  useEffect(() => {
    if (languageData.length) {
      const convertedData = languageData.map((item) => ({
        value: item.value,
        label: renderLabelLanguage(item),
      }));

      setConvertedLanguageData(convertedData);
    }
  }, []);

  const iconDropDownSelect = () => {
    return (
      <div className="select-icon">
        <Image
          src="/icons/common/down-arrow-select.svg"
          alt="icon-drop-down-select"
          fill
        />
      </div>
    );
  };

  const handleOnChangeSelect = (e: any) => {
    router.push(router.asPath, router.asPath, { locale: e?.value });
    setLanguageValue(e);
  };

  return (
    <S.LanguageSelectWrapper>
      <Select
        labelInValue
        value={languageValue}
        onChange={(e) => handleOnChangeSelect(e)}
        suffixIcon={iconDropDownSelect()}
        options={convertedLanguageData}
      />
    </S.LanguageSelectWrapper>
  );
};

export default SelectLanguage;
