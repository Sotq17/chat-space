# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|refernces|foreign_key:true|
|group_id|refernces|foreign_key:true|
|body|text|
|image|string|

### Association
- belongs_to :group
- belongs_to :user

## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true|
|email|string|null :false, unique :true|
|password|string|null :false|

### Association
- has_many :messages
- has_many :groups ,through: :users_groups
- has_many :users_groups

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|index: true, null: false|
|name|string|null: false|


### Association
- has_many :messages
- has_many :users ,through: :users_groups
- has_many :users_groups


## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|
|group_id|integer|

### Association

- belongs_to :group
- belongs_to :user

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

