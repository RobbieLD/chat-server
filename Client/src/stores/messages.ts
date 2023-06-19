import { ref } from 'vue'
import { defineStore } from 'pinia'
import type Message from '@/models/message'

export const useMessageStore = defineStore('messages', () => {
    // TEMP: Add some test messages
    const messages = ref<Message[]>([
    {
        sender: 'Rob',
        body: 'this is a test',
        time: new Date(),
        mine: true
    },
    {
        sender: 'Dale',
        body: 'this is another test',
        time: new Date(),
        mine: false
    }])

    const addMessage = (message: Message) => {
        messages.value.push(message)
    }

    // TODO: Add methods for getting messages

    return { messages, addMessage }
})
