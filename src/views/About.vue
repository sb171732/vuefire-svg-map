<template>
  <div class="about">
    <h1>This is an edit page</h1>

      <el-row>
        <el-col :span="12" class="w3-border w3-padding"> 
            <h3>city  </h3>
           <el-select v-model="value1" placeholder="Выбрать город ">
              <el-option
                v-for="item in city"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>      
            </el-select>

             <div v-for="c of fcity(value1)" :key="c.id">
                <el-input placeholder="Please input" v-model="c.img1" @change="save1('img1',c.img1,c.id)" class="w3-padding"></el-input>
                <el-input placeholder="Please input" v-model="c.img2" @change="save1('img2',c.img2,c.id)" class="w3-padding"></el-input>
                <el-input placeholder="Please input" v-model="c.img3" @change="save1('img3',c.img3,c.id)" class="w3-padding"></el-input>
                <el-input placeholder="Please input" v-model="c.img4" @change="save1('img4',c.img4,c.id)" class="w3-padding"></el-input>
             </div>  
             
        </el-col>
        <el-col :span="12" class="w3-border w3-padding">
           <h3> kojs </h3>
           <el-select v-model="value1" placeholder="Выбрать кожуун">
              <el-option
                v-for="item in kojs"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select> 

        </el-col>
      </el-row>

  </div>
</template>
<script>
import { db } from '../db'

export default {
  data() {
    return {
      value1:'',
      kojs: [],
      city: [],
    }
  },
  methods:{
    fcity(v){
       return this.city.filter((n) => { return n.id === v })
    },
    save1(f,v,id){
        

        db.collection('city').doc(id).update({ f: v }).then(() => {
          console.log(f)
          console.log(v)
          console.log(id)
        })
    }
  },
  firestore: {
    kojs: db.collection('svg'),
    city: db.collection('city'),
  },
}
</script>