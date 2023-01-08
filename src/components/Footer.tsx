import Image from 'next/image';
import Link from 'next/link';
import styles from '../../src/styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles['c-footer']}>
      <Link href="/" className={styles['c-footer__logo']}>
        <figure>
          <Image
            src="/footer/logo-footer.svg"
            alt="ロゴ"
            width={96}
            height={31.25}
          />
        </figure>
      </Link>
      <nav>
        <ul className={styles['c-footer__container']}>
          <li>
            <Link className={styles['c-footer__item']} href="/">
              TOPページ
            </Link>
          </li>
          <li>
            <Link className={styles['c-footer__item']} href="/contact">
              お問い合わせページ
            </Link>
          </li>
        </ul>
      </nav>
      <a className={styles['c-footer__top']} href="#">
        TOPへ戻る
      </a>
    </footer>
  );
};

export default Footer;
