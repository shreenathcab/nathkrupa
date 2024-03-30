import React from 'react';

const InquiryForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const { fullName, email, mobile, car, pickup, dropoff, pickTime } = e.target.elements;

    const userMessage = {
      to: email.value,
      subject: 'Thank you for your inquiry',
      body: `Hi ${fullName.value},\n\nThank you for your inquiry. We will contact you shortly.\n\nBest regards,\nYour Company`,
    };

    const adminMessage = {
      to: 'admin@example.com',  // Replace with the admin's email address
      subject: 'New Inquiry',
      body: `New inquiry from ${fullName.value} (${email.value}).\n\nDetails:\nMobile: ${mobile.value}\nCar: ${car.value}\nPick-up: ${pickup.value}\nDrop-off: ${dropoff.value}\nPick Date and Time: ${pickTime.value}`,
    };

    // Replace with your SMTP server details
    const smtpParams = {
      host: 'smtp.your-email-provider.com',
      username: 'your-email@example.com',
      password: 'your-email-password',
      from: 'your-email@example.com',
    };

    // Send email to user
    Email.send({ ...smtpParams, ...userMessage });

    // Send email to admin
    Email.send({ ...smtpParams, ...adminMessage });

    // Add logic to show success message to the user
    console.log('Emails sent successfully!');
  };

  return (
    <form id="book" className="tour-search-form" onSubmit={sendEmail}>
      {/* ... (your existing form fields) ... */}
      <button type="submit" className="btn btn-secondary">
        Inquire now
      </button>
    </form>
  );
};

export default InquiryForm;
