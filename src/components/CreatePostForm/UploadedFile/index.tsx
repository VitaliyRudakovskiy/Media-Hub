'use client';

import { FileContainer, FileName, RemoveButton } from './styled';
import { UploadedFileProps } from './types';

const UploadedFile = ({ filename, index, onRemove }: UploadedFileProps) => {
  return (
    <FileContainer>
      <FileName>{filename}</FileName>
      <RemoveButton onClick={() => onRemove(index)}>&times;</RemoveButton>
    </FileContainer>
  );
};

export default UploadedFile;
