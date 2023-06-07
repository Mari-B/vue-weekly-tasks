<template>
  <div>
    <h1>Create a task</h1>
    <form>
      <label>Select a category</label>
      <!-- <select v-model="task.category">
        <option v-for="task in categories" :value="option" :key="option" :selected="option === task.category">{{ option
        }}</option>
      </select> -->
      <h3>Name & describe your task</h3>
      
      <TaskInput 
        v-model="task.title"
        label="title"
        type="text"
      />

      <TaskInput 
        v-model="task.description"
        label="Description"
        type="text"
      />

      <h3>Where is your task?</h3>

      <TaskInput 
        v-model="task.location"
        label="Location"
        type="text"
      />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import TaskInput from '@/components/TaskInput.vue';

export default {
  components: {
    TaskInput
  },
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      task: {
        category: '',
        title: '',
        description: '',
        location: '',
      }
    }
  }
}
</script>