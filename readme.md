# Hópverkefni 2
---
## 1. Upplýsingar um verkefnið
### Hægt er að keyra tvær aðal skipannir með npm
<<<<<<< Updated upstream
* `npm run dev` - Keyrir samtímis browser-sync, rollup og node-sass. Þæginlegt á meðan maður er að forrita svo að browserinn update-ist sjálfkrafa.
* `npm test` Athugar hvort kóðinn uppfylli eslint og stylelint reglur. Sýnir síðan allar villur sem finnast.
### Skrám hefur verið raðað skipulega niður.
* **Dist** mappan heldur utanum rollup-aða javascript-kóðann
* **IMG** mappan inniheldur allar myndir sem tengjast síðunni sjálfri
* **Src** mappan inniheldur javascript skrárnar sem stýra síðunni. Þær eru:
  * **Index.js** Sér um að binda saman alla virkni fyrir index.html
  * **Videos.js** Sér um að binda saman alla virkni fyrir video.html
     * **lib** folder sem inniheldur tvö javascript skjöl fyrir index.js:
        * **fetchvideos.js** sem sér um að sækja vídeó-in 
        * **utils.js** heldur utan um öll auka föll sem eru notuð í verkefninu
     * **videolib** folder sem inniheldur eitt javascript skjal fyrir videos.js:
        * **videocontrols.js** heldur utanum skipanirnar fyrir takkana undir myndbandinu
* **Styles** mappan inniheldur allar skrár sem hafa að gera með útlit síðunnar. Þær eru:
   * **Config** Geymir allar breytur fyrir stíl
   * **Global** Stýlar sem eiga við allt
   * **Grid-overlay** Hugað fyrir viðhald á síðunni
   * **Grid** Skýr beinagrind fyrir staðsetningar
   * **Thumbnails** Inniheldur stíla fyrir svokölluð thumbnail allra myndbanda á síðunni
   * **Video** Heldur utanum stílanna fyrir takkanna undir myndbandinu og overlay-ið sem kemur yfir myndbandið þegar það er pásað
* **Videos** er mappan sem geymir bæði myndböndin og thumbnail-in fyrir báðar síðurnar
* **Html** skrárnar eru tvær:
   * **Index.html** Inniheldur öll myndböndin sem hægt er að horfa á síðunni (forsíðan)
   * **Video.html** er síðan sem að myndbandið sem smellt er á spilast á
* **rollup.config.js** Heldur utanum stillingar fyrir rollup
* **Styles.scss** importar öllum .scss skrám úr styles möppunni og svo býr node-sass til styles.css
=======
* `npm run dev` - Keyrir concurrently, browser-sync, rollup og sass. Þæginlegt á meðan maður er að forrita svo að browserinn update-ist sjáfkrafa.
* `npm test` Athugar hvor kóðinn uppfylli eslint reglur. Sýnir síðan allar villur sem finnast.
### Skráum hefur verið raðað skipulega niður.
* **Dist** mappan heldur utanum rollup-aða javascript-kóðann
* **Fyrirmynd** var þæginleg mappa þar sem fyrirmynd verkefnisins var geymd
* **IMG** mappan inniheldur allar myndir sem tengjast síðunni nema thumbnail myndbandanna
* **Src** mappan inniheldur javascript skrárnar sem stýra síðunni. Þær eru:
- Index - javascript kóðinn sem uppbyggir index.hmtl
- Videos - javascript kóðinn sem uppbyggir video.html
- lib - folder sem inniheldur tvö javascript skjöl:
    - fetchvideos.js - sem sér um að sækja vídeó-in 
    - utils.js - heldur utan um öll auka föll sem eru notuð í verkefninu
- videolib - folder sem inniheldur aðeins eina javascript möppu:
    - videocontrols.js - heldur utanum skipanirnar fyrir takkana undir myndbandinu
* **Styles** mappan inniheldur allar skrár sem hafa að gera með útlit síðunnar. Þær eru:
- Config - Geymir allar breytur fyrir stíl
- Global - Stýlar sem eiga við allt
- Grid-overlay - Hugað fyrir viðhald á síðunni
- Grid - Skýr beinagrind fyrir staðsetningar
- Thumbnails - Inniheldur alla stíla fyrir svokölluð thumbnail allra myndbanda á síðunni
- Video - Heldur utanum stílanna fyrir takkanna undir myndbandinu og overlay-ið sem kemur yfir myndbandið þegar það er pásað
* **Videos** er mappan sem geymir bæði myndböndin og thumbnail-in fyrir báðar síðurnar
* **Html** skrárnar eru tvær:
** **- Index -** Inniheldur öll myndböndin sem hægt er að horfa á síðunni
** **- Video -** er síðan sem að myndbandið sem smellt er  á spilast á
* **rollup.config.js** Heldur utanum stillingar fyrir rollup
* **Styles.scss** importar öllum .scss skrám úr styles möppunni og svo býr node-sass til styles.css 
>>>>>>> Stashed changes
* **Styles.css** Aðal css skráin sem heldur utanum alla stíla fyrir verkefnið
* **Videos.json** Geymir upplýsingar hvað varðar myndböndinn á síðunni
## 2. Upplýsingar um höfunda
| Nöfn                        | Netföng       | GitHub Notendanöfn |
| :----------------------------|:-------------| :------------------|
| Karl Andersson Claesson     | kac12@hi.is   | KarlAClaesson |
| Kristján Leó Guðmundsson    | klg12@hi.is   | KristjanLeo   |
| Sigurjón Þorri Þórmundarson | stt27@hi.is   | ThorriThorskur|
<<<<<<< Updated upstream
| Valdimar Örn Sverrisson     | vos9@hi.is    | Valdi9hi      |
=======
| Valdimar Örn Sverrisson     | vos9@hi.is    | Valdi9hi      |
>>>>>>> Stashed changes
