<template>
    <div class="wrapper">
        <div class="row margin_top">
            <div class="col flex_col">
                <p class="bold title align_left">Grow Your Online Business Strategically, and Improve Customer retention.</p>
                <div class="icon_wrapper">
                    <font-awesome-icon icon="fa-solid fa-phone" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-phone" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-phone" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-phone" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-phone" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-phone" class="icon" />
                </div>
            </div>
            <div class="col">
                <ul class="align_left">
                    <li class="list bold">Services</li>
                    <li class="list">Marketing Plan</li>
                    <li class="list">Sales Development</li>
                    <li class="list">Digital Marketing</li>
                    <li class="list">Pricing</li>
                    <li class="list">Why Us</li>
                    <li class="list">Case Studies</li>
                </ul>
            </div>
            <div class="col">
                <ul class="align_left">
                    <li class="list bold">Resources</li>
                    <li class="list">Learning Center</li>
                    <li class="list">Video Tutorials</li>
                    <li class="list">Customers</li>
                    <li class="list">Blog</li>
                </ul>
            </div>
            <div class="col">
                <ul class="align_left">
                    <li class="list bold">Company</li>
                    <li class="list">Who We Are</li>
                    <li class="list">Contact Us</li>
                    <li class="list">Careers</li>
                </ul>
            </div>
        </div>
        <div class="row justify_self">
            <div class="col align_left">© 2020 ·Avada Consultant ·Powered by Wordpress</div>
            <div class="col align_left">Call Us (555)802-1234</div>
            <div class="col align_left">info@yourcompany.com</div>
        </div>
    </div>
</template>





<script>
export default {
    name: 'MyFooter'
}
</script>





<style lang="scss" scoped>
.wrapper{
    width: 100vw;
    height:40vh;
    display: flex;
    flex-direction: column;
    gap: 200px;
    
    .row{
        display:flex;
        flex-direction: row;
        justify-content: center;
        gap: 50px;
        
        .col{
            width: 400px;
        }
    }
}

.flex_col{
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.title{
    font-size: 28px;
    color: #010101;
}
.margin_top{
    margin-top: 100px;
}

.justify_self{
    align-self: flex-start;
    margin-left: 50px;
}

ul{
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style: none;
    color: #010101;
}

.bold{
    font-weight: bold;
}
.align_left{
    text-align: left;
}
.icon_wrapper{
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    gap: 25px;
    .icon{
        color: #010101;
        height: 20px;
    }
}

</style>