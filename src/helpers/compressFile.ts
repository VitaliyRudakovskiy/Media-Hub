import Compressor from 'compressorjs';

import { FileType } from '@/types/fileType';

const compressFile = (file: FileType, quality?: number, maxWidth?: number): Promise<Blob> => {
  const nonNullableFile = file! as Blob;

  return new Promise((resolve, reject) => {
    new Compressor(nonNullableFile, {
      quality: quality || 0.8,
      maxWidth: maxWidth || 1000,
      success(result) {
        resolve(result);
      },
      error(error) {
        reject(error);
      },
    });
  });
};

export default compressFile;
