import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import * as S from './UploadContent';

import uploadIcon from '@/public/icons/common/uploadModal.svg';

export default function UploadContent({
  handleFileUpload,
  fileInputRef,
}: {
  handleFileUpload: () => void;
  fileInputRef: any;
}) {
  const { t } = useTranslation('common');

  return (
    <S.WrapUpload onClick={() => fileInputRef.current.click()}>
      <Image src={uploadIcon} alt="upload" />
      <input
        accept=".png, .jpg, .jpeg"
        id="upload-file"
        className="hidden"
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
      />
      <div>
        <label>
          <span>{t('clickToUpload')}</span> {t('dragAndDrop')}
        </label>
        <p>{t('required')}</p>
      </div>
    </S.WrapUpload>
  );
}
