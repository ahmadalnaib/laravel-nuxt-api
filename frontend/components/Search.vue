<script setup>
import { autocomplete } from '@algolia/autocomplete-js';
import {
  meilisearchAutocompleteClient,
  getMeilisearchResults,
} from '@meilisearch/autocomplete-client';

const client = meilisearchAutocompleteClient({
  url: 'http://localhost:7700',
  apiKey: 'masterkey',
});

onMounted(() => {
  autocomplete({
    container: '#search',
    placeholder: 'What are you looking for?',
    autoFocus: true,

    getSources() {
      return [
        {
          sourceId: 'products',
          getItems({ query }) {
            return getMeilisearchResults({
              client,
              searchClient: client,
              queries: [
                {
                  indexName: 'products',
                  query: query,
                },
              ],
            });
          },
          templates: {
            header({html}){
              return html`<span className="aa-SourceHeaderTitle">Products</span>
              <div className="aa-SourceHeaderLine"></div>
              `
              

            },
            item({ item, html }) {
              return html`
                <a href="" class="flex items-center space-x-2">
                  <img src="${item.image}" class="w-8 h-8 rounded-full" />
                  <span>${item.name}</span>
                </a>
              `;
            },
          },
        },
        {
          sourceId: 'users',
          getItems({ query }) {
            return getMeilisearchResults({
              client,
              searchClient: client,
              queries: [
                {
                  indexName: 'users',
                  query: query,
                },
              ],
            });
          },
          templates: {
            header({html}){
              return html`<span className="aa-SourceHeaderTitle">Users</span>
              <div className="aa-SourceHeaderLine"></div>
              `
              

            },
            item({ item, html }) {
              return html`
                <a href="" class="flex items-center space-x-2">
                  <span>${item.name}</span>
                </a>
              `;
            },
          },
        },
      ];
    },
  });
});
</script>

<template>
  <div id="search"></div>
</template>
