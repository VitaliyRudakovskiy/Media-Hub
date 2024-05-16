'use client'

import { ChangeEvent } from 'react'

import Button from '@/UI/Button'

import * as S from './styled'
import { AddNewFileProps } from './types'

const AddNewFile = ({ newFiles, setNewFiles, updatedFiles, setUpdatedFiles }: AddNewFileProps) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setNewFiles(filesArray)

      const newUpdatedFiles = [...updatedFiles]
      for (let i = 0; i < filesArray.length; i++)
        newUpdatedFiles.push({ status: 'new', file: filesArray[i].name })

      setUpdatedFiles(newUpdatedFiles)
    }
  }

  const handleRemoveFile = (index: number) => {
    const newFilesArray = [...newFiles]
    newFilesArray.splice(index, 1)
    setNewFiles(newFilesArray)

    const newUpdatedFiles = [...updatedFiles]
    newUpdatedFiles.splice(index, 1)
    setUpdatedFiles(newUpdatedFiles)
  }

  // TODO: Криво работает добавления вместе с удалением файлов по индексам

  return (
    <>
      <Button variant='secondary'>
        <S.UploadFileLabel>
          Add new files
          <S.InputForFile
            id='upload-file'
            type='file'
            multiple
            accept='.png, .jpg, .jpeg, .webp'
            onChange={handleFileChange}
          />
        </S.UploadFileLabel>
      </Button>
      {updatedFiles
        .filter((item) => item.status === 'new')
        .map(({ file }, index) => (
          <S.FileContainer key={file}>
            <S.FileName>{file}</S.FileName>
            <S.RemoveButton type='button' onClick={() => handleRemoveFile(index)}>
              &times;
            </S.RemoveButton>
          </S.FileContainer>
        ))}
    </>
  )
}

export default AddNewFile
