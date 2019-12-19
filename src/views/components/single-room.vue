<template>
    <sui-card>
      <sui-card-content>
        <sui-card-header>Cute Dog
          <sui-icon class="right floated" size="small" name="like" />
          <sui-icon class="right floated" size="small" name="star" />
        </sui-card-header>
        <sui-card-description>
           Price
          </sui-card-description>
          <sui-card-description>
            Elliot Fu is a film-maker from New York.
          </sui-card-description>
        <sui-image src="static/images/wireframes/paragraph.png"/>
      </sui-card-content>
      <sui-card-content extra>
        <span>
          <sui-icon name="heart" /> Like
        </span>
        <span slot="right">
          <sui-icon name="star" /> Favorite
        </span>
      </sui-card-content>
    </sui-card>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    .card{
        width: 100% !important;
        
    }
    .ui.card{
        margin-top: 10px !important;
        /* margin-left: 10px;
        margin-right: 10px; */
    }
</style>