<template>
    <div class="wrapper">
        <h2>Trusted by Leading Organisations</h2>
        <div class="cards_wrapper">
            <div class="card_wrapper">    
                <div class="gradient">
                    <img src="../assets/img/case-studies-1.jpg" class="">
                </div>    
                <h4>How Spaces Attracted five million visitors by improving the content</h4>
                <h3>200%</h3>
                <span>Higher revenue from digital</span>
            </div>
            <div class="card_wrapper">    
                <div class="gradient">
                    <img src="../assets/img/case-studies-4.jpg" class="">
                </div>    
                <h4>Creativity helped Hemisferio to increase their brand reach vertically</h4>
                <h3>10x</h3>
                <span>Sales increase with the same and spend</span>
            </div>
            <div class="card_wrapper">    
                <div class="gradient">
                    <img src="../assets/img/case-studies-6.jpg" class="">
                </div>    
                <h4>How DigitalBox used AI-powered data insight to boost sales</h4>
                <h3>3-year</h3>
                <span>Partnership with Avada Consultant</span>
            </div>
        </div>
        <button href="#" class="btn">Read more case studies</button>


    </div>
</template>




<script>

    
export default {
    name: 'MyCards'
}

</script>





<style lang="scss" scoped>
*{
    margin: 0 auto;
}

.wrapper{
    width: 80vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .cards_wrapper{
        display: flex;
        flex-direction: row;
        gap: 10px;
        .card_wrapper{
            width: 400px;
            text-align: left;
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-top: 50px;
            .gradient{
                
                img{
                    max-width: 400px;
                    
                }
            }    
            h4{
                font-size: 26px;
                text-align: left;
                left: 0;
                color: #010101;
            }
            h3{
                font-size: 40px;
                color: #010101;
                margin-left: 0;
            }
            span{
                margin-left: 0;
            }        
        }
    }
}
h2{
    font-size: 30px;
    color: #010101;
}

            .btn{
                width: 240px;
                height: 50px;
                font-size: 16px;                
                text-align: center;
                border-radius: 8px;
                background-color: #eb621f ;
                color: #fefefe;
                font-weight: bold;
                border-color: transparent;
                margin-top: 20px;

            }    
            .btn:hover {
                background-color: #fefefe;
                color: #eb621f;
                cursor: pointer;
                border-color: #eb621f;
            }





</style>