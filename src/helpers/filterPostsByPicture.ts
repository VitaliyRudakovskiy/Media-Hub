import { PostWithId } from '@/types/postType'

const filterPostsByPicture = (posts: PostWithId[]) => {
  return posts.filter(({ postData }) => postData.files.length)
}

export default filterPostsByPicture
