<template>
    <div class="wrapper">
        <div class="row gap padding_top margin_bottom">
            <p class="text">Marketing Resources: Insider Advice on How to Increase Online Sales</p>
            <button href="#" class="btn">Why Work With Us</button>
        </div>
        <div class="row gap_xs justify_center padding_bottom">
            <div class="col_3">
                <div class="img_wrapper">
                    <!-- <img src="../assets/img/blog-posts-6-400x267.jpg"> -->
                </div>
                <p class="card_desc">Marketing Tips And Tricks For Your Website</p>
            </div>
            <div class="col_3">
                <div class="img_wrapper2">
                    <!-- <img src="../assets/img/blog-posts-6-400x267.jpg"> -->
                </div>
                <p class="card_desc">How to Write Stunning Blog Post Titles</p>
            </div>
            <div class="col_3">
                <div class="img_wrapper3">
                    <!-- <img src="../assets/img/blog-posts-6-400x267.jpg"> -->
                </div>
                <p class="card_desc">Techniques to Reduce Facebook Ads Spend</p>
            </div>
        </div>
    </div>
</template>






<script>
export default {
    name: 'MyCards2'
}
</script>









<style lang="scss" scoped>



.wrapper{
    
    background-color: #e3e4e2;
    display: flex;
    flex-direction: column;
    gap: 50px;
    .row{
        display: flex;
        flex-direction: row;
        

        
        .text{
            font-size: 30px;
            font-weight: bold;
            text-align: left;
            color: #010101;
            width: 400px;
            margin-left: 300px;

        }
        .btn{
          align-self: flex-end;
          right: 400px;  
        }
        .card_desc{
            font-size: 24px;
            width: 340px;
            text-align: left;
            color: #010101;
            font-weight: bold;
        }
    }
}
.padding_top{
    padding-top: 100px;
}
.img_wrapper{
    height: 267px;
    widtH: 400px;
    position: relative;
    background-image: url("../assets/img/blog-posts-6-400x267.jpg");
}
.img_wrapper2{
    height: 267px;
    widtH: 400px;
    position: relative;
    background-image: url("../assets/img/blog-posts-5-400x267.jpg");
}
.img_wrapper3{
    height: 267px;
    widtH: 400px;
    position: relative;
    background-image: url("../assets/img/blog-posts-4-400x267.jpg");
}
.img_wrapper:hover:before, .img_wrapper2:hover:before, .img_wrapper3:hover:before {
  content: '';
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  cursor: pointer;
  background: linear-gradient(to bottom, transparent 0%, #eb621f);
}
.col_3{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.padding_bottom{
    padding-bottom: 100px;
}
.justify_center{
    justify-content: center;
}

.gap{
    gap:400px;
}
.gap_xs{
    gap: 20px;
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
                

            }    
            .btn:hover {
                background-color: #fefefe;
                color: #eb621f;
                cursor: pointer;
                border-color: #eb621f;
            }
</style>