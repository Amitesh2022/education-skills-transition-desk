<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterLink, RouterView } from 'vue-router'
import { useDeliveryStore } from './store'
const store = useDeliveryStore()
const { approvedShare, offers, urgent } = storeToRefs(store)
onMounted(store.load)
</script>

<template><div class="shell"><aside><div class="brand">SkillsForwardEU<span>LEARNING TRANSITION</span></div><nav><RouterLink to="/">Transition plans</RouterLink><RouterLink to="/insights">Implementation guidance</RouterLink></nav><div class="health"><i /> Java education transition service connected</div></aside><main><header><div><span class="eyebrow">Coordinate basic skills, responsible classroom technology and stronger vocational pathways</span><h1>Education Skills Transition Desk</h1></div><button @click="store.addOffer">Add transition plan</button></header><section class="summary"><article><small>Plans approved</small><strong>{{ approvedShare }}%</strong><div class="bar"><span :style="{ width: `${approvedShare}%` }" /></div></article><article><small>Plans tracked</small><strong>{{ offers.length }}</strong><p>Shared implementation view</p></article><article><small>Urgent delivery gaps</small><strong>{{ urgent }}</strong><p>Needs attention</p></article></section><RouterView /></main></div></template>
