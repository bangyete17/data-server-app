// ================================
// ENEMY 5 - PELURU
// ================================

var peluru5List = [];

function enemy5Tembak(musuh){

    
    if(!game.aktif) return;

    var peluru = {};

    // spawn dari mulut senjata
    if(musuh.skalaX == 1){
        peluru.x = musuh.x + 20;
        peluru.sx = 10
    }else{
        peluru.x = musuh.x - 20;
        peluru.sx = -10
    }

    peluru.y = musuh.y - 10;
// kecepatan vertikal awal
peluru.sy = 0;
    
    peluru.sprite = setSprite(
        dataGambar.peluru5,
        16,
        16
    );

    peluru5List.push(peluru);
}

function updatePeluru5(){

    if(!game.aktif) return;

    for(
        var i = peluru5List.length - 1;
        i >= 0;
        i--
    ){

        var p = peluru5List[i];

       // gerak lurus
p.x += p.sx;

// gravitasi peluru
p.sy += 0.04
p.y += p.sy;

// gambar peluru langsung dari posisi yang disimpan
p.sprite.x = Math.round(p.x);
p.sprite.y = Math.round(p.y);

        // tampilkan animasi peluru
        loopSprite(p.sprite);

        // tabrak hero
        if(
            jarak(
                game.karakter.x,
                game.karakter.y,
                p.x,
                p.y
            ) < 20
        ){

            heroDead();

            peluru5List.splice(i,1);

            continue;
        }

        // keluar layar
        if(
            p.x < -300 ||
            p.x > game.lebar + 300
        ){

            peluru5List.splice(i,1);
        }
    }
}

function resetEnemy5(){

    peluru5List = [];
}
