<template>
    <div class="wrapper">
        <div class="row">
            <div class="col_4 flex_row">
                <div class="text_card">
                    <h2>We Boost Our Clients' Bottom Line by Optimizing Their Growth Potential.</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi recusandae rerum ducimus?</h3>
                    <button href="#" class="btn">Why Work With Us</button>
                </div>
                <div class="img_wrapper">
                    <img src="../assets/img/we-boost-our-clients-600x549.jpg" >
                </div>
            </div>
            
        </div>
        <div class="row">
            <div class="col_4 flex_col">
                <div class="text_card">
                    <p>We Build Relationships</p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident, numquam perspiciatis possimus pariatur ea maiores?</span>
                </div>
                <div class="text_card">
                    <p>Proprietary Processes</p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident, numquam perspiciatis possimus pariatur ea maiores?</span>
                </div>
            </div>
            <div class=" col_4 flex_col ">
                <div class="wrapper_icon_text row text_card">
                    <div class="icon_wrapper">
                        <font-awesome-icon icon="fa-solid fa-landmark-alt" class="orange" />
                    </div>
                    <div>
                        <p class="align_left">Accountability</p>
                        <span class="align_left">Lorem ipsum dolor sit </span>
                    </div>    
                </div>
                
                <div class="wrapper_icon_text row">
                    <div class="icon_wrapper">
                        <font-awesome-icon icon="fa-solid fa-landmark-alt" class="icon orange" />
                    </div>
                    <div>
                        <p class="align_left">Transparency</p>
                        <span class="align_left">Lorem ipsum dolor sit amet </span>
                    </div>
                </div>
                
                <div class="wrapper_icon_text row" >
                    <div class="icon_wrapper">
                        <font-awesome-icon icon="fa-solid fa-landmark-alt" class="icon orange" />
                    </div>
                    <div class="align_left">
                        <p class="align_left">Investment</p>
                        <span class="align_left">Lorem ipsum dolor sit</span>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="row margin_top">
            <h2>Awards</h2>
        </div>
        <div class="row margin_top">
            <div class="col">
                <div class="awards_wrapper">
                    <img src="../assets/img/award-a-200x191.png" class="img">
                </div>
                <p class="new_p">Winner Seo Master MAGT</p>
                <p class="new_p">Smart Start Award 2017</p>
            </div>
            <div class="col">
                <div class="awards_wrapper">
                    <img src="../assets/img/award-b-200x191.png" class="img">
                </div>
                <p class="new_p">Top Social Media Agencies</p>
                <p class="new_p">Next Partner 2018</p>
            </div>
            <div class="col">
                <div class="awards_wrapper">
                    <img src="../assets/img/award-c-200x191.png" class="img">
                </div>
                <p class="new_p">10 Fastest Growing Abstract</p>
                <p class="new_p">Solution Providers 2019</p>
            </div>
            <div class="col">
                <div class="awards_wrapper">
                    <img src="../assets/img/award-d-200x191.png" class="img">
                </div>
                <p class="new_p">National Excellence Agencie</p>
                <p class="new_p">Award Winner 2020</p>
            </div>
        </div>
    
    
    
    
    
    
    </div>
</template>



<script>
export default {
    name: 'MyAwards'   
    
}
</script>



<style lang="scss" scoped>
*{
    margin: 0 auto;
    padding: 0;
}

.wrapper{
    background-color: #e3e4e2;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    padding-bottom: 80px;
    .row{
        display: flex;
        flex-direction: row;
        gap: 20px;
        h2{
            font-size: 30px;
            color: #010101;
            text-align: left;
        }
        h3{
            font-size: 24px;
            color: #010101;
            text-align: left;
        }
    }
}

.new_p{
    font-size: 18px;
    font-weight: 100;
}
.inline_block{
    display: inline;
}
.margin_top{
    margin-top: 50px;
}
.col_4{
    gap: 30px;
    .text_card{
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 180px;
    }
    .img_wrapper{
        margin-top: 50px;
        img{
            border-radius: 10px;
        }
    }
}
.flex_row{
    display: flex;
    flex-direction: row;
}
.flex_col{
    display: flex;
    flex-direction: column;
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
                margin-left: 0;

            }    
            .btn:hover {
                background-color: #fefefe;
                color: #eb621f;
                cursor: pointer;
                border-color: #eb621f;
            }
p, span{
    margin-left: 0;
    text-align: left;
}
p{
    color: #010101;
    font-size: 24px;
    font-weight: bold;
}


.justify_center{
    justify-content: center;
}
.align_center{
    align-content: center;
}

.wrapper_text_icon{
    margin-top: 180px;
    width: 400px;

}

.align_left{
    text-align: left;

}


.icon_wrapper{
    width: 50px;
    border:solid 4px #eb621f;
    border-radius: 10px;
}

.icon{
    margin-top: 10px;
}
.orange{
    color: #eb621f;
}


</style>