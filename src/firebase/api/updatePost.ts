import { doc, getDoc, updateDoc } from 'firebase/firestore'

import { PostType } from '@/types/postType'

import { POSTS } from '../collections'

import deleteFilesFromStorage from './deleteFilesFromStorage'
import uploadFiles from './uploadFiles'

const updatePost = async (
  postId: string,
  email: string,
  postData: Partial<PostType>,
  filesToDelete: number[],
  filesToAdd: string[],
  newFiles: File[]
) => {
  const postRef = doc(POSTS, postId)

  let addedFiles: string[] = []
  let deletedFiles: string[] = []

  try {
    if (filesToDelete.length) deletedFiles = await deleteFilesFromStorage(postRef, filesToDelete)
    if (filesToAdd.length) addedFiles = await uploadFiles(newFiles, email)

    const currentPostData = await getDoc(postRef)
    const currentFiles: string[] = currentPostData.data()?.files || []

    const updatedFilesAfterDelete = currentFiles.filter((file) => !deletedFiles.includes(file))
    const finalFiles = [...updatedFilesAfterDelete, ...addedFiles]

    await updateDoc(postRef, { ...postData, files: finalFiles })
  } catch (error) {
    throw new Error(`Error occured while editing post: ${error}`)
  }
}

export default updatePost
