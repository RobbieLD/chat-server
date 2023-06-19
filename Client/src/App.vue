<script setup lang="ts">
import MessageInput from './components/MessageInput.vue';
import ChatDisplay from './components/ChatDisplay.vue';
import ClientsList from './components/ClientsList.vue';
</script>

<template>
    <div class="layout">
        <div class="main">
            <ChatDisplay></ChatDisplay>
        </div>
        <div class="clients">
            <ClientsList></ClientsList>
        </div>
        <div class="message">
            <MessageInput></MessageInput>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.layout {
    display: grid;
    grid-template-areas: 'clients main'
                         'clients message';
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto;

    height: 100%;
    background-color: var(--background-color);
}

.main {
    grid-area: main;
}

.clients {
    grid-area: clients;
    background-color: var(--users-panel-color);
}

.message {
    grid-area: message;
}

</style>
