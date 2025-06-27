##### Portfolio

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or later recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### 1. Install Dependencies

Open your terminal in the project root folder and run the following command to install all the necessary packages:

```bash
npm install
```

### 2. Set Up Environment Variables

The project uses a `.env` file for secret keys.

1.  Open the `.env` file in the project's root directory.
2.  Add your Resend API key. You can get a free key from [resend.com](https://resend.com).
3.  Add your Google API key. You can get a free key from [Google Cloud Console](https://console.cloud.google.com/).
4.  Save the file.

The file should look like this after you add your key:
```
RESEND_API_KEY=your_api_key_here
GOOGLE_API_KEY=your_google_api_key_here
```

### 3. Run the Development Servers

This project requires two separate terminal sessions running at the same time: one for the Next.js web application and one for the Genkit AI backend.

**In your first terminal, run the Next.js app:**

```bash
npm run dev
```

This will start the main application. You can view it by opening [http://localhost:9002](http://localhost:9002) in your browser.

**In your second terminal, run the Genkit AI service:**

```bash
npm run genkit:dev
```

This starts the backend service that powers the intelligent contact form. The Next.js app will automatically connect to it.
