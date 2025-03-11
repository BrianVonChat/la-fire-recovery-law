# Form Tracking Setup

This codebase is set up to track form submissions using Firebase Firestore for data storage and EmailJS for email notifications. Follow the steps below to set up your form tracking.

## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project
2. Add a web app to your Firebase project
3. Enable Firestore Database in your Firebase project
4. Create a new collection called `formSubmissions` in your Firestore database
5. Get your Firebase configuration from Project Settings > General > Your Apps > SDK setup and configuration
6. Copy the Firebase configuration values to your `.env.local` file (use the `.env.local.example` file as a template)

## EmailJS Setup

1. Sign up for an account at [EmailJS](https://www.emailjs.com/)
2. Create a new Email Service by connecting your email provider (Gmail, Outlook, etc.)
3. Create a new Email Template for form submissions with the following variables:
   - `form_type`: The type of form that was submitted (Contact Form or Quick Intake Form)
   - `name`: The name of the person who submitted the form
   - `email`: The email address of the person who submitted the form
   - `phone`: The phone number of the person who submitted the form (Contact Form only)
   - `fire_location`: The fire location specified in the form (Contact Form only)
   - `message`: The message content (Contact Form only)
   - `affected_by_fire`: Whether the person was affected by a fire (Quick Intake Form only)
   - `submission_id`: The unique ID of the form submission in Firebase
4. Get your EmailJS User ID, Service ID, and Template ID
5. Copy these values to your `.env.local` file

## Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_USER_ID=your-emailjs-user-id
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-emailjs-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-emailjs-template-id
```

## Data Storage

Form submissions are stored in the Firebase Firestore database in the `formSubmissions` collection. Each submission includes:

- All form fields submitted by the user
- `createdAt`: A timestamp indicating when the form was submitted
- `formType`: The type of form that was submitted ('contact' or 'quickIntake')

## Email Notifications

When a form is submitted, an email notification is sent to the email address associated with your EmailJS service. The email includes all the relevant form data and a link to view the submission in the Firebase console.

## Testing

To test the form tracking:

1. Fill out and submit either the Contact Form or the Quick Intake Form on your website
2. Check your Firebase Firestore database to see the form submission
3. Check your email inbox for the notification email

## Troubleshooting

If form submissions are not being tracked or notifications are not being sent:

1. Check the browser console for any errors
2. Verify that your environment variables are set correctly
3. Ensure that your Firebase project and EmailJS account are set up correctly
4. Check that your Firebase security rules allow writing to the `formSubmissions` collection 