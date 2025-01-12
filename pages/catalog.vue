<template>
    <div class="catalog">
        <SearchBar :query="searchQuery" @search="setSearchQuery" />
        <ViewSwitcher :viewMode="viewMode" @changeView="changeViewMode" />
        <div :class="['catalog__items', `catalog__items--${viewMode}`]">
            <ItemCard v-for="item in paginatedItems" :key="item.id" :item="item" @click="showItemDetails(item)" />
        </div>
        <Pagination :currentPage="currentPage" :totalItems="filteredItems.length" :itemsPerPage="itemsPerPage"
            @changePage="changePage" />
    </div>
</template>

<script lang="ts" setup>
import { useCatalogStore } from '~/stores/catalog';
import SearchBar from '~/components/SearchBar.vue';
import ItemCard from '~/components/ItemCard.vue';
import Pagination from '~/components/Pagination.vue';
import ViewSwitcher from '~/components/ViewSwitcher.vue';

const catalogStore = useCatalogStore();

onMounted(() => {
    catalogStore.fetchItems();
});

const { filteredItems, viewMode, currentPage, itemsPerPage } = storeToRefs(catalogStore);

const { setSearchQuery, changeViewMode, changePage } = catalogStore;
const showItemDetails = (item: any) => alert(JSON.stringify(item, null, 2));

// Compute paginated items
const paginatedItems = computed(() => catalogStore.paginateItems());
</script>

<style lang="scss" scoped>
.catalog {
    &__items {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        transition: all 0.3s ease-in-out;

        // Стили для режима "grid"
        &--grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            justify-content: space-around;
        }

        // Стили для режима "list"
        &--list {
            flex-direction: column;
        }
    }
}
</style>