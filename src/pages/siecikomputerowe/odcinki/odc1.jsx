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
<p>Łatwość diagnozowania i naprawy usterek</p>

<p>Wady:</p>
<p>Wrażliwość na zakłócenie elektromagnetyczne</p>
<p>Niewielka odległość pomiędzy węzłami sieci</p>
<p>Mniejsza przepustowość w porównaniu do światłowodu</p>

<p>Podsumowanie - media światłowodowe</p>
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
<p>Fale długie, fale krótkie, fale średnie, fale ultrakrótkie</p>
<img class="itachi" src="/images/niko19.png" alt="Fale radiowe"/>

<p>Rodzaje sieci</p>
<p>LAN (ang. Local Area Network) to sieć zajmująca najmniejszy obszar, np. w pracowni lub domu.</p>
<p>MAN (ang. Metropolitan Area Network) to sieć zajmująca obszar miasta lub aglomeracji.</p>
<p>WAN (ang. Wide Area Network) to rozległa sieć połączonych ze sobą sieci LAN i MAN.</p>

<p>Wyróżniamy architekturę klient-serwer i architekturę równorzędną.</p>
<p>W architekturze klient-serwer występuje jeden lub kilka komputerów udostępniających usługi innym użytkownikom sieci – są to serwery, oraz wiele komputerów korzystających z ich usług – są to klienci (przeglądają strony www, wysyłają pocztę elektroniczną, korzystają z baz danych).</p>

<p>Architektura równorzędna (Peer-to-Peer, P2P) nie posiada wyodrębnionych serwerów. Każdy komputer może jednocześnie korzystać z zasobów oraz je udostępniać, np. przy wymianie plików w sieci BitTorrent.</p>

<p>Topologia sieci komputerowej określa relacje pomiędzy urządzeniami w sieci, połączenia między nimi oraz sposób przepływu danych. Wyróżniamy:</p>
<ul>
  <li>Topologię fizyczną – określa sposób połączenia urządzeń w sieci</li>
  <li>Topologię logiczną – opisuje sposoby komunikacji pomiędzy urządzeniami w sieci</li>
</ul>

<p>Topologie fizyczne:</p>
<ul>
  <li>Magistrali (ang. bus)</li>
  <li>Pierścienia (ang. ring)</li>
  <li>Gwiazdy (ang. star)</li>
  <li>Rozszerzona gwiazda (ang. extended star) – w większych sieciach</li>
  <li>Siatki (ang. mesh)</li>
</ul>

<p>Topologia magistrali cechuje się tym, iż wszystkie urządzenia podłączone są do wspólnego medium transmisyjnego, zwykle kabla koncentrycznego. Wadą była niewielka przepustowość (maks. 10 Mb/s) i duża podatność na awarie. Zaletą – niski koszt wdrożenia.</p>

<p>Topologia pierścienia: każde urządzenie podłączone jest z dwoma sąsiadami, tworząc zamknięty krąg. Można stosować różne media transmisyjne. Wadą jest przerwanie działania całej sieci w przypadku awarii jednego komputera. Stosuje się podwójny pierścień, aby temu zapobiec.</p>

<p>Topologia gwiazdy: urządzenia podłączone są do centralnego punktu (Hub lub Switch), który stanowi punkt dostępu do sieci. Najczęściej stosowana w lokalnych sieciach komputerowych, prosta w projektowaniu, odporna na awarie, łatwo zarządzalna. Wadą może być koszt budowy związany z zastosowaniem dodatkowych urządzeń i metrów kabla.</p>

<h1>Topologia logiczna</h1>
<p>Definiuje sposoby i reguły komunikacji urządzeń w sieci. Wyróżniamy:</p>
<ul>
  <li>Topologię punkt-punkt – dane przesyłane są od jednego urządzenia do drugiego, bezpośrednio lub pośrednio.</li>
  <li>Topologię pierścienia</li>
  <li>Topologię wielodostępową</li>
</ul>

        </div>
    
        
    </div>  )
}

export default odc1