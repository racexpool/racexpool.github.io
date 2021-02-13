import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Stake from '../components/stake'
import Layout from '../components/layout'
import { getPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'

type Props = {
  allPosts: {
    hero: Post
    stories: Post[]
  }
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts.hero
  const morePosts = allPosts.stories
  return (
    <>
      <Layout>
        <Head>
          <title>RaceX - Cardano ADA Stake Pool</title>
        </Head>
        <Container>
          <Intro />
          <Stake />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'hero',
  ])

  return {
    props: { allPosts },
  }
}
