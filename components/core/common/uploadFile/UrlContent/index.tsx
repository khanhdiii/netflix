import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

import Button from '../../Button';

import Input from '@/components/core/common/form/Input';

export default function UrlContent({
  handleEnterLink,
}: {
  handleEnterLink: any;
}) {
  const { t } = useTranslation('common');
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    setValue(null);
  }, []);

  return (
    <>
      <Input
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        placeholder={t('enterLink') as string}
      />
      <Button
        type="primary"
        width="100%"
        disabled={value ? false : true}
        onClick={() => handleEnterLink(value)}
      >
        {t('confirm')}
      </Button>
    </>
  );
}
