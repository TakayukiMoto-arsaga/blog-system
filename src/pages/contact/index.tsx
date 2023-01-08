import { ChangeEvent, useState } from 'react';
import styles from '../../styles/Contact.module.scss';
import Head from '../../components/Head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactButton from '../../components/ContactButton';
import TextField from '../../components/TextField';
import ContactRadio from '../../components/ContactRadio';

const Contact = () => {
  const [nameValidation, setNameValidation] = useState({
    validation: '',
    value: '',
  });
  const textValidation = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 10) {
      setNameValidation({ validation: '', value: event.target.value });
    } else {
      setNameValidation({
        validation: '名前は10文字以内で入力してください。',
        value: '',
      });
    }
  };

  const [addressValidation, setAddressValidation] = useState({
    validation: '',
    value: '',
  });
  const emailValidation = (event: ChangeEvent<HTMLInputElement>) => {
    if (
      event.target.value.match(
        '^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*.)+[a-zA-Z]{2,}$'
      )
    ) {
      setAddressValidation({ validation: '', value: event.target.value });
    } else {
      setAddressValidation({
        validation: 'メールアドレスを正常な形で入力してください。',
        value: '',
      });
    }
  };

  const [textFieldValidation, setTextFieldValidation] = useState({
    validation: '',
    value: '',
  });

  const [radioValidation, setRadioValidation] = useState({
    validation: '',
    value: '',
  });

  return (
    <>
      <Head />
      <Header />
      <main className={styles['p-contact-main']}>
        <h2 className={styles['p-contact-title']}>お問い合わせ</h2>
        <form className={styles['p-contact-form']}>
          <p className={styles['p-contact-form__name-title']}>名前</p>
          <input
            className={styles['p-contact-form__name-form']}
            type="text"
            placeholder="名前を入力して下さい。"
            onChange={(event) => textValidation(event)}
          ></input>
          <p className={styles['p-contact-form__name-validation']}>
            {nameValidation.validation}
          </p>
          <p className={styles['p-contact-form__gender-title']}>性別</p>
          <ContactRadio setRadioValidation={setRadioValidation} />
          <p className={styles['p-contact-form__mail-title']}>メールアドレス</p>
          <input
            className={styles['p-contact-form__email-form']}
            type="email"
            placeholder="メールアドレスを入力して下さい。"
            onChange={(event) => emailValidation(event)}
          ></input>
          <p className={styles['p-contact-form__email-validation']}>
            {addressValidation.validation}
          </p>
          <p className={styles['p-contact-form__contact-title']}>
            お問い合わせ内容
          </p>
          <TextField setTextFieldValidation={setTextFieldValidation} />
          <ContactButton
            nameValidation={nameValidation.validation}
            nameValue={nameValidation.value}
            addressValidation={addressValidation.validation}
            addressValue={addressValidation.value}
            textFieldValidation={textFieldValidation.validation}
            textFieldValue={textFieldValidation.value}
            radioValidation={radioValidation.validation}
            radioValue={radioValidation.value}
          />
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
