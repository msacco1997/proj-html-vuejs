<template>
    <div class="row">
        <div class="">
            <img src="../assets/img/large-testimonial-400x389.jpg">
        </div>
        <div class="col_4">
            <div class="text_cards">
                <p class="cit align_left margin_left">"The team at Avada Marketing Consultant is fabulous. The helped us unlock our potential online and offline. We have experienced year on year growth due to their progressive approach."</p>
                <h3 class="align_left margin_left">Kate Shadler</h3>
                <h4 class="align_left margin_left"> Marketing Consultant - Abstract</h4>
            </div>
        </div>
    </div>
</template>


<script >

export default {
    name: 'MyInfos2'  
}
</script>



<style lang="scss" scoped>
.row{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 80px;
    gap: 100px;
}

.col_4{
    display: flex;
    flex-direction: column;
    width: 33%;
    gap: 20px;
}
img{
    border-radius: 10px;
}

.align_left{
    text-align: left;
}
.cit{
    font-size: 26px;
    font-weight: bold;
    color: #010101;
    width: 400px;

}

h3, h4{
    color: #010101;
}

h4{
  font-weight: 100;  
}
.text_cards{
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;
}




</style>
