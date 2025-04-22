FROM node:18 AS client-build

WORKDIR /app

COPY inventory-app.client/ ./inventory-app.client/

WORKDIR /app/inventory-app.client

ENV USE_HTTPS=false

RUN npm install
RUN npm run build

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

COPY inventory-app.Server/ ./inventory-app.Server/

RUN mkdir -p ./inventory-app.Server/wwwroot
COPY --from=client-build /app/inventory-app.client/dist ./inventory-app.Server/wwwroot/

WORKDIR /src/inventory-app.Server
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final

WORKDIR /app
COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:80

ENTRYPOINT ["dotnet", "inventory-app.Server.dll"]
