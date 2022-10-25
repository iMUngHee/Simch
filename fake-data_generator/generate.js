import { writeFileSync } from 'fs';
import { join } from 'path';

export function generateMD({ index, fileName, content, img, tags, path }) {
  const fileContents = `---
id: ${index}
title: ${fileName}
date: 'Oct 25 2022'
tags: ${JSON.stringify(tags)}
metaTags: ${JSON.stringify(tags)}
cover_image: ${img}
description: ''
---

${content}
`;
  const outputPath = join(path, `${fileName}.md`);

  writeFileSync(outputPath, fileContents, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(outputPath + ' file generated');
  });
}
