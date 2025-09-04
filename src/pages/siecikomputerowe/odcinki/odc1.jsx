import React from 'react'

const odc1 = () => {
  return (
 <div>
      <div className='center'>
        <img className="itachi" src="/images/itachi-uchiha-naruto-amoled-black-background-minimal-art-3840x2160-6478.jpg"/>
        <iframe width="853" height="480" src="https://www.youtube.com/embed/WxH9YNAfAao"></iframe> 


        <h1>Sieci Komputerowe odc.1 - Podstawy sieci</h1><br/>
        <h2>Podstawowe pojęcia</h2><br/>
        <p>Host to urządzenie z przypisanym adresem IP,
          którego zadaniem jest odbieranie i wysyłanie danych od lub do innych urządzeń</p><br/>
        <p>Serwer to komputer oferujący usługi takie jak strony WWW, poczta elektroniczna czy wymiana plików innym komputerom</p><br/>
        <p>Klient to komputer (oprogramowanie) korzystający z usług udostępnianych przez serwer</p> <br/>
        <p>Medium transmisyjne to element sieci poprzez który urząðzenia komunikują sie ze soba i wymieniają dane</p><br/>
        <p>Protokół komunikacyjny to sposób komunikacji i wymiany danych określający reguły i zasady tej komunikacji</p><br/>
        <p>internet to zbiór sieci rozległych stanowiących globalną sieć komputerową</p> <br/>
        <p>intranet to prywatna sieć wykorzystująca w komunikacji standardy takie jak w sieci Internet z ograniczonym dostępem</p><br/>
        <p>ekstranet to rozszerzona odmiana sieci Intranet, do której dostęp posiada wieksza libczba użytkowników</p><br/>
        <p>DNS (ang. Domain Name System) to usługa sieciowa zamieniająca nazwy zrozumiałe dla człowieka (tzw. nazwy mnemoniczne) na adres IP urządzenia w sieci
        onet.pl -- 123.123.123.123 </p> <br/>
        <p>DHCP (ang. Dynamic Host Configuration Protocol) to protokół automatycznej konfiguracji ustawień sieci przydzielający hostom adresy IP, maski podsieci oraz adresy bram </p> <br/>
        <h2>Jednostki przesyłu danych</h2>
        <p>przepustowość - ilość danych przesłanych w jednosce czasu</p> <br/>
         <p>1 bajt [B] = 8 bitów [b]</p> <br/>
         <p>100[B] * 8 = 800 bitów [b]</p><br/>
         <p>2[MB] * 8 = 16 megabitów [Mb]</p> <br/>
          <p>16[Mb] / 8 = 2 megabajty [MB]</p>
          <h2> Pzykład 1</h2>
          <h3> ile danych pobierzemy z internetu w czasie jednej<br/>
          godziny przy przepustowości 60Mb/s ?</h3><br/>
          <p>Dane <br/>Czas: 1 godzina <br/>
          przepustowość: 60 Mb/s</p>
          <p>60 sekund * 60 minut = 3600 sekund</p><br/>
          <p>60Mb/s 8 = 7.5 MB/s </p><br/>
          7,5 MB/s * 3600 sekund = 27000 MB ~ 26.3 GB
          <h3>odpowiedź do przykładu 1</h3><br/>
          <p>W czasie jednej godziny przez łącze o przepustowości 60mb/s pobierzemy ok. 26.3 GB</p><br/>
          <p>Dane <br/> Wielkość pliku 1 GB <br/> Przepustowość: 10 Mb/s</p><br/>
          <p>10 Mb/s / 8 = 1.25 MB/s <br/> 1GB = 1024 MB 
          1024 MB / 1.25 MB/s = 819.2 sekundy ~ 13min39sek</p> <br/>
          <p>Odpowiedź do przykładu 2</p> <br/>
          <p>Plik o wielkści 1 GB przez łącze o przepustowości 10Mb/s pobierzemy w około 13 minut 39 sekund</p> <br/>
          <p>Media Transmisyjne </p><br/>
          <img className="itachi" src="/images/Zrzut ekranu z 2025-09-04 18-59-18.png"/>
          <img className="itachi" src="/images/niko2.png"/>
          <img className="itachi" src="/images/niko3.png"/>
          <img className="itachi" src="/images/niko4.png"/>
          <img className="itachi" src="/images/niko5.png"/>
          <img className="itachi" src="/images/niko6.png"/>
          <img className="itachi" src="/images/niko7.png"/>
          <img className="itachi" src="/images/niko8.png"/>
          <img className="itachi" src="/images/niko9.png"/>
          <img className="itachi" src="/images/niko10.png"/>

        <h1>Parametry Techniczne kabla typu skrętka</h1><br/>
        <p>Tłumienie sygnału to stosunek napęcia wyjściowego do napięcia wejściowego wyrażony w decybelach [db] <br/></p>
        <p>Propagacja sygnału to prędkość impulsu elektrycznego w stosunku do prędkości swiatła wyrażony w procentach [%]</p>
        <p>Rezystancja to opor jaki kabel stawia prądowi elektrycznemu wyrażona w omach </p>
        <p>Promień zgięcia kabla R = 4x</p><br/>
        <img className="itachi" src="/images/niko11.png"/>
        <img className="itachi" src="/images/niko12.png"/>
        <img className="itachi" src="/images/niko13.png"/>
        <img className="itachi" src="/images/niko14.png"/>
        <p>Światłowód <br/>
          -jednomodwy <br/> - wielomodwy <br/></p>
        <img className="itachi" src="/images/niko15.png"/>
        <p>Światłowód jednomodowy - tylko jedna wiązka swiatła</p><br/>
        <img className="itachi" src="/images/niko16.png"/>
        <p>Światłowód wielomodwy - wiele wiązek  światła</p><br/>
        <img className="itachi" src="/images/niko17.png"/>
        <img className="itachi" src="/images/niko18.png"/>
        <h1>Podsumowanie - media miedziane <br/>  </h1>
        <p>Zalety:</p>
        <p>Niski koszt zakupu</p>
        <p>Łatwe w montażu i instalacji</p>
        <p>Łatwośc diagnozowania i naprawy usterek</p>
        <p>Wady:</p>
        <p>Wrażliwość na zakłócenie elektromagnetyczne</p>
        <p>Niewielka odległość pomiedzy węzłami sieci</p>
        <p>Mniejsza przepustowość w porównaniu do światłowodu</p>
        <p>Podsumowanie - media swiatłowodowe</p>
        <p>Zalety:</p>
        <p>Wysoka przepustowość</p>
        <p>Transmisja na duże odległości</p>
        <p>Znikoma wrażliwość na zakłócenia elektromagnetyczne</p>
        <p>Wady:</p>
        <p>Rozmycie sygnału</p>
        <p>Trudniejsze w instalacji</p>
        <p>Drogi osprzęt sieciowy wykorzystujący światłowody</p>
        <p>Media bezprzewodowe - fale radiowe</p>
        <p>Fale radiowe to promieniowanie elektromagnetyczne z zakresu częstotliwości od 3 Hz do około 3 THz</p>
        <p>Fale długie, fale krótkie fale średnie fale ultrakrótkie</p>
        <img className="itachi" src="/images/niko19.png"/>
        <p>Rodzaje sieci</p>
        <p>Lan (ang. Local Area Network) to sięc zajmująca najmniejszy obszar<br/>
        ,np. w pracowni lub domu</p>
        
          <p>Rodzaje Sieci</p>
          <p>Man (an. Metropolitan Area Network) to sieć zajmująca obszar miasta lub aglomeracji</p>
          <p>Wan (ang. Wide Area Network) to rozległa sieć połączonych ze sobą sieci LAN i MAN</p>
          <p>Wyróżniamy architekture klient - Serwer i architekture Równorzędną</p>
          <p>W architekturze Klient-serwer występuje jeden lub klika komputerów</p>
          <p>udostępniajacych uslugi innym uzytkownikom sieci</p>
          <p>są to serwery, oraz wiele komputerow korzystajacych z ich uslug</p>
          <p>są to klienci przegladaja strony www, wysyłając poczte elektroniczną,</p>
          <p>czy korzystając z baz danych korzystamy własnie z architektury klient serwer</p>
          <p>innaczej jest w przypadku architektury równorzędnej zwanej architekturą</p>
          <p>Peer-to-Peer (P2P)</p>
          <p>Nie wystepuje tutaj jeden lub wiecej komputerow udostepniajacych usługi, lecz</p>
          <p>wiele komputerow na tych samych prawach</p>
          <p>Każdy komputer w tej sieci może jednoczesnie korzystać z zasobów oraz je udostępniac</p>
          <p>korzystajac z usług wymiany plikow np. bittorrent</p>


        </div>
    
        
    </div>  )
}

export default odc1