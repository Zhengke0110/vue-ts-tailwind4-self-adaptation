<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    @click="$emit('close')"
  >
    <div class="w-full max-w-md rounded-lg bg-white shadow-xl" @click.stop>
      <div class="relative">
        <img
          :src="route.coverImage"
          :alt="route.title"
          class="h-48 w-full rounded-t-lg object-cover"
        />
        <button
          class="absolute top-4 right-4 rounded-full bg-white/80 p-2 text-gray-700"
          @click="$emit('close')"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="p-6">
        <h2 class="mb-2 text-xl font-bold">{{ route.title }}</h2>
        <p class="mb-4 text-gray-600">{{ route.description }}</p>

        <div class="mb-4 flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span
              :class="{
                'bg-green-100 text-green-800': route.difficulty === 'easy',
                'bg-yellow-100 text-yellow-800':
                  route.difficulty === 'moderate',
                'bg-red-100 text-red-800': route.difficulty === 'challenging',
              }"
              class="rounded-full px-2 py-1 text-sm"
            >
              {{ difficultyLabel[route.difficulty] }}
            </span>
            <span class="text-gray-500">{{ route.duration }}</span>
          </div>
          <div class="flex items-center space-x-1">
            <i class="fas fa-map-marker-alt text-orange-500"></i>
            <span class="text-sm text-gray-500"
              >{{ route.attractions.length }}个景点</span
            >
          </div>
        </div>

        <div class="mb-4">
          <h3 class="mb-2 font-medium text-gray-900">景点列表</h3>
          <div class="space-y-2">
            <div
              v-for="(attraction, index) in route.attractions"
              :key="index"
              class="flex items-center space-x-2 rounded-lg bg-gray-50 p-2"
            >
              <i class="fas fa-map-pin text-orange-500"></i>
              <span>{{ attraction }}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 class="mb-2 font-medium text-gray-900">路线亮点</h3>
          <div class="flex space-x-2">
            <span
              v-for="highlight in route.highlights"
              :key="highlight"
              class="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800"
            >
              {{ highlight }}
            </span>
          </div>
        </div>

        <button
          class="mt-6 w-full rounded-lg bg-orange-500 py-2 text-white hover:bg-orange-600"
          @click="handleBookRoute"
        >
          立即预订
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Route = {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "easy" | "moderate" | "challenging";
  coverImage: string;
  attractions: string[];
  highlights: string[];
};

const props = defineProps<{
  route: Route;
}>();

const emit = defineEmits(["close"]);

const difficultyLabel = {
  easy: "简单",
  moderate: "中等",
  challenging: "困难",
};

const handleBookRoute = () => {
  // TODO: 实现路线预订逻辑
  console.log("预订路线:", props.route.title);
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
