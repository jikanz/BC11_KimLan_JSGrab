const grabX_1 = 8000;
const grabX_2 = 7500;
const grabX_3 = 7000;
const grabX_Wait = 2000;
const grabSUV_1 = 9000;
const grabSUV_2 = 8500;
const grabSUV_3 = 8000;
const grabSUV_Wait = 3000;
const grabBlack_1 = 10000;
const grabBlack_2 = 9500;
const grabBlack_3 = 9000;
const grabBlack_Wait = 3500;
var tienCho = 0;
var tienKM1 = 0;
var tienKM2 = 0;
var tienKM3 = 0;
var tongTien = 0;
function tinhKMDau(soKM, giaKMDau) {
  tich = soKM * giaKMDau;
  return tich;
}
function tinhKMTren1(soKM, giaKMTren1) {
  tich = (soKM - 1) * giaKMTren1;
  return tich;
}
function tinhKMTren19(soKM, giaKMTren19) {
  tich = (soKM - 19) * giaKMTren19;
  return tich;
}
function tinhGiaCho(tgCho, giaCho) {
  var tich = 0;
  if (tgCho >= 3) {
    tich = Math.floor(tgCho / 3) * giaCho;
  }
  return tich;
}
function xacDinhLoaiGrab() {
  var grabX = document.getElementById("grabX");
  var grabSUV = document.getElementById("grabSUV");
  var grabBlack = document.getElementById("grabBlack");
  if (grabX.checked) {
    return "grabX";
  }
  if (grabSUV.checked) {
    return "grabSUV";
  }
  if (grabBlack.checked) {
    return "grabBlack";
  }
  return null;
}

document.getElementById("btnTinhTien").onclick = function () {
  var soKM = document.getElementById("soKM").value;
  var tgCho = document.getElementById("thoiGianCho").value;
  var loaiXe = xacDinhLoaiGrab();
  if (!loaiXe) {
    alert("vui lòng nhập loại xe");
    return;
  }
  switch (loaiXe) {
    case "grabX":
      tinhChiTIet(soKM, tgCho, grabX_1, grabX_2, grabX_3, grabX_Wait);
      break;
    case "grabSUV":
      tinhChiTIet(soKM, tgCho, grabSUV_1, grabSUV_2, grabSUV_3, grabSUV_Wait);
      break;
    case "grabBlack":
      tinhChiTIet(
        soKM,
        tgCho,
        grabBlack_1,
        grabBlack_2,
        grabBlack_3,
        grabBlack_Wait
      );
      break;
  }
  document.getElementById("divThanhTien").style.display = "block";

  document.getElementById("xuatTien").innerHTML = tongTien;
};
function tinhChiTIet(soKM, tgCho, giaKM1, giaKM2, giaKM3, giaCho) {
  if (soKM > 0 && soKM <= 1) {
    tienCho = tinhGiaCho(tgCho, giaCho);
    tienKM1 = tinhKMDau(1, giaKM1);
    tongTien = tienCho + tienKM1;
  } else if (soKM > 1 && soKM <= 19) {
    tienCho = tinhGiaCho(tgCho, giaCho);
    tienKM1 = tinhKMDau(1, giaKM1);
    tienKM2 = tinhKMTren1(soKM, giaKM2);
    tongTien = tienCho + tienKM1 + tienKM2;
  } else if (soKM > 19) {
    tienCho = tinhGiaCho(tgCho, giaCho);
    tienKM1 = tinhKMDau(1, giaKM1);
    tienKM2 = tinhKMTren1(19, giaKM2);
    tienKM3 = tinhKMTren19(soKM, giaKM3);
    tongTien = tienCho + tienKM1 + tienKM2 + tienKM3;
  } else {
    alert("Nhập số >0");
  }
}

function inHoaDon() {
  var loaiXe = xacDinhLoaiGrab();
  if (!loaiXe) {
    alert("vui lòng nhập loại xe");
    return;
  }
  switch (loaiXe) {
    case "grabX":
      hienThiGrabX();
      break;
    case "grabSUV":
      hienThiGrabSUV();
      break;
    case "grabBlack":
      hienThiGrabBlack();
      break;
  }
}
function hienThiGrabX() {
  var soKM = document.getElementById("soKM").value;
  var tgCho = document.getElementById("thoiGianCho").value;
  var soKMTren1 = 0;
  var soKMTren19 = 0;
  var tongTienTren1 = 0;
  var tongTienTren19 = 0;
  var tongKet = 0;
  if (soKM > 0 && soKM <= 1) {
    tongTien = soKM * grabX_1;
    tongKet = tongTien + tinhGiaCho(tgCho, 2000);
  } else if (soKM > 1 && soKM <= 19) {
    soKMTren1 = soKM - 1;
    soKM = 1;
    tongTien = grabX_1;
    tongTienTren1 = soKMTren1 * grabX_2;
    tongKet = tongTien + tinhGiaCho(tgCho, 2000) + tongTienTren1;
  } else {
    soKMTren19 = soKM - 19;
    soKMTren1 = 18;
    soKM = 1;
    tongTien = grabX_1;
    tongTienTren1 = soKMTren1 * grabX_2;
    tongTienTren19 = soKMTren19 * grabX_3;
    tongKet =
      tongTien + tinhGiaCho(tgCho, 2000) + tongTienTren1 + tongTienTren19;
  }
  var content = "";
  var content1 = "";
  var content2 = "";
  var content3 = "";
  var content4 = "";
  var content5 = "";
  content += "<tr>";
  content += "<th>THEO KM </th>";
  content += "<th>SỬ DỤNG    </th> ";
  content += "<th>ĐƠN GIÁ    </th>";
  content += "<th>THÀNH TIỀN    </th>";
  content += "<tr>";
  content1 += "<tr>";
  content1 += "<td>KM Đầu tiên:</td>";
  content1 += "<td>" + soKM + "</td> ";
  content1 += "<td>" + grabX_1 + "</td>";
  content1 += "<td>" + tongTien + "</td>";
  content1 += "<tr>";
  content2 += "<tr>";
  content2 += "<td>2km đến 19 km:</td>";
  content2 += "<td>" + soKMTren1 + "</td> ";
  content2 += "<td>" + grabX_2 + "</td>";
  content2 += "<td>" + tongTienTren1 + "</td>";
  content2 += "<tr>";
  content3 += "<tr>";
  content3 += "<td>trên 19 km:</td>";
  content3 += "<td>" + soKMTren19 + "</td> ";
  content3 += "<td>" + grabX_3 + "</td>";
  content3 += "<td>" + tongTienTren19 + "</td>";
  content3 += "<tr>";
  content4 += "<tr>";
  content4 += "<td>thời gian chờ:</td>";
  content4 += "<td>" + tgCho + "</td> ";
  content4 += "<td>" + grabX_Wait + "</td>";
  content4 += "<td>" + tinhGiaCho(tgCho, 2000) + "</td>";
  content4 += "<tr>";
  content5 += "<tr>";
  content5 += "<td>TỔNG TIỀN :</td>";
  content5 += "<td></td>";
  content5 += "<td> </td>";
  content5 += "<td>" + tongKet + "</td>";
  content5 += "<tr>";
  document.getElementById("tBodyHoaDon").innerHTML =
    content + content1 + content2 + content3 + content4 + content5;
}
function hienThiGrabSUV() {
  var soKM = document.getElementById("soKM").value;
  var tgCho = document.getElementById("thoiGianCho").value;
  var soKMTren1 = 0;
  var soKMTren19 = 0;
  var tongTienTren1 = 0;
  var tongTienTren19 = 0;
  var tongKet = 0;
  if (soKM > 0 && soKM <= 1) {
    tongTien = soKM * grabSUV_1;
    tongKet = tongTien + tinhGiaCho(tgCho, 3000);
  } else if (soKM > 1 && soKM <= 19) {
    soKMTren1 = soKM - 1;
    soKM = 1;
    tongTien = grabSUV_1;
    tongTienTren1 = soKMTren1 * grabSUV_2;
    tongKet = tongTien + tinhGiaCho(tgCho, 3000) + tongTienTren1;
  } else {
    soKMTren19 = soKM - 19;
    soKMTren1 = 18;
    soKM = 1;
    tongTien = grabSUV_1;
    tongTienTren1 = soKMTren1 * grabSUV_2;
    tongTienTren19 = soKMTren19 * grabSUV_3;
    tongKet =
      tongTien + tinhGiaCho(tgCho, 3000) + tongTienTren1 + tongTienTren19;
  }
  var content = "";
  var content1 = "";
  var content2 = "";
  var content3 = "";
  var content4 = "";
  var content5 = "";
  content += "<tr>";
  content += "<th>THEO KM </th>";
  content += "<th>SỬ DỤNG    </th> ";
  content += "<th>ĐƠN GIÁ    </th>";
  content += "<th>THÀNH TIỀN    </th>";
  content += "<tr>";
  content1 += "<tr>";
  content1 += "<td>KM Đầu tiên:</td>";
  content1 += "<td>" + soKM + "</td> ";
  content1 += "<td>" + grabSUV_1 + "</td>";
  content1 += "<td>" + tongTien + "</td>";
  content1 += "<tr>";
  content2 += "<tr>";
  content2 += "<td>2km đến 19 km:</td>";
  content2 += "<td>" + soKMTren1 + "</td> ";
  content2 += "<td>" + grabSUV_2 + "</td>";
  content2 += "<td>" + tongTienTren1 + "</td>";
  content2 += "<tr>";
  content3 += "<tr>";
  content3 += "<td>trên 19 km:</td>";
  content3 += "<td>" + soKMTren19 + "</td> ";
  content3 += "<td>" + grabSUV_3 + "</td>";
  content3 += "<td>" + tongTienTren19 + "</td>";
  content3 += "<tr>";
  content4 += "<tr>";
  content4 += "<td>thời gian chờ:</td>";
  content4 += "<td>" + tgCho + "</td> ";
  content4 += "<td>" + grabSUV_Wait + "</td>";
  content4 += "<td>" + tinhGiaCho(tgCho, 3000) + "</td>";
  content4 += "<tr>";
  content5 += "<tr>";
  content5 += "<td>TỔNG TIỀN :</td>";
  content5 += "<td></td>";
  content5 += "<td> </td>";
  content5 += "<td>" + tongKet + "</td>";
  content5 += "<tr>";
  document.getElementById("tBodyHoaDon").innerHTML =
    content + content1 + content2 + content3 + content4 + content5;
}
function hienThiGrabBlack() {
  var soKM = document.getElementById("soKM").value;
  var tgCho = document.getElementById("thoiGianCho").value;
  var soKMTren1 = 0;
  var soKMTren19 = 0;
  var tongTienTren1 = 0;
  var tongTienTren19 = 0;
  var tongKet = 0;
  if (soKM > 0 && soKM <= 1) {
    tongTien = soKM * grabBlack_1;
    tongKet = tongTien + tinhGiaCho(tgCho, 3500);
  } else if (soKM > 1 && soKM <= 19) {
    soKMTren1 = soKM - 1;
    soKM = 1;
    tongTien = grabBlack_1;
    tongTienTren1 = soKMTren1 * grabBlack_2;
    tongKet = tongTien + tinhGiaCho(tgCho, 3500) + tongTienTren1;
  } else {
    soKMTren19 = soKM - 19;
    soKMTren1 = 18;
    soKM = 1;
    tongTien = grabBlack_1;
    tongTienTren1 = soKMTren1 * grabBlack_2;
    tongTienTren19 = soKMTren19 * grabBlack_3;
    tongKet =
      tongTien + tinhGiaCho(tgCho, 3500) + tongTienTren1 + tongTienTren19;
  }
  var content = "";
  var content1 = "";
  var content2 = "";
  var content3 = "";
  var content4 = "";
  var content5 = "";
  content += "<tr>";
  content += "<th>THEO KM </th>";
  content += "<th>SỬ DỤNG    </th> ";
  content += "<th>ĐƠN GIÁ    </th>";
  content += "<th>THÀNH TIỀN    </th>";
  content += "<tr>";
  content1 += "<tr>";
  content1 += "<td>KM Đầu tiên:</td>";
  content1 += "<td>" + soKM + "</td> ";
  content1 += "<td>" + grabBlack_1 + "</td>";
  content1 += "<td>" + tongTien + "</td>";
  content1 += "<tr>";
  content2 += "<tr>";
  content2 += "<td>2km đến 19 km:</td>";
  content2 += "<td>" + soKMTren1 + "</td> ";
  content2 += "<td>" + grabBlack_2 + "</td>";
  content2 += "<td>" + tongTienTren1 + "</td>";
  content2 += "<tr>";
  content3 += "<tr>";
  content3 += "<td>trên 19 km:</td>";
  content3 += "<td>" + soKMTren19 + "</td> ";
  content3 += "<td>" + grabBlack_3 + "</td>";
  content3 += "<td>" + tongTienTren19 + "</td>";
  content3 += "<tr>";
  content4 += "<tr>";
  content4 += "<td>thời gian chờ:</td>";
  content4 += "<td>" + tgCho + "</td> ";
  content4 += "<td>" + grabBlack_Wait + "</td>";
  content4 += "<td>" + tinhGiaCho(tgCho, 3500) + "</td>";
  content4 += "<tr>";
  content5 += "<tr>";
  content5 += "<td>TỔNG TIỀN :</td>";
  content5 += "<td></td>";
  content5 += "<td> </td>";
  content5 += "<td>" + tongKet + "</td>";
  content5 += "<tr>";
  document.getElementById("tBodyHoaDon").innerHTML =
    content + content1 + content2 + content3 + content4 + content5;
}
document.getElementById("exampleModal").onclick = function () {
  inHoaDon();
};
