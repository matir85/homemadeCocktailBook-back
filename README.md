# Projekt na zaliczenie
<p>
  <a href="https://www.megak.pl/" target="_blank" rel="noreferrer"> <img src="https://github.com/Keszua/megak-game-over-front/blob/main/public/images/megak.png/" alt="MegaK" height="80"/>
  </a>
</p>

# Back End

Projekt na zaliczenie drugiej edycji [Mega Kursu JavaScriptu MegaK](https://www.megak.pl)

To jest **back end** napisany w ***node.js*** (framework *ExpressJS*)

Do prawidłowego działania, wymagany jest **front end** dostępny pod [tym adresem](https://github.com/matir85/homemadeCoctailBook-front/tree/develop)

<hr/>

## Opis projektu
Przykład aploikacji do zarządzania domowym barkiem.
- obsługa bazy danych mySQL
- baza danych dla produktów i gotwych koktajli
    - dodawanie / usuwanie - produktów (alkoholi / syropów)
    - tworzenie przepisów na koktajle i zapiswyanie ich w relacyjnej bazie danych
-wyświetlanie dotowych koktaili na kartach z wykorzystaniem material-ui

<hr/>

## Zastosowane języki i technologie
<p align="center" float="top">
  <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://www.svgrepo.com/show/303360/nodejs-logo.svg" alt="nodejs" width="120"/>
  </a> 
</p>
<p align="center">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  </a> 
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
  </a> 
  <a href="https://expressjs.com" target="_blank" rel="noreferrer">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" height="40"/> 
  </a>
  <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" height="50"/> 
  </a>
  <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> 
  </a> 
  <a href="https://github.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/github.svg" alt="github" width="50" height="40"/> 
  </a>
</p>

<hr/>

## Zrealizowane zadania

- [x] Założenie repozytorium na GitHub
- [x] Przygotowanie pliku README
- [x] Konfiguracja Git i wypchniecie projektu na zdalne repozytorium
- [x] Stworzenie bazy danych
- [x] Przygotowanie pliku config.ts
- [x] Stworzenie połąaczenia z bazą danych
- [x] Dodanie modułu produktów i koktaili
- [x] Dodanie endpointów produktów i koktaili
    - [x] Lista produktów
    - [x] Dodawanie produktu do bazy danych
    - [x] Usunięcie produktu z bazy danych
    - [x] Lista koktajli
    - [x] Tworzenie koktajli 
    - [x] Dodawanie stworzonego koktailu
- [ ] Dodanie opcji usuwania koktajlu
- [ ] Dodanie opcji przygotuj koktajl
  - [ ] Odjęcie wymaganej ilości mililitrów składnika od dostępnej w bazie danych produktu
  - [ ] W przypadku braku wymaganej ilości składnika podświetlenie go na czerwono i wyłączenie możliwości wciśnięcia przycisku przygotuj koktajl
- [ ] Obliczanie pozostałej ilości składników w bazie danych
- [ ] Wyłączenie możliwości skorzystania ze składnika (produktu) w przypadku, gdy jego ilośc jest równa 0
- [ ] Dodanie możliwości edecji składników (produktów) i koktajli
- [ ] Refaktoryzacja i optymalizacja kodu
- [ ] Stworzenie dema na zewnętrznym serwerze

<hr/>

# Uruchomienie

Repozytorium współdziała z częścią frontendową, którą można znaleźć pod [tym adresem](https://github.com/matir85/homemadeCoctailBook-front/tree/develop)

## Uruchomienie projektu na swojej lokalnej maszynie

Sklonuj repozytorium na swój dysk

```bash
git clone https://github.com/matir85/homemadeCocktailBook-back/tree/develop
```

Wejdź do folderu *homemadeCocktailBook-back* i pobierz wymagane zależności

```bash
cd homemadeCocktailBook-back
npm install
```

W folderze utils/db.ts uzupełnij dane swojej konfiguracji bazy.

Uruchomienie projektu

```bash
npm start
```

Zostanie uruchomiony serwer [http://localhost:3001](http://localhost:3001).

Uruchomienie w trybie watch mode

```bash
npm run start:dev
```

Stworzenie wersji produkcyjnej

```bash
npm run start:prod
```

<hr/>

## Kontakt


#### mail: [Gmail](mailto:matir85@gmail.com)

<hr/>
