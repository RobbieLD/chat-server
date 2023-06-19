<script setup lang="ts">
import { useMessageStore } from '@/stores/messages';
import { ref } from 'vue';

const { addMessage } = useMessageStore();

const message = ref('')

const send = () => {
    if (!message.value)
    {
        return
    }
    
    addMessage({
        body: message.value,
        sender: 'rob',
        time: new Date(),
        mine: true
    })
}

</script>

<template>
    <div class="container">
        <input type="text" class="text" placeholder="Enter Your Message Here" v-model="message">
        <button class="send" @click="send">Send</button>
    </div>
</template>

<style lang="scss" scoped>

.container {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-auto-flow: column;
    padding: 1em;
    align-items: center;
}

.text {
    height: min-content;
    font-size: 1.5em;
    padding: 0.25em;
}

.send {
    margin: 0.5em;
}

</style>
