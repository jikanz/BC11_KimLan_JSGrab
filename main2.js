    var grabX = document.getElementById("grabX"); 
    var grabSUV = document.getElementById("grabSUV"); 
    var grabBlack = document.getElementById("grabBlack"); 
    function xacDinhLoaiGrab () {
        let loaiGrab
        if (grabX.checked) {
            loaiGrab = "grabX"
        }
        if (grabSUV.checked) {
            loaiGrab = "grabSUV"
        }
        if (grabBlack.checked) {
            loaiGrab = "grabBlack"
        }
        return loaiGrab;
    }
     function tinhKMDau(soKM,giaKMDau){
         tich= soKM *giaKMDau;
    return tich;
    }
    function tinhKMTren1(soKM,giaKMTren1){
        tich =(soKM-1) * giaKMTren1;
        return tich;
    }
    function tinhKMTren19(soKM,giaKMTren19){
      tich=  (soKM-19) * giaKMTren19;
        return tich;
    }
    function tinhGiaCho(tgCho,giaCho){
        var tich = 0;
        if (tgCho>=3) {tich =Math.floor(tgCho/3)*giaCho };
        return tich;
    }
    // console.log(tinhGiaCho(2,2000))
function tinhTien (){
    var soKM = document.getElementById("soKM").value ;
    soKM =parseFloat(soKM);
    var thoiGianCho = document.getElementById("thoiGianCho").value ;
    thoiGianCho =parseFloat(thoiGianCho);
    divThanhTien =document.getElementById("divThanhTien") ;
    divThanhTien.style.display = "block" ;
    var spanTien = document.getElementById("xuatTien");
    var thanhTien = 0;
    var loaiXe = xacDinhLoaiGrab();
    switch (loaiXe) {
        case "grabX":
            if (soKM>0 && soKM <= 1){
                thanhTien = tinhKMDau(1,8000) + tinhGiaCho(thoiGianCho,2000);
            }
            else if (soKM>1 && soKM <= 19){
                thanhTien =tinhKMTren1(soKM,7500)+tinhKMDau(1,8000)+tinhGiaCho(thoiGianCho,2000);
            }
            else if (soKM > 19){
                thanhTien =tinhKMTren19(soKM,7000)+tinhKMTren1(19,7500)+tinhKMDau(1,8000)+tinhGiaCho(thoiGianCho,2000);
            }
            else {alert("Nhập số >0")}
            break;
            case "grabSUV":
                          if (soKM <= 1){
                thanhTien = tinhKMDau(1,9000) + tinhGiaCho(thoiGianCho,3000);
            }
            else if (soKM>1 && soKM <= 19){
                thanhTien =tinhKMTren1(soKM,8500)+tinhKMDau(1,9000)+tinhGiaCho(thoiGianCho,3000);
            }
            else if (soKM > 19){
                thanhTien =tinhKMTren19(soKM,8000)+tinhKMTren1(19,8500)+tinhKMDau(1,9000)+ tinhGiaCho(thoiGianCho,3000);
            }
                break ;
                case "grabBlack" :
                    if (soKM <= 1){
                thanhTien = tinhKMDau(1,10000) + tinhGiaCho(thoiGianCho,3500);
            }
            else if (soKM>1 && soKM <= 19){
                thanhTien =tinhKMTren1(soKM,9500)+tinhKMDau(1,10000)+tinhGiaCho(thoiGianCho,3500);
            }
            else if (soKM > 19){
                thanhTien =tinhKMTren19(soKM,9000)+tinhKMTren1(19,9500)+tinhKMDau(1,10000)+ tinhGiaCho(thoiGianCho,3500);
            }
                    break ;
    }
      spanTien.innerHTML =thanhTien;
}
