import { useEffect, useState } from 'react'
import { getDownloadURL, ref } from 'firebase/storage'

import { storage } from '@/firebase'

const usePhotosFromFirestore = (photoLinks: Array<string>) => {
  const [photos, setPhotos] = useState<string[]>([])

  useEffect(() => {
    const getFile = async () => {
      const filePromises = photoLinks.map(async (photoLink) => {
        const file = await getDownloadURL(ref(storage, photoLink))
        return file
      })

      const downloadedFiles = await Promise.all(filePromises)
      setPhotos(downloadedFiles)
    }

    getFile()
  }, [photoLinks])

  return photos
}

export default usePhotosFromFirestore
