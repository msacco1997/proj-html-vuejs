<template>
    <div id="container_services_links">
        <img src="../assets/img/marketing-intro.jpg" alt="" class="services_background">
        <div class="text">
            <h3>Unlock Your Online Growth Potential</h3>
            <h4>Online marketing to secure customer retention, leads, and sales. We focus on the bigger picture.</h4>
            <button href="#" class="btn"> Our Services</button>
        </div>


    </div>



    
</template>




<script>
export default {
    name: 'MyServices'
}

</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    
    
    #container_services_links{
        position: relative;

        
    }
    img{
        width: 100vw;

        
    }
    .text{
        position: absolute;
        z-index: 999;
        margin: 0 auto;
        left: 0;
        right: 0;
        top: 22%;
        text-align: left;
        width: 60%;
    }
    h3, h4{
        width: 400px;
        color: #fefefe;
        margin-top: 5px;
        margin-bottom: 20px;
    }
    h3{
        font-size: 43px;
    }
    h4{

    }
    .btn{
    width: 200px;
    height: 50px;
    font-size: 16px;
    align-self: center;
    text-align: center;
    border-radius: 8px;
    background-color: #fefefe ;
    color: #424242;
    font-weight: bold;
    border: 1px solid transparent;
    margin-top: 10px;
    }
    .btn:hover {
    background-color: transparent;
    color: #fefefe;
    cursor: pointer;
    border: 3px solid #fefefe;
    }  

</style>