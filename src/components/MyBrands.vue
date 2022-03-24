<template>
    <div class="column_row">
        <div class="text">
            <h2>Some Brands We Work With</h2>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
        </div>
        <div class="logos">
            <img src="../assets/img/abstract.png" alt="">
            <img src="../assets/img/cglobal.png" alt="">
            <img src="../assets/img/next.png" alt="">
            <img src="../assets/img/hemisferio.png" alt="">
            <img src="../assets/img/spaces.png" alt="">
            <img src="../assets/img/digitalbox.png" alt="">
        </div>
    </div>
</template>




<script>

    
export default {
    name: 'MyBrands'
}

</script>

<style scoped lang="scss">
    h2{
        color: #010101;
        font-size: 30px;
        
    }
    span{
        color: #424242;
        margin-top: 10px;
        font-size: 18px;
    }

    .column_row{
        height: 25vh;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .text{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .logos{
        display: flex;
        flex-direction: row;
        gap:20px;
        justify-content: center;
    }





</style>