<template>
  <div class="mb-6">
    <label class="form-label">
      {{ label }} <span v-if="required" class="text-red-600">*</span>
    </label>
    <input
        :value="modelValue"
        @input='$emit("update:modelValue", $event.target.value)'
        class="form-input"
        v-bind="$attrs"
    >
    <p v-if="checkError" class="form-error">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: "InputForm",
  props: {
    label: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      default: '',
    },
    checkError: {
      type: Boolean,
      required: false
    },
    error: {
      type: String,
      default: 'Error'
    }
  },
}
</script>
