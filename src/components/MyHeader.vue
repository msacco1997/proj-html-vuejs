<template>
    <div class="header">
        <div class="header_bar">
            <div class="wrapper">
                <img src="../assets/img/avada-marketing-logo-2x.png" >
            </div>
            
            <ul class="navbar">
                <li class="navbar_opt">Home</li>
                <li class="navbar_opt">Services</li>
                <li class="navbar_opt">Why Us</li>
                <li class="navbar_opt">Case Studies</li>
                <li class="navbar_opt">About</li>
                <li class="navbar_opt">Blog</li>
            </ul>
            <button class="number"><font-awesome-icon icon="fa-solid fa-phone" />(555) 802-1234</button>
            <button href="#" class="btn"> Free Quote</button>
        </div>
    </div>
</template>




<script>

    
export default {
    name: 'MyHeader'
}

</script>

<style scoped lang="scss">
    *{
        margin: 0 auto;      
        width: 1600px;
    }
    .header{
        margin-top: 0;
        .header_bar{
            display: flex;
            flex-direction: row;
            height: 60px;
            
            
            .wrapper{
                display: inline-block;
                overflow: hidden;
                margin-left: 130px;
                
                img{
                    
                    max-width: 200px;

                }
            }
            .navbar{
                display: flex;
                flex-direction: row;
                width: 850px;
                margin-right:30px;
                .navbar_opt{
                    list-style: none;
                    align-self: center;
                    max-width: 110px;
                    font-weight: bold;
                }
            }
            .btn{
                max-width: 150px;
                margin-right: 180px;
                height: 50px;
                font-size: 16px;
                align-self: center;
                text-align: center;
                border-radius: 8px;
                background-color: rgba($color: #eb621f, $alpha: 0.2) ;
                color: #eb621f;
                font-weight: bold;
                border-color: transparent;
            }    
            .btn:hover {
                background-color: #eb621f;
                color: #fefefe;
                cursor: pointer;
            }
            
        }
    }

    li {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .number{
        background-color: #fefefe;
        border-color: transparent;
        font-size: 18px;
        font-weight: bold;
    }



</style>