import Image from 'next/image';
import Link from 'next/link';
import styles from '../../src/styles/components/Header.module.scss';

const Header = () => {
  return (
    <header className={styles['c-header']}>
      <Link href="/" className={styles['c-header__logo']}>
        <figure>
          <Image src="/header/logo.jpg" alt="ロゴ" width={96} height={31.25} />
        </figure>
      </Link>
      <h1>ブログシステム</h1>
      <nav>
        <ul className={styles['c-header__container']}>
          <li>
            <Link className={styles['c-header__item']} href="/">
              TOPページ
            </Link>
          </li>
          <li>
            <Link className={styles['c-header__item']} href="/contact">
              お問い合わせページ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
