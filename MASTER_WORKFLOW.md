# MASTER WORKFLOW

## 1. Project Overview

Dette prosjektet er et skalerbart demosystem for golfklubber. Målet er å lage troverdige, moderne og lokalt forankrede klubbdemoer ved å bruke én gjenbrukbar premium mal i samme kodebase.

Flere klubber genereres i samme React/Vite-prosjekt, og hver klubb får sin egen rute:

- `/golf/smola`
- `/golf/vanylven`
- `/golf/bleik`
- `/golf/sunndal`

Rotstien `/` skal fortsette å vise Smøla som standard, med mindre dette eksplisitt endres senere.

## 2. Project Stack

Prosjektet bruker:

- React + Vite i frontend
- Vercel for deploy
- Et delt og gjenbrukbart designsystem på tvers av klubbdemoene

Klubbdata lagres i:

- `src/data/clubs/`

Bilder lagres i:

- `public/images/<ClubName>/`

Rutevalg skjer i eksisterende app-logikk, og hver klubb lastes inn via en egen datafil med samme datastruktur.

## 3. Core Philosophy

Målet er å lage troverdige og lokale golfklubbsider, ikke generiske AI-sider.

Grunnregler:

- Bruk ekte informasjon når det er mulig
- Bruk ekte anmeldelser
- Bruk ekte priser
- Bruk ekte nyheter og aktivitet
- Bruk Bokmål konsekvent
- Skjul svake seksjoner i stedet for å fylle dem med tynn eller oppdiktet tekst
- Prioriter klarhet, lokal troverdighet og atmosfære over kompleksitet

Siden skal føles som en god modernisering av klubbens digitale tilstedeværelse, ikke som en tilfeldig mal med utbyttbar tekst.

## 4. Standard Page Structure

Normal seksjonsrekkefølge for klubbdemoer:

1. Hero
2. Reviews
3. About the club
4. Facilities
5. Practical info
6. Prices & membership
7. News/activity
8. Contact

Det er lov å skjule eller tone ned seksjoner dersom kildematerialet er svakt, men standardstrukturen bør være utgangspunktet.

## 5. Research Process

Research skal samles før innhold genereres. Typiske kilder:

- Klubbens nettside
- Facebook-side
- Google-anmeldelser
- Skjermbilder fra research
- Bilder og logo
- Priser og medlemsinformasjon
- Kontaktinfo
- Nyheter og aktivitet

Viktig:

- Research-skjermbilder er svært verdifulle og bør brukes direkte i innholdsarbeidet.
- Når skjermbilder finnes, skal anmeldelser, priser, nyhetspunkter og andre konkrete detaljer bygges fra disse i stedet for å omskrives løst fra hukommelse.
- Hvis skjermbilder eller forskning mangler, skal Codex være konservativ og unngå å finne på detaljer.

## 6. CLIENT_INPUT Workflow

All research skal først struktureres i `CLIENT_INPUT.md` før en ny klubbside opprettes eller oppdateres.

`CLIENT_INPUT.md` er den kanoniske strukturerte kilden før generering. Codex skal bruke denne som arbeidsgrunnlag i stedet for å improvisere innhold fra løse notater.

Standardseksjoner i `CLIENT_INPUT.md`:

- HERO
- REVIEWS
- PRICES
- FACILITIES
- NEWS
- CONTACT
- IMAGES
- UNIQUE SELLING POINTS
- LANGUAGE RULES

Hvis noe viktig mangler i research, skal det markeres tydelig i `CLIENT_INPUT.md` før produksjon starter.

## 7. QA Rules

Følgende regler gjelder alltid:

- Ingen engelske UI-etiketter
- Ingen falske anmeldelser
- Ingen placeholder-tekst
- Ingen udokumenterte påstander
- Anmeldelser skal bruke ekte navn og ekte tekst når det finnes
- Priser skal samsvare med skjermbilder og research
- Bokmål skal brukes konsekvent
- Skjermbilder og research skal brukes direkte når det er mulig
- Gitt research skal ikke ignoreres

Ved tvil:

- Velg fakta framfor markedsføring
- Velg kort og tydelig tekst framfor generisk fyll
- Skjul svake seksjoner framfor å svekke hele siden med dårlig innhold

## 8. Design Rules

Alle sider skal følge samme grunnretning:

- Premium skandinavisk golfestetikk
- Glassmorphism-navbar
- Immersivt hero-bilde
- Stor og tydelig typografi
- Myke gradienter
- Mobile-first tenkning
- Atmosfæriske golf- og naturbilder

Ikke redesign hele siden for hver klubb. Uttrykket skal være konsistent, mens innhold, bilder og tone tilpasses klubben.

## 9. Deployment Workflow

Normal deployflyt:

1. `git add .`
2. `git commit`
3. `git push`
4. Vercel auto-deployer

Demolenker bruker:

- `/golf/<slug>`

Viktig kontekst:

- `smola-golf`-prosjektet skal bevares som arbeidsprosjektet
- det generiske demoprosjektet er `golf-demo-six`

Ruter skal fortsette å virke både lokalt og i Vercel ved direkte innlasting og refresh.

## 10. Outreach Workflow

Demoen bør være deployet før outreach starter.

Outreach-prinsipper:

- Vær personlig
- Hold tonen menneskelig og lite selgende
- Referer gjerne til genuin golfinteresse og at siden er laget som et forslag
- Fremhev at strukturen er modernisert og mobilvennlig
- Kommuniser at dette er en uforpliktende demo, ikke et press-salg

Målet er å starte en relevant samtale, ikke å sende masseutsendelser med generisk salgsformulering.

## 11. Important Lessons Learned

Erfaringer fra Bleik, Vanylven og Sunndal:

- Strukturert research gir mye bedre førstekast
- Skjermbilder bør brukes direkte i produksjonen
- Generisk AI-tekst skaper unødvendige QA-runder
- Anmeldelser, nyheter og priser må være forankret i faktiske kilder
- God research reduserer QA-tid betydelig

Praktisk læring:

- Hvis reviews ikke er godt dokumentert, skal de ikke pyntes på
- Hvis priser er uklare, skal teksten være forsiktig og tydelig
- Hvis nyhetsdelen er svak, er det bedre med færre ekte kort enn flere generiske

## 12. Future System Vision

Langsiktig retning for systemet:

- lead finder
- research assistant
- QA agent
- auto-genererte demoer
- automatisert deploy
- outreach-workflow
- på sikt utvidelse til flere bransjer enn golf

Den langsiktige ambisjonen er et produksjonssystem som kombinerer research, kvalitetssikring, sidegenerering og utsendelse med så lite manuelt kaos som mulig, uten å miste troverdighet eller lokal forankring.
