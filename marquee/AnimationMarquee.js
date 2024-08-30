import {ref, onBeforeMount} from "vue"

export default {
    template: `
        <section class="space-y-7 py-10 overflow-hidden">
            <h1 class="text-center">Our services</h1>
            <section>
                <section class="marquee flex items-center gap-4 will-change-transform">
                    <h3 v-if="isLoading">Loading...</h3>
                    <div 
                        v-else 
                        v-for="(user, index) in users"
                        :key="user.id"
                        class="flex gap-2 items-start shrink-0 min-w-52 border rounded-lg p-4">
                        <span class="text-xs font-bold w-6 h-6 rounded-full border p-2 flex items-center justify-center shrink-0">
                            {{ index+1 }}
                        </span>
                        <div class="space-y-2 grow">
                            <h2>{{ user.name }}</h2>
                            <span>{{ user.email }}</span>
                        </div>
                    </div> 
                </section>
            </section>
        </section>
    `,
    setup(){
        const isLoading = ref(false);
        const users = ref([]);
        onBeforeMount(() => {
            isLoading.value = true;
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json())
                .then((data) => {
                    users.value = data;
                    isLoading.value = false;
                });
        });
        return {users}
    }
}