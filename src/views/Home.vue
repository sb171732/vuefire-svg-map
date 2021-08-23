<template>
  <div id="app">
    <h3>{{ selectedName }}</h3>
      <el-row>
        <el-col :span="3" class="w3-border-white">
           <ol>
              <li v-for="c of city" :key="c.id"  @click="changeColor(c)" v-on:mouseleave="originalColord(c)">
                 <el-link :style="'color:'+c.fill" >
                    {{ c.name }}
                  </el-link>
              </li>
             
              <li v-for="d of documents" :key="d.id" :index="d.id" @click="changeColor(d)" v-on:mouseleave="originalColor(d)">
                 <el-link :style="'color:'+d.fill" >
                    {{ d.name }}
                  </el-link>
              </li>
           </ol>
           
        </el-col>
        <el-col :span="13" class="w3-border-white">
            
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="620" height="450" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
        <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Rapha�l</desc>
        <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>
        <path   v-for="d of documents" :key="d.id" fill="rgb(121, 147, 170)" :d="d.d" @click="changeColor(d)" v-on:mouseleave="originalColor(d)" :id="d.id"></path>
        <ellipse v-for="c of city" :key="c.id" :id="c.id" @click="changeColor(c)" v-on:mouseleave="originalColor(d)"  :cx="c.cx" :cy="c.cy" :rx="c.rx" :ry="c.ry" :fill="c.fill" stroke="#3899e6" stroke-width="3" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-width: 3; stroke-linejoin: round;"></ellipse>
       
        <!-- <ellipse @click="open('02')" v-on:mouseover="changeColor($event.target,'г. Ак-Довурак')" v-on:mouseleave="originalColor($event.target)"  cx="113.46104" cy="245.60605" rx="7" ry="7" fill="#3a8ee6" stroke="#3899e6" stroke-width="3" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-width: 3; stroke-linejoin: round;"></ellipse>
        <ellipse @click="open('01')" v-on:mouseover="changeColor($event.target,'г. Кызыл')" v-on:mouseleave="originalColor($event.target)"  cx="338.3873" cy="186.23535" rx="8" ry="8" fill="#008000" stroke="#3899e6" stroke-width="3" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-width: 3; stroke-linejoin: round;"></ellipse> -->
      </svg>
        </el-col>
        <el-col :span="8" class="w3-border-white">
           <img :src="selectedImg1" width="100%">
        </el-col>
      </el-row>
       <el-row>
           <el-col :span="8" class="w3-border-white">
              <img :src="selectedImg2" width="100%">
           </el-col>
           <el-col :span="8" class="w3-border-white">
              <img :src="selectedImg3" width="100%">
           </el-col>
           <el-col :span="8" class="w3-border-white">
              <img :src="selectedImg4" width="100%">
           </el-col>
       </el-row>
      
  </div>
</template>

<script>
import { db } from '../db'

export default {
  data() {
    return {
      selectedName:'Выберите кожуун',
      selectedImg1:'',
      selectedImg2:'',
      selectedImg3:'',
      selectedImg4:'',
      documents: [],
      city: [],
    }
  },
  methods:{
    changeColor(d){
      document.getElementById(d.id).setAttribute('fill',d.fill)
     
      this.selectedName = d.name

      this.selectedImg1 = d.img1 
      this.selectedImg2 = d.img2 
      this.selectedImg3 = d.img3 
      this.selectedImg4 = d.img4 
    },
    originalColor(d){
      document.getElementById(d.id).setAttribute('fill','rgb(121, 147, 170)')
     
    }
  },
  firestore: {
    documents: db.collection('svg'),
    city: db.collection('city'),
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
 li{
   text-align: initial;
 }
 path{ 
    /* fill: rgb(121, 147, 170); */
    cursor:pointer;
    transform-origin: center center;
    transform-box: fill-box;
    transition: 0.5s;
    z-index: 0;
    }
 ellipse{ cursor:pointer}

</style>
