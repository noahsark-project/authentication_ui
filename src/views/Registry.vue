<template>
    <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
            <RegistryForm></RegistryForm>
        </a-col>
        <a-col :span="8"></a-col>
    </a-row>
</template>
<script>
import RegistryForm from '@/components/RegistryForm';
export default {
    name:"Registry",
    components:{
        RegistryForm
    }
}
</script>
<style lang="css" scope>

</style>