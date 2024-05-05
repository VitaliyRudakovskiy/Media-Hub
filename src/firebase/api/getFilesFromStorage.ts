import { getDownloadURL, ref } from 'firebase/storage'

import { storage } from '@/firebase'

const getFilesFromStorage = async (photoLinks: string[]) => {
  const filePromises = photoLinks?.map(async (photoLink) => {
    const file = await getDownloadURL(ref(storage, photoLink))
    return file
  })

  const downloadedFiles = await Promise.all(filePromises)
  return downloadedFiles
}

export default getFilesFromStorage
