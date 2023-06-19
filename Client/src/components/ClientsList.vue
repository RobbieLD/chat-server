<script lang="ts" setup>
import { useClientsStore } from '@/stores/clients';

const { clients } = useClientsStore()

</script>

<template>
    <div class="container">
        <div v-for="(client, key) of clients" :key="key" class="client">{{ client }}</div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        padding: 1em;
        display: grid;
        grid-auto-flow: row;
    }

    .client {
        margin-bottom: 1em;
        color: var(--primary-color);
    }
</style>
