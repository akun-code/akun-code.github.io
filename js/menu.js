function ganti1() {
	document.getElementById("img").src="img/home.png";
}

function ganti2(){
	document.getElementById("img").src="img/kd.png";
}

function ganti3(){
	document.getElementById("img").src="img/author.png";
}

$(document).ready(function(){
		$('.pilih-menu').click(function(){
			var menu = $(this).attr('id');
			if(menu == "home"){
				$('.halaman').load('menu/home.html');												
			}else if(menu == "kd"){
				$('.halaman').load('menu/kikd.html');											
			}else if(menu == "info"){
				$('.halaman').load('menu/info.html');											
			}
		});
		// halaman yang di load default pertama kali
		$('.halaman').load('menu/home.html');						

	});


const teks = document.querySelector('.teks');
      teks.innerHTML=`
        <h1>Mohon maaf, media hanya bisa di akses di ukuran layar yang lebih dari 1212px (desktop/laptop).</h1>
      `;