import React, { useRef } from 'react';
import { Tabs, message } from 'antd';
import type { TabsProps } from 'antd';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/store';
import { actionLoadingUploadFile } from '@/store/slice/common';

import UploadContent from '@/components/core/common/uploadFile/UploadContent';
import UrlContent from '@/components/core/common/uploadFile/UrlContent';

import * as S from './UploadFile';

type ModalUploadProps = {
  open: boolean;
  onlyUpload?: boolean;
  width?: number;
  onCancel: () => void;
  onOk?: () => void;
  onUpload: (file: any) => void;
};

export default function ModalUpload({
  open,
  onlyUpload,
  width,
  onCancel,
  onOk,
  onUpload,
}: ModalUploadProps) {
  const dispatch = useDispatch<AppDispatch>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    dispatch(actionLoadingUploadFile());
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      if (file.size <= 5 * 1024 * 1024) {
        onUpload(file);
      } else {
        message.warning('File size exceeds 5MB limit!');
      }
    }
  };

  const handleEnterLink = (link: string) => {
    onUpload(link);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Upload`,
      children: (
        <UploadContent
          fileInputRef={fileInputRef}
          handleFileUpload={handleFileUpload}
        />
      ),
    },
  ];

  if (!onlyUpload) {
    items.push({
      key: '2',
      label: `URL`,
      children: <UrlContent handleEnterLink={handleEnterLink} />,
    });
  }

  return (
    <S.ModalUpload
      width={width ? width : 500}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
      centered={true}
    >
      <Tabs defaultActiveKey="1" items={items} />
    </S.ModalUpload>
  );
}
