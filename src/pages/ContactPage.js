import React from 'react';

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Контакти</h1>
      <p>Звяжіться з нами, якщо у вас виникли питання чи пропозиції. Ми завжди раді допомогти!</p>
      <ul>
        <li><strong>Телефон:</strong> +380 123 456 789</li>
        <li><strong>Електронна пошта:</strong> info@furniture-store.com</li>
        <li><strong>Адреса:</strong> Київ, вул. Меблева, 15</li>
        <li><strong>Години роботи:</strong> Пн-Пт з 9:00 до 18:00</li>
      </ul>
    </div>
  );
}

export default ContactPage;
