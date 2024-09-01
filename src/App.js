import { useState, useEffect } from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
        {
      title: "Theme Of Kalki",
      artist: "Kaila Bharava",
      img_src: "./images/song-5.jpg", 
      src: "./music/[iSongs.info] 06 - Theme Of Kalki.mp3",
      lyrics:`
Adharmaanni Anicheyyaga
Yuga Yugaana Jagamulona
Pari PariVidhaallona Vibhavinche
Vikrama Virat Roopamithade…

Swadharmaanni Parirakshinchaga
Samasthaanni Prakshaalinchaga
Samudbhavinche Avataaramidhe.

Meenamai, Pidhapa Koormamai
Thanu Varaahamai
Manaku Saayamai
Baanamai, Karaku Khadgamai
Churuku Ghaatamai
Manaku Oothamai…

Nishi Tholichaadu Deepamai
Nidhanam Thana Dhyeyamai
Vaayuve Vegamai
Kaliyugaa Sthithi Layale
Kalabose Kalki ithade…

Swadharmaanni Parirakshinchaga
Samasthaanni Prakshaalinchaga
Samudbhavinche Avataaramidhe.

Praarthano Madhura Keerthano
Hrudaya Vedhano
Mana Nivedhanam

Andhithe Manavi Takshanam
Manaku Sambhavam
Athadi Vaibhavam

Adharmaanni Anicheyyaga
Yuga Yugaana Jagamulona
Pari PariVidhaallona Vibhavinche
Vikrama Virat Roopamithade…

Swadharmaanni Parirakshinchaga
Samasthaanni Prakshaalinchaga
Samudbhavinche Avataaramidhe…`
    },
    {
      title: "Chuttamalle",
      artist: "Shilpa rao,Anirudh Ravichander",
      img_src: "./images/song-1.jpg", 
      src: "./music/[iSongs.info] 03 - Chuttamalle.mp3",
      lyrics:` 
      Chuttamalle Chuttestandhi
      Thuntari Choopu
      Oorike Undadhu Kasepu
      Athamaanam Nee Lokame
      Naa Mai Marapu
      Chethanaithe Nuvve Nannapu    
       Raa Naa Niddhara Kulaasa
      Nee Kala Echesa
      Nee Kosam Vayasu Vaakili Kaasa
      Raa Naa Asalu Pogesa
      Nee Gundeku Achesa
      Nee Raakaku Rangam Siddham Chesa    
      Endhuku Puttindho Puttindhi
      Emo Nuvvante
      Mucchatha Puttindhi
      Pudataane Nee Pichchi Attindhi
      Nee Peru Pettindhi
      Vayyaaram Voni Kattindhi
      Goranta Pettindhi
      Saamiki Mukkulo Kattindhi
      Chuttamalle Chuttestandhi,
      Haa Chuttestandhi
      Chuttamalle Chuttesthandhe,
      Arere
      Chuttamalle Chuttestandhi
      Thuntari Choopu
      Oorike Undadhu Kasepu   
      Vambuga Melesindhi
      Nee Varaala Manasiri
      Hathukoleva Mari
      Sarasana Cheri
      
      Vaasthuga Penchaanitta
      Vandakotla Sogasiri
      Aasthiga Allesuko
      Kosaree, Kosaree
      Chera Muddaladhaadi
      Ishtamena Nee Sannadi
      Muddhuroche Muttesukone Va
      Ooseru Chesaari
      Raa, Aye Bangaaru Necklace-u
      Naa Vontiki Nachatle
      Nee Kaugilitho
      Nannu Singaarachu
      Raa, Aye Vennala Jolaali
      Nanu Niddhara Puchatle
      Naa Tippalu Konchem Aalochinchu
      Endhuku Puttindho Puttindhi
      Emo Nuvvante
      Mucchatha Puttindhi
      Pudataane Nee Pichchi Attindhi
      Nee Peru Pettindhi
      Vayyaaram Voni Kattindhi
      Goranta Pettindhi
      Saamiki Mukkulo Kattindhi
      
      Chuttamalle Chuttestandhi,
      Haa Chuttestandhi
      Chuttamalle Chuttesthandhe,
      Arere
      Chuttamalle Chuttestandhi
      Thuntari Choopu
      Oorike Undadhu Kasepu`
    },
    {
      title: "Sooreede",
      artist: "Harini Ivaturi, Krishna Kant, Ravi Basrur",
      img_src: "./images/song-2.jpg", 
      src: "./music/[iSongs.info] 03 - Sooreede.mp3",
      lyrics: `Sooreede godugu patti
      Vachaade bhujamu thatti
      Chimma cheekatilonu
      Needala undetodu
      Reppanodhalaka kaapu
      Kaasedi kannuvaaduu
      verse
      Aakasham idisipetti
      Muddhette polamu matti
      Enda bhaga bhaga teerche
      Chinukula dhookuthaadoo
      Muppu kalagaka mundhu
      Nilabadi aaputhaadu
      verse
      Ye ye ye, khadgamokadaithe
      Kalahaalu okadivile
      Okadu garjana okadu uppena
      Verasi pralayaale
      verse
      Saiga okadu, sainyamokadu
      Kalisi kadhilithe kadhaname
      Okarikokarani nammi nadichina
      Snehame idhile
      Noorellu nilavaale
      verse
      Ye ye ye, kanche okadaithe
      Adhi minche vaadokade
      Okadu chichura, okadu temmera
      Kalisi dhahanaale
      verse
      Vegamokadu, thyaagamokadu
      Gathamu maruvani gamaname
      Okarikokarani nammi nadichina
      Snehame idhile, noorellu nilavaale
      chorus
      Sooreede godugu patti
      Vachaade bhujamu thatti
      Chimma cheekatilonu
      Needala undetodu
      Reppanodhalaka kaapu
      Kaasedi kannuvaaduu `
    },
    {
      title: "The Monster Song",
      artist: "Aditi Sagar, Ravi Basrur",
      img_src: "./images/song-3.jpg", 
      src: "./music/[iSongs.info] 05 - The Monster Song.mp3",
      lyrics:`Bandha bandha bandha

      bandha bandha
      
      Aaya aaya occhadu roi
      
      Vannu vannu vannu
      
      vannnu vannu
      
      Vandaan vandaan vadittan paar
      
      Odu odu odu odu
      
      Odu odu odu paragettu roi
      
      Nilapadaku nilabeda nikkallo
      
      Nikkaade iske saamne khade
      
      
      He be walking on fire
      
      Making it rain
      
      All at the same time
      
      No copyrights claimed
      
      Hes a mamas boy
      
      The ladies love him
      
      Doesnt make him any
      
      sympathetic
      
      Boom! goes a bullet
      
      in ones brain
      
      Boom! in another mans head
      
      Boom boom boom
      
      Dont start a war
      
      Not with the rocking star
      
      Hes hustlin he bleedin
      
      Dont stop till he finished
      
      Not a people pleaser
      
      Hes a hunter he kills
      
      He a leader he leads us
      
      That profile is only
      
      his teaser
      
      Everybody is a gangster
      
      Till you see the monster `
    },
    {
      title: "Sound of Salaar",
      artist: " Ravi Basrur, Songs To Your Eyes, Yair Albeg Wein",
      img_src: "./images/song-4.jpg", // Uncomment if you have image paths
      src: "./music/[iSongs.info] 06 - Sound of Salaar.mp3"
    },

  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
