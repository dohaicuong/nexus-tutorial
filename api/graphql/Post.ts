import { extendType, inputObjectType, objectType } from 'nexus'

const posts = [
  { id: '1', title: 'GraphQL post today', content: 'first post ever' },
  { id: '2', title: 'React post' },
]

export const Post = objectType({
  name: 'Post',
  definition: t => {
    t.nonNull.id('id')
    t.nonNull.string('title')
    t.string('content')
  }
})

export const PostsQueryWhereInput = inputObjectType({
  name: 'PostsQueryWhereInput',
  definition: t => {
    t.string('title')
  }
})
export const PostsQuery = extendType({
  type: 'Query',
  definition: t => {
    t.list.field('posts', {
      type: Post,
      args: {
        where: PostsQueryWhereInput
      },
      resolve: (_, { where }) => {
        if(where.title) return posts.filter(post => post.title.includes(where.title))

        return posts
      }
    })
  }
})