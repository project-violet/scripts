// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries" + id + ".js";
}

function hitomi_get_image_list(id, gg) {
  if (gg.startsWith("<html>")) return null;
  files = JSON.parse(gg.substr(gg.indexOf("=") + 1))["files"];
  number_of_frontends = 3;
  subdomain = String.fromCharCode(
    97 + (id.charCodeAt(id.length - 1) % number_of_frontends)
  );
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      var o = 0;
      if (x < 0x7a) o = 1;
      subdomainx = String.fromCharCode(97 + o);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://\${subdomainx}b.hitomi.la/images/\${postfix[2]}/\${postfix[0]}\${postfix[1]}/\${hash}.\${rr['name'].split('.')[-1]}`
      );
    } else if (hash == "")
      result.push(
        `https://\${subdomainx}a.hitomi.la/webp/\${rr[\'name\']}.webp`
      );
    else if (hash.length < 3)
      result.push(`https://\${subdomainx}a.hitomi.la/webp/\${hash}.webp`);
    else {
      result.push(
        `https://\${subdomainx}a.hitomi.la/webp/\${postfix[2]}/\${postfix[0]}\${postfix[1]}/\${hash}.webp`
      );
    }
    btresult.push(
      `https://tn.hitomi.la/bigtn/\${postfix[2]}/\${postfix[0]}\${postfix[1]}/\${hash}.jpg`
    );
    stresult.push(
      `https://\${subdomainx}tn.hitomi.la/smalltn/\${postfix[2]}/\${postfix[0]}\${postfix[1]}/\${hash}.jpg`
    );
  }
  return { btresult: btresult, stresult: stresult, result: result };
}
