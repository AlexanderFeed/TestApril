import { defineStore } from 'pinia';

export interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  color: string;
  category: string;
}

interface CatalogState {
  items: Item[];
  filteredItems: Item[];
  viewMode: 'grid' | 'list';
  searchQuery: string;
  currentPage: number;
  itemsPerPage: number;
}

export const useCatalogStore = defineStore('catalog', {
  state: (): CatalogState => ({
    items: [],
    filteredItems: [],
    viewMode: 'grid',
    searchQuery: '',
    currentPage: 1,
    itemsPerPage: 10,
  }),
  actions: {
    async fetchItems() {
      try {
        // Выполняем GET-запрос к API с помощью $fetch
        const response = await $fetch<{ products: Item[] }>('https://dummyjson.com/products');
        console.log('Fetched items:', response);

        // Проверяем данные и присваиваем их в state
        if (response && Array.isArray(response.products)) {
          this.items = response.products;
          this.filteredItems = response.products;
        } else {
          console.error('Invalid response format:', response);
          this.items = [];
          this.filteredItems = [];
        }
      } catch (error) {
        console.error('Error fetching items:', error);
        this.items = [];
        this.filteredItems = [];
      }
    },
    filterItems() {
      const query = this.searchQuery.toLowerCase();
      this.filteredItems = this.items.filter(item =>
        Object.values(item).some(value =>
          String(value).toLowerCase().includes(query)
        )
      );
    },
    changeViewMode(mode: 'grid' | 'list') {
      this.viewMode = mode;
    },
    paginateItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredItems.slice(start, end);
    },
    setSearchQuery(query: string) {
      this.searchQuery = query;
      this.filterItems();
    },
    changePage(page: number) {
      this.currentPage = page;
    },
  },
});
