document.addEventListener("DOMContentLoaded", function(){
    // hien thi va an content-left-button
    var leftButton = document.getElementById('left-button');
    var contentLeftButton = document.getElementById('content-left-button');
    var waffle = document.getElementById('icon-waffle');
    leftButton.onclick = function(){
        contentLeftButton.classList.add('hienra');  
    }
    waffle.onclick = function(){
        contentLeftButton.classList.remove('hienra'); 
    }
    // xu ly click vao tung muc office
    var icon2 = document.getElementsByClassName('icon2-office');
    var contentOffice = document.getElementsByClassName('content-office');
    for (let i = 0; i < icon2.length; i++) {
        icon2[i].onclick = function(){
            for (let j = 0; j < contentOffice.length; j++) {
                contentOffice[j].classList.remove('hienra');  
            }
            contentOffice[i].classList.add('hienra');
        }
    }
    // xu ly click vao icon ben phai
    var rightButton = document.getElementsByClassName('right-button');
    var contentRightButton = document.getElementsByClassName('content-right-button');
    var wrapper = document.getElementsByClassName('wrapper');
    for (let i = 0; i < rightButton.length; i++) {
        rightButton[i].onclick = function(){
            var idNen = this.getAttribute('data-nd');
            var idChu = this.getAttribute('data-hienra');
            var noiDungNen = document.getElementById(idNen);
            var noiDungchu = document.getElementById(idChu);
            if(this.classList[1] == 'click-icon-bg'){
                this.classList.toggle('click-icon-bg');
                noiDungNen.classList.toggle('hienra');
                noiDungchu.classList.toggle('hieuungchu');
            } else {
                for (let j = 0; j < rightButton.length; j++) {
                    rightButton[j].classList.remove('click-icon-bg');   
                }
                for (let j = 0; j < contentRightButton.length; j++) {
                    contentRightButton[j].classList.remove('hienra');
                }
                for (let j = 0; j < wrapper.length; j++) {
                    wrapper[j].classList.remove('hieuungchu');    
                }
                this.classList.add('click-icon-bg');
                noiDungNen.classList.add('hienra');
                noiDungchu.classList.add('hieuungchu');
            }         
        } 
    }
    // xu ly click hien thi left-button 
    var iconLink = document.getElementById('icon-link');
    var contentLinkFooter = document.getElementById('content-link-footer');
    iconLink.onclick = function(){
        contentLinkFooter.classList.toggle('hienra');
    }
    // xu ly click all app icon-apps
    var iconApps = document.getElementsByClassName('icon-apps');
    var contentIconApps = document.getElementsByClassName('content-icon-apps');
    for (let i = 0; i < iconApps.length; i++) {
        iconApps[i].onclick = function(){
            for (let j = 0; j < contentIconApps.length; j++) {
                contentIconApps[j].classList.remove('hienra');         
            }
            contentIconApps[i].classList.add('hienra');
        }
    }
    var iconForward = document.getElementById('icon-forward');
    var contentAllApps = document.getElementById('content-all-apps');
    iconForward.onclick = function(){
        contentAllApps.classList.toggle('hienra');
    }
})