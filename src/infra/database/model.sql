create database if not exists teamwork_db;

create table users(
    id integer primary key generated always as identity,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    email varchar(50) unique not null,
    password varchar not null,
    gender varchar not null,
    job_role varchar not null,
    department varchar not null,
    address varchar not null,
    created_on timestamp not null
);

create table articles(
    articleId integer primary key generated always as identity,
    authorId int references users(id) on delete cascade,
    title varchar not null,
    article text not null,
    created_on timestamp not null,
    updated_on timestamp
);

create table comments(
    commentId integer primary key generated always as identity,
    articleId int references articles(articleId) on delete cascade,
    userId int references users(id) on delete cascade,
    comment text not null,
    created_on timestamp not null
);

create table gifs(
    gifId integer primary key generated always as identity,
    authorId int references users(id) on delete cascade,
    title varchar not null,
    gif varchar not null,
    created_on timestamp not null
);