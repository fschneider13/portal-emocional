# Portal Emocional

Aplicativo de avaliação de saúde mental contendo os instrumentos PHQ-9, GAD-7 e DASS-21.

## Requisitos
- Node.js 20+
- Yarn ou npm
- Expo CLI (`npm install -g expo-cli`)

## Instalação
```bash
npm install
```

## Uso
```bash
npm start
```
Abra o aplicativo Expo Go em um dispositivo iOS ou Android e escaneie o QR code para rodar o app.

## Estrutura
- `App.js` — ponto de entrada com React Navigation.
- `src/data/questionnaires.js` — textos das perguntas.
- `src/utils/scoring.js` — lógica de cálculo e interpretação dos escores.

## Testes
Atualmente não há testes automatizados. Adicione testes unitários para as funções de `src/utils/scoring.js` conforme necessário.
