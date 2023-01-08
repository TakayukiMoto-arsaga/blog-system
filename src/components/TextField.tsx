import { ChangeEvent, useState } from 'react';
import styles from '../../src/styles/components/TextField.module.scss';

const TextField = (props: {
  setTextFieldValidation: (arg0: { validation: string; value: string }) => void;
}) => {
  const [validation, setValidation] = useState({
    validation: '',
    value: '',
  });

  const textareaValidation = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= 100) {
      setValidation({
        validation: '',
        value: event.target.value,
      });
    } else {
      setValidation({
        validation: 'お問い合わせ内容は100文字以内で入力してください。',
        value: '',
      });
    }
  };

  // 子から親へ値を渡す
  props.setTextFieldValidation(validation);

  return (
    <div className={styles['c-textarea-container']}>
      <textarea
        className={styles['c-textarea']}
        rows={5}
        placeholder="お問い合わせ内容を入力して下さい。"
        onChange={(event) => textareaValidation(event)}
      ></textarea>
      <p className={styles['c-textarea-validation']}>{validation.validation}</p>
    </div>
  );
};

export default TextField;
