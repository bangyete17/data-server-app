// ================================
// ENEMY 4- PELURU
// ================================

var peluru4List = [];

function enemy4Tembak(musuh){

    
    if(!game.aktif) return;

    var peluru = {};

    // spawn dari mulut senjata
    var worldX = musuh.x - game.cameraX;
var worldY = musuh.y - game.cameraY;

if(musuh.skalaX == 1){
    peluru.x = worldX + 20;
    peluru.sx = 10;
}else{
    peluru.x = worldX - 20;
    peluru.sx = -10;
}

peluru.y = worldY - 10;
    
// kecepatan vertikal awal
peluru.sy = 0;
    
    peluru.sprite = setSprite(
        dataGambar.peluru4,
        16,
        16
    );

    peluru4List.push(peluru);
}

function updatePeluru4(){

    if(!game.aktif) return;

    for(
        var i = peluru4List.length - 1;
        i >= 0;
        i--
    ){

        var p = peluru4List[i];

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

            peluru4List.splice(i,1);

            continue;
        }

        // keluar layar
        if(
            p.x < -300 ||
            p.x > game.lebar + 300
        ){

            peluru4List.splice(i,1);
        }
    }
}

function resetEnemy4(){

    peluru4List = [];
}
