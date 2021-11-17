<template>
  <div class="home-container">
    <div class="main-card text-center">
      <div class="card-body">
        <div class="buttons">
          <div class="button-blue button-blue__junior">Младший абонемент</div>
          <div class="button-blue button-blue__senior">Старший абонемент</div>
        </div>
        <div class="schedule-card">
          <h5>Режим работы библиотеки</h5>
          <span>Пн, Вт, Чт, Пт 9.00 – 18.00</span>
          <span>Среда 9.00 – 20.00</span>
          <br>
          <span>Суббота выходной день.</span>
          <span>Воскресенье 9.00 - 17.00</span>
          <br>
          <span>Библиотека закрыта на санитарную</span>
          <span>обработку ежедневно с 14.00 до 14.30</span>
          <br>
          <span>Последний четверг месяца – санитарный день</span>
        </div>
      </div>
    </div>
    <div class="button-container">
      <div class="button-white">Виртуальная справочная служба</div>
      <div class="button-white">Электронный каталог</div>
    </div>
    <div class="section">
      <div class="title">Новости</div><hr>
      <NewsCard/>
      <div class="news-button">Все новости</div>
    </div>
    <div class="section">
      <div class="title">Полезная информация</div><hr>
      <div class="cards">
          <InfoCard/>
          <InfoCard/>
      </div>
    </div>
    <div class="section">
      <div class="title">Наши клубы и актуальные мероприятия</div><hr>
      <div class="cards">
          <Card/>
          <Card/>
          <Card/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import NewsCard from '@/components/NewsCard'
import InfoCard from '@/components/InfoCard'
import Card from '@/components/Card'

export default {
  name: "Home",
  components: {
    NewsCard,
    InfoCard,
    Card
  }
};
</script>
