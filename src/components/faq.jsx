import React from 'react';

function FAQ() {
  return (
    <div className="faq-page" style={{ maxWidth: '900px', margin: '80px auto', padding: '0 20px' }}>
      <h1>Frequently Asked Questions</h1>

      <div className="faq-item">
        <h2>What payment methods do you accept?</h2>
        <p>We accept all major credit cards, PayPal, Zelle, and bank transfers for your convenience. Contact us on Instagram if you have any questions or concerns. </p>
      </div>

      <div className="faq-item">
        <h2>Do you offer bulk sales?</h2>
        <p>Yes, we do offer bulk sales. If you're interested in purchasing large quantities of our products, please contact us on Instagram for a quote. Bulk orders are eligible for discounts.</p>
      </div>

      {/* <div className="faq-item">
        <h2>Can I track my order?</h2>
        <p>Yes, once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status of your delivery.</p>
      </div> */}

      <div className="faq-item">
        <h2>Do you offer international shipping?</h2>
        <p>Yes, we offer international shipping to limited countries. Shipping costs and delivery times may vary depending on your location.</p>
      </div>

      <div className="faq-item">
        <h2>How long does shipping take?</h2>
        <p>Shipping generally takes anywhere between 2-4 weeks depending on the shipping address. </p>
      </div>

      <div className="faq-item">
        <h2>What is your return policy?</h2>
        <p>We want you to be completely satisfied with your purchase. All sales are final. However, in some cases we may offer full or partial refund up to 7 days of receiving your item.</p>
      </div>
      
      <div className="faq-item">
        <h2>Do you have an affiliate program?</h2>
        <p>Yes, we have an affiliate program. Upon joining, you'll receive a unique referral code that you can share with your audience. Earn commissions for every sale made using your referral code. For more information and to sign up, please contact us on Instagram.</p>
      </div>

      {/* Add more FAQ items as needed */}

    </div>
  );
}

export default FAQ;
