<template>
  <div>
    <h3>List right HERE</h3>
    <InputBox />
    <ListItem />
  </div>
</template>

<script>
import InputBox from "../components/InputBox.vue";
import ListItem from "../components/ListItem.vue";

export default {
  name: "list",
  components: [InputBox, ListItem]
};
</script>
