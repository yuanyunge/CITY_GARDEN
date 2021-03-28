<template>
    <div class="main-box_page4">
        <ul class="main-box-continer">
            <li class="mainBox1">
                <MainBox1></MainBox1>
            </li>
            <li class="mainBox2"><MainBox2></MainBox2></li>
            <li class="mainBox3"><MainBox2></MainBox2></li>
        </ul>
    </div>
</template>
<script>
import MainBox1 from './components/MainBox1';
import MainBox2 from './components/MainBox2';
import MainBox3 from './components/MainBox3';
export default {
    name:'PublicHygiene',
    components:{
        MainBox1,
        MainBox2,
        MainBox3
    }
}
</script>
<style lang="scss">
.main-box_page4{
    border:1px solid red;
    .main-box-continer{
        display:flex;
        padding-left:20px;
        li{
            height:940px;
            
            &.mainBox1{
                width:707px;
                border:1px solid blue;
            }
            &.mainBox2{
                width:695px;
                border:1px solid green;
                margin-left:8px;
            }
            &.mainBox3{
                width:461px;
                border:1px solid yellow;
                margin-left:6px;
            }
        }
    }
}
</style>
