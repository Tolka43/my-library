import { useState } from 'react';
import Button from './Button';
import { postMail } from './helpers';

const Mail = () => {
  const [mail, setMail] = useState();
  return (
    <div className='input-group mb-3'>
      <input
        type='text'
        className='form-control'
        onChange={event => setMail(event.target.value)}
      />
      <Button
        buttonStyle='btn-secondary'
        title='wyślij maila'
        onButtonClick={() => {
          postMail(mail).then(() => alert('wysłano maila'));
        }}
      />
    </div>
  );
};

export default Mail;
