<template>
<div class="flex justify-start my-2">

</div>
</template>

<script setup>
 import {useUserStore} from '~/store/user'
 const props =defineProps(['product','selectedArray'])
 const  {product, selectedArray } = toRefs(props)

 const emit = defineEmits(['selectedRadio'])
 let isHover = ref(false)
 let isSelected = ref(false)
</script>

 