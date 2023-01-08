import styles from '../../src/styles/components/ContactButton.module.scss';

const ContactButton = (props: {
  nameValue: string;
  radioValue: string;
  addressValue: string;
  textFieldValue: string;
  nameValidation: string;
  addressValidation: string;
  textFieldValidation: string;
  radioValidation: string;
}) => {
  const onButtonClick = () => {
    const slackWebhookUrl: any = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL;
    fetch(slackWebhookUrl, {
      method: 'POST',
      body: new URLSearchParams({
        payload: `{"username": "お問い合わせの内容", "text": '名前: ${props.nameValue}\n性別: ${props.radioValue}\nメールアドレス: ${props.addressValue}\nお問い合わせ内容: ${props.textFieldValue}'}`,
      }),
    });

    alert(
      'お問い合わせを送信していただき、ありがとうございました。\n後日、返信させていただきますので、しばらくお待ちください。'
    );
  };

  function disabled() {
    if (
      props.nameValidation === '' &&
      props.addressValidation === '' &&
      props.textFieldValidation === '' &&
      props.radioValidation === ''
    ) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className={styles['c-contact-button-container']}>
      <button
        className={styles['c-contact-button']}
        type="button"
        value="send"
        onClick={onButtonClick}
        disabled={disabled()}
      >
        送信
      </button>
    </div>
  );
};

export default ContactButton;
