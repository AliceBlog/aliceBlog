# 用户
用户模块重点在于用户关系模块，包括关注、被关注、好友等关系，用户之间所有的互动都是建立在这些关系基础上。

用户行为根据用户之间关系相互制约。

为了方便客户端映射数据，所有用户操作都会返回以下 Json 为基准的用户结构

```json
{
    "id": 19,
    "uuid": "585b0a3f-8460-4c51-aa51-a0f4d7342c24",
    "nickname": "我的天",
    "followees": 12,
    "followers": 12,
    "friends":5,
    "avatar": {
    		"active": true,
    		"big_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/Fou5T3KFaUntLagL3BktbEh_shbX",
    		"id": "5784a8583c1fa60df5d8cf9a",
    		"photo_uuid": "",
    		"small_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/Fou5T3KFaUntLagL3BktbEh_shbX?imageView2/1/w/200/h/200",
    		"timestamp": "2016-09-01T11:12:46+08:00",
    		"user_uuid": "ac9530e1-e763-45c3-99ee-63e49ca7ecf7"
    	}
}
```

Attribute | Type | Description
----------|------|------------
id | int | 用户 ID
uuid | string | 用户 UUID， UUID 是用于所有用户相关操作的唯一识别号
nickname | string | 用户昵称
followees | string | 用户关注数
followers | string | 用户粉丝数
avatar | Avatar | 详见 Avatar


```json
{
   "tuso_id": "145678890",
   "real_name": "天才",
   "friends": 0,
   "images": 10000,
   "tusos": 123,
   "gender": "male",
   "location": {},
}
```

Attribute | Type | Description
----------|------|------------
tuso_id | int | 用户图说号
real_name | string | 用户真实姓名
friends | string | 用户好友数
images | string | 用户图片数
tusos | string | 用户图说数
location | Location | 用户所在地

Location:

Attribute | Type | Description
----------|------|------------
country | string | 国家
state | string | 省份
city | string | 城市
district | string | 区

用户关系

UserRelation:

- "related\_type_none"

用户之间无关系，UserRelatedTypeNone = 1 int

- "related\_type_followee"

标示 用户 --> 用户 的关系为 **关注** UserRelatedTypeFollowee = 2 int

- "related\_type_follower"

标示 用户 --> 用户 的关系为 **被关注** UserRelatedTypeFollower = 3 int


- "related\_type\_mutual_follow"

标示 用户 --> 用户 的关系为 **相互关注** UserRelatedTypeMutalFollow = 4 int

- "related\_type_friend"

标示 用户 --> 用户 的关系为 **好友** UserRelatedTypeFriend = 5 int

- "related\_type_self"

标示 用户 --> 用户 的关系为 **自己** UserRelatedTypeSelf = 100 int

注：若是用户之间从未有任何行为交集，用户之间的关系为空，用户关系初始化发生在任意用户交互操作中。

## 根据用户的uuid获取指定用户

```http
GET /user/:uuid HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "avatar": {
    "active": true,
    "big_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/FnTUdg2u7rhK8EgQtH_aCSIaJRsc",
    "id": "5790319f3c1fa67699525154",
    "photo_uuid": "",
    "small_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/FnTUdg2u7rhK8EgQtH_aCSIaJRsc?imageView2/1/w/200/h/200",
    "timestamp": "2016-09-01T11:12:46+08:00",
    "type": 3,
    "user_uuid": "ac9530e1-e763-45c3-99ee-63e49ca7ecf7"
  },
  "birthday": "1994-06-04T23:00:00+08:00",
  "followees": 0,
  "followers": 13,
  "friends": 53,
  "gender": "user_gender_male",
  "id": 32,
  "images": 36,
  "location": {
    "country": "中国",
    "state": "湖南省",
    "city": "长沙市",
    "district": "芙蓉区"
  },
  "nickname": "我勒个去",
  "photo_create_at": "2016-07-08T12:30:35+08:00",
  "real_name": "天了噜",
  "tuso_create_at": "2016-07-22T17:20:13.281476517+08:00",
  "tuso_id": "709163",
  "tusos": 0,
  "user_create_at": "2016-05-30T13:13:08+08:00",
  "uuid": "ac9530e1-e763-45c3-99ee-63e49ca7ecf7"
}
```

获取用户信息的详细度跟查询者和查询对象的关系，以及查询对象资料详细程度有关。
无论如何，会返回的基本信息有：

```http
{
  "followees": 0,
  "followers": 0,
  "id": 109,
  "nickname": "RapForTestFoll@qq.com",
  "tuso_create_at": "2016-07-22T17:22:18.400949397+08:00",
  "user_create_at": "2016-07-22T15:36:13+08:00",
  "uuid": "aa9e78d7-fb9c-445a-a4a2-937a1fea6230"
}
```

其他的值根据查询对象是否有值，或者私密信息则根据查询者和查询对象的关系来判断是否显示。

### HTTP Request

`GET /user/:uuid`

### Request Parameters

Parameter | Type | Description
----------|------|------------
uuid | string | 用户 UUID


### Attribute Parameters

Attribute | Type | Description
----------|------|------------
id | int | 用户 ID
uuid | string | 用户 UUID， UUID 是用于所有用户相关操作的唯一识别号
nickname | string | 用户昵称
followees | string | 用户关注数
followers | string | 用户粉丝数
user_create_at | string | 用户创建时间
avatar | Avatar | 详见 Avatar

## 根据图说号（tuso_id）获取指定用户

```http
GET /users/data/709163 HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "applying": "false",
  "avatar": {
    "active": true,
    "big_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/FlDBDDsLvMv58Dq_xcioLfkj3YhD",
    "id": "5795dc653c1fa662a20a9540",
    "photo_uuid": "",
    "small_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/FlDBDDsLvMv58Dq_xcioLfkj3YhD?imageView2/1/w/200/h/200",
    "timestamp": "2002-10-02T23:00:00+08:00",
    "type": 2,
    "user_uuid": "a7a513e3-e391-4a04-a435-3dfb4b5247f9"
  },
  "followees": 0,
  "followers": 0,
  "id": 67,
  "nickname": "Fuck USA_JPN",
  "photo_create_at": "2016-07-12T10:40:57+08:00",
  "relation_type": "related_type_null",
  "tuso_create_at": "2016-07-29T18:03:09.714112739+08:00",
  "user_create_at": "2016-06-27T09:46:49+08:00",
  "uuid": "a7a513e3-e391-4a04-a435-3dfb4b5247f9"
}
```

其他的值根据查询对象是否有值，或者私密信息则根据查询者和查询对象的关系来判断是否显示。

调用此接口的时候会额外返回：
 
 1 是否申请好友中 "applying" 字段。 在申请中为 true 否则为 false
 2 当前用户与查询对象的状态 "relation_type" 字段。 表示自己与查询对象的人的关系状态。

### HTTP Request

`GET /users/data/:tuso_id`

### Request Parameters

Parameter | Type | Description
----------|------|------------
tusoID | string | 用的图说号


### Attribute Parameters

Attribute | Type | Description
----------|------|------------
id | int | 用户 ID
uuid | string | 用户 UUID， UUID 是用于所有用户相关操作的唯一识别号
nickname | string | 用户昵称
followees | string | 用户关注数
followers | string | 用户粉丝数
user_create_at | string | 用户创建时间
avatar | Avatar | 详见 Avatar

## 非登录情况下根据图说号（tuso_id）获取指定用户

```http
GET /users/data/:tusoID/without_login HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
   "avatar": {
    "active": true,
    "big_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/FlDBDDsLvMv58Dq_xcioLfkj3YhD",
    "id": "5795dc653c1fa662a20a9540",
    "photo_uuid": "",
    "small_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/FlDBDDsLvMv58Dq_xcioLfkj3YhD?imageView2/1/w/200/h/200",
    "timestamp": "2002-10-02T23:00:00+08:00",
    "type": 2,
    "user_uuid": "a7a513e3-e391-4a04-a435-3dfb4b5247f9"
  },
  "followees": 0,
  "followers": 0,
  "id": 67,
  "nickname": "Fuck USA_JPN",
  "photo_create_at": "2016-07-12T10:40:57+08:00",
  "relation_type": "related_type_null",
  "tuso_create_at": "2016-07-29T18:03:09.714112739+08:00",
  "user_create_at": "2016-06-27T09:46:49+08:00",
  "uuid": "a7a513e3-e391-4a04-a435-3dfb4b5247f9"
}
```

### HTTP Request

`GET users/data/:tusoID/without_login`

### Request Parameters

Parameter | Type | Description
----------|------|------------
tusoID | string | 用的图说号


### Attribute Parameters

Attribute | Type | Description
----------|------|------------
id | int | 用户 ID
uuid | string | 用户 UUID， UUID 是用于所有用户相关操作的唯一识别号
nickname | string | 用户昵称
followees | string | 用户关注数
followers | string | 用户粉丝数
user_create_at | string | 用户创建时间
avatar | Avatar | 详见 Avatar



## 更新用户信息

```http
PUT /user/585b0a3f-8460-4c51-aa51-a0f4d7342c24 HTTP/1.1
Content-Type: application/json

{
    "real_name": "天了噜",
    "nickname": "我勒个去",
    "birthday": "2002-10-02T23:00:00+08:00",
    "location" {
        "country": "中国"
    },
    "gender": "male"
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 19,
    "uuid": "585b0a3f-8460-4c51-aa51-a0f4d7342c24",
    "nickname": "我的天",
    "followees": 12,
    "followers": 12,
    "avatar": {
    	"active": true,
    	"big_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/Fou5T3KFaUntLagL3BktbEh_shbX",
    	"id": "5784a8583c1fa60df5d8cf9a",
    	"photo_uuid": "",
    	"small_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/Fou5T3KFaUntLagL3BktbEh_shbX?imageView2/1/w/200/h/200",
    	"timestamp": "2016-09-01T11:12:46+08:00",
    	"user_uuid": "ac9530e1-e763-45c3-99ee-63e49ca7ecf7"
    },
    "tuso_id": "145678890",
    "real_name": "天才",
    "friends": 0,
    "images": 10000,
    "tusos": 123,
    "gender": "male",
    "location": {},
}
```

更新用户数据，如果不需要修改，则不需修改的值不传

### HTTP Request

`PUT /user/:uuid`

### Request Parameters

Parameter | Type | Description
----------|------|------------
uuid | string | 用户 UUID


### Attribute Parameters

Attribute | Type | Description
----------|------|------------
id | int | 用户 ID
uuid | string | 用户 UUID， UUID 是用于所有用户相关操作的唯一识别号
nickname | string | 用户昵称
followees | string | 用户关注数
followers | string | 用户粉丝数
avatar | Avatar | 详见 Avatar
tuso_id | int | 用户图说号
real_name | string | 用户真实姓名
friends | string | 用户好友数
images | string | 用户图片数
tusos | string | 用户图说数
location | Location | 用户所在地


## 修改邮箱
还没写

## 修改手机号
还没写

## 修改密码
还没写

## 关注用户
 
```http
PUT /user/585b0a3f-8460-4c51-aa51-a0f4d7342c24/follow HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 2646,
  "is_applying_friend": false,
  "relation_type": "related_type_followee",
  "target_user": {
    "avatar": {
      "active": true,
      "big_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/FnTUdg2u7rhK8EgQtH_aCSIaJRsc",
      "id": "5790319f3c1fa67699525154",
      "photo_uuid": "",
      "small_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/FnTUdg2u7rhK8EgQtH_aCSIaJRsc?imageView2/1/w/200/h/200",
      "timestamp": "2016-09-01T11:12:46+08:00",
      "type": 3,
      "user_uuid": "ac9530e1-e763-45c3-99ee-63e49ca7ecf7"
    },
    "followees": 0,
    "followers": 13,
    "id": 32,
    "nickname": "我勒个去",
    "photo_create_at": "2016-07-08T12:30:35+08:00",
    "tuso_create_at": "2016-07-22T17:02:23.663987513+08:00",
    "user_create_at": "2016-05-30T13:13:08+08:00",
    "uuid": "ac9530e1-e763-45c3-99ee-63e49ca7ecf7"
  },
  "uuid": "32f71705-5e81-471a-8730-c1d850be4bde"
}
```

关注用户，用户之间的关注操作无任何前提条件限制（已是好友会报错）。

报错信息为：

```http
HTTP/1.1 403 Forbidden
Content-Type: application/json

{
  "code": 2001,
  "message": "invalid relation action"
}
```

关注之后，关注人A 对被关注人B 的关系类型变为：

- "related\_type_followee"

标示 用户 --> 用户 的关系为 **关注** UserRelatedTypeFollowee = 2 int

被关注人B 对关注人A 的关系为：

- "related\_type_follower"

标示 用户 --> 用户 的关系为 **被关注** UserRelatedTypeFollower = 3 int

若是关注人A 已被 B 关注，则双方关系都变为：

- "related\_type\_mutual_follow"

标示 用户 --> 用户 的关系为 **相互关注** UserRelatedTypeMutalFollow = 4 int

注：用户处于好友状态下无法进行关注/取消关注的相关操作。

### HTTP Request

`PUT /user/:uuid/follow`

### Request Parameters

Parameter | Type | Description
----------|------|------------
uuid | string | 关注对象用户 UUID


### Attribute Parameters

Attribute | Type | Description
----------|------|------------
id | int | 用户关系 ID
uuid | string | 用户关系 UUID
relation_type | string | 用户关系 类型
is_ applying_friend | bool | 是否在申请好友
target_user | User | 目标用户


## 取关用户

```http
PUT /user/585b0a3f-8460-4c51-aa51-a0f4d7342c24/unfollow HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 2646,
  "is_applying_friend": false,
  "relation_type": "related_type_none",
  "target_user": {
    "avatar": {
      "active": true,
      "big_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/FnTUdg2u7rhK8EgQtH_aCSIaJRsc",
      "id": "5790319f3c1fa67699525154",
      "photo_uuid": "",
      "small_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/FnTUdg2u7rhK8EgQtH_aCSIaJRsc?imageView2/1/w/200/h/200",
      "timestamp": "2016-09-01T11:12:46+08:00",
      "type": 3,
      "user_uuid": "ac9530e1-e763-45c3-99ee-63e49ca7ecf7"
    },
    "followees": 0,
    "followers": 12,
    "id": 32,
    "nickname": "我勒个去",
    "photo_create_at": "2016-07-08T12:30:35+08:00",
    "tuso_create_at": "2016-07-22T17:09:02.403397971+08:00",
    "user_create_at": "2016-05-30T13:13:08+08:00",
    "uuid": "ac9530e1-e763-45c3-99ee-63e49ca7ecf7"
  },
  "uuid": "32f71705-5e81-471a-8730-c1d850be4bde"
}
```

取消关注用户，用户之间的取消关注操作的前提为：

与目标对象处于关注或者互相关注状态。

否则会报错：

```http
HTTP/1.1 403 Forbidden
Content-Type: application/json

{
  "code": 2001,
  "message": "invalid relation action"
}
```

取消关注之后，关注人A 与被关注人B 的关系类型均变为：

- "related\_type_none"

标示 用户 --> 用户 的关系为 **无关系** UserRelatedTypeNone = 0 int

若取消关注之前，A与B之间的关系为相互关系状态。
则取消关注之后，关注人A 对关注人B 的关系类型变为：

- "related\_type_follower"

标示 用户 --> 用户 的关系为 **被关注** UserRelatedTypeFollower = 3 int

被关注人B 对关注人A 的关系类型变为：

- "related\_type_followee"

标示 用户 --> 用户 的关系为 **被关注** UserRelatedTypeFollowee = 2 int

注：用户处于好友状态下 **无法** 进行关注/取消关注的相关操作。



### HTTP Request

`PUT /user/:uuid/unfollow`

### Request Parameters

Parameter | Type | Description
----------|------|------------
uuid | string | 取关对象用户 UUID


### Attribute Parameters

Attribute | Type | Description
----------|------|------------
id | int | 用户关系 ID
uuid | string | 用户关系 UUID
relation_type | string | 用户关系 类型
is\_applying_friend | bool | 是否在申请好友
target_user | User | 目标用户


## 申请好友

```http
PUT /user/585b0a3f-8460-4c51-aa51-a0f4d7342c24/request HTTP/1.1
Content-Type: application/json

{
    "tuso_id": "12345667"
}

```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 19,
    "uuid": "12334a3f-8460-9f24-qq21-ofdb7342o34",
    "relation_type": "followee",
    "is_applying_friend": true,
    "target_user": {
        "id": 19,
        "uuid": "585b0a3f-8460-4c51-aa51-a0f4d7342c24",
        "nickname": "我的天",
        "followees": 12,
        "followers": 12,
        "images": 1,
        "tusos": 0,
        "tuso_id": "244857",
        "friends": 0,
        "avatar": {
    		"active": true,
    		"big_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/Fou5T3KFaUntLagL3BktbEh_shbX",
    		"id": "5784a8583c1fa60df5d8cf9a",
    		"photo_uuid": "",
    		"small_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/Fou5T3KFaUntLagL3BktbEh_shbX?imageView2/1/w/200/h/200",
    		"timestamp": "2016-09-01T11:12:46+08:00",
    		"user_uuid": "ac9530e1-e763-45c3-99ee-63e49ca7ecf7"
    	}
    }
}
```

申请好友 url 中的 :uuid 为 **必填项** ， 若 tuso_id 有值，则是 ”根据图说id加好友“ 逻辑

若 tuso_id 不传， 则是 “根据用户关系加好友” ，申请人和被申请人关系必须为 **相互关注**，否则会报错

申请好友前提条件：

1. 用户与申请对象有关系（无论关注或被关注）

2. 用户拥有申请的对象的TusoID

此操作结果为申请对象收到用户发送的好友申请。（后续操作转为 接受/拒绝 好友申请操作，这些操作不在此接口范畴）  

否则， 会报错 ：

```http
HTTP/1.1 403 Forbidden
Content-Type: application/json

{
  "code": 2001,
  "message": "invalid relation action"
}
```

### HTTP Request

`PUT /user/:uuid/request`

### Request Parameters

Parameter | Type | Description
----------|------|------------
uuid | string | 目标用户 UUID
tuso_id | string | 目标用户图说号，此为可选

### Attribute Parameters

Attribute | Type | Description
----------|------|------------
id | int | 用户关系 ID
uuid | string | 用户关系 UUID
relation_type | string | 用户关系 类型
is\_applying_friend | bool | 是否在申请好友
target_user | User | 目标用户


## 接受好友申请

```http
PUT users/accept HTTP/1.1
Content-Type: application/json

{
    "UUID": "585b0a3f-8460-4c51-aa51-a0f4d7342c24"
}

```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 19,
    "uuid": "12334a3f-8460-9f24-qq21-ofdb7342o34",
    "relation_type": "followee",
    "is_applying_friend": false,
    "target_user": {
        "id": 19,
        "uuid": "585b0a3f-8460-4c51-aa51-a0f4d7342c24",
        "nickname": "我的天",
        "followees": 12,
        "followers": 12,
        "images": 1,
        "tusos": 0,
        "tuso_id": "244857",
        "friends": 0,
        "avatar": {
    		"active": true,
    		"big_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/Fou5T3KFaUntLagL3BktbEh_shbX",
    		"id": "5784a8583c1fa60df5d8cf9a",
    		"photo_uuid": "",
    		"small_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/Fou5T3KFaUntLagL3BktbEh_shbX?imageView2/1/w/200/h/200",
    		"timestamp": "2016-09-01T11:12:46+08:00",
    		"user_uuid": "ac9530e1-e763-45c3-99ee-63e49ca7ecf7"
    	}
    }
}
```

接受好友请求

接受好友的前提为必须收到对方发出的好友申请

注：传入的UUID为需要同意好友申请的对象的UUID

### HTTP Request

`PUT /users/accept`

### Request Parameters

Parameter | Type | Description
----------|------|------------
uuid | string | 目标用户 UUID

### Attribute Parameters

Attribute | Type | Description
----------|------|------------
id | int | 用户关系 ID
uuid | string | 用户关系 UUID
relation_type | string | 用户关系 类型
is\_applying_friend | bool | 是否在申请好友
target_user | User | 目标用户


## 拒绝好友申请

```http
PUT users/reject HTTP/1.1
Content-Type: application/json

{
    "UUID": "585b0a3f-8460-4c51-aa51-a0f4d7342c24"
}

```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 19,
    "uuid": "12334a3f-8460-9f24-qq21-ofdb7342o34",
    "relation_type": "followee",
    "is_applying_friend": false,
    "target_user": {
        "id": 19,
        "uuid": "585b0a3f-8460-4c51-aa51-a0f4d7342c24",
        "nickname": "我的天",
        "followees": 12,
        "followers": 12,
        "images": 1,
        "tusos": 0,
        "tuso_id": "244857",
        "friends": 0,
        "avatar": {
    		"active": true,
    		"big_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/Fou5T3KFaUntLagL3BktbEh_shbX",
    		"id": "5784a8583c1fa60df5d8cf9a",
    		"photo_uuid": "",
    		"small_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/Fou5T3KFaUntLagL3BktbEh_shbX?imageView2/1/w/200/h/200",
    		"timestamp": "2016-09-01T11:12:46+08:00",
    		"user_uuid": "ac9530e1-e763-45c3-99ee-63e49ca7ecf7"
    	}
    }
}
```

拒绝好友请求

接受好友的前提为必须收到对方发出的好友申请

注：传入的UUID为需要拒绝好友申请的对象的UUID

### HTTP Request

`PUT /users/reject`

### Request Parameters

Parameter | Type | Description
----------|------|------------
uuid | string | 目标用户 UUID

### Attribute Parameters

Attribute | Type | Description
----------|------|------------
id | int | 用户关系 ID
uuid | string | 用户关系 UUID
relation_type | string | 用户关系 类型
is\_applying_friend | bool | 是否在申请好友
target_user | User | 目标用户


## 友尽

```http
PUT /user/user/1d80dba4-0c1e-49d3-84fb-3808a4d67593/end_friend/false HTTP/1.1
```

```http
PUT /user/user/1d80dba4-0c1e-49d3-84fb-3808a4d67593/end_friend/true HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 19,
    "uuid": "12334a3f-8460-9f24-qq21-ofdb7342o34",
    "relation_type": "followee",
    "is_applying_friend": false,
    "target_user": {
        "id": 19,
        "uuid": "585b0a3f-8460-4c51-aa51-a0f4d7342c24",
        "nickname": "我的天",
        "followees": 12,
        "followers": 12,
        "images": 1,
        "tusos": 0,
        "tuso_id": "244857",
        "friends": 0,
        "avatar": {
    		"active": true,
    		"big_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/Fou5T3KFaUntLagL3BktbEh_shbX",
    		"id": "5784a8583c1fa60df5d8cf9a",
    		"photo_uuid": "",
    		"small_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/Fou5T3KFaUntLagL3BktbEh_shbX?imageView2/1/w/200/h/200",
    		"timestamp": "2016-09-01T11:12:46+08:00",
    		"user_uuid": "ac9530e1-e763-45c3-99ee-63e49ca7ecf7"
    	}
    }
}
```

结束好友关系

顾名思义，分手的前提是你得有个好友，因此此操作的前提条件为：

用户与目标用户之间的关系为 **好友**

关系类型为：

- "related\_type_friend"

标示 用户 --> 用户 的关系为 好友 UserRelatedTypeFriend = 5 int

最后的 true/false 表示解除好友关系之后继续保持关注

```
 若为 true 则双方关系为：

- "related_type_mutual_follow"

标示 双方 的关系为 相互关注 UserRelatedTypeMutualFollow = 4 int
```

```
若为 false 则当前用户不再关注对方，而对方仍然关注自己

自己与对方的关系为：

- "related_type_follower"

标示 当前用户 --> 目标用户 的关系为 被关注 UserRelatedTypeFollower = 3 int

对方与自己的关系为：

- "related_type_followee"

标示 目标用户 --> 当前用户 的关系为 关注 UserRelatedTypeFollowee = 2 int

```


### HTTP Request

`PUT /user/:uuid/end_friend `

### Request Parameters

Parameter | Type | Description
----------|------|------------
uuid | string | 用户 UUID
tuso_id | string | 用户图说号，此为可选

### Attribute Parameters

Attribute | Type | Description
----------|------|------------
id | int | 用户关系 ID
uuid | string | 用户关系 UUID
relation_type | string | 用户关系 类型
is\_applying_friend | bool | 是否在申请好友
target_user | User | 目标用户


## 备注名

```http
PUT /user/user/1d80dba4-0c1e-49d3-84fb-3808a4d67593/remark/Raphael HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 19,
    "uuid": "12334a3f-8460-9f24-qq21-ofdb7342o34",
    "relation_type": "followee",
    "is_applying_friend": false,
    "target_user": {
        "id": 19,
        "uuid": "585b0a3f-8460-4c51-aa51-a0f4d7342c24",
        "nickname": "我的天",
        "followees": 12,
        "followers": 12,
        "images": 1,
        "tusos": 0,
        "tuso_id": "244857",
        "friends": 0,
        "avatar": {
    		"active": true,
    		"big_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/Fou5T3KFaUntLagL3BktbEh_shbX",
    		"id": "5784a8583c1fa60df5d8cf9a",
    		"photo_uuid": "",
    		"small_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/Fou5T3KFaUntLagL3BktbEh_shbX?imageView2/1/w/200/h/200",
    		"timestamp": "2016-09-01T11:12:46+08:00",
    		"user_uuid": "ac9530e1-e763-45c3-99ee-63e49ca7ecf7"
    	}
    }
}
```
修改好友备注名。必须得是好友关系才能修改，否则会报错。
修改之后，目标用户会在自己这边以备注名的形式显示。


### HTTP Request

`PUT /user/:uuid/end_friend `

### Request Parameters

Parameter | Type | Description
----------|------|------------
uuid | string | 用户 UUID
tuso_id | string | 用户图说号，此为可选

### Attribute Parameters

Attribute | Type | Description
----------|------|------------
id | int | 用户关系 ID
uuid | string | 用户关系 UUID
relation_type | string | 用户关系 类型
is\_applying_friend | bool | 是否在申请好友
target_user | User | 目标用户


## 获取好友列表

```http
GET /users/friend HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": 1269,
    "is_applying_friend": false,
    "relation_type": "related_type_friend",
    "target_user": {
      "birthday": "2000-01-01T00:00:00+08:00",
      "followees": 0,
      "followers": 0,
      "friends": 54,
      "id": 11,
      "images": 32,
      "nickname": "风风火火",
      "tuso_create_at": "2016-07-22T17:52:47.22915758+08:00",
      "tuso_id": "468891",
      "tusos": 0,
      "user_create_at": "2016-05-23T13:59:30+08:00",
      "uuid": "72c6c0fa-21eb-4078-bc67-9a36fed80fe0"
    },
    "uuid": "6b8f0ed0-55f7-4651-a194-3556cf051836"
  },
   {
    "id": 756,
    "is_applying_friend": false,
    "relation_type": "related_type_friend",
    "target_user": {
      "birthday": "2000-01-01T00:00:00+08:00",
      "followees": 0,
      "followers": 0,
      "friends": 21,
      "id": 31,
      "images": 87,
      "nickname": "13951605883",
      "photo_create_at": "2016-07-11T15:54:43+08:00",
      "tuso_create_at": "2016-07-22T17:52:47.233333694+08:00",
      "tuso_id": "132342",
      "tusos": 0,
      "user_create_at": "2016-05-28T14:59:39+08:00",
      "uuid": "8816f36c-5fe6-4aed-90b5-517e6c973da8"
    },
    "uuid": "4e5855d8-0fc5-45b5-908f-dcfdb1f9ffda"
  },
  {
    "id": 1538,
    "is_applying_friend": false,
    "relation_type": "related_type_friend",
    "target_user": {
      "avatar": {
        "active": true,
        "big_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/dfd4a4d6-73b1-425b-b4ed-0201ffcb1837.jpg",
        "id": "577bdc4a3c1fa6222fc582be",
        "photo_uuid": "2a3b7313-6889-4eb3-bf47-961bad447fef",
        "small_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/dfd4a4d6-73b1-425b-b4ed-0201ffcb1837.jpg?imageView2/1/w/200/h/200",
        "timestamp": "2016-07-06T00:11:54.387+08:00",
        "type": 0,
        "user_uuid": "2dcd1340-e3fd-4889-9abb-eeb785338822"
      },
      "birthday": "1994-03-12T00:00:00+08:00",
      "followees": 0,
      "followers": 0,
      "friends": 66,
      "gender": "user_gender_male",
      "id": 28,
      "images": 256,
      "location": {
        "country": "",
        "state": "江苏省",
        "city": "南京市",
        "district": "栖霞区"
      },
      "nickname": "禾彦PC",
      "photo_create_at": "2016-07-10T00:03:04+08:00",
      "real_name": "彭程",
      "tuso_create_at": "2016-07-22T17:52:47.238324997+08:00",
      "tuso_id": "303888",
      "tusos": 0,
      "user_create_at": "2016-05-28T12:31:47+08:00",
      "uuid": "2dcd1340-e3fd-4889-9abb-eeb785338822"
    },
    "uuid": "2ccddfa2-cbb4-4e08-8070-2b2fb2d4acc4"
  }
]
```

拉取好友关系

关系类型为：

- "related\_type_friend"

标示 用户 --> 用户 的关系为 好友 UserRelatedTypeFriend = 5 int

注：若无数据，则返回 null


### HTTP Request

`GET /user/friend `

### Request Parameters

Parameter | Type | Description
----------|------|------------


### Attribute Parameters

Attribute | Type | Description
----------|------|------------
relation_type | string | 关系类型
user | User | 用户数据，详见User
uuid | string | 用户 UUID， UUID 是用于所有用户相关操作的唯一识别号
user_id | int | 用户的id

## 获取粉丝列表

```http
GET /users/follower HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": 2635,
    "is_applying_friend": false,
    "relation_type": "related_type_follower",
    "target_user": {
      "avatar": {
        "active": true,
        "big_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/FnpLfaBR-wyQyDFY6CsAZ-76vd8e",
        "id": "578f6b753c1fa676995250bf",
        "photo_uuid": "",
        "small_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/FnpLfaBR-wyQyDFY6CsAZ-76vd8e?imageView2/1/w/200/h/200",
        "timestamp": "2016-09-03T12:12:46+08:00",
        "type": 3,
        "user_uuid": "0c0cfe0e-469f-463e-9b9e-0b3fbff2d43d"
      },
      "followees": 12,
      "followers": 0,
      "id": 91,
      "nickname": "RaFi@qq.com",
      "tuso_create_at": "2016-07-23T14:17:00.377356278+08:00",
      "user_create_at": "2016-07-05T13:15:58+08:00",
      "uuid": "0c0cfe0e-469f-463e-9b9e-0b3fbff2d43d"
    },
    "uuid": "bf9a36f8-4d66-49d5-a3b5-88ea8a9bf6f4"
  },
  {
    "id": 2647,
    "is_applying_friend": false,
    "relation_type": "related_type_follower",
    "target_user": {
      "followees": 10,
      "followers": 0,
      "id": 108,
      "nickname": "RapForTest@qq.com",
      "tuso_create_at": "2016-07-23T14:17:00.377568267+08:00",
      "user_create_at": "2016-07-22T10:53:42+08:00",
      "uuid": "cc44b89a-83d7-411d-9ca4-ad98d86933e8"
    },
    "uuid": "13578091-9614-4868-a68f-21e790d6a7d6"
  }
] 
```

拉取粉丝列表

关系类型为：

- "related\_type_follower"

标示 用户 --> 用户 的关系为 好友 UserRelatedTypeFollower = 3 int

注：若无数据，则返回 null


### HTTP Request

`GET /user/follower `

### Request Parameters

Parameter | Type | Description
----------|------|------------


### Attribute Parameters

Attribute | Type | Description
----------|------|------------
relation_type | string | 关系类型
user | User | 用户数据，详见User
uuid | string | 用户 UUID， UUID 是用于所有用户相关操作的唯一识别号
user_id | int | 用户的id

## 获取关注列表

```http
GET /users/followee HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": 2635,
    "is_applying_friend": false,
    "relation_type": "related_type_follower",
    "target_user": {
      "avatar": {
        "active": true,
        "big_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/FnpLfaBR-wyQyDFY6CsAZ-76vd8e",
        "id": "578f6b753c1fa676995250bf",
        "photo_uuid": "",
        "small_image_url": "http://7xodxr.com2.z0.glb.qiniucdn.com/FnpLfaBR-wyQyDFY6CsAZ-76vd8e?imageView2/1/w/200/h/200",
        "timestamp": "2016-09-03T12:12:46+08:00",
        "type": 3,
        "user_uuid": "0c0cfe0e-469f-463e-9b9e-0b3fbff2d43d"
      },
      "followees": 12,
      "followers": 0,
      "id": 91,
      "nickname": "RaFi@qq.com",
      "tuso_create_at": "2016-07-23T14:17:00.377356278+08:00",
      "user_create_at": "2016-07-05T13:15:58+08:00",
      "uuid": "0c0cfe0e-469f-463e-9b9e-0b3fbff2d43d"
    },
    "uuid": "bf9a36f8-4d66-49d5-a3b5-88ea8a9bf6f4"
  },
  {
    "id": 2647,
    "is_applying_friend": false,
    "relation_type": "related_type_follower",
    "target_user": {
      "followees": 10,
      "followers": 0,
      "id": 108,
      "nickname": "RapForTest@qq.com",
      "tuso_create_at": "2016-07-23T14:17:00.377568267+08:00",
      "user_create_at": "2016-07-22T10:53:42+08:00",
      "uuid": "cc44b89a-83d7-411d-9ca4-ad98d86933e8"
    },
    "uuid": "13578091-9614-4868-a68f-21e790d6a7d6"
  }
] 
```

拉取关注列表

关系类型为：

- "related\_type_followee"

标示 用户 --> 用户 的关系为 好友 UserRelatedTypeFollowee = 2 int

注：若无数据，则返回 null


### HTTP Request

`GET /user/followee `

### Request Parameters

Parameter | Type | Description
----------|------|------------


### Attribute Parameters

Attribute | Type | Description
----------|------|------------
relation_type | string | 关系类型
user | User | 用户数据，详见User
uuid | string | 用户 UUID， UUID 是用于所有用户相关操作的唯一识别号
user_id | int | 用户的id