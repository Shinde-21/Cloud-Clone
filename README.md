📁 Storage Management & File Sharing Platform
A modern storage management and file sharing platform built with the Next.js , React and Appwrite. Easily upload, organize, view, download, and share your files with a sleek and responsive UI.



⚙️ Tech Stack
React 19

Next.js 15

Appwrite

TailwindCSS

ShadCN UI

TypeScript

🔋 Features


✅ User Authentication with Appwrite
Signup, login, and logout functionality powered by Appwrite Authentication.

✅ File Uploads
Supports uploading of documents, images, videos, and audio files.

✅ View & Manage Files
Browse uploaded files, preview in new tab, rename, or delete files.

✅ Download Files
Download your uploaded files anytime.

✅ File Sharing
Share files with others seamlessly via e-mail for collaboration and access.

✅ Dashboard
Insightful dashboard displaying storage usage, recent uploads, and file type summary.

✅ Global Search
Find files and shared content easily with robust search.

✅ Sorting Options
Sort files by date, name, or size for better organization.

✅ Modern Responsive Design
Minimalist and clean UI that looks great on all devices.


🚀 Quick Start'

✅ Prerequisites
Make sure you have the following installed:

Git

Node.js

npm

🔄 Clone the Repository

git clone https://github.com/Shinde-21/Cloud-Clone.git
cd Cloud-Clone


npm install
🔐 Set Up Environment Variables
Create a .env.local file in the root directory and add:

NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT=""
NEXT_PUBLIC_APPWRITE_DATABASE=""
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=""
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=""
NEXT_PUBLIC_APPWRITE_BUCKET=""
NEXT_APPWRITE_KEY=""
Replace these with your actual Appwrite credentials from the Appwrite Console.

▶️ Run the Development Server

npm run dev
