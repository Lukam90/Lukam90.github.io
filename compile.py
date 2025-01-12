#coding: utf8

from functions import *

# Données

# _

# Compilation

## Markdown

#convert_markdown_single("test")

## Pages (générales)

index = convert_json_data("index")

convert_jinja_single("index", index)
convert_jinja_single("test")

## Profil

profil = ["cv-imprime", "portfolio"]

#convert_jinja_list("profil", profil)

## Prières

prieres = ["chapelet", "ch-liberation", "ch-sang", "litanies"]

#convert_jinja_list("prieres", prieres)

#convert_jinja_single("prieres/chapelet")
convert_jinja_single("prieres/ch-liberation")
convert_jinja_single("prieres/ch-sang")
#convert_jinja_single("prieres/litanies")

## Exercices

exercices = ["ex-base", "ex-nombres"]

#convert_jinja_list("exercices", exercices)
convert_jinja_single("exercices/ex-nombres")
