'use client';

import { memo } from 'react';

import * as S from './styled';
import { CheckboxProps } from './types';

const Checkbox = ({ id, name, isChecked, onChange }: CheckboxProps) => {
  return (
    <S.CheckboxWrapper>
      <S.Checkbox type='checkbox' checked={isChecked} onChange={onChange} id={`checkbox-${id}`} />
      <S.Label htmlFor={`checkbox-${id}`}>{name}</S.Label>
    </S.CheckboxWrapper>
  );
};

export default memo(Checkbox);
