import { useEffect, useState } from 'react'
import { getDownloadURL, ref } from 'firebase/storage'

import { storage } from '@/firebase'

const usePhoto = (avatarName: string | null) => {
  const [photoURL, setPhotoURL] = useState('')

  useEffect(() => {
    if (avatarName) {
      const getImageURL = async () => {
        const url = await getDownloadURL(ref(storage, avatarName))
        setPhotoURL(url)
      }
      getImageURL()
    }
  }, [avatarName])

  return photoURL
}

export default usePhoto
