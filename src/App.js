import React , {useEffect} from 'react';
import './navbar.css';
import Utama from './Components/utama';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';

const App = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

    return(
      <div> 
        <nav class="navbar navbar-expand-lg navbar-mainbg">

          <NavLink className="navbar-brand navbar-logo" to="/" exact>
          <img src="mcd.png" width="40" height="33" alt="Malas Ngoding" />
          Welkom!
          </NavLink>
          
          <button 
          className="navbar-toggler"
          onClick={ function(){
          setTimeout(function(){ animation(); });
          }}
          type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars text-white"></i>
          </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

            <div class="hori-selector">
              <div class="left"></div>
              <div class="right"></div>
            </div>

            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i 
                className="fas fa-home">
                </i>Beranda
              </NavLink>
            </li>

            <li className="nav-item">
             <NavLink className="nav-link" to="/tentangsaya" exact>
                <i 
                className="fas fa-user">
                </i>Tentang Saya
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/karya" exact>
                <i 
                className="fas fa-icons">
                </i>Karya
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/kontak" exact>
                <i 
                className="fas fa-address-book">
                </i>Kontak
              </NavLink>
            </li>
              
            <li className="nav-item">
              <NavLink className="nav-link" to="/list" exact>
                <i 
                className="fas fa-clipboard-list">
                </i>List
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery" exact>
                <i 
                className="fas fa-folder">
                </i>Gallery
              </NavLink>
            </li>

            </ul>
            </div>
        </nav>
        <hr />
      <p><Utama /></p>
      </div>
    );
  }

export default App;