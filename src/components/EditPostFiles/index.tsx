'use client'

import { memo } from 'react'
import { A11y, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/scrollbar'

import { FilesContainer, Label, StyledImage, StyledImageWrapper } from './styled'
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
    <FilesContainer>
      <Label>Click on file to remove</Label>
      <Swiper
        modules={[Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        scrollbar={{ draggable: true }}
      >
        {fileLinks.map((file, index) => {
          const isFileMarkedToDelete = updatedFiles.some(
            (f) => f.status === 'toDelete' && f.fileIndexToDelete === index
          )
          return (
            <SwiperSlide key={file}>
              <StyledImageWrapper
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
            </SwiperSlide>
          )
        })}
      </Swiper>
    </FilesContainer>
  )
}

export default memo(EditPostFiles)
