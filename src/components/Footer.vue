<template>
  <div class="footer">
    <div class="footer__bottom">
       <div class="copyright">
         <span >&copy; 2021
           Анна Шестакова</span>
      </div>
      <div class="social-links">
        <a href="http://vk.com/krylovka_yar" class="icon">
          <i class="icon-vkontakte"></i>
        </a>
        <a href="https://www.facebook.com/krylovka2015" class="icon">
          <i class="icon-facebook"></i>
        </a>
        <a href="https://www.instagram.com/krylovka_v_yaroslavle/" class="icon">
          <i class="icon-instagram"></i>
        </a>
        <router-link to="/contacts" class="icon">
          <i class="icon-phone"></i>
        </router-link>
        <a href="#" class="icon">
          <i class="icon-enquiry"></i>
        </a>
      </div>
    </div>
    <div class="projects">
      <ul class="projects__banners">
        <li>
          <a href="#">
            <img
              class="projects__img"
              src="../assets/images/banners/Children.jpg"
              alt="Детям"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              class="projects__img"
              src="../assets/images/banners/childrenSupport.jpg"
              alt="Фонд поддержки детей"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              class="projects__img"
              src="../assets/images/banners/FamilyPortal.png"
              alt="Семейный портал"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              class="projects__img"
              src="../assets/images/banners/friendEnvironment.jpg"
              alt="Доступная среда"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              class="projects__img"
              src="../assets/images/banners/presentBook.jpg"
              alt="Подари ребенку книгу"
            />
          </a>
        </li>
        <li>
          <a href="">
            <img
              class="projects__img"
              src="../assets/images/banners/mainBooks.jpg"
              alt="Во весь голос"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>
