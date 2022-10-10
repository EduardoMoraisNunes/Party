var vid = document.getElementById("vid")
var aud = document.getElementById("aud")
var mapvideo = document.getElementById('mapvideo')
var mapaudio = document.getElementById('mapaudio')
var click = new Audio('../sounds/click.ogg')
var dance = new Audio('../sounds/dance.ogg')
var diff = 'diff'
        fetch("SongInfo.json")
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){
            mapRetrieved = (data)
            mapSorted = mapRetrieved.sort((a,b)=>{
                return a.name.localeCompare(b.name)
                //return a.coaches.localeCompare(b.coaches)
            })
            /*mapSorted2 = mapRetrieved.sort((a,b)=>{
                return a.coaches.localeCompare(b.coaches)
            })*/
            console.log(mapSorted)
            mapStored = (mapRetrieved, index, array) => {
                var container = document.createElement("div")
                container.setAttribute('class', 'container')
                var div = document.createElement("div");
                var p = document.createElement("p")
                p.innerHTML = mapRetrieved.name
                document.getElementById("main").appendChild(container);
                container.appendChild(div);
                div.setAttribute('class', 'Square')
                div.setAttribute('id', mapRetrieved.id)
                div.setAttribute('data-art', mapRetrieved.artist)
                div.setAttribute('data-diff', mapRetrieved.difficulty)
                div.setAttribute('data-ver', mapRetrieved.justdance)
                div.setAttribute('data-coach', mapRetrieved.coaches)
                p.setAttribute('class', 'SongName')
                div.style.backgroundImage = 'url(../Maps/'+mapRetrieved.id+'/Square.jpg )'
                container.appendChild(p);
            };
            mapRetrieved.forEach(mapStored)
      })
      var mapId  
      var mapName     
      const main = document.getElementById('main')
            main.addEventListener('click', event => {
                const clickedElement = event.target
                if(clickedElement.className === 'Square'){
                    event.target.focus()
                //event.target.style.
                mapId = event.target.id
                mapCoaches = event.target.getAttribute('data-coach')
                mapDiff = event.target.getAttribute('data-diff')
                mapVer = event.target.getAttribute('data-ver')
                if(mapVer == 1){
                    document.getElementById('justdancever').innerHTML = 'Just Dance 1'
                }
                if(mapVer == 2){
                    document.getElementById('justdancever').innerHTML = 'Just Dance 2'
                }
                if(mapVer == 2.1){
                    document.getElementById('justdancever').innerHTML = 'Just Dance Wii'
                }
                if(mapVer == 2.2){
                    document.getElementById('justdancever').innerHTML = 'Just Dance Wii 2'
                }
                if(mapVer == 3){
                    document.getElementById('justdancever').innerHTML = 'Just Dance 3'
                }
                if(mapVer == 4){
                    document.getElementById('justdancever').innerHTML = 'Just Dance 4'
                }
                if(mapVer == 5){
                    document.getElementById('justdancever').innerHTML = 'Just Dance 2014'
                }
                if(mapVer == 5.1){
                    document.getElementById('justdancever').innerHTML = 'Just Dance Wii U'
                }
                if(mapVer == 6){
                    document.getElementById('justdancever').innerHTML = 'Just Dance 2015'
                }
                if(mapVer == 7){
                    document.getElementById('justdancever').innerHTML = 'Just Dance 2016'
                }
                if(mapVer == 7.1){
                    document.getElementById('justdancever').innerHTML = 'Just Dance Vitally School'
                }
                if(mapVer == 8){
                    document.getElementById('justdancever').innerHTML = 'Just Dance 2017'
                }
                if(mapVer == 9){
                    document.getElementById('justdancever').innerHTML = 'Just Dance 2018'
                }
                if(mapVer == 10){
                    document.getElementById('justdancever').innerHTML = 'Just Dance 2019'
                }
                if(mapVer == 11){
                    document.getElementById('justdancever').innerHTML = 'Just Dance 2020'
                }
                if(mapVer == 12){
                    document.getElementById('justdancever').innerHTML = 'Just Dance 2021'
                }
                if(mapVer == 13){
                    document.getElementById('justdancever').innerHTML = 'Just Dance 2022'
                }
                if(mapDiff == 1){
                    document.getElementById('deux').style.opacity = '50%'
                    document.getElementById('trois').style.opacity = '50%'
                    document.getElementById('quatre').style.opacity = '50%'
                    document.getElementById('diff-text').innerHTML = 'Easy'
                }
                if(mapDiff == 2){
                    document.getElementById('deux').style.opacity = '100%'
                    document.getElementById('trois').style.opacity = '50%'
                    document.getElementById('quatre').style.opacity = '50%'
                    document.getElementById('diff-text').innerHTML = 'Medium'
                }
                if(mapDiff == 3){
                    document.getElementById('deux').style.opacity = '100%'
                    document.getElementById('trois').style.opacity = '100%'
                    document.getElementById('quatre').style.opacity = '50%'
                    document.getElementById('diff-text').innerHTML = 'Hard'
                }
                if(mapDiff == 4){
                    document.getElementById('deux').style.opacity = '100%'
                    document.getElementById('trois').style.opacity = '100%'
                    document.getElementById('quatre').style.opacity = '100%'
                    document.getElementById('diff-text').innerHTML = 'Extreme'
                }
                mapName = event.target.nextSibling.innerHTML
                mapArt = event.target.getAttribute('data-art')
                document.getElementById('songdetails').style.animationDirection = 'reverse'
               //console.log(event)
                playVideo()
                document.getElementById('songdetails').style.display = 'block'
                }
            })
            //Dance button in menu
            const bodye = document.getElementById('main')
            bodye.addEventListener('click', event =>{
            const ifclicked = event.target
            if(ifclicked.className != "Square"){
                document.getElementById('songdetails').style.animationDirection = 'normal'
                setTimeout(()=>{
                document.getElementById('songdetails').style.display = 'none'
                vid.src = ""
                aud.volume = 0.2
                }, 1000)
            }
        })
        function playVideo(){
            document.getElementById('songname').innerHTML = mapName
            document.getElementById('songartist').innerHTML = mapArt
            document.getElementById('difficulty').classList.add(mapDiff)
            aud.volume = 0.3
            aud.src = ("../Maps/" + mapId + '/Preview.ogg')
            vid.src = ("../Maps/" + mapId + '/Preview.webm')
            aud.play()
            vid.play()
            repeat()
            document.addEventListener('keypress', function remove(e){
                if (e.key === 'Enter'){
                    button.click()
                    document.removeEventListener('keypress', remove)

                }
            })
            //fadeout()
        }
        function repeat(){
            var repeattime = vid.duration + 1500
            repeatinterval = setInterval(()=>{
                clearInterval(repeatinterval)
                //aud.volume = 1
                vid.play()
                aud.play()
                //fadeout()
                repeat()
            }, repeattime)
        }
        /*function fadeout(){
            fadetime = setTimeout(()=>{
                const fade = vid.duration
                const fade2 = 450
            audFade = setInterval(()=>{
                if(vid.currentTime >= 27){
                aud.volume = aud.volume - 0.01
                }
                if (aud.volume < 0.6) {
                clearInterval(audFade);
                }
            }, fade2) 
        },10000)
        }*/
        const button = document.getElementById('playButton')
        button.addEventListener('click', event =>{
            const buttonclicked = event.target
            if(buttonclicked.className === "but" || buttonclicked.id === 'buttonText'){
                console.log("BUTTON!")
                click.play()
                document.getElementById('extraname').innerHTML = mapName
                document.getElementById('extraartist').innerHTML = mapArt 
                document.getElementById('mapcoach').style.backgroundImage = 'url(../Maps/'+mapId+'/Albumcoach.webp)' || 'url(../coach.webp)'
                document.getElementById('coach1').classList.remove('coach')
                document.getElementById('coach1').classList.remove('coach2')
                document.getElementById('coach1').classList.remove('coach3')
                document.getElementById('coach1').classList.remove('coach4')
                document.getElementById('coach1').classList.remove('coach5')
                document.getElementById('coach1').classList.remove('coach6')
                document.getElementById('coach2').classList.remove('coach2')
                document.getElementById('coach2').classList.remove('coach3')
                document.getElementById('coach2').classList.remove('coach4')
                document.getElementById('coach2').classList.remove('coach5')
                document.getElementById('coach2').classList.remove('coach6')
                document.getElementById('coach3').classList.remove('coach3')
                document.getElementById('coach3').classList.remove('coach4')
                document.getElementById('coach3').classList.remove('coach5')
                document.getElementById('coach3').classList.remove('coach6')
                document.getElementById('coach4').classList.remove('coach4')
                document.getElementById('coach4').classList.remove('coach5')
                document.getElementById('coach4').classList.remove('coach6')
                document.getElementById('coach5').classList.remove('coach5')
                document.getElementById('coach5').classList.remove('coach6')
                document.getElementById('coachback').classList.remove('coach')
                document.getElementById('coachback').classList.remove('coach2')
                document.getElementById('coachback').classList.remove('coach3')
                document.getElementById('coachback').classList.remove('coach4')
                document.getElementById('coachback').classList.remove('coach5')
                document.getElementById('coachback').classList.remove('coach6')
                document.getElementById('coachback2').classList.remove('coach2')
                document.getElementById('coachback2').classList.remove('coach3')
                document.getElementById('coachback2').classList.remove('coach4')
                document.getElementById('coachback2').classList.remove('coach5')
                document.getElementById('coachback2').classList.remove('coach6')
                document.getElementById('coachback3').classList.remove('coach3')
                document.getElementById('coachback3').classList.remove('coach4')
                document.getElementById('coachback3').classList.remove('coach5')
                document.getElementById('coachback3').classList.remove('coach6')
                document.getElementById('coachback4').classList.remove('coach4')
                document.getElementById('coachback4').classList.remove('coach5')
                document.getElementById('coachback4').classList.remove('coach6')
                document.getElementById('coachback5').classList.remove('coach5')
                document.getElementById('coachback5').classList.remove('coach6')
                if (mapCoaches == 1) {
                    document.getElementById('coach1').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_1.webp)'
                    document.getElementById('coachback').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_1.webp)'
                    document.getElementById('coachback').classList.add('coach')
                    document.getElementById('coach1').classList.add('coach')
                    document.getElementById('coach2').style.display = 'none'
                    document.getElementById('coach3').style.display = 'none'
                    document.getElementById('coach4').style.display = 'none'
                    document.getElementById('coach5').style.display = 'none'
                    document.getElementById('coach6').style.display = 'none'
                    document.getElementById('coachback2').style.display = 'none'
                    document.getElementById('coachback3').style.display = 'none'
                    document.getElementById('coachback4').style.display = 'none'
                    document.getElementById('coachback5').style.display = 'none'
                    document.getElementById('coachback6').style.display = 'none'

                }
                if (mapCoaches == 2) {
                    document.getElementById('coach1').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_1.webp)'
                    document.getElementById('coach2').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_2.webp)'
                    document.getElementById('coachback').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_1.webp)'
                    document.getElementById('coachback2').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_2.webp)'
                    document.getElementById('coachback').classList.add('coach2')
                    document.getElementById('coachback2').classList.add('coach2')
                    document.getElementById('coach1').classList.add('coach2')
                    document.getElementById('coach2').classList.add('coach2')
                    document.getElementById('coach2').style.display = 'block'
                    document.getElementById('coach3').style.display = 'none'
                    document.getElementById('coach4').style.display = 'none'
                    document.getElementById('coach5').style.display = 'none'
                    document.getElementById('coach6').style.display = 'none'
                    document.getElementById('coachback3').style.display = 'none'
                    document.getElementById('coachback4').style.display = 'none'
                    document.getElementById('coachback5').style.display = 'none'
                    document.getElementById('coachback6').style.display = 'none'
                }
                if (mapCoaches == 3) {
                    document.getElementById('coach1').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_1.webp)'
                    document.getElementById('coach2').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_2.webp)'
                    document.getElementById('coach3').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_3.webp)'
                    document.getElementById('coachback').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_1.webp)'
                    document.getElementById('coachback2').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_2.webp)'
                    document.getElementById('coachback3').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_3.webp)'
                    document.getElementById('coachback').classList.add('coach3')
                    document.getElementById('coachback2').classList.add('coach3')
                    document.getElementById('coachback3').classList.add('coach3')
                    document.getElementById('coach1').classList.add('coach3')
                    document.getElementById('coach2').classList.add('coach3')
                    document.getElementById('coach3').classList.add('coach3')
                    document.getElementById('coach2').style.display = 'block'
                    document.getElementById('coach3').style.display = 'block'
                    document.getElementById('coach4').style.display = 'none'
                    document.getElementById('coach5').style.display = 'none'
                    document.getElementById('coach6').style.display = 'none'
                    document.getElementById('coachback4').style.display = 'none'
                    document.getElementById('coachback5').style.display = 'none'
                    document.getElementById('coachback6').style.display = 'none'
                }
                if (mapCoaches == 4) {
                    document.getElementById('coach1').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_1.webp)'
                    document.getElementById('coach2').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_2.webp)'
                    document.getElementById('coach3').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_3.webp)'
                    document.getElementById('coach4').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_4.webp)'
                    document.getElementById('coachback').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_1.webp)'
                    document.getElementById('coachback2').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_2.webp)'
                    document.getElementById('coachback3').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_3.webp)'
                    document.getElementById('coachback4').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_4.webp)'
                    document.getElementById('coachback').classList.add('coach4')
                    document.getElementById('coachback2').classList.add('coach4')
                    document.getElementById('coachback3').classList.add('coach4')
                    document.getElementById('coachback4').classList.add('coach4')
                    document.getElementById('coach1').classList.add('coach4')
                    document.getElementById('coach2').classList.add('coach4')
                    document.getElementById('coach3').classList.add('coach4')
                    document.getElementById('coach4').classList.add('coach4')
                    document.getElementById('coach2').style.display = 'block'
                    document.getElementById('coach3').style.display = 'block'
                    document.getElementById('coach4').style.display = 'block'
                    document.getElementById('coach5').style.display = 'none'
                    document.getElementById('coach6').style.display = 'none'
                    document.getElementById('coachback5').style.display = 'none'
                    document.getElementById('coachback6').style.display = 'none'

                }
                if (mapCoaches == 5) {
                    document.getElementById('coach1').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_1.webp)'
                    document.getElementById('coach2').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_2.webp)'
                    document.getElementById('coach3').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_3.webp)'
                    document.getElementById('coach4').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_4.webp)'
                    document.getElementById('coach5').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_4.webp)'
                    document.getElementById('coachback').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_1.webp)'
                    document.getElementById('coachback2').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_2.webp)'
                    document.getElementById('coachback3').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_3.webp)'
                    document.getElementById('coachback4').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_4.webp)'
                    document.getElementById('coachback5').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_5.webp)'
                    document.getElementById('coachback').classList.add('coach5')
                    document.getElementById('coachback2').classList.add('coach5')
                    document.getElementById('coachback3').classList.add('coach5')
                    document.getElementById('coachback4').classList.add('coach5')
                    document.getElementById('coachback5').classList.add('coach5')
                    document.getElementById('coach1').classList.add('coach5')
                    document.getElementById('coach2').classList.add('coach5')
                    document.getElementById('coach3').classList.add('coach5')
                    document.getElementById('coach4').classList.add('coach5')
                    document.getElementById('coach5').classList.add('coach5')
                    document.getElementById('coach2').style.display = 'block'
                    document.getElementById('coach3').style.display = 'block'
                    document.getElementById('coach4').style.display = 'block'
                    document.getElementById('coach5').style.display = 'block'
                    document.getElementById('coach6').style.display = 'none'
                    document.getElementById('coachback6').style.display = 'none'
                }
                if (mapCoaches == 6) {
                    document.getElementById('coach1').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_1.webp)'
                    document.getElementById('coach2').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_2.webp)'
                    document.getElementById('coach3').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_3.webp)'
                    document.getElementById('coach4').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_4.webp)'
                    document.getElementById('coach5').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_4.webp)'
                    document.getElementById('coach6').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_4.webp)'
                    document.getElementById('coachback').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_1.webp)'
                    document.getElementById('coachback2').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_2.webp)'
                    document.getElementById('coachback3').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_3.webp)'
                    document.getElementById('coachback4').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_4.webp)'
                    document.getElementById('coachback5').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_5.webp)'
                    document.getElementById('coachback6').style.backgroundImage = 'url(../Maps/'+mapId+'/Coach_6.webp)'
                    document.getElementById('coachback').classList.add('coach6')
                    document.getElementById('coachback2').classList.add('coach6')
                    document.getElementById('coachback3').classList.add('coach6')
                    document.getElementById('coachback4').classList.add('coach6')
                    document.getElementById('coachback5').classList.add('coach6')
                    document.getElementById('coachback6').classList.add('coach6')
                    document.getElementById('coach1').classList.add('coach6')
                    document.getElementById('coach2').classList.add('coach6')
                    document.getElementById('coach3').classList.add('coach6')
                    document.getElementById('coach4').classList.add('coach6')
                    document.getElementById('coach5').classList.add('coach6')
                    document.getElementById('coach6').classList.add('coach6')
                    document.getElementById('coach2').style.display = 'block'
                    document.getElementById('coach3').style.display = 'block'
                    document.getElementById('coach4').style.display = 'block'
                    document.getElementById('coach5').style.display = 'block'
                    document.getElementById('coach6').style.display = 'block'
                }
                document.getElementById('mapbackground').style.backgroundImage = 'url(../Maps/'+mapId+'/Background.webp)'
                mapaudio.src = ("../Maps/" + mapId + '/' + mapId + '.ogg')
                mapvideo.src = ("../Maps/" + mapId + '/'+ mapId + '.webm')
                setTimeout(() => {
                    document.getElementById('loadingmap').style.animationName = 'loading'
                    document.getElementById('loadingmap').style.display = 'block'
                    document.getElementById('songdetails').style.display = 'none'

                    vid.src = ""

                }, 2000);
                setTimeout(() => {
                    document.getElementById('loadingmap').style.opacity = '100%'
                }, 2500);
                setTimeout(() => {
                    document.getElementById('loading').style.opacity = '100%' 
                }, 5000);
                mapvideo.addEventListener('loadeddata', (e) => {
                    if(mapvideo.readyState >= 3){
                    document.getElementById('startButton').style.display = 'block'
                    document.addEventListener('keypress', function add(e){
                        if (e.key === 'Enter'){
                            button.click()
                            document.removeEventListener('keypress', add)
        
                        }
                    })
                    }
                })
                /*check = setInterval(() => {             
                    if (mapvideo.readyState === 4 & mapaudio.readyState === 4) {
                        document.getElementById('startButton').style.display = 'block'
                        clearInterval(check)

                    }
                }, 1000)*/
            }
        })
        const buttone = document.getElementById('startButton')
        buttone.addEventListener('click', event =>{
            const buttonclickede = event.target
            if(buttonclickede.className === "butto"){
                aud.src = ""
                vid.src = ""
                click.play()
                dance.play()
                clearInterval(repeatinterval)
                setTimeout(() => {
                document.getElementById('mapplaying').style.display = 'block'
                document.getElementById('loadingmap').style.display = 'none'
                mapvideo.play()
                mapaudio.play()
                document.getElementById('loading').style.opacity = '0%' 
                document.getElementById('loadingmap').style.opacity = '0%'
                }, 4000);
                setTimeout(() => {
                    end()
                }, 10000);
            }
        })
function end(){
    ended = (mapvideo.duration * 1000) - 8000
  setTimeout(() => {
    document.getElementById('mapplaying').style.display = 'none'
  }, ended);

}