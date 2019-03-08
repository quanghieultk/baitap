$(function () {
    $('.boicon1').click(function (e) {
        $(this).children('.khungbenngoai').toggleClass('doimau');
        $(this).children('.icontrong').toggleClass('mautrang1');
        $(this).children().toggleClass('hienlen');
        $('.leftoptionUser2').toggleClass('andi');
        $('.leftoptionUser1').toggleClass('hienlen');
        $(this).parent().parent().toggleClass('backgroundxamdam');
    });
    $dem = 0;
    $('.iconchung1').click(function (e) {
        $dem = $dem + 1;
        if ($dem % 2 == 0) {
            $('.boicon1').children('.khungbenngoai').removeClass('doimau');
            $('.boicon1').children('.icontrong').removeClass('mautrang1');
            $('.noidungbanguser').removeClass('backgroundxamdam');
            $('.boicon1').children().removeClass('hienlen');
        }
        else {
            $('.boicon1').children('.khungbenngoai').removeClass('doimau');
            $('.boicon1').children('.khungbenngoai').addClass('doimau');
            $('.boicon1').children('.icontrong').removeClass('mautrang1');
            $('.boicon1').children('.icontrong').addClass('mautrang1');

            $('.noidungbanguser').removeClass('backgroundxamdam');
            // $('.noidungbanguser').removeClass('backgroundxamdam');
            $('.noidungbanguser').addClass('backgroundxamdam');

            $('.boicon1').children().removeClass('hienlen');
            $('.boicon1').children().addClass('hienlen');
        }
        $(this).children('.khungbenngoai').toggleClass('doimau');
        $(this).children('.icontrong').toggleClass('mautrang1');
        $(this).children().toggleClass('hienlen');
        // $('.leftoptionUser2').toggleClass('andi');
        // $('.leftoptionUser1').toggleClass('hienlen');
    });
    // phan kich noidungbanguser
    // $('.cot2_noidung').click(function (e) { 
    //     $('.rightmaincontent').toggleClass('hienlen');   
    // });
    $('.cot3_noidung').click(function (e) {
        $('.rightmaincontent').toggleClass('hienlen');
        $(this).parent().toggleClass('backgroundxamdam');
        $(this).parent().children('.cot1_noidung').children('.boicon1').children('.khungbenngoai').toggleClass('doimau');
        $(this).parent().children('.cot1_noidung').children('.boicon1').children('.icontrong').toggleClass('mautrang1');
        $(this).parent().children('.cot1_noidung').children('.boicon1').children('.icontrong').toggleClass('hienlen');
        $('.phannoidungrightcontent').addClass('hienlen');
        $('.hienlennn01').addClass('tabhienlen');
        $('.maunennhat').removeClass('andi');
    });
    $('.cot4_noidung').click(function (e) {
        $('.rightmaincontent').toggleClass('hienlen');
        $(this).parent().toggleClass('backgroundxamdam');
        $(this).parent().children('.cot1_noidung').children('.boicon1').children('.khungbenngoai').toggleClass('doimau');
        $(this).parent().children('.cot1_noidung').children('.boicon1').children('.icontrong').toggleClass('mautrang1');
        $(this).parent().children('.cot1_noidung').children('.boicon1').children('.icontrong').toggleClass('hienlen');
        $('.phannoidungrightcontent').addClass('hienlen');
        $('.hienlennn01').addClass('tabhienlen');
        $('.maunennhat').removeClass('andi');
    });

    // end phan kich noidungbanguser
    //Phan hieu ung cho Tab
    $('.phannuttieude li').click(function () {
        $('.phannuttieude li').removeClass('gachchan1');
        $(this).addClass('gachchan1');

        x = $(this).index();
        x = x + 1;
        //console.log("Vi tri cua phan tu duoc kich la " + x);

        //cho noi dung tuong ung hien thi
        $('.phannoidungrightcontent ul li').removeClass('tabhienlen');
        $('.phannoidungrightcontent ul li:nth-child(' + x + ')').addClass('tabhienlen');
    });
    // End hieu ung cho Tab

    //Hieu ung kich cho bang thay doi mat khau
    $('.rightusername .ms-Icon--Permissions').click(function (e) {
        $('.datlaimatkhau').toggleClass('hienlen');
        $('.maincontent .rightmaincontent').removeClass('hienlen');
        $('.maunennhat').removeClass('andi');
    });
    //Phan rightmain
    $('.iconmain1').click(function (e) {
        $('.datlaimatkhau').addClass('hienlen');
        $('.rightmaincontent').removeClass('hienlen');
    });
    $('.iconmain3').click(function (e) {
        $('.xoanguoidung-01').addClass('hienlen');
        $('.rightmaincontent').removeClass('hienlen');
    });
    //Hieu ung kich cho nut close 
    $('.header-datlai .ms-Icon--ChromeClose').click(function (e) {
        $('.datlaimatkhau').removeClass('hienlen');
        $('.chinhsuanhomnguoidung').removeClass('hienlen');
        $('.nguoidungmoi10').removeClass('hienlen');
        $('.dongbohoathumuc01').removeClass('hienlen');
        $('.xoanguoidung-01').removeClass('hienlen');
        $('.phannoidungrightcontent').removeClass('hienlen');
        $('.maunennhat').addClass('andi');
    });
    $('.toprightmaincontent .ms-Icon--ChromeClose').click(function (e) {
        $('.rightmaincontent').removeClass('hienlen');
        $('.maunennhat').addClass('andi');
    });
    $('#ohuybo').click(function (e) {
        $('.datlaimatkhau').removeClass('hienlen');
    });
    $('.adduser #datlaimatkhau').click(function (e) {
        $('.maunennhat').removeClass('andi');
        $('.datlaimatkhau').addClass('hienlen');
    });
    $('.adduser #ganchonhom').click(function (e) {
        $('.maunennhat').removeClass('andi');
        $('.chinhsuanhomnguoidung').addClass('hienlen');

    });
    // --------------------------------JQ cho thanh tieu de--------------------------------
    $('.quanligiayphep01').click(function (e) {
        $('.rightmaincontent').toggleClass('hienlen');
        $('.maunennhat').removeClass('andi');
    });
    $('.themnguoidungf').click(function (e) {
        $('.maunennhat').removeClass('andi');
        $('.nguoidungmoi10').addClass('hienlen');
    });
    $('.xuatnguoidug01').click(function (e) {
        $('.maunennhat').removeClass('andi');
        $('.xuatnguoidunghienhoat').addClass('hienlen');
    });
    $('.nutkhong11').click(function (e) {
        $('.maunennhat').addClass('andi');
        $('.xuatnguoidunghienhoat').removeClass('hienlen');
    });
    $('.ttddatlaimk').click(function (e) {
        $('.maunennhat').removeClass('andi');
        $('.datlaimatkhau').addClass('hienlen');
    });
    $('.ttddongbohoa').click(function (e) {
        $('.maunennhat').removeClass('andi');
        $('.dongbohoathumuc01').addClass('hienlen');
    });
    $('.close-dongbohoa').click(function (e) {
        $('.maunennhat').addClass('andi');
        $('.dongbohoathumuc01').removeClass('hienlen');
    });
    $('.menudong-cot01').click(function (e) {
        $('.maunennhat').removeClass('andi');
        $('.rightmaincontent').addClass('hienlen');
    });
    $('.menudong-cot02').click(function (e) {
        $('.maunennhat').removeClass('andi');
        $('.chinhsuanhomnguoidung').addClass('hienlen');
    });
    $('.menudong-cot04').click(function (e) {
        $('.maunennhat').removeClass('andi');
        $('.xoanguoidung-01').addClass('hienlen');
    });
    $('.tdtxoanguoidung').click(function (e) {
        $('.maunennhat').removeClass('andi');
        $('.xoanguoidung-01').addClass('hienlen');
    });
    $('.tdt-listtop01').click(function (e) {
        $('.tdt-menu12').toggleClass('hienlen');
    });
    $('.tdt-chinhsuatennd').click(function (e) {
        $('.maunennhat').removeClass('andi');
        $('.quanlytennguoidung01').addClass('hienlen');
    });
    $('.filter.adduser').click(function (e) {
        $('.menuboloctdt').toggleClass('hienlen');
    });
    $('.xoanguoidung-ohuybo').click(function (e) {
        $('.maunennhat').addClass('andi');
        $('.xoanguoidung-01').removeClass('hienlen');
    });
    $('.datlaimatkhau-ohuybo').click(function (e) {
        $('.maunennhat').addClass('andi');
        $('.datlaimatkhau').removeClass('hienlen');
    });
    $('.toprightmaincontent .ms-Icon--ChromeClose').click(function (e) {
        $('.tabhienlen').removeClass('tabhienlen');
    });
    $('.haioduoimanhinh .khungbentrai10').click(function (e) {
        $('.khungduoimanhinh').addClass('hienlen');
    });
    $('.thanhtdduoimanhinh .ms-Icon--ChromeClose').click(function (e) {
        $('.khungduoimanhinh').removeClass('hienlen');
        $('.noidung-duoimanhinh').removeClass('hienlen');
    });
    $('.thanhtd-icon2').click(function (e) {
        $('.noidung-duoimanhinh').addClass('andi');
        $('.noidung-duoimanhinh').removeClass('hienlen');
        $('.ndduoimanhinh02').addClass('hienlen');
        $(this).addClass('backgroundxamnhat');
        $('.thanhtd-icon1').removeClass('backgroundxamnhat');
        $('.thanhtd-icon1').addClass('backgroundxamdam-tieude');
    });
    $('.thanhtd-icon1').click(function (e) {
        $('.ndduoimanhinh02').addClass('andi');
        $('.ndduoimanhinh02').removeClass('hienlen');
        $('.noidung-duoimanhinh').addClass('hienlen');
        $(this).addClass('backgroundxamnhat');
        $('.thanhtd-icon2').removeClass('backgroundxamnhat');
        $('.thanhtd-icon2').addClass('backgroundxamdam-tieude');
    });
    $('.khungbenphai10').click(function (e) {
        $('.phanhoiduoimanhinh').addClass('hienlen');
        $('.noidung-duoimanhinh').addClass('hienlen');
    });
    $('.phanhoiduoimanhinh .ms-Icon--ChromeClose').click(function (e) {
        $('.phanhoiduoimanhinh').removeClass('hienlen');
        $('.noidung-duoimanhinh').removeClass('hienlen');
    });
    $('.huybo-nguoidung').click(function (e) {
        $('.nguoidungmoi10').removeClass('hienlen');
        $('.maunennhat').addClass('andi');
    });
    $('.qltnd-icontrai,.qltnd-iconphai,.huybo-nguoidung').click(function (e) {
        $('.quanlytennguoidung01').removeClass('hienlen');
        $('.maunennhat').addClass('andi');
    });
    $('.dongchinhsuanhom').click(function (e) {
        $('.chinhsuanhomnguoidung').removeClass('hienlen');
        $('.maunennhat').addClass('andi');
    });
    $(window).click(function(e) {
        $('*').removeClass('hienlen');
    });
})
