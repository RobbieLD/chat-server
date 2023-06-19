<script lang="ts" setup>
import { useMessageStore } from '@/stores/messages';

const { messages } = useMessageStore()

</script>

<template>
    <div class="container">
        <div v-for="(message, key) of messages" :key="key" class="message" :class="message.mine ? 'message--mine' : 'message--not-mine'">
            <div class="message__body">{{ message.body }}</div>
            <div class="message__sender">{{ message.sender }}</div>
            <div class="message__time">{{ message.time.toLocaleTimeString() }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        margin: 1em;
        display: grid;
    }

    .message {
        display: grid;
        grid-template-areas: 'body body body'
                             'sender padding time';
        background-color: white;
        padding: 0.5em;
        border-radius: 0.5em;
        margin-bottom: 1em;
        min-width: 10em;
        max-width: 80%;
        width: max-content;

        &--mine {
            justify-self: end;
        }

        &--not-mine {
            justify-self: start;
        }

        &__body {
            grid-area: body;
            margin-bottom: 1em;
        }

        &__sender {
            grid-area: sender;
            font-size: 0.8em;
            justify-self: start;
            color: var(--primary-color);
        }

        &__time {
            grid-area: time;
            font-size: 0.8em;
            justify-self: end;
            color: var(--time-color);
        }
    }
</style>
