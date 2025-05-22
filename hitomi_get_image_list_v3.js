// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 1;
switch (g) {
case 1894:
case 486:
case 1505:
case 798:
case 908:
case 1755:
case 3133:
case 3033:
case 1906:
case 804:
case 1138:
case 1946:
case 4019:
case 423:
case 877:
case 3160:
case 145:
case 4066:
case 2595:
case 3317:
case 3060:
case 2804:
case 1467:
case 1672:
case 4025:
case 2911:
case 933:
case 2199:
case 359:
case 1217:
case 3383:
case 606:
case 970:
case 3835:
case 3629:
case 974:
case 84:
case 3278:
case 1365:
case 1273:
case 4031:
case 1998:
case 1326:
case 2257:
case 1664:
case 1951:
case 878:
case 1378:
case 3265:
case 469:
case 3722:
case 1464:
case 2715:
case 1870:
case 1214:
case 3615:
case 691:
case 86:
case 371:
case 739:
case 2847:
case 917:
case 2807:
case 3429:
case 261:
case 3314:
case 2939:
case 1589:
case 3962:
case 1901:
case 3370:
case 2125:
case 3522:
case 2207:
case 2025:
case 1941:
case 858:
case 3984:
case 2969:
case 975:
case 312:
case 638:
case 1814:
case 1270:
case 2857:
case 2019:
case 538:
case 2916:
case 223:
case 1297:
case 1873:
case 11:
case 613:
case 2991:
case 2515:
case 3397:
case 3235:
case 3012:
case 1634:
case 286:
case 3030:
case 1321:
case 815:
case 1159:
case 1059:
case 160:
case 3:
case 3495:
case 1956:
case 936:
case 2204:
case 537:
case 1745:
case 1437:
case 1883:
case 3063:
case 269:
case 3163:
case 1637:
case 637:
case 1280:
case 3974:
case 2031:
case 731:
case 1075:
case 483:
case 2131:
case 1175:
case 3380:
case 3695:
case 426:
case 1294:
case 1068:
case 441:
case 1681:
case 3305:
case 3345:
case 2187:
case 2930:
case 3420:
case 2087:
case 3721:
case 2744:
case 887:
case 1952:
case 3604:
case 230:
case 1205:
case 2704:
case 1245:
case 234:
case 4032:
case 2174:
case 2074:
case 3931:
case 2963:
case 1517:
case 3404:
case 329:
case 3620:
case 476:
case 1481:
case 2720:
case 1583:
case 2337:
case 3925:
case 2435:
case 2747:
case 381:
case 198:
case 2707:
case 3565:
case 2815:
case 3526:
case 343:
case 292:
case 2184:
case 662:
case 542:
case 3966:
case 642:
case 3191:
case 1000:
case 562:
case 745:
case 1100:
case 3822:
case 1040:
case 4010:
case 1140:
case 3058:
case 888:
case 2334:
case 363:
case 2177:
case 1153:
case 1671:
case 2635:
case 2829:
case 984:
case 760:
case 366:
case 2364:
case 920:
case 2193:
case 3726:
case 2626:
case 1322:
case 1570:
case 276:
case 1773:
case 1289:
case 2757:
case 2547:
case 1686:
case 2665:
case 2382:
case 3765:
case 3657:
case 828:
case 4074:
case 2507:
case 3222:
case 1143:
case 2032:
case 1043:
case 2215:
case 985:
case 1003:
case 1486:
case 430:
case 3039:
case 253:
case 4087:
case 2478:
case 3048:
case 1150:
case 3148:
case 1050:
case 1942:
case 2488:
case 2754:
case 3521:
case 3654:
case 1902:
case 1255:
case 2367:
case 389:
case 2960:
case 827:
case 2992:
case 1783:
case 1279:
case 99:
case 1676:
case 2372:
case 4062:
case 3454:
case 2723:
case 4090:
case 3788:
case 1717:
case 3379:
case 443:
case 3372:
case 1776:
case 4069:
case 1272:
case 2111:
case 481:
case 2096:
case 3723:
case 2196:
case 180:
case 1617:
case 2788:
case 708:
case 2654:
case 2961:
case 998:
case 335:
case 3504:
case 2423:
case 2521:
case 1267:
case 289:
case 894:
case 1581:
case 1106:
case 2355:
case 125:
case 1938:
case 4091:
case 1006:
case 1483:
case 1837:
case 3367:
case 1146:
case 3010:
case 1046:
case 4058:
case 1949:
case 4016:
case 463:
case 1614:
case 1473:
case 3032:
case 246:
case 2048:
case 3478:
case 601:
case 552:
case 596:
case 707:
case 2008:
case 2936:
case 3426:
case 997:
case 2139:
case 353:
case 376:
case 2778:
case 266:
case 501:
case 3093:
case 511:
case 755:
case 774:
case 3193:
case 1198:
case 1673:
case 2222:
case 1414:
case 3547:
case 1051:
case 3757:
case 3382:
case 3665:
case 429:
case 1470:
case 2158:
case 1697:
case 2822:
case 2116:
case 2016:
case 19:
case 263:
case 373:
case 489:
case 2191:
case 3912:
case 1234:
case 2407:
case 3829:
case 3177:
case 3707:
case 1001:
case 1101:
case 1586:
case 1041:
case 3557:
case 3435:
case 281:
case 1141:
case 2169:
case 750:
case 3184:
case 356:
case 243:
case 672:
case 392:
case 3963:
case 1395:
case 229:
case 3174:
case 3523:
case 1975:
case 619:
case 2931:
case 3295:
case 1694:
case 1528:
case 1968:
case 2620:
case 1576:
case 421:
case 2345:
case 3930:
case 895:
case 3087:
case 1781:
case 2420:
case 1872:
case 2305:
case 120:
case 446:
case 4048:
case 1118:
case 1156:
case 3013:
case 2644:
case 3554:
case 2721:
case 1480:
case 2604:
case 736:
case 330:
case 3031:
case 1320:
case 3131:
case 1405:
case 2063:
case 2163:
case 3220:
case 117:
case 2495:
case 1304:
case 2:
case 3823:
case 2888:
case 1344:
case 3204:
case 349:
case 1152:
case 1828:
case 1645:
case 2913:
case 1876:
case 945:
case 2865:
case 3958:
case 251:
case 3119:
case 1734:
case 63:
case 2878:
case 386:
case 2112:
case 2397:
case 3515:
case 2826:
case 2012:
case 1271:
case 133:
case 2235:
case 4033:
case 2370:
case 2522:
case 1924:
case 118:
case 1564:
case 3247:
case 2962:
case 108:
case 202:
case 3529:
case 725:
case 2984:
case 4092:
case 3066:
case 965:
case 1582:
case 622:
case 3166:
case 1347:
case 1943:
case 2615:
case 848:
case 1903:
case 682:
case 3715:
case 3136:
case 361:
case 3908:
case 3807:
case 3036:
case 87:
case 940:
case 3847:
case 3729:
case 2993:
case 960:
case 1357:
case 2835:
case 341:
case 1286:
case 582:
case 2415:
case 3622:
case 479:
case 2092:
case 1228:
case 2317:
case 3595:
case 2192:
case 2060:
case 1276:
case 79:
case 91:
case 3844:
case 2821:
case 1881:
case 3996:
case 1537:
case 3328:
case 2383:
case 3911:
case 2288:
case 3223:
case 2133:
case 3820:
case 1042:
case 1102:
case 3161:
case 1002:
case 1479:
case 175:
case 1354:
case 847:
case 7:
case 1726:
case 2834:
case 3773:
case 485:
case 2151:
case 3686:
case 3289:
case 2051:
case 1657:
case 2098:
case 1222:
case 2673:
case 3143:
case 1535:
case 1457:
case 779:
case 3043:
case 331:
case 3103:
case 1039:
case 3597:
case 1008:
case 2315:
case 146:
case 4056:
case 4018:
case 420:
case 1148:
case 803:
case 3942:
case 1423:
case 1521:
case 2267:
case 1961:
case 1654:
case 2417:
case 2146:
case 702:
case 2046:
case 615:
case 3476:
case 956:
case 2938:
case 2006:
case 2837:
case 225:
case 3428:
case 3594:
case 657:
case 3783:
case 751:
case 3580:
case 1454:
case 1999:
case 1096:
case 4001:
case 2617:
case 1788:
case 3717:
case 2272:
case 899:
case 1111:
case 2056:
case 614:
case 2959:
case 2494:
case 1305:
case 604:
case 2156:
case 1345:
case 2872:
case 577:
case 1420:
case 1721:
case 3027:
case 2480:
case 3127:
case 3952:
case 3879:
case 1644:
case 1931:
case 2975:
case 1444:
case 285:
case 2237:
case 129:
case 2395:
case 500:
case 2968:
case 2576:
case 3794:
case 953:
case 2694:
case 339:
case 2528:
case 514:
case 1925:
case 3124:
case 3573:
case 398:
case 2001:
case 2586:
case 1565:
case 2101:
case 1647:
case 806:
case 2670:
case 143:
case 64:
case 1169:
case 1578:
case 56:
case 3770:
case 2864:
case 3889:
case 891:
case 3000:
case 66:
case 1091:
case 3100:
case 3797:
case 4006:
case 425:
case 3040:
case 2470:
case 29:
case 1058:
case 3140:
case 3053:
case 1735:
case 578:
case 2771:
case 2234:
case 1407:
case 2564:
case 1990:
case 3589:
case 1962:
case 3085:
case 1984:
case 2347:
case 3185:
case 2582:
case 102:
case 3814:
case 30:
case 31:
case 2940:
case 151:
case 2886:
case 450:
case 1865:
case 1826:
case 1112:
case 4042:
case 1235:
case 2271:
case 233:
case 1878:
case 1977:
case 4002:
case 2953:
case 270:
case 1888:
case 3321:
case 274:
case 2304:
case 1:
case 926:
case 766:
case 983:
case 2876:
case 2605:
case 3883:
case 3437:
case 3745:
case 2152:
case 436:
case 1394:
case 3280:
case 3637:
case 1974:
case 179:
case 3294:
case 340:
case 217:
case 961:
case 207:
case 344:
case 3505:
case 3894:
case 1133:
case 3545:
case 3755:
case 433:
case 2354:
case 3906:
case 365:
case 3109:
case 250:
case 2479:
case 3946:
case 275:
case 3149:
case 1910:
case 3388:
case 763:
case 2323:
case 2228:
case 1160:
case 1092:
case 3283:
case 1060:
case 3779:
case 1192:
case 1317:
case 3467:
case 1288:
case 3672:
case 587:
case 986:
case 1383:
case 408:
case 2871:
case 1835:
case 2357:
case 1629:
case 1373:
case 407:
case 1226:
case 862:
case 3365:
case 3998:
case 3326:
case 3273:
case 1415:
case 3789:
case 949:
case 2689:
case 3951:
case 1722:
case 2903:
case 4052:
case 2943:
case 1932:
case 1615:
case 3214:
case 2534:
case 2950:
case 455:
case 3482:
case 1314:
case 1429:
case 3943:
case 1422:
case 2214:
case 3534:
case 3903:
case 1136:
case 464:
case 161:
case 1036:
case 1908:
case 3950:
case 893:
case 1948:
case 460:
case 4059:
case 1729:
case 1386:
case 126:
case 2682:
case 3871:
case 872:
case 444:
case 336:
case 2664:
case 2326:
case 4075:
case 2998:
case 1622:
case 2273:
case 734:
case 3764:
case 183:
case 245:
case 1804:
case 3276:
case 3679:
case 595:
case 951:
case 1844:
case 3772:
case 1099:
case 3537:
case 3455:
case 809:
case 2467:
case 1911:
case 819:
case 2672:
case 2667:
case 2545:
case 2505:
case 3102:
case 2894:
case 3655:
case 3002:
case 1254:
case 1061:
case 792:
case 2049:
case 2946:
case 2149:
case 354:
case 2906:
case 2038:
case 3354:
case 2880:
case 2138:
case 2109:
case 2075:
case 3737:
case 1031:
case 2175:
case 3320:
case 3572:
case 3405:
case 2280:
case 2637:
case 1795:
case 753:
case 1220:
case 2579:
case 244:
case 590:
case 1854:
case 971:
case 594:
case 2294:
case 240:
case 694:
case 2159:
case 2956:
case 3304:
case 3281:
case 2918:
case 1823:
case 690:
case 2321:
case 3344:
case 1381:
case 3052:
case 149:
case 1204:
case 2555:
case 2883:
case 3645:
case 3876:
case 1991:
case 465:
case 3886:
case 4049:
case 1371:
case 20:
case 1958:
case 1857:
case 1019:
case 2873:
case 21:
case 2297:
case 959:
case 3953:
case 1515:
case 333:
case 1207:
case 1125:
case 1025:
case 2589:
case 632:
case 318:
case 735:
case 2901:
case 1529:
case 896:
case 3307:
case 2085:
case 52:
case 445:
case 1969:
case 852:
case 2185:
case 39:
case 2140:
case 67:
case 3864:
case 173:
case 2100:
case 568:
case 648:
case 1829:
case 882:
case 2053:
case 1707:
case 1190:
case 1062:
case 3101:
case 1162:
case 2471:
case 548:
case 3041:
case 1557:
case 2024:
case 2124:
case 2573:
case 1184:
case 156:
case 2770:
case 1963:
case 1523:
case 1174:
case 2780:
case 3694:
case 1295:
case 1337:
case 2855:
case 921:
case 3576:
case 2794:
case 1187:
case 3781:
case 1087:
case 3872:
case 2681:
case 726:
case 3018:
case 4050:
case 2879:
case 1113:
case 783:
case 431:
case 4043:
case 1013:
case 134:
case 2027:
case 1554:
case 2127:
case 2845:
case 3728:
case 2676:
case 963:
case 2279:
case 1960:
case 2805:
case 1992:
case 2628:
case 3683:
case 1688:
case 2580:
case 498:
case 786:
case 380:
case 2255:
case 135:
case 2902:
case 1895:
case 1504:
case 3417:
case 2942:
case 1488:
case 3267:
case 981:
case 3837:
case 3006:
case 3938:
case 2428:
case 4040:
case 943:
case 2476:
case 83:
case 2714:
case 2103:
case 4027:
case 929:
case 1132:
case 2143:
case 1215:
case 3614:
case 2150:
case 2050:
case 3315:
case 153:
case 1229:
case 2322:
case 497:
case 176:
case 1364:
case 1093:
case 3282:
case 55:
case 3098:
case 1507:
case 3414:
case 3673:
case 3151:
case 1382:
case 3264:
case 1411:
case 3242:
case 1496:
case 3955:
case 3202:
case 1261:
case 3706:
case 1831:
case 665:
case 2875:
case 2249:
case 42:
case 1587:
case 922:
case 2646:
case 1342:
case 2333:
case 3518:
case 2238:
case 1302:
case 3361:
case 1710:
case 295:
case 3852:
case 3128:
case 2183:
case 3028:
case 2406:
case 3399:
case 4070:
case 3176:
case 3076:
case 565:
case 2117:
case 1299:
case 1696:
case 2017:
case 1023:
case 93:
case 1611:
case 106:
case 843:
case 3450:
case 116:
case 1793:
case 4080:
case 3798:
case 3403:
case 3989:
case 1057:
case 3751:
case 1922:
case 2073:
case 2703:
case 2114:
case 2014:
case 1866:
case 1732:
case 2553:
case 3603:
case 1639:
case 1608:
case 2540:
case 191:
case 1825:
case 2500:
case 1648:
case 388:
case 3650:
case 863:
case 3624:
case 1790:
case 1107:
case 232:
case 1836:
case 1007:
case 3701:
case 3453:
case 3366:
case 2601:
case 328:
case 1047:
case 3741:
case 3551:
case 2070:
case 3440:
case 2170:
case 3325:
case 1458:
case 50:
case 1266:
case 3600:
case 61:
case 1691:
case 2550:
case 2740:
case 495:
case 22:
case 1616:
case 2197:
case 2700:
case 1219:
case 3319:
case 3071:
case 2441:
case 3424:
case 1532:
case 2753:
case 3171:
case 2656:
case 544:
case 3081:
case 290:
case 2259:
case 664:
case 3181:
case 294:
case 889:
case 3756:
case 1713:
case 3905:
case 1004:
case 1144:
case 2330:
case 3945:
case 982:
case 2849:
case 137:
case 1231:
case 3427:
case 1774:
case 2937:
case 2180:
case 1120:
case 327:
case 640:
case 2418:
case 2363:
case 2094:
case 2456:
case 644:
case 45:
case 314:
case 952:
case 3468:
case 3313:
case 2509:
case 2981:
case 3659:
case 1921:
case 1213:
case 3542:
case 3752:
case 2145:
case 2005:
case 1356:
case 2227:
case 1561:
case 3502:
case 2452:
case 4089:
case 3037:
case 3675:
case 1810:
case 3846:
case 1195:
case 3459:
case 3994:
case 911:
case 3374:
case 267:
case 791:
case 1290:
case 2369:
case 3384:
case 2850:
case 1412:
case 2224:
case 3685:
case 1284:
case 2803:
case 162:
case 1341:
case 4079:
case 1766:
case 3898:
case 3997:
case 3851:
case 3377:
case 3134:
case 3034:
case 2358:
case 2971:
case 598:
case 1893:
case 2253:
case 1129:
case 1029:
case 1926:
case 3182:
case 1293:
case 3082:
case 812:
case 1525:
case 2986:
case 1965:
case 531:
case 3064:
case 3164:
case 799:
case 4005:
case 2348:
case 909:
case 1884:
case 631:
case 2308:
case 1232:
case 2339:
case 4045:
case 1862:
case 2250:
case 25:
case 1519:
case 2824:
case 3841:
case 3332:
case 3702:
case 3067:
case 1761:
case 1633:
case 2642:
case 1346:
case 3206:
case 3638:
case 2749:
case 2559:
case 3649:
case 3246:
case 1874:
case 2709:
case 2738:
case 2976:
case 2079:
case 1813:
case 713:
case 2827:
case 1660:
case 1531:
case 2575:
case 3172:
case 1799:
case 1988:
case 1433:
case 2442:
case 3818:
case 2402:
case 879:
case 3827:
case 3928:
case 3976:
case 3079:
case 1760:
case 525:
case 2449:
case 3179:
case 257:
case 1792:
case 2917:
case 1563:
case 1461:
case 1699:
case 3402:
case 3575:
case 478:
case 2172:
case 2072:
case 1211:
case 2067:
case 2702:
case 849:
case 580:
case 2310:
case 2167:
case 3155:
case 2552:
case 1733:
case 2742:
case 3055:
case 1954:
case 1661:
case 2649:
case 722:
case 962:
case 2638:
case 2609:
case 3559:
case 3243:
case 2914:
case 886:
case 3339:
case 1512:
case 3348:
case 414:
case 111:
case 3824:
case 2841:
case 1239:
case 404:
case 101:
case 1208:
case 1343:
case 1636:
case 2801:
case 3250:
case 823:
case 1248:
case 1303:
case 2182:
case 2082:
case 152:
case 3986:
case 2393:
case 258:
case 2164:
case 1816:
case 69:
case 2851:
case 3200:
case 37:
case 415:
case 193:
case 26:
case 1619:
case 3240:
case 2898:
case 1712:
case 348:
case 3391:
case 4067:
case 1340:
case 3316:
case 3971:
case 278:
case 1907:
case 2241:
case 3224:
case 4072:
case 1848:
case 3369:
case 1419:
case 24:
case 826:
case 2970:
case 3785:
case 59:
case 1666:
case 1269:
case 3803:
case 2390:
case 172:
case 841:
case 1631:
case 1763:
case 2846:
case 782:
case 4064:
case 2980:
case 2806:
case 458:
case 1920:
case 2374:
case 520:
case 2668:
case 367:
case 1592:
case 3768:
case 2459:
case 1560:
case 524:
case 1896:
case 624:
case 210:
case 200:
case 2659:
case 1811:
case 3549:
case 3759:
case 2468:
case 3005:
case 3105:
case 2502:
case 3227:
case 3045:
case 2475:
case 2752:
case 1533:
case 3080:
case 1596:
case 3838:
case 3937:
case 4086:
case 1511:
case 1413:
case 3275:
case 1674:
case 3094:
case 3418:
case 617:
case 570:
case 991:
case 227:
case 701:
case 1375:
case 555:
case 655:
case 1687:
case 1230:
case 2756:
case 906:
case 3656:
case 3259:
case 390:
case 507:
case 796:
case 2081:
case 3618:
case 2506:
case 2181:
case 3330:
case 1121:
case 835:
case 3727:
case 1892:
case 1860:
case 1539:
case 3097:
case 1508:
case 1791:
case 2640:
case 32:
case 3312:
case 2600:
case 1548:
case 1716:
case 3740:
case 3550:
case 1484:
case 2319:
case 3934:
case 508:
case 1035:
case 13:
case 2424:
case 2071:
case 1212:
case 487:
case 3543:
case 518:
case 1135:
case 2171:
case 1462:
case 2653:
case 633:
case 2453:
case 3601:
case 228:
case 2366:
case 1662:
case 1385:
case 3724:
case 2551:
case 2741:
case 1477:
case 3641:
case 618:
case 2701:
case 608:
case 3285:
case 3070:
case 122:
case 2325:
case 3170:
case 719:
case 3451:
case 3114:
case 182:
case 3014:
case 1493:
case 1708:
case 1591:
case 2650:
case 1739:
case 3750:
case 1516:
case 1558:
case 427:
case 1812:
case 1126:
case 1078:
case 3982:
case 636:
case 2751:
case 2541:
case 3698:
case 3073:
case 1065:
case 3651:
case 3964:
case 913:
case 1410:
case 2979:
case 2128:
case 1260:
case 2028:
case 2399:
case 1830:
case 3972:
case 3117:
case 428:
case 3392:
case 1711:
case 3017:
case 3859:
case 3360:
case 1338:
case 834:
case 2242:
case 1349:
case 4071:
case 3967:
case 3868:
case 830:
case 1863:
case 2518:
case 772:
case 654:
case 675:
case 3238:
case 3209:
case 1610:
case 3875:
case 3249:
case 3333:
case 650:
case 666:
case 252:
case 3926:
case 3029:
case 1182:
case 3566:
case 296:
case 1082:
case 3978:
case 521:
case 2022:
case 1298:
case 3525:
case 2816:
case 2122:
case 1064:
case 1251:
case 1393:
case 409:
case 158:
case 2891:
case 419:
case 2350:
case 2869:
case 1914:
case 3232:
case 2512:
case 3115:
case 621:
case 3736:
case 2303:
case 2248:
case 3890:
case 1841:
case 3519:
case 211:
case 2636:
case 727:
case 201:
case 566:
case 2239:
case 1552:
case 2661:
case 968:
case 3492:
case 1609:
case 105:
case 1206:
case 1638:
case 3460:
case 689:
case 1246:
case 1649:
case 3210:
case 860:
case 1449:
case 2760:
case 840:
case 157:
case 589:
case 2792:
case 1438:
case 1409:
case 472:
case 3660:
case 97:
case 844:
case 3799:
case 2211:
case 3433:
case 3887:
case 2563:
case 1856:
case 2296:
case 948:
case 2699:
case 411:
case 114:
case 3287:
case 865:
case 401:
case 104:
case 110:
case 2896:
case 1659:
case 100:
case 1218:
case 1256:
case 3213:
case 1475:
case 2431:
case 3921:
case 529:
case 1387:
case 2533:
case 1752:
case 2904:
case 3663:
case 1806:
case 3731:
case 1980:
case 3599:
case 219:
case 3274:
case 2631:
case 629:
case 3195:
case 177:
case 2592:
case 788:
case 3095:
case 496:
case 2560:
case 1459:
case 452:
case 3430:
case 1668:
case 2947:
case 681:
case 1384:
case 2808:
case 787:
case 2625:
case 2269:
case 3284:
case 3301:
case 2666:
case 1362:
case 643:
case 1970:
case 2619:
case 3536:
case 1898:
case 543:
case 2466:
case 2291:
case 2353:
case 1377:
case 1851:
case 663:
case 1134:
case 2340:
case 3612:
case 2425:
case 1034:
case 2300:
case 3893:
case 3225:
case 3790:
case 1624:
case 3007:
case 1701:
case 3047:
case 1741:
case 1440:
case 3416:
case 3458:
case 715:
case 705:
case 2684:
case 995:
case 3266:
case 2716:
case 2758:
case 651:
case 3469:
case 502:
case 2484:
case 3691:
case 313:
case 2539:
case 3219:
case 303:
case 1653:
case 831:
case 2212:
case 2035:
case 23:
case 1424:
case 1319:
case 1171:
case 1081:
case 3352:
case 3899:
case 3510:
case 2230:
case 6:
case 3104:
case 579:
case 758:
case 1627:
case 1252:
case 3004:
case 2359:
case 3144:
case 2121:
case 2021:
case 2474:
case 2413:
case 337:
case 1427:
case 3774:
case 679:
case 4026:
case 3120:
case 1331:
case 1842:
case 2995:
case 3513:
case 559:
case 187:
case 778:
case 1202:
case 3054:
case 3261:
case 3496:
case 1706:
case 3831:
case 2610:
case 74:
case 3342:
case 1746:
case 1556:
case 3710:
case 3302:
case 1128:
case 2292:
case 1028:
case 1176:
case 839:
case 1076:
case 422:
case 3696:
case 3023:
case 2188:
case 2796:
case 3448:
case 2078:
case 2693:
case 3584:
case 316:
case 1450:
case 710:
case 2026:
case 3439:
case 994:
case 3408:
case 2929:
case 704:
case 3793:
case 2812:
case 2165:
case 1086:
case 1403:
case 2065:
case 1443:
case 3922:
case 282:
case 4021:
case 1336:
case 3866:
case 3577:
case 391:
case 2493:
case 3648:
case 2739:
case 777:
case 2708:
case 2591:
case 1650:
case 1885:
case 583:
case 2732:
case 2866:
case 1451:
case 382:
case 1703:
case 1014:
case 1498:
case 3632:
case 3915:
case 4044:
case 1500:
case 2648:
case 541:
case 767:
case 2236:
case 526:
case 1750:
case 2639:
case 927:
case 3748:
case 2825:
case 2439:
case 3929:
case 3126:
case 2793:
case 3812:
case 3078:
case 206:
case 1982:
case 561:
case 3569:
case 2584:
case 18:
case 1524:
case 3432:
case 2157:
case 1698:
case 3165:
case 1651:
case 683:
case 2590:
case 499:
case 1183:
case 77:
case 3088:
case 885:
case 3830:
case 3188:
case 2123:
case 1392:
case 2299:
case 1360:
case 4047:
case 1859:
case 768:
case 3338:
case 3309:
case 2496:
case 2411:
case 1868:
case 1967:
case 824:
case 3863:
case 2710:
case 1606:
case 1238:
case 2302:
case 3610:
case 413:
case 1333:
case 2587:
case 1937:
case 1809:
case 3263:
case 884:
case 4057:
case 549:
case 237:
case 2231:
case 3995:
case 406:
case 1418:
case 1363:
case 1094:
case 988:
case 2861:
case 1268:
case 75:
case 825:
case 1618:
case 2787:
case 1656:
case 2352:
case 649:
case 1330:
case 3121:
case 3613:
case 569:
case 2044:
case 3021:
case 3892:
case 3359:
case 1097:
case 3508:
case 1197:
case 2658:
case 1312:
case 203:
case 3758:
case 623:
case 3484:
case 2691:
case 1441:
case 3035:
case 1934:
case 3135:
case 2532:
case 4054:
case 3462:
case 3677:
case 2147:
case 3662:
case 2047:
case 1724:
case 2225:
case 2107:
case 2790:
case 2762:
case 586:
case 2836:
case 2007:
case 2491:
case 3769:
case 3466:
case 592:
case 3291:
case 242:
case 3258:
case 3619:
case 3216:
case 556:
case 2536:
case 2277:
case 1391:
case 148:
case 2612:
case 2935:
case 1316:
case 1358:
case 3625:
case 3947:
case 2290:
case 2725:
case 1850:
case 1369:
case 656:
case 3419:
case 2766:
case 573:
case 1785:
case 1843:
case 3666:
case 905:
case 372:
case 2810:
case 3631:
case 534:
case 2663:
case 1452:
case 2731:
case 1775:
case 3920:
case 4029:
case 2195:
case 3592:
case 1509:
case 1538:
case 875:
case 854:
case 3730:
case 2630:
case 3811:
case 1549:
case 850:
case 1652:
case 2463:
case 2318:
case 2561:
case 958:
case 1045:
case 3431:
case 2213:
case 3944:
case 4015:
case 2921:
case 78:
case 630:
case 1827:
case 3760:
case 96:
case 1079:
case 72:
case 1976:
case 1311:
case 462:
case 1568:
case 1179:
case 2813:
case 3461:
case 1402:
case 2799:
case 1575:
case 2531:
case 2988:
case 1442:
case 3923:
case 978:
case 2761:
case 732:
case 2633:
case 3733:
case 3954:
case 3499:
case 1055:
case 442:
case 3530:
case 855:
case 94:
case 2210:
case 870:
case 2492:
case 2460:
case 2232:
case 2015:
case 3512:
case 1348:
case 1203:
case 2884:
case 3208:
case 301:
case 3636:
case 3239:
case 977:
case 2862:
case 653:
case 3303:
case 1853:
case 2877:
case 2978:
case 396:
case 790:
case 676:
case 2351:
case 2293:
case 904:
case 2398:
case 794:
case 2029:
case 3436:
case 1089:
case 2965:
case 1986:
case 3891:
case 3022:
case 1840:
case 2525:
case 808:
case 3957:
case 3122:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747879202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,];
var gg_b = "1747879202/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
