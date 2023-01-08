import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { client } from '../../libs/client';
import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = ({ blog }: any) => {
  return (
    <>
      <Head />
      <Header />
      <main className={styles['p-home-main']}>
        <h2 className={styles['p-home-title']}>TOPページ(記事一覧)</h2>
        <ul className={styles['p-home-article__ul']}>
          {blog.map((blog: { id: number; title: string }) => (
            <li key={blog.id}>
              <Link
                className={styles['p-home-article__link']}
                href={`/article/?id=${blog.id}`}
              >
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
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

export default Home;
