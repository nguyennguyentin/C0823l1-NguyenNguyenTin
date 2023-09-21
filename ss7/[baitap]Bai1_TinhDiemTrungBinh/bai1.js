function tinhTB(){
     let diemly  = parseInt(document.getElementById( "ly" ).value);
     let  diemhoa = parseInt(document.getElementById( "hoa" ).value);
     let diemsinh = parseInt(document.getElementById( "sinh" ).value);
    let diemTB = ( diemly + diemhoa + diemsinh ) /3;
    alert(diemTB);
}