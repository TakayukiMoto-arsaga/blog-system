import { useState } from 'react';
import styles from '../../src/styles/components/ContactRadio.module.scss';

const ContactRadio = (props: {
  setRadioValidation: (arg0: { validation: string; value: string }) => void;
}) => {
  const [validation, setValidation] = useState({
    validation: '性別の選択は必須です。',
    value: '',
  });

  const radioValidationMen = () => {
    setValidation({
      validation: '',
      value: '男性',
    });
  };

  const radioValidationWoman = () => {
    setValidation({
      validation: '',
      value: '女性',
    });
  };

  const radioValidationGenderOther = () => {
    setValidation({
      validation: '',
      value: 'その他',
    });
  };

  // 子から親へ値を渡す
  props.setRadioValidation(validation);

  return (
    <div className={styles['c-contact-radio']}>
      <div>
        <input
          className={styles['c-contact-radio__input']}
          id="men"
          type="radio"
          name="gender"
          onClick={radioValidationMen}
        />
        <label className={styles['c-contact-radio__label']} htmlFor="men">
          男性
        </label>
        <input
          className={styles['c-contact-radio__input']}
          id="woman"
          type="radio"
          name="gender"
          onClick={radioValidationWoman}
        />
        <label className={styles['c-contact-radio__label']} htmlFor="woman">
          女性
        </label>
        <input
          className={styles['c-contact-radio__input']}
          id="gender-other"
          type="radio"
          name="gender"
          onClick={radioValidationGenderOther}
        />
        <label
          className={styles['c-contact-radio__label-last']}
          htmlFor="gender-other"
        >
          その他
        </label>
      </div>
      <p className={styles['c-contact-radio__validation']}>
        {validation.validation}
      </p>
    </div>
  );
};

export default ContactRadio;
