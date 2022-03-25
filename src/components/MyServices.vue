<template>
    <div class="row">
        <!-- <img src="../assets/img/marketing-intro.jpg" > -->
        <div class="text">
            <h3>Unlock Your Online Growth Potential</h3>
            <h4>Online marketing to secure customer retention, leads, and sales. We focus on the bigger picture.</h4>
            <button href="#" class="btn"> Our Services</button>
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
                <button href="#" class="btn2">Get a Callback</button>
                <p class="terms">By submitting my data I agree to be contacted</p>
            </div>
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
    
    
    .row{
        background-image: url("../assets/img/marketing-intro.jpg");
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 200px;
        height: 843px;
        background-repeat: no-repeat;

        
    }
    img{
        width: 100vw;

        
    }
    .text{
        margin-top: 300px;
     
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
    .col_3{
        width: 400px;
        background-color: #fefefe;
        border-radius: 10px;
        height: 500px;
        margin-top: 400px;
        box-shadow: 5px 10px #888888 ;
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


     .btn2{
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
            .btn2:hover {
                background-color: #fefefe;
                color: #eb621f;
                cursor: pointer;
                border-color: #eb621f;
            }
</style>