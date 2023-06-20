
<script>
import { MDBInput, MDBBtn, MDBContainer, MDBTextarea, MDBRow, MDBCol } from "mdb-vue-ui-kit";
import TaskCard from "@/components/TaskCard.vue";

export default {
  name: 'WeeklyPlanner',
  data() {
    return {
      categories: [
        'meetings',
        'learning',
        'coding - new',
        'coding - bug fix',
      ],
      taskList: [],
      task: {
        category: '',
        title: '',
        description: '',
        list: 0,
        id: null,
      },
      
    };
  },
  components: {
    MDBInput, MDBBtn, MDBContainer, MDBTextarea, MDBRow, MDBCol, TaskCard
  },
  methods: {
    generateId() {
      console.log(Math.random())
      return Math.random()      
    },
    addTask(task) {
      if(this.getTaskList(0).length < 5) {
        this.task.id = (this.taskList.length + 1) - 1;
        console.log(this.task)
        this.taskList.push({...task});
        this.$refs.addMyTask.reset();
      } else {
        alert('Please allocate the existing tasks before creating new ones.')
      }
    },
    removeTask(task) {
      this.taskList.splice(this.taskList.indexOf(task), 1)
    }, 
    startTaskDrag(event, item) {
      console.log(item)
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('itemID', item.id)
    },
    onTaskDrop(event, list) {
      const itemID = event.dataTransfer.getData('itemID')
      console.log(itemID)
      console.log(this.taskList.find((task) => task.id == itemID))
      const task = this.taskList.find((task) => task.id == itemID)
      task.list = list
      console.log(task.list)
    } ,
    getTaskList(list) {
      return this.taskList.filter((task) => task.list == list)      
    }
  },
}
</script>

<template>
  <MDBContainer col="12" class="mt-5">    
    <MDBRow class="g-3" >
      <MDBCol col="12" class="mx-auto px-0">
        <form @submit.prevent="addTask(task)" ref="addMyTask">
          <MDBRow>
            <MDBCol>
              
              <select v-model="task.category" class="form-select mb-3" placeholder="Category" id="select" required>
                <option value="" disabled selected>Select your option</option>
                <option v-for="option in categories" :value="option" :key="option" :selected="option === task.category">{{ option
                }}</option>
              </select>
              <MDBInput 
                label="Task title" 
                v-model="task.title" 
                size="lg" 
                class="mb-3"
                invalidFeedback="Please provide your first name" 
                required 
              />
              <MDBTextarea 
                label="Task description" 
                rows="4" 
                v-model="task.description"
                invalidFeedback="Please provide your last name" 
                required 
              />
            </MDBCol>
            <MDBCol col="3">
              <MDBBtn 
                color="primary" 
                type="submit" 
                class="mt-4"
              >
                Add task
              </MDBBtn>
            </MDBCol>
          </MDBRow>       
        </form>
      </MDBCol>
    </MDBRow>

    <MDBRow v-if="this.taskList.length">
      <MDBCol 
        col="12" 
        class="mx-0 mt-4 allocateYourTasks gradient-pattern"
        @drop="onTaskDrop($event, 0)"
        @dragover.prevent
        @dragenter.prevent
      >
        <h3>Allocate your tasks</h3>
        <div class="unallocatedTasksWrapper">
          <TaskCard 
            v-for="(task, index) in getTaskList(0)" 
            :key="index" 
            :title="task.title"
            :category="task.category"
            :description="task.description"
            @remove-task="removeTask(task)"
            @dragstart="startTaskDrag($event, task)"
          />
        </div>        
      </MDBCol>
    </MDBRow>    
  </MDBContainer>
  <MDBContainer class="my-4">
    <MDBRow>
      <MDBCol 
        class="weekday py-3"
        @drop="onTaskDrop($event, 1)"
        @dragover.prevent
        @dragenter.prevent
      >
        <h3>Monday</h3>

        <TaskCard 
          v-for="(task) in getTaskList(1)" 
          :key="task" 
          :title="task.title"
          :category="task.category"
          :description="task.description"
          @remove-task="removeTask(task)"
          @dragstart="startTaskDrag($event, task)"
        />

      </MDBCol>
      <MDBCol
        class="weekday py-3"
        @drop="onTaskDrop($event, 2)"
        @dragover.prevent
        @dragenter.prevent>
        <h3>Tuesday</h3>

        <TaskCard 
          v-for="(task) in getTaskList(2)" 
          :key="task" 
          :title="task.title"
          :category="task.category"
          :description="task.description"
          @remove-task="removeTask(task)"
          @dragstart="startTaskDrag($event, task)"
        />

      </MDBCol>
      <MDBCol
        class="weekday py-3"
        @drop="onTaskDrop($event, 3)"
        @dragover.prevent
        @dragenter.prevent        
      >
        <h3>Wednesday</h3>

        <TaskCard 
          v-for="(task) in getTaskList(3)" 
          :key="task" 
          :title="task.title"
          :category="task.category"
          :description="task.description"
          @remove-task="removeTask(task)"
          @dragstart="startTaskDrag($event, task)"
        />

      </MDBCol>
      <MDBCol
        class="weekday py-3"
        @drop="onTaskDrop($event, 4)"
        @dragover.prevent
        @dragenter.prevent
      >
        <h3>Thursday</h3>

        <TaskCard 
          v-for="(task) in getTaskList(4)" 
          :key="task" 
          :title="task.title"
          :category="task.category"
          :description="task.description"
          @remove-task="removeTask(task)"
          @dragstart="startTaskDrag($event, task)"
        />

      </MDBCol>
      <MDBCol
        class="weekday py-3"
        @drop="onTaskDrop($event, 5)"
        @dragover.prevent
        @dragenter.prevent
      >
        <h3>Friday</h3>

        <TaskCard 
          v-for="(task) in getTaskList(5)" 
          :key="task" 
          :title="task.title"
          :category="task.category"
          :description="task.description"
          @remove-task="removeTask(task)"
          @dragstart="startTaskDrag($event, task)"
        />

      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>
