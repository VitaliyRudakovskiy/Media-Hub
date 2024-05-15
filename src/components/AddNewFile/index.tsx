'use client'

import { ChangeEvent } from 'react'

import Button from '@/UI/Button'

import { InputForFile, UploadFileLabel } from './styled'
import { AddNewFileProps } from './types'

const AddNewFile = ({ newFiles, setNewFiles, updatedFiles, setUpdatedFiles }: AddNewFileProps) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setNewFiles(filesArray)

      for (let i = 0; i < filesArray.length; i++) {
        setUpdatedFiles([...updatedFiles, { status: 'new', file: filesArray[0].name }])
      }
    }
  }

  console.log(newFiles)

  // const handleRemoveFile = (index: number) => {
  //   const newFilesArray = [...newFiles]
  //   newFilesArray.splice(index, 1)
  //   setNewFiles(newFilesArray)
  // }

  return (
    <Button variant='secondary'>
      <UploadFileLabel>
        Add files
        <InputForFile
          id='upload-file'
          type='file'
          multiple
          accept='.png, .jpg, .jpeg, .webp'
          onChange={handleFileChange}
        />
      </UploadFileLabel>
    </Button>
  )
}

export default AddNewFile
