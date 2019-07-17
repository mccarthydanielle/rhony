import { quotes } from '../server/quotes';

export const quoteRandomizer = () => {
  const idx = Math.floor(Math.random() * quotes.length) + 1;
  return quotes[idx];
};
