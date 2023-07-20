import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Steps } from './Step';

export default function Step({
  numberStep,
  renderTitleStep,
  handlChangeStep,
}: {
  numberStep: number;
  renderTitleStep?: (step: number) => string;
  handlChangeStep: (step: number | string) => void;
}) {
  const router = useRouter();
  const [current, setCurrent] = useState<number>(
    Number(router?.query?.step) - 1,
  );

  useEffect(() => {
    setCurrent(Number(router?.query?.step) - 1 || 0);
  }, [router]);

  const onChange = (value: number) => {
    setCurrent(value);
    handlChangeStep(value + 1);
  };

  const listItem = Array.from({ length: numberStep }, (_, index) => index);

  return (
    <Steps
      current={current}
      onChange={onChange}
      className="custom-step"
      labelPlacement="vertical"
      responsive={false}
      items={listItem?.map((step) => ({
        title: (
          <p className="subtitle">
            {renderTitleStep ? renderTitleStep(step + 1) : `Step ${step + 1}`}
          </p>
        ),
      }))}
    />
  );
}
