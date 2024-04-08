> [!WARNING]
> このリポジトリは大半の人が使うことはないと思います。

# 使い方
```bash
docker compose up -d
```

なんでかわからんが、
```bash
docker compose exec api sudo service cron start
```
こうしないとCRONが動いてくれないので実行してください。