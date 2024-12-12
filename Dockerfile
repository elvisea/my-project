# Etapa 1: Build da aplicação
FROM node:20 AS build

# Diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código da aplicação
COPY . .

# Compilar todas as aplicações do monorepo
RUN npm run build

# Etapa 2: Criar a imagem de produção
FROM node:20 AS production

WORKDIR /app

# Copiar dependências instaladas da etapa anterior
COPY --from=build /app/node_modules /app/node_modules

# Copiar os arquivos compilados para todas as aplicações
COPY --from=build /app/dist /app/dist

# Variáveis de ambiente
ENV NODE_ENV=production

# Expor as portas de todas as aplicações
EXPOSE 3000
EXPOSE 3001

# Iniciar ambas as aplicações (usando PM2, por exemplo)
CMD ["npm", "run", "start:prod"]
