

<div align="center">

![Image](https://github.com/user-attachments/assets/0abc3d98-a082-4c44-957a-f2e7ae2bde23)

A fully-functional, modern Reddit-inspired app with custom subreddits, threaded comments, user-based moderation, and real-time interactions — built for speed, scalability, and fun.

[🌐 Live Demo](https://reddit-clone-hazel.vercel.app)   •   [📁 View Code](https://github.com/AKdevi99/reddit-clone)


</div>

---

## ⚡️ Features at a Glance

* 🧑‍🚀 **Authentication**: Clerk with OAuth, email, and username
* 🧵 **Comments**: Nested, reply-enabled with live UI updates
* 🆙 **Voting System**: Upvote/downvote tracked per user
* 🧑‍⚖️ **Moderation**: Content reporting + soft deletion
* 🌐 **Subreddit Slugs**: Dynamic route-based community pages
* ✨ **CMS-powered**: Sanity + GROQ for flexible content
* 📱 **Responsive**: Clean Tailwind design, mobile-ready

---

## 🚀 Tech Stack

<div align="center">
  <a href="https://nextjs.org/" target="_blank"><img src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white"/></a>
  <a href="https://tailwindcss.com/" target="_blank"><img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/></a>
  <a href="https://clerk.dev/" target="_blank"><img src="https://img.shields.io/badge/Clerk-3A1C78?style=for-the-badge&logo=clerk&logoColor=white"/></a>
  <a href="https://www.sanity.io/" target="_blank"><img src="https://img.shields.io/badge/Sanity-FF4747?style=for-the-badge&logo=sanity&logoColor=white"/></a>
  <a href="https://groq.dev/" target="_blank"><img src="https://img.shields.io/badge/GROQ-000000?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAH0lEQVQokWNgQAX/GdiAMAyMDIwgGZiZ/4QMAK9cQwXUwWeeAAAAAElFTkSuQmCC&logoColor=white"/></a>
  <a href="https://vercel.com/" target="_blank"><img src="https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=white"/></a>
</div>

---

Perfect! With 12 feature screenshots/gifs, you can make your README both impressive and scroll-stopping by turning them into a **responsive visual showcase**.

Here’s a **modern, clean Markdown layout** for your GitHub README with 3–row grid image previews and short feature labels:

---

### 🔍 Live Feature Preview

<div align="center">

| 🏠 Home                                                           | 🔐 Login                                                            | 🌐 Create Community                                                                       |
| ----------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Home](https://github.com/user-attachments/assets/e3f3daa9-34ef-4a28-a840-f2b6d27decac) | ![Login](https://github.com/user-attachments/assets/f50fe5aa-ab01-4dbd-827e-8e55e654ccd9) | ![Create Community](https://github.com/user-attachments/assets/8a637b53-ae67-4e6c-a027-07db0fcd424f)|

| 🧵 Community Page                                                           | ✍️ Create Post                                                                  | 🔎 Search Bar                                                         |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| ![Community](https://github.com/user-attachments/assets/9cf5fee5-23e1-442e-a247-db90307a761a) | ![Create Post](https://github.com/user-attachments/assets/d9234a88-c803-48d5-881c-7ad79cb9d89e) | ![Search](https://github.com/user-attachments/assets/7bfb7da8-2f8e-4afd-83d8-a6a08ac4d631) |

| 💬 Comment                                                              | ⬆️ Vote                                                           | 📚 Sidebar                                                              |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------- |
| ![Comment](https://github.com/user-attachments/assets/47e7e2f1-d72a-4980-b256-43fda5efbd34) | ![Vote](https://github.com/user-attachments/assets/d1d900f9-a8f0-4548-b864-f8e8fe131d5c) | ![Sidebar](https://github.com/user-attachments/assets/c622c4c2-93e6-4abc-91b6-a1c96dec328b) |

| 🚩 Report                                                             | ❌ Delete                                                              | 📝 Post from Home                                                                     |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| ![Report](https://github.com/user-attachments/assets/0298024c-e959-4e9b-bfd1-a9359c3da9a1) | ![Delete](https://github.com/user-attachments/assets/d7597051-3503-4005-ac55-258349f3b781) | ![Post from Home](https://github.com/user-attachments/assets/cf9510d6-a0b9-484e-aaf6-9efba8d23afb) | ![image](https://github.com/user-attachments/assets/d6e4e609-56e1-4891-90f5-6b40c05ce05c) |

</div>


---

## 🧩 Folder Structure

```bash
📦 reddit-clone
┣ 📂 app
┃ ┣ 📂 community/[slug]       → Subreddit pages
┃ ┣ 📂 doc/[id]                → Room + collaboration
┃ ┗ 📜 layout.tsx / page.tsx   → Root layout & homepage
┣ 📂 components                → UI & logic building blocks
┣ 📂 lib                       → Sanity client, utils
┣ 📂 sanity                    → Schema, config, queries
┣ 📂 types                     → Sanity-generated types
┣ 📂 styles                    → Tailwind & animations
```

---

## 🛠️ Local Setup

```bash
git clone https://github.com/AKdevi99/reddit-clone
cd reddit-clone
npm install

# Configure your .env file with:
# - CLERK_API_KEY
# - SANITY_PROJECT_ID
# - NEXT_PUBLIC_SANITY_DATASET


npm run dev
```

---

## ✨ What’s Coming Next?

* 🔐 Role-based access (Mod/Admin panel)
* 🧠 AI-powered comment filters (fun & smart!)
* 📈 Trending algorithm
* 🌍 Dark mode toggle
* 🎯 Post sorting & search

---

🧭 Why I Built This
Reddit is awesome — but building it yourself teaches you a LOT more. This clone was created to master:

Dynamic routing (Next.js App Router)

CMS-driven content (Sanity + GROQ)

Realtime interactions (votes, comments)

Access control & moderation (Clerk + Firestore rules)

Clean, scalable architecture

---

## 🙋‍♂️ Meet the Maker

> “I believe good design, great UX, and clean code belong together.”

Made with ❤️ by [**Aditya Singh**](https://github.com/AKdevi99)
🎓 Chairman, IEEE Student Branch — RVITM
🏆 Topper | Hackathon Mentor | Full-stack Explorer

<div align="center"> <a href="https://github.com/AKdevi99" target="_blank"> <img src="https://img.shields.io/github/followers/AKdevi99?label=Follow%20me%20on%20GitHub&logo=github&style=for-the-badge" alt="Follow on GitHub" /> </a> <a href="https://www.linkedin.com/in/aditya-singh-938152292/" target="_blank"> <img src="https://img.shields.io/badge/Connect%20on-LinkedIn-blue?logo=linkedin&style=for-the-badge" alt="Connect on LinkedIn" /> </a> </div>

---

## 🌟 Show Some Love

> Found this useful or cool? Help this project grow:

```bash
⭐ Star this repo
🍴 Fork it
🐛 Report bugs
📥 Submit PRs
```




