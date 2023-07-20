import React from 'react';

import * as S from './Pagination';

interface PaginationProps {
  onChange?: (page: number, page_size: number) => void;
  defaultCurrent?: number;
  defaultPageSize?: number;
  disabled?: boolean;
  pageSize?: number;
  responsive?: boolean;
  total: number;
  showLessItems?: boolean;
  current: number;
}

const Pagination = ({
  defaultCurrent,
  total,
  current,
  ...props
}: PaginationProps) => {
  return total ? (
    <S.PaginationCommon
      defaultCurrent={defaultCurrent}
      total={total}
      current={current}
      showSizeChanger={false}
      {...props}
    />
  ) : null;
};

export default Pagination;
