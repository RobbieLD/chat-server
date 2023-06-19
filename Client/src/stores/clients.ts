import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useClientsStore = defineStore('clients', () => {
    const clients = ref<string[]>([
        'Rob',
        'Dale'
    ])

    const updateClients = (data: string[]) => {
        clients.value = data
    }

    return { clients, updateClients }
})
