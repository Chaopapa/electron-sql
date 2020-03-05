<template>
    <div class="login">
        <login-form />
    </div>
</template>

<script>
import form from "./components/login-form"

export default {
    components:{
        'login-form':form
    }
    
}
</script>

<style lang="scss">
    .login{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f1f1f1;
        .form{
            .line{
                margin-bottom: 20px;
                overflow: hidden;
                label{
                    width: 40px;
                    height: 30px;
                    line-height: 30px;
                    float: left;
                    text-align: right;
                }
                input{
                    float: left;
                    margin-left: 20px;
                    height: 30px;
                    box-sizing: border-box;
                    outline: none;
                    font-size: 14px;
                }
                button{
                    float: right;
                }
            }
        }
    }
</style>