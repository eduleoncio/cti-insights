# CTI Insights

Projeto organizado em duas aplicações:

- `backend/`: API Spring Boot, entidades JPA e configuração do banco H2.
- `frontend/`: interface Vue 3 com Vite.

## Como executar o backend

```bat
cd backend
mvn package -DskipTests
java -jar target\cti-insights-0.0.1-SNAPSHOT.jar --server.port=8081
```

Os Models ficam em `backend/src/main/java/br/com/cti/insights/model`.

## Como executar o frontend

```bat
cd frontend
npm install
npm run dev
```

