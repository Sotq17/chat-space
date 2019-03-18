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
<<<<<<< HEAD
|user_id|refernces|foreign_key:true|
|group_id|refernces|foreign_key:true|
=======
|user_id|integer|null: false|
|group_id|integer|null: false|
>>>>>>> 4eec78d3e5c9f762cdf01c0177ef2bf3c371d49a
|body|text|
|image|string|

### Association
- belongs_to :group
- belongs_to :user


## userテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false|
|name|string|
|email|string|null :false, unique :true|
|password|string|null :false|

### Association
- has_many :messages
- has_many :groups ,through: :users_groups


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|index: true, null: false|
<<<<<<< HEAD
|name|string|null: false|
=======
|group_name|string|null: false|
>>>>>>> 4eec78d3e5c9f762cdf01c0177ef2bf3c371d49a

### Association
- has_many :messages
- has_many :users ,through: :users_groups


## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|
|group_id|integer|

### Association

<<<<<<< HEAD
=======

>>>>>>> 4eec78d3e5c9f762cdf01c0177ef2bf3c371d49a
- belongs_to :group
- belongs_to :user

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

