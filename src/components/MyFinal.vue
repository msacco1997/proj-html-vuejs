<template>
    <div class="wrapper">
        <div class="row">
            <div class="col_5">
                <h1 class="white size_34">Let's Make Things Happen</h1>
                <h2 class="white size_28">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nost quaerat temporibus minus recusandae modi!</h2>
                <hr class="white hr">
                <h4 class="white size_20">"The team at Avada Consultant is fabulous. They helped us unlock our potential online and offline, We have experienced year on year growth due to their progressive approach"</h4>
                <p class="name white size_22">George Anderson</p>
                <p class="position white">Digitalbox CEO</p>
            </div>
            <div class="col_3">
                <div class="card">
                    <div class="img_wrap">
                        <img src="../assets/img/marketing-consultant-expert.jpg" alt="">
                    </div>    
                    <p class="name size_22 black">Richard Madsen</p>
                    <p class="position">Marketing Consultant Expert</p>
                    <p class="number orange"><font-awesome-icon icon="fa-solid fa-phone" class="icon" />(555) 802-1234</p>
                    <input type="text" name="" id="form" value="Your Name*">
                    <input type="text" name="" id="form" value="Your Email*">
                    <input type="text" name="" id="form" value="Your Phone Number*">
                    <button href="#" class="btn">Get a Callback</button>
                    <p class="terms">By submitting my data I agree to be contacted</p>
                </div>
            </div>
        </div>
    </div>
</template>










<script>
export default {
    name: 'MyFinal'
}
</script>










<style lang="scss" scoped>
    .wrapper{
        background-color: #010101;
        height: 70vh;
        .row{
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 100px;
            padding-top: 100px;
            
            .col_5{
                display: flex;
                flex-direction: column;
                text-align: left;
                width: 500px;
                gap: 20px;
                justify-items: center;
            }
        }
    }
    .black{
        color:#010101;
    }

    .orange{
        color: #eb621f;
    }
    .white{
        color: #fefefe;
    }
    .size_34{
        font-size: 50px;
        font-weight: bolder;
        
    }
    .size_28{
        font-size: 28px;
    }
    .size_20{
        font-size: 20px;
        font-style: italic;

    }
    .size_22{
        font-size: 22px;
        font-weight: bold;
    }
    .hr{
        width: 60px;

    }

    .col_3{
        width: 400px;
        background-color: #fefefe;
        border-radius: 10px;
        .card{
            display: flex;
            flex-direction: column;
            gap: 15px;
            .img_wrap{
                margin-top: 20px;

            }
        }
    }

    img{
        width: 80px;
        border-radius: 50%;
        
    }
    #form{
        margin-left: 10px;
        margin-right: 10px;
        color: #424242;
        border: 1px solid #858786;
        border-radius: 5px;
        padding: 8px;
        font-size: 20px;
        width: 350px;
        align-self: center;
    }


     .btn{
                width: 350px;
                height: 40px;
                font-size: 16px;                
                text-align: center;
                border-radius: 8px;
                background-color: #eb621f ;
                color: #fefefe;
                font-weight: bold;
                border-color: transparent;
                align-self: center;

            }    
            .btn:hover {
                background-color: #fefefe;
                color: #eb621f;
                cursor: pointer;
                border-color: #eb621f;
            }
</style>