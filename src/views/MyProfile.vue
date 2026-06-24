<script setup></script>

<template>
  <div class="all">
    <div class="avatar-area">
      <div class="container-normal avatar-inner">
        <img
          class="avatar"
          src="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="name-area">
      <div class="container-normal name-inner">
        <p class="myName">陳允</p>
        <p class="myTitle">前端工程師</p>
      </div>
    </div>
    <div class="info-area">
      <div class="info-left">
        <div class="degree-area">
          <p class="degree">學歷</p>
          <div class="degree-info">
            <div>
              <p>義守大學</p>
              <p>廚藝暨美食學系</p>
              <p>Sep / 2018 ~ Jun / 2022</p>
            </div>
            <div>
              <p>新民高中</p>
              <p>應用外語英文科</p>
              <p>Sep / 2015 ~ Jun / 2018</p>
            </div>
          </div>
        </div>
      </div>
      <div class="info-right">
        <div class="contact"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-normal {
  max-width: 1300px;
  margin: auto;
}

.all {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.avatar-area {
  background-color: aqua;
  width: 100%;
  padding: 20px 0;
}

.avatar-inner {
  display: flex;
  justify-content: center;
}

.avatar {
  width: 200px;
  height: 200px;
  /* border-radius: 50%; */
  object-fit: cover;
}

.name-area {
  background-color: aquamarine;
  width: 100%;
  padding: 0 0 20px 0;
}

.name-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.myName {
  font-size: 3rem;
  font-weight: 500;
}

.myTitle {
  font-size: 2rem;
  font-weight: 500;
}

.info-area {
  background-color: brown;
  width: 100%;
  /* height: 500px; */
}

.degree-area {
  width: fit-content;
  background-color: azure;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.degree-info {
  display: flex;
  flex-direction: column;
  gap: 16px 0;
}
</style>
