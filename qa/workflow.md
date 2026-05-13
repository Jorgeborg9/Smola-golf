# Recommended Workflow

## 1. Gather source material
- Samle nettside, Facebook, Google-anmeldelser, bilder og eventuelle PDF-er eller dokumenter.
- Noter hvilke kilder som er primære og hvilke som bare støtter opp.

## 2. Convert research into `CLIENT_INPUT.md`
- Fyll inn `CLIENT_INPUT.md` med all bekreftet research før arbeidet med klubbside starter.
- Sørg for at kontaktinfo, priser, anmeldelser, nyheter, bilder og svake punkter er dokumentert der først.
- Ikke gå videre til brief eller datafil før dette steget er gjort.

## 3. Fill club brief
- Kopier `briefs/club-template.md`.
- Fyll inn kjent informasjon basert på `CLIENT_INPUT.md`.
- Marker tydelig hva som mangler eller må verifiseres.

## 4. Run QA review on the brief
- Bruk `qa/content-rules.md` og `qa/club-page-checklist.md`.
- Fjern usikre påstander før de kommer inn i datafilen.

## 5. Generate or update the club data file
- Opprett eller oppdater `src/data/clubs/<club>.ts`.
- Bruk `CLIENT_INPUT.md` og briefen som grunnlag.
- Hold innholdet i tråd med eksisterende datastruktur.

## 6. Run final QA pass
- Gå gjennom hele klubbdatafilen mot sjekklisten.
- Kontroller Bokmål, CTA-er, priser, booking, anmeldelser og nyheter.
- Skjul eller ton ned svake seksjoner i stedet for å fylle dem med fluff.

## 7. Preview manually
- Bytt standardklubb ved behov.
- Se siden i nettleser og vurder flyt, språk og troverdighet.
- Kontroller at seksjoner ikke føles tomme eller dupliserte.

## 8. Deploy
- Kjør `npm run build`.
- Når innhold og QA er godkjent, publiser endringen.
