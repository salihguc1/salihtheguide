# How to write a blog post

You can write posts directly on GitHub, from your computer or phone. Or send the text to Claude and it will add it for you.

## 1. Create the file
1. Open the `_posts` folder in this repository. (If it doesn't exist yet, it will be created by step 2.)
2. Click **Add file → Create new file**.
3. Name the file like this: `_posts/2026-11-15-how-to-use-the-istanbulkart.md`
   - Start with the date: year-month-day.
   - Then the title in small letters, words joined with `-`. No Turkish letters or spaces in the file name.
   - End with `.md`.
   - The web address will be: salihtheguide.com/blog/how-to-use-the-istanbulkart/

## 2. Paste this at the very top and fill it in
```
---
title: "How to use the Istanbulkart"
description: "One or two sentences. Shown on the blog page, in Google and when the link is shared."
category: "Getting around"
image: /blog/images/istanbulkart.jpg
---
```
- `image` is optional. Delete that line if the post has no cover photo.
- `category` is a short label like Food, History, Getting around, Tips.

## 3. Write the post under it
- Normal text: just write. Leave an **empty line** between paragraphs.
- Heading: start the line with `## ` (two hashes and a space).
- Bullet list: start lines with `- `
- **Bold**: `**bold**`, *italic*: `*italic*`
- Link: `[link text](https://salihtheguide.com/tours.html)`
- Photo: `![What the photo shows](/blog/images/photo-name.jpg)`

## 4. Photos
1. Open the `blog` folder, then `images` (create it the first time with **Add file → Upload files**).
2. Upload your photos. Use simple names without spaces, like `galata-tower.jpg`.
3. Make photos smaller before uploading (about 1600 px wide, under 500 KB) so the site stays fast.

## 5. Publish
Click **Commit changes**. The post appears on salihtheguide.com/blog/ within 1–2 minutes.
To fix something later, open the file, click the pencil ✏️, edit, and commit again.

## Drafts
Files in the `_drafts` folder are **not** published. `_drafts/example-post.md` shows every formatting option.
