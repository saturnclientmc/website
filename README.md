# How to post news

1. Create a new markdown file in the `news` directory, name it chronologically like `2025-04-16-<title>.md`
2. Add the following frontmatter:

```markdown
---
authors: Kleo dev, John Doe
title: Hello World
description: The brown fox jumps over the lazy dog
image: <your thumbnail url>
date: <year>-<month>-<day>
tags: <tag1, tag2>
---
```

3. Add the content of the news after the frontmatter
   Learn markdown here: https://www.markdownguide.org/getting-started/

4. Add the image to the `public` directory (if you're using a local image), the image will be referenced in the frontmatter like this: `image: /<image.png>`
