<template>
  <div class="tokyo-night-badge" :class="variant">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
}>()
</script>

<style scoped>
.tokyo-night-badge {
  display: inline-block;
  padding: 0.25em 0.75em;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.875em;
  white-space: nowrap;
  background-color: var(--tn-surface);
  color: var(--tn-cyan);
  border: 1px solid var(--tn-border);
}

.tokyo-night-badge.default {
  background-color: var(--tn-bg-highlight);
  color: var(--tn-fg);
}

.tokyo-night-badge.primary {
  background-color: var(--tn-primary);
  color: var(--tn-on-accent);
  border-color: transparent;
}

.tokyo-night-badge.success {
  background-color: var(--tn-green);
  color: var(--tn-on-accent);
  border-color: transparent;
}

.tokyo-night-badge.warning {
  background-color: var(--tn-orange);
  color: var(--tn-on-accent);
  border-color: transparent;
}

.tokyo-night-badge.danger {
  background-color: var(--tn-red);
  color: var(--tn-on-accent);
  border-color: transparent;
}
</style>
