import styles from '../../styles/Article.module.scss';
import { client } from '../../../libs/client';
import Head from '../../components/Head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';

const Article = ({ blog }: any) => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <Head />
      <Header />
      <main className={styles['p-article-main']}>
        <h2 className={styles['p-article-title']}>記事の個別ページ</h2>
        {blog.map((blog: { id: any; title: string; body: string }) =>
          blog.id === id ? (
            <div key={blog.id}>
              <h3 className={styles['p-article-weather__title']}>
                {blog.title}
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: `${blog.body}`,
                }}
              />
            </div>
          ) : (
            ''
          )
        )}
      </main>
      <Footer />
    </>
  );
};

// データをテンプレートに受け渡す部分を記述
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Article;
