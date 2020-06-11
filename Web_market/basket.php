
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/favicon.ico">

    <title>Хаврошка - магазин здоровых продуктов</title>
   <style>
     
/*Colors*/

* {
  box-sizing: border-box;
}
body {
  background-color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 10px;
  overflow-x: hidden;
}
a,
a:hover,
a:active,
a:visited {
  text-decoration: none !important;
}
.block {
  display: block;
}
h1 {
  font-size: 2rem;
  color: #ffffff;
}
h2 {
  font-size: 2rem;
  color: #1e1e1e;
}
/*Верхнее мeню*/
.top-menu {
  height: 2.8rem;
  font-size: 1.2rem;
  background-color: #444444;
}
.top-menu-nav {
  padding-top: .4rem;
}
.top-menu-nav ul {
  padding-left: 0;
}
.top-menu-nav ul li {
  display: inline;
  margin-right: 4rem;
  text-align: center;
  liste-style: none;
}
.top-menu-nav ul li a {
  color: #bcbcbb;
}
.top-menu-nav ul li a:hover {
  width: 100%;
  background-color: #5e5e5e;
  color: #ffffff;
  margin: 0;
  padding: 0.4rem 1.5rem;
}
.top-menu .dropdown:hover > .dropdown-menu {
  display: block;
}
.top-menu .user-area {
  height: 2.8rem;
  margin: 0;
  padding: 0.4rem 0 !important;
  position: relative;
  text-align: center;
  background-color: #0c9d45;
}
.top-menu .user-area a {
  padding-left: 2rem;
}
.top-menu .user-area a:before {
  position: absolute;
  content: '';
  background: url(../src/img/user.png) no-repeat;
  width: 100%;
  height: 100%;
  top: 25%;
  left: 5%;
}
.top-menu .user-area > .user-area-link {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 130px;
  padding: 5px 0;
  margin: 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #0c9d45;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: none;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.top-menu .user-area > .user-area-link a {
  color: #ffffff;
}
.top-menu .user-area > .user-area-link a:before {
  background: transparent;
}
.top-menu a:hover .dropdown-menu ul li {
  visibility: visible;
}
.top-menu .user-area-link {
  position: absolute;
  width: 100%;
  height: 7.5rem;
  top: 0;
  left: 0;
  background-color: #0c9d45;
}
.top-menu .user-area-link li a span {
  margin-left: -1rem;
  border-bottom: 0.1rem dashed #ffffff;
}
.top-menu .user-area-link a:hover {
  background-color: transparent;
}
.top-menu a {
  color: #ffffff;
  margin: 0;
}
/*---------------*/
.navbar-inverse {
  z-index: 20;
  background-color: #444444;
}
.navbar-brand > img {
  display: block;
  width: 80%;
  margin-top: -1rem;
}
/*Тело шапки*/
.main-header {
  padding-left: 2rem;
  text-align: left;
  font-size: 1.2rem;
  margin-top: 0;
}
.main-header .logo img {
  width: 100%;
  max-width: 32rem;
  margin: 3rem 0;
}
.main-header .search {
  margin-top: 7.5rem;
  text-align: right;
}
.main-header .search form {
  position: relative;
  width: 26rem;
  margin: 0 auto;
}
.main-header .search input,
.main-header .search button {
  outline: none;
  background: transparent;
}
.main-header .search input {
  width: 100%;
  height: 40px;
  padding: 1rem;
  padding-left: 15px;
  border: 0.1rem solid #dddddd;
}
.main-header .search button {
  height: 40px;
  width: 40px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  border: none;
  background: url(../src/img/search.png) center no-repeat;
}
.main-header .media {
  margin-top: 7.5rem;
}
.main-header span {
  font-size: 1.6rem;
  font-weight: bold;
}
.main-header-text {
  width: 14rem;
  float: left;
  display: block;
}
/*Основное меню*/
.main-menu {
  background: #ffffff url(../src/img/bg.jpg) 0 0 repeat;
  height: 8rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  text-transform: uppercase;
  clear: both;
}
.main-menu ul {
  padding-left: 0;
  list-style: none;
  padding-top: 2.5rem;
  text-align: center;
}
.main-menu ul li {
  display: inline;
}
.main-menu ul li a {
  padding-right: 4rem;
  color: #444444;
}
.main-menu ul li a:hover {
  color: #0c9d45;
}
.main-menu-basket {
  text-align: right;
  padding-top: 1rem;
}
/*slider*/
.slider {
  position: relative;
}
.slider-item img {
  display: block;
  width: 100%;
}
.main-slider-btn {
  position: absolute;
  top: 50%;
  outline: none;
  background-color: transparent;
  border: none;
}
.prev-btn {
  left: 20%;
  z-index: 2;
}
.next-btn {
  right: 20%;
}
ul > .slick-dots {
  margin-top: -3rem;
}
   </style>
  </head>

  <body>

  	<header>
  		<nav class="top-menu">
  			<div class="container">
  				<!-- <div class="row"> -->
  					<div class="col-md-10 col-sm-11 hidden-xs ">
  						<div class="top-menu-nav">
                <ul>
                  <li><a class="active" href="#">О нас</a></li>
                  <li><a href="#">Команда</a></li>
                  <li><a href="#">Контроль качества</a></li>
                  <li><a href="shops.php">Точки выдачи</a></li>
                  <li><a href="contact.php">Контакты</a></li>
                  <li><a href="#">Предзаказ продукта</a></li>
                  <li><a href="#">Продукта нет в каталоге?</a></li>
                </ul>
              </div>
            </div>
						<div class="col-md-2 hidden-sm hidden-xs">
              <div class="dropdown user-area">
                <a data-target="#" href="/" data-toggle="dropdown" class="dropdown-toggle">
                  Личный кабинет 
                </a>
                <ul class="dropdown-menu user-area-link">
                  <li><a href="#"><span>Войти</span></a></li>
                  <li><a href="#"><span>Зарегистрироваться</span></a><li>
                </ul>
              </div>
						</div>
            <div class="col-sm-1 visible-sm hidden-xs">
              <div class="dropdown user-area">
                <a data-target="#" href="/" data-toggle="dropdown" class="dropdown-toggle">
                   
                </a>
                <ul class="dropdown-menu user-area-link">
                  <li><a href="#"><span>Войти</span></a></li>
                  <li><a href="#"><span>Зарегистрироваться</span></a><li>
                </ul>
              </div>
            </div>
            <div class="visible-xs">
                  <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
         <a class="navbar-brand" href="basket.php"><img src="src/img/basket.png" alt="Корзина"></a> 
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a class="active" href="#">О нас</a></li>
            <li><a href="#">Команда</a></li>
            <li><a href="#">Контроль качества</a></li>
            <li><a href="shops.php">Точки выдачи</a></li>
            <li><a href="contact.php">Контакты</a></li>
            <li><a href="#">Предзаказ продукта</a></li>
            <li><a href="#">Продукта нет в каталоге?</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

   <!--  <div class="col-sm-1 visible-sm">
         <div class="dropdown user-area">
           <a data-target="#" href="/" data-toggle="dropdown" class="dropdown-toggle">
              
           </a>
           <ul class="dropdown-menu user-area-link">
             <li><a href="#"><span>Войти</span></a></li>
             <li><a href="#"><span>Зарегистрироваться</span></a><li>
           </ul>
         </div>
       </div> -->

    <script>
    	$('.navbar-collapse').on('click', function () {
    $('.navbar-collapse').collapse('hide');
    $a = $($(this).attr('href'));
    $('html,body').animate({ scrollTop: $a.offset().top - 50}, 500);
    return false;
})
    </script>

            </div>


  				<!-- </div> -->
  			</div>
  		</nav>

      <div class="main-header">
        <div class="container">

          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-12">
              <div class="logo">
                <a href="index.php"><img src="src/img/logo.png" alt="Хаврошка"></a>
              </div>
            </div>
            <div class="col-lg-3 hidden-md hidden-sm hidden-xs">
                <div class="search">
                  <form action="#">
                    <input type="text" placeholder="Поиск">
                    <button type="submit"></button>
                  </form>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-12">
              <div class="media">
                <div class="media-left"></div>
                <div class="media-body">
                    <p class="phone">Заказать по телефону:<br><span>+7 (8342) 312-717</span> </p>
                </div>
              </div>
              <div class="search hidden-lg ">
                  <form action="#">
                    <input type="text" placeholder="Поиск">
                    <button type="submit"></button>
                  </form>
              </div>
            </div>
            <div class="visible-xs col-xs-2">
              <div class="menu-basket">
                <a href="basket.php"><!--<img src="src/img/basket.png" alt="Корзина">--></a>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-10 col-xs-12 ">
              <div class="main-header-text ">
                <div class="media">
                  <div class="media-left">
                      <img class="media-object" src="src/img/time.png" alt="Clock">
                  </div>
                  <div class="media-body">
                    <p><strong>С 8:00 до 21:00</strong><br/>без выходных</p>
                  </div>
                </div>
              </div>
              <div class="main-header-adress ">
                <div class="media">
                  <div class="media-left">
                      <img class="media-object" src="src/img/location.png" alt="Location">
                  </div>
                  <div class="media-body">
                     <p>г. Саранск,<br> ул. Севастопольская, 56/2-195</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-2 visible-sm">
              <div class="menu-basket">
                <a href="basket.php"><img src="src/img/basket.png" alt="Корзина"></a>
              </div>
            </div>
          </div>

        </div>
      </div>

          <div class="main-menu">
            <div class="container">
              <div class="row">
                <div class="col-md-11 col-sm-12">
                  <ul class="hidden-xs">
                    <li><a href="catalog.php">Каталог продукции</a></li>
                    <li><a href="#">Акции</a></li>
                    <li><a href="#">Доставка и оплата</a></li>
                    <li><a href="#">Отзывы</a></li>
                    <li><a href="#">Рецепты</a></li>
                    <li><a href="#">Поставщики</a></li>
                    <li><a href="#">Статьи</a></li>
                  </ul>
                  <div class="main-menu-xs">
                    <ul class=" col-xs-12  visible-xs">
                      <li><a href="catalog.php">Каталог продукции</a></li>
                      <li><a href="#">Акции</a></li>
                      <li><a href="#">Рецепты</a></li>
                      <li><a href="#">Доставка и оплата</a></li>
                      <li><a href="#">Статьи</a></li>
                      <li><a href="#">Поставщики</a></li> 
                      <li><a href="#">Отзывы</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-1 hidden-sm hidden-xs">
                  <div class="menu-basket">
                    <a href="basket.php"><img src="src/img/basket.png" alt="Корзина"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

  	</header>





<section class="basket">
	<div class="container">
		<div class="row">
			<div class="section-header">
				<h1>Корзина</h1>
				<p>Главная  >  Персональный раздел  >  Корзина</p>
			</div>
		</div>
		<div class="row">
			<div class="basket-main">
        <form action="mailer/smart.php" method="post">
            <ul class="products clearfix">
				      <li class="product-wrapper">
                <a href="article.php" class="product">
                  <div class="product-photo">
                    <img src="src/img/products/yahourt.png" alt="Творожок Чудо экзотические фрукты">
                  </div>
                  <p>Творожок "Чудо" <br>экзотические фрукты</p>
                  <p class="article"> # 14 </p>
                  <p class="cost"><strong>276</strong> &#8381; 
                    <button class="delete" type="reset" value="Reset">&times;</button>
                    <select class="box" name="quantity" id="quantity">
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                       <option value="6">6</option>
                       <option value="7">7</option>
                       <option value="8">8</option>
                       <option value="9">9</option>
                       <option value="10">10</option>
                    </select></p>
                </a>
              </li>
              <li class="product-wrapper">
                <a href="article.php" class="product">
                  <div class="product-photo">
                    <img src="src/img/products/corn.png" alt="Сладкая кукуруза Aretol замороженная">
                  </div>
                  <p>Сладкая кукуруза <br>"Aretol" замороженная</p>
                  <p class="article"> # 14 </p>
                  <p class="cost"><strong>276</strong> &#8381; 
                    <button class="delete" type="reset" value="Reset">&times;</button>
                    <select class="box" name="quantity" id="quantity">
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                       <option value="6">6</option>
                       <option value="7">7</option>
                       <option value="8">8</option>
                       <option value="9">9</option>
                       <option value="10">10</option>
                    </select></p>
                </a>
              </li>
              <li class="product-wrapper">
                <a href="article.php" class="product">
                  <div class="product-photo">
                    <img src="src/img/products/celery.png" alt="Сельдерей (стебли)">
                  </div>
                  <p>Сельдерей <br> (стебли)</p>
                  <p class="article"> # 14 </p>
                  <p class="cost"><strong>276</strong> &#8381; 
                  <button class="delete" type="reset" value="Reset">&times;</button>  
                    <select class="box" name="quantity" id="quantity">
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                       <option value="6">6</option>
                       <option value="7">7</option>
                       <option value="8">8</option>
                       <option value="9">9</option>
                       <option value="10">10</option>
                    </select></p>
                </a>
            </li>
          </ul>
        </form>
          <div class="cost-block">
            <p class="summary-cost">Итого: <strong> 50 850 </strong>руб.</p>
            <p class="promo">Я знаю Промо-код <a href="">Как получить скидку</a></p>
                        <form class="promo-form" action="mailer/smart.php" method="post">
                          <input type="text" placeholder="Введите код здесь">
                          <button type="submit"></button>
              </form>
          </div>

	          <!-- <div class="row"> -->
                <div class="col-md-3  col-sm-6 col-xs-12">
                  <div class="basket-btn button-green">
                    <span class="icon"><img src="src/img/bascket_white.png" alt="Basket"></span>
                    <a href="#" class=" popup-thanks-btn" onclick="yaCounter47120811.reachGoal('order-btn'); return true;">Оформить заказ</a>
                  </div>
                </div>
                
                <div class="col-md-3 col-sm-6 col-xs-12">
                  <div class="basket-btn button-yellow"   >
                      <span class="icon"><img src="src/img/basket/phone.png" alt="Phone"></span>
                      <a class="popup-thanks-btn" href="#" onclick="yaCounter47120811.reachGoal('call-btn'); return true;" >Заказ по телефону</a>
                  </div>
                </div>
	          <!-- </div> -->
				
			</div>
		</div>
	</div>
</section>

<footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-5 col-sm-12">
            <div class="footer-left">
              <div class="logo"><img src="src/img/logo_white.png" alt="Хаврошка"></div>
              <p>Многие думают, что здоровая пища – это слишком дорого, скучно и при этом невкусно. И зря! Внешняя привлекательность и вкусовые качества очень важны. Удовольствие, разнообразие и богатство ощущений – необходимая составляющая здорового питания.</p>
              <div class="social-links">
                <div class="button btn-facebook"><a href="#"><img src="src/img/fb.png" alt="Facebook"></a></div>
                <div class="button btn-vk"><a href="#"><img src="src/img/vk.png" alt="VK"></a></div>
                <div class="button btn-"><a href=""><img src="src/img/ln.png" alt="LinkedIn"></a></div>
                <div class="button btn-"><a href=""><img src="src/img/ggl.png" alt="Google+"></a></div>
              </div>
              <div class="droit hidden-sm hidden-xs">
                <p>© Все права защищены. 2015<br/>Информация сайта защищена законом об авторских правах.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-12">

              <div class="footer-right">
                <div class="row">
                  <div class="col-lg-8 col-md-7 col-sm-6 col-xs-12">
                    <div class="media">
                      <div class="media-left">
                          <img class="media-object" src="src/img/map.png" alt="Map">
                      </div>
                      <div class="media-body">
                        <p>Саранск,<br/>ул. Севастопольская, 56/2-195</p>
                      </div>
                    </div>
                    <div class="media">
                      <div class="media-left">
                          <img class="media-object" src="src/img/phone.png" alt="Map">
                      </div>
                      <div class="media-body">
                        <p>+7 (8342) 312-717</p>
                      </div>
                    </div>
                    <div class="media">
                      <div class="media-left">
                          <img class="media-object" src="src/img/mail.png" alt="Map">
                      </div>
                      <div class="media-body">
                        <p>info@havroshka.ru</p>
                      </div>
                    </div>
                    <div class="media">
                      <div class="media-left">
                          <img class="media-object" src="src/img/doc.png" alt="Map">
                      </div>
                      <div class="media-body">
                        <p>ООО "ВИП ФУД"<br>ИНН/КПП 1338010555/132801001</p>
                      </div>
                    </div>
                    <div class="footer-paiment">
                      <img src="src/img/visa.png" alt="">
                      <img src="src/img/MasterCard.png" alt="">
                      <img src="src/img/visa-e.png" alt="">
                    </div>
                </div>
                <div class="col-lg-4 col-md-5 col-sm-6 col-xs-12">
                  <div class="footer-links">
                    <ul>
                      <li><a href="">Акции</a></li>
                      <li><a href="">Отзывы</a></li>
                      <li><a href="">Рецепты</a></li>
                      <li><a href="">Поставщики</a></li>
                      <li><a href="">Доставка и Оплата</a></li>
                    </ul>
                  </div>
                </div>
              </div>

                  <div class="footer-newslettre">
                    <div class="col-lg-6 col-md-12 col-sm-6 col-xs-12">
                      <div class="block">
                      <p>Новые рецепты, новости и акции компании</p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-6 col-xs-12">
                      <div class="footer-form">
                        <form  action="mailer/smart.php" method="post">
                        <input class="footer-form-input" type="text" placeholder="Введите e-mail">    
                          <div class="checkbox-form">
                              <span class="checkbox-label">
                              <input class="footer-form-check" type="checkbox" checked><label>Я согласен получать e-mail сообщения
                              </label></span>
                          </div> 
                          <button  type="submit" >Подписаться</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="droit visible-sm visible-xs">
                <p>© Все права защищены. 2015<br/>Информация сайта защищена законом об авторских правах.</p>
                  </div>
                  <div class="devlopement">
                    <p>Разработка WONDER</p>
                  </div>



          </div>
        </div>
      </div>
    </div>
  </footer>


  <!--Модальное окно-заказа Спасибо за обращение-->
   <!--  Получить консультацию   -->

   <div class="popup popup-thanks">
     <!-- Само модальное окно -->
     <div class="popup-dialog">
       <!-- Содержание модального окна -->
       <div class="popup-content">
         <!-- Кнопка закрытия -->
         <button class="popup-close">&times;</button>
         <!-- Заголовок окна -->
         <h4 class="popup-header">Спасибо за обращение</h4>
         <p>Наш специалист свяжется с вами в ближайшее время</p><p></p>
       </div>
     </div>
   </div><!--modal -->

  <!-- Yandex.Metrika counter -->
   <script  > (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter47120811 = new Ya.Metrika({ id:47120811, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/47120811" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->

      <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/animate.css">
        

    <!-- Custom styles for this template -->
    <link href="css/main.css" rel="stylesheet">

        <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" ></script>
    <script src="js/bootstrap.min.js" ></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/ie10-viewport-bug-workaround.js" ></script>
    <link rel="stylesheet" href="slick/slick.css">
    <link rel="stylesheet" href="slick/slick-theme.css">
    <script src="slick/slick.min.js" ></script>
    <script src="js/jquery.maskedinput.min.js"></script>
    <script src="js/wow.min.js"></script>
    <script>
      jQuery(function($){
      $(".phone").mask("+7(999) 999-99-99");
      //wow
      new WOW().init();

      //отправка писем
         $('form').submit(function(event) {
       event.preventDefault();
       $.ajax({
         type: "POST",
         url: "mailer/smart.php",
         data: $(this).serialize()
       }).done(function() {
         $(this).find('input').val('');
         $(this).find('textarea').val('');
         $('form').trigger('reset');
         event.preventDefault();
        $('.popup').fadeOut();
         $('.popup-thanks').fadeIn();
         $('.popup-close').on('click',function(event) {
          event.preventDefault();
          $('.popup-thanks').fadeOut();
        });
       });
       return false;
     });

});
    </script>


    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="../../assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->