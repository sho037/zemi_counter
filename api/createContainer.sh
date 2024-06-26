#!/bin/bash

# gem パッケージインストール
bundle install --gemfile /usr/src/app/Gemfile

# データベース・テーブル・初期データの作成
rails db:create
rails db:migrate
rails db:seed

# cron設定
bundle exec whenever --update-crontab --set environment='development'