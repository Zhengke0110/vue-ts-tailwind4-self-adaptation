<template>
  <div
    class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <!-- Card Image -->
    <div class="relative aspect-[4/3] overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      ></div>
      <div class="absolute top-3 right-3 flex gap-2">
        <span
          class="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 shadow-sm backdrop-blur-sm"
        >
          {{ duration }}
        </span>
        <span
          class="rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur-sm"
          :class="{
            'text-green-600': difficulty === 'easy',
            'text-orange-600': difficulty === 'moderate',
            'text-red-600': difficulty === 'challenging',
          }"
        >
          {{
            difficulty === "easy"
              ? "轻松"
              : difficulty === "moderate"
                ? "适中"
                : "挑战"
          }}
        </span>
      </div>
    </div>

    <!-- Card Content -->
    <div class="p-4">
      <h3
        class="text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-orange-600"
      >
        {{ title }}
      </h3>
      <p class="mt-2 line-clamp-2 text-sm text-gray-500">
        {{ description }}
      </p>

      <!-- Attractions Section -->
      <div class="mt-4">
        <h4 class="text-sm font-medium text-gray-700">景点亮点</h4>
        <div class="mt-2 flex flex-wrap gap-2">
          <span
            v-for="highlight in highlights.slice(0, 3)"
            :key="highlight"
            class="rounded-full bg-orange-50 px-2 py-1 text-xs text-orange-600"
          >
            {{ highlight }}
          </span>
          <span
            v-if="highlights.length > 3"
            class="rounded-full bg-gray-50 px-2 py-1 text-xs text-gray-500"
          >
            +{{ highlights.length - 3 }}
          </span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-4 flex items-center justify-between">
        <div class="flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <i class="fas fa-map-marker-alt"></i>
          <span>{{ attractions.length }}个景点</span>
          <span class="text-gray-300">|</span>
          <span>{{ highlights.length }}个亮点</span>
        </div>
        <button
          class="rounded-full bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-600 transition-colors duration-300 hover:bg-orange-100"
        >
          查看详情
        </button>
      </div>
    </div>

    <!-- Hover Overlay with Details -->
    <div
      class="absolute inset-0 flex flex-col justify-between bg-black/75 p-6 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
    >
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-white">{{ title }}</h3>
        <div>
          <h4 class="text-sm font-medium text-white/90">包含景点</h4>
          <div class="mt-2 flex flex-wrap gap-2">
            <span
              v-for="attraction in attractions.slice(0, 4)"
              :key="attraction"
              class="rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur-sm"
            >
              {{ attraction }}
            </span>
            <span
              v-if="attractions.length > 4"
              class="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
            >
              +{{ attractions.length - 4 }}个景点
            </span>
          </div>
        </div>
      </div>

      <button
        class="transform rounded-full bg-white px-6 py-2 font-medium text-orange-600 transition-transform duration-300 hover:scale-105"
      >
        查看路线详情
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
  duration: string;
  difficulty: "easy" | "moderate" | "challenging";
  attractions: string[];
  highlights: string[];
}>();
</script>

<style scoped>
.route-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}
.route-card:hover {
  transform: scale(1.05);
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -ms-transform: scale(1.05);
  -o-transform: scale(1.05);
}
</style>
