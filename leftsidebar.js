    document.addEventListener("DOMContentLoaded", function(){
        var li = document.getElementsByClassName("listItem");
        console.log(li);
        var i;
        for (i = 0; i < li.length; i++) {
            li[i].addEventListener("click", function () {
                if (this.classList.contains("dropdown")) {
                    var tmp = this;
                    var dropdown = this.nextElementSibling;
                    var icon  = this.querySelectorAll("i.rightIcon");
                    console.log(dropdown);
                    dropdown.classList.toggle("active");
                    var subTitle = dropdown.getElementsByTagName("li");
                    for (var j =0 ; j < subTitle.length; j++) {
                        subTitle[j].addEventListener("click", function () {
                        var activeItem = document.querySelectorAll("ul.dropdown-content li.active");
                        var activeItem2 = document.querySelectorAll("ul.list li.active");
                        console.log(activeItem);
                        for (var t =0; t < activeItem.length; t++) activeItem[t].removeAttribute("class");
                        for (var t =0; t< activeItem2.length;t++) activeItem2[t].className = activeItem2[t].className.replace(" active", "");
                        this.classList.add("active");
                        tmp.className += " active";
                        });
                    }
                    if (dropdown.style.display == "block") {
                        dropdown.style.display = "none";
                        icon[0].setAttribute("class","ms-Icon ms-Icon--ChevronDown rightIcon");
                    } else {
                        dropdown.style.display = "block";
                        icon[0].setAttribute("class","ms-Icon ms-Icon--ChevronUp rightIcon");
                        };
                    } else {
                        var activeItem = document.querySelectorAll("ul.dropdown-content li.active");
                        var activeItem2 = document.querySelectorAll("ul.list li.active");
                        console.log(activeItem);
                        for (var t =0; t < activeItem.length; t++) activeItem[t].removeAttribute("class");
                        for (var t =0; t< activeItem2.length;t++) 
                        activeItem2[t].className = activeItem2[t].className.replace(" active", "");
                        this.classList.toggle("active");
                    }
                });
        }
    });
    function smallSidebar() {
        var side = document.getElementsByClassName("sidebar");
        console.log(side);
        side[0].classList.toggle("small");
        var li = document.getElementsByClassName("listItem");
        var dropdownActive = document.querySelectorAll("div.dropdown-container.active");
        for (var i = 0; i< dropdownActive.length; i++) {
           if (dropdownActive[i].style.display == "block") dropdownActive[i].style.display = "none";
           else dropdownActive[i].style.display = "block";
           
        }
        for (var i =0; i< li.length; i++) {
            if (side[0].classList.contains("small")) {
                if (li[0].classList.contains("dropdown")) {
                    li[i].addEventListener("mouseover", function () {
                        var dropdown = this.nextElementSibling;
                        this.style.display = "inline-block";
                    });
                    li[i].addEventListener("mouseout", function () {
                        var dropdown = this.nextElementSibling;
                        dropdown.className = dropdown.className.replace(" active", "");
                    });
                }
            }
        }
    };