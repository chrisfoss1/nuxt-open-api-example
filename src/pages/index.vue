<script setup lang="ts">
import { components, paths } from "@/types/api/endpoints";
useHead({
  title: "Example",
});
const { fetcher } = useAxiosSimple();
const { api } = useAxiosCustom<paths>("url-here");
const loading = ref(false);

const pets = ref<components["schemas"]["Pet"][]>([]);

const getPets = async () => {
  loading.value = true;
  try {
    const query = fetcher.path("/pet/findByStatus").method("get").create();
    const result = await query({
      status: "available",
    });
    pets.value = result.data;
  } finally {
    loading.value = false;
  }
};

const getPetsFromCustom = async () => {
  loading.value = true;
  try {
    const statusEndpoint = await api("/pet/findByStatus");
    const query = statusEndpoint.method("get").create();
    const result = await query({
      status: "available",
    });
    pets.value = result.data;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getPets();
});
</script>
<template>
  <div class="page">
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <p v-if="pets.length === 0">No pets found</p>
      <ul v-else>
        <li v-for="pet in pets" :key="pet.id">
          {{ pet.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
