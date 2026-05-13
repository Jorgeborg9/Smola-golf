# Recommended Workflow

## 1. Gather source material
- Samle nettside, Facebook, Google-anmeldelser, bilder og eventuelle PDF-er eller dokumenter.
- Noter hvilke kilder som er primære og hvilke som bare støtter opp.

## 2. Fill club brief
- Kopier `briefs/club-template.md`.
- Fyll inn kjent informasjon.
- Marker tydelig hva som mangler eller må verifiseres.

## 3. Run QA review on the brief
- Bruk `qa/content-rules.md` og `qa/club-page-checklist.md`.
- Fjern usikre påstander før de kommer inn i datafilen.

## 4. Generate or update the club data file
- Opprett eller oppdater `src/data/clubs/<club>.ts`.
- Bruk briefen som eneste innholdskilde.
- Hold innholdet i tråd med eksisterende datastruktur.

## 5. Run final QA pass
- Gå gjennom hele klubbdatafilen mot sjekklisten.
- Kontroller Bokmål, CTA-er, priser, booking, anmeldelser og nyheter.
- Skjul eller ton ned svake seksjoner i stedet for å fylle dem med fluff.

## 6. Preview manually
- Bytt standardklubb ved behov.
- Se siden i nettleser og vurder flyt, språk og troverdighet.
- Kontroller at seksjoner ikke føles tomme eller dupliserte.

## 7. Deploy
- Kjør `npm run build`.
- Når innhold og QA er godkjent, publiser endringen.
