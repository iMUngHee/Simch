import axios from 'axios';
import { load } from 'cheerio';
import { BASE_URL, IMAGE_URL, LINK_URL, numbers, PATH, TAG } from './const.js';

import { generateMD } from './generate.js';

const { data } = await axios.get(LINK_URL[9]);

const _ = load(data);
const links = [];

_('h2.blog--title > a').each(function (i, el) {
  links.push(_(this).attr('href'));
  // console.log(_(this).attr('href'));
});

links.slice(0, 30).forEach(async (target, idx) => {
  const { data } = await axios.get(`${BASE_URL[9]}${target}`);
  const $ = load(data);

  const fileName = $('title').text().replace(/\s/gi, '-').replace(':', '-');

  const text = $('section.blog--post').text();

  generateMD({
    content: text,
    fileName,
    img: IMAGE_URL[9],
    index: numbers[idx + 220],
    path: PATH[9],
    tags: TAG[9],
  });
});
