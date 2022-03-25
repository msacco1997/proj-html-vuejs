<template>
    <div class="container">
        <div class="row">
            <div class="col_4 img" >
                <figure>
                    <img src="../assets/svg/img1.svg" alt="">
                </figure>
            </div>
            <div class="col_4 card">
                <div class="business">
                    <font-awesome-icon icon="fa-solid fa-wifi" class="round blue" />
                    <span>Business Growth</span>
                </div>
                <h2>Increase Brand Awareness</h2>
                <span class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, possimus labore provident unde laboriosam magni veniam fugiat odit non nihil!</span>
                <button href="#" class="btn">Get a Consultation</button>
            </div>
        </div>
        <div class="row reverse">
            <div class="col_4 img" >
                <figure>
                    <img src="../assets/svg/img2.svg" alt="">
                </figure>
            </div>
            <div class="col_4 card_right">
                <div class="business">
                    <font-awesome-icon icon="fa-solid fa-wifi" class="round yellow" />
                    <span>Investors in People</span>
                </div>
                <h2>In-House Sales Training</h2>
                <span class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, possimus labore provident unde laboriosam magni veniam fugiat odit non nihil!</span>
                <button href="#" class="btn">Get a Consultation</button>
            </div>
        </div>    
        <div class="row">
            <div class="col_4 img" >
                <figure>
                    <img src="../assets/svg/img3.svg" alt="">
                </figure>
            </div>
            <div class="col_4 card ">
                <div class="business">
                    <font-awesome-icon icon="fa-solid fa-wifi" class="round green" />
                    <span>Social Media Analysis</span>
                </div>
                <h2>Harness Your Social Proof</h2>
                <span class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, possimus labore provident unde laboriosam magni veniam fugiat odit non nihil!</span>
                <button href="#" class="btn">Get a Consultation</button>
            </div>
        </div>
    </div>




</template>




<script>

    
export default {
    name: 'MyInfos'
}

</script>



<style lang="scss" scoped>
*{
    margin: 0 auto;
    text-align: left;
}
figure{
    margin-right: 0;
}
.row{
    display: flex;
    
    height: 50vh;
    flex-wrap: wrap;
    .col_4{
        width: 33%;
        height: 100%;
        
        
        .img{
            margin-right: 0;
            .text{

            }
        }   
    }
}
                img{
                    height: 50vh;
                }
.card{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 20px;
    
}

.round{
    color: #fefefe;
    border-radius: 40%;
    
}
.blue{
    background-color: #2455b0;
}


            .btn{
                width: 200px;
                /* margin-right: 180px; */
                height: 50px;
                font-size: 16px;
                align-self: center;
                text-align: center;
                border-radius: 8px;
                background-color: #eb621f ;
                color: #fefefe;
                font-weight: bold;
                border-color: transparent;
                margin-left: 0;
            }    
            .btn:hover {
                background-color: #eb621f;
                color: #fefefe;
                cursor: pointer;
            }
    h2{
        font-weight: bold;
        font-size: 30px;
        margin-left: 0;
        width: 300px;
    }
    .text{
        width: 300px;
        margin-left: 0;
    }
    .business{
        margin-left: 0;
    }
    .reverse{
        flex-direction: row-reverse;
    }
    .yellow{
        background-color: #efd43f;
    }
    .green{
        background-color: #95f1be;
    }
    .card_right{
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    gap: 20px;
    margin-right: 0;  

    }
</style>