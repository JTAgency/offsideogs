import React from 'react';

const Subscriber = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', marginBottom: '15rem', marginTop: '5rem' }}>
      <div>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#555', marginBottom: '1rem' }}>
          NEVER MISS NEW RELEASES
          <br />Enter your email to be on the list
        </p>
      </div>
      <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
        <style>
          {`
            #gumroad-follow-form-embed {
              margin: 0;
              padding: 10px;
              box-sizing: border-box;
              min-width: 0;
              max-width: 100%;
              vertical-align: bottom;
              background-clip: padding-box;
              display: grid;
              grid-auto-flow: column;
              gap: 0.75rem;
              grid-template-columns: 1fr;
              grid-auto-columns: max-content;
              align-items: center;
            }
            
            #gumroad-follow-form-embed-button {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              min-width: 0;
              max-width: 100%;
              vertical-align: bottom;
              background-clip: padding-box;
              background: transparent;
              font-size: 1rem;
              line-height: 1.5;
              padding: 0.75rem 1rem;
              border: solid 0.0625rem rgb(0 0 0 / 0.35);
              color: currentcolor;
              border-radius: 0.25rem;
              font-family: 'Mabry Pro', Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              cursor: pointer;
              text-decoration: none;
              transition-timing-function: ease-out;
              transition-duration: 0.14s;
              transition-property: all;
              background-color: rgb(0 0 0);
              color: rgb(255 255 255);
            }
            
            #gumroad-follow-form-embed-button:hover {
              transform: translate(-0.25rem, -0.25rem);
              box-shadow: 0.25rem 0.25rem 0rem rgb(221 221 221);
              background-color: rgb(224 224 224);
              color: rgb(0 0 0);
            }
            
            #gumroad-follow-form-embed-input {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              min-width: 0;
              max-width: 100%;
              vertical-align: bottom;
              background-clip: padding-box;
              font-family: 'Mabry Pro', Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
              padding: 0.75rem 1rem;
              font-size: 1rem;
              line-height: 1.5;
              border: solid 0.0625rem rgb(255 255 255 / 0.35);
              border-radius: 0.25rem;
              display: block;
              width: 100%;
              background-color: rgb(224 224 224);
              color: rgb(0 0 0);
            }
            
            #gumroad-follow-form-embed-input:disabled {
              cursor: not-allowed;
              opacity: 0.3;
            }
            
            #gumroad-follow-form-embed-input::placeholder {
              color: rgb(0 0 0 / 0.5);
            }
            
            #gumroad-follow-form-embed-input:focus-within {
              outline: 0.125rem solid rgb(0 0 0);
            }
            
            #gumroad-follow-form-embed-input:read-only {
              background-color: #000000;
            }
          `}
        </style>
        <form
          className="input-with-button"
          action="https://app.gumroad.com/follow_from_embed_form"
          method="post"
          id="gumroad-follow-form-embed"
        >
          <input type="hidden" name="seller_id" value="2393445257684" />
          <input
            id="gumroad-follow-form-embed-input"
            type="email"
            placeholder="Your email address"
            name="email"
          />
          <button
            id="gumroad-follow-form-embed-button"
            className="primary"
            type="submit"
          >
            Follow
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscriber;
