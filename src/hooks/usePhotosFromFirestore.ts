import { useEffect, useState } from 'react'

import getFilesFromStorage from '@/firebase/api/getFilesFromStorage'

const usePhotosFromFirestore = (photoLinks: string[]) => {
  const [photos, setPhotos] = useState<string[]>([])

  useEffect(() => {
    const getFiles = async () => {
      const downloadedFiles = await getFilesFromStorage(photoLinks)
      setPhotos(downloadedFiles)
    }
    getFiles()
  }, [photoLinks])

  return photos
}

export default usePhotosFromFirestore
