'use client'

import { memo } from 'react'

import { FilesContainer, StyledImage, StyledImageWrapper } from './styled'
import { EditPostFilesProps } from './types'

const EditPostFiles = ({ fileLinks, updatedFiles, setUpdatedFiles }: EditPostFilesProps) => {
  const handleDeletePhoto = (index: number) => {
    const fileIndex = updatedFiles.findIndex(
      ({ status, fileIndexToDelete }) => status === 'toDelete' && fileIndexToDelete === index
    )

    if (fileIndex !== -1) {
      const filesToDelete = [...updatedFiles]
      filesToDelete.splice(fileIndex, 1)
      setUpdatedFiles(filesToDelete)
    } else {
      setUpdatedFiles([...updatedFiles, { status: 'toDelete', fileIndexToDelete: index }])
    }
  }

  return (
    <>
      <p>Click on file to remove</p>
      <FilesContainer>
        {fileLinks.map((file, index) => {
          const isFileMarkedToDelete = updatedFiles.some(
            (f) => f.status === 'toDelete' && f.fileIndexToDelete === index
          )
          return (
            <StyledImageWrapper
              key={file}
              onClick={() => handleDeletePhoto(index)}
              $toDelete={isFileMarkedToDelete}
            >
              <StyledImage
                src={file}
                alt={`post image ${file}`}
                title={`post file with link ${file}`}
                width={150}
                height={100}
              />
            </StyledImageWrapper>
          )
        })}
      </FilesContainer>
    </>
  )
}

export default memo(EditPostFiles)
