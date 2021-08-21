# This source code is a part of Project Violet.
# Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
#
# Script Name: hitomi_get_image_list.srcal
# Input:  $id     [int] - Hitomi.la Article Id
# Output: $result [Map] - Image List, Thumbnail List

gg = download(concat("https://ltn.hitomi.la/galleries/", $id, ".js"))

if (startswith(trim(gg), "<html>"))
  print("no!!")
else [
  files = mapfromjson(substr(gg, add(indexof(gg, "="), 1)))["files"]

  number_of_frontends = 3
  $id = tostring($id)
  subdomain = fromcharcode(add(97, mod(codeunitat($id, 
      sub(len($id), 1)), number_of_frontends)))

  btresult = listcreate()
  stresult = listcreate()
  result = listcreate()
  foreach (e : files) [
    hash = e["hash"]
    postfix = substr(hash, sub(len(hash), 3))
    subdomainx = subdomain

    if (or(not(containskey(e, "haswebp")), eq(e["haswebp"], 0)))
      subdomainx = "b"

    if (ishexint(substr(postfix, 0, 2))) [
      x = hextoint(substr(postfix, 0, 2))

      o = 0
      if (ls(x, 136)) o = 1
      if (ls(x, 68)) o = 2
      subdomainx = fromcharcode(add(97, o))
    ]

    p0 = at(postfix, 0)
    p1 = at(postfix, 1)
    p2 = at(postfix, 2)

    if (or(not(containskey(e, "haswebp")), eq(e["haswebp"], 0)))
      append(result, concat("https://", subdomainx, "b.hitomi.la/images/", p2, "/", p0, p1, "/", hash, ".", split(e["name"],".")[-1]))
    else if (eq(hash, ""))
      append(result, concat("https://", subdomainx, "a.hitomi.la/webp/", e["name"], ".webp"))
    else if (ls(len(hash), 3))
      append(result, concat("https://", subdomainx, "a.hitomi.la/webp/", hash, ".webp"))
    else
      append(result, concat("https://", subdomainx, "b.hitomi.la/webp/", p2, "/", p0, p1, "/", hash, ".webp"))
    append(btresult, concat("https://tn.hitomi.la/bigtn/", p2, "/", p0, p1, "/", hash, ".jpg"))
    append(stresult, concat("https://", subdomainx, "tn.hitomi.la/smalltn/", p2, "/", p0, p1, "/", hash, ".jpg"))
  ]

  $result = mapcreate()
  mapinsert($result, "result", result)
  mapinsert($result, "stresult", stresult)
  mapinsert($result, "btresult", btresult)
]
