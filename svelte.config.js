import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: sveltePreprocess(),
};

export default config;
