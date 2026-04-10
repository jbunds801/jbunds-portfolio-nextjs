"use client"

import styled from 'styled-components';
import { useState } from 'react';

const ContactForm = () => {
  const [result, setResult] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;

    try {
      const formData = new FormData(event.currentTarget);
      formData.append('access_key', '687126e5-fb0a-4a9b-9abf-f62ca53a98c9');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log(data);
      setResult(data.success ? "Message sent!"
        : "Something went wrong, try again later.");
      if (data.success) form.reset();
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <StyledWrapper>
      <div className="shimmer-border rounded-2xl bg-(--site-text) p-0.5 w-fit">
        <div className="form-container">
          <form className="form" onSubmit={onSubmit}>

            <input className='hidden' style={{ display: 'none' }}
              type='checkbox' name='botcheck' />

            <div className="form-group text-xs">
              <label htmlFor="email">Contact Email</label>
              <input type="text" id="email" name="email" required />
            </div>

            <div className="form-group text-xs">
              <label htmlFor="message">Questions or Comments</label>
              <textarea name="message" id="message" rows={10} cols={50} required />
            </div>

            <button className="form-submit-btn text-xs" type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Submit"}
            </button>

            {result && <p className='text-xs text-center shimmer-text-active'>{result}</p>}
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form-container {
    width: 400px;
    background-color: var(--site-bg);
    padding: 32px 24px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid color-mix(in srgb, var(--site-text) 30%, transparent);
  }

  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    height: 96px;
    border: 1px solid color-mix(in srgb, var(--site-text) 30%, transparent);
    background-color: transparent;
    font-family: inherit;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: var(--color-cyan-cstm);
  }

  .form-container .form-group textarea:focus {
    outline: none;
    border-color: var(--color-pink-cstm);
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 30%;
    border: 1px solid color-mix(in srgb, var(--site-text) 30%, transparent);
    padding: 10px;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    border-color: var(--site-text);
    color: color-mix(in srgb, var(--site-text) 30%, transparent);
  }
    
   .form-container .form-submit-btn:active {
    scale: 0.9;
    border: 1px solid var(--color-cyan-cstm);
    color: var(--color-pink-cstm);
  }
    
  `;

export default ContactForm;
