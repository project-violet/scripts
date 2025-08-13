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
var o = 0;
switch (g) {
case 2865:
case 3405:
case 1903:
case 2529:
case 3797:
case 3066:
case 586:
case 3506:
case 466:
case 3644:
case 3860:
case 1590:
case 3156:
case 462:
case 3767:
case 1813:
case 1520:
case 1916:
case 1457:
case 2611:
case 1585:
case 2086:
case 2197:
case 2226:
case 2127:
case 3209:
case 3654:
case 2296:
case 427:
case 351:
case 3146:
case 2372:
case 2787:
case 1971:
case 2174:
case 1205:
case 2651:
case 1417:
case 2017:
case 3002:
case 3614:
case 310:
case 1892:
case 3171:
case 355:
case 899:
case 3031:
case 2582:
case 4039:
case 3103:
case 270:
case 354:
case 4004:
case 3553:
case 683:
case 1375:
case 3116:
case 1956:
case 783:
case 1934:
case 3519:
case 3905:
case 3271:
case 1398:
case 2717:
case 2523:
case 989:
case 1515:
case 2681:
case 3815:
case 320:
case 24:
case 3621:
case 200:
case 3691:
case 1883:
case 1330:
case 3117:
case 2552:
case 2071:
case 92:
case 259:
case 3203:
case 3097:
case 3186:
case 2624:
case 2734:
case 3157:
case 2747:
case 1849:
case 3726:
case 3636:
case 3067:
case 2046:
case 2840:
case 2664:
case 403:
case 3074:
case 2677:
case 2709:
case 1807:
case 2267:
case 2786:
case 3559:
case 2274:
case 3134:
case 1859:
case 1608:
case 2166:
case 3147:
case 842:
case 2850:
case 1555:
case 2297:
case 1487:
case 2126:
case 1456:
case 2227:
case 2196:
case 2087:
case 85:
case 12:
case 220:
case 3542:
case 3810:
case 3681:
case 1893:
case 581:
case 3003:
case 3900:
case 590:
case 2702:
case 1966:
case 258:
case 2271:
case 1863:
case 2203:
case 1852:
case 359:
case 189:
case 3339:
case 3552:
case 4079:
case 76:
case 787:
case 356:
case 2691:
case 186:
case 2731:
case 687:
case 2621:
case 2583:
case 2216:
case 2796:
case 3677:
case 1467:
case 848:
case 1812:
case 2074:
case 464:
case 3512:
case 584:
case 237:
case 2067:
case 3046:
case 3747:
case 1705:
case 3734:
case 2157:
case 57:
case 1902:
case 2097:
case 1550:
case 3196:
case 3087:
case 2684:
case 585:
case 2373:
case 3056:
case 3850:
case 465:
case 880:
case 1931:
case 3166:
case 3274:
case 3757:
case 2134:
case 2559:
case 423:
case 2246:
case 2187:
case 1426:
case 3569:
case 1869:
case 3746:
case 2286:
case 2767:
case 2156:
case 3895:
case 2820:
case 845:
case 3034:
case 2860:
case 2066:
case 3047:
case 2506:
case 3599:
case 1466:
case 1899:
case 3529:
case 333:
case 2797:
case 3865:
case 1318:
case 2838:
case 1200:
case 3756:
case 3057:
case 1580:
case 2209:
case 39:
case 3197:
case 588:
case 3226:
case 468:
case 3333:
case 3611:
case 1967:
case 2592:
case 1974:
case 2171:
case 2002:
case 1997:
case 11:
case 2562:
case 3017:
case 3651:
case 1927:
case 3202:
case 985:
case 2116:
case 254:
case 1882:
case 1431:
case 2103:
case 3925:
case 991:
case 2093:
case 1423:
case 1442:
case 326:
case 1308:
case 2415:
case 2042:
case 3410:
case 3722:
case 1015:
case 214:
case 541:
case 2516:
case 3995:
case 375:
case 1493:
case 2023:
case 2503:
case 2960:
case 1929:
case 4011:
case 1999:
case 322:
case 980:
case 3965:
case 3019:
case 1463:
case 3263:
case 3601:
case 209:
case 142:
case 2938:
case 202:
case 2219:
case 2052:
case 2394:
case 215:
case 2143:
case 250:
case 948:
case 1210:
case 367:
case 38:
case 2782:
case 146:
case 598:
case 4076:
case 3083:
case 888:
case 1867:
case 2445:
case 1412:
case 1790:
case 3440:
case 3321:
case 3713:
case 1897:
case 3706:
case 2799:
case 1180:
case 2639:
case 2729:
case 3169:
case 1195:
case 1125:
case 2556:
case 840:
case 1738:
case 2113:
case 1055:
case 2249:
case 3478:
case 1982:
case 3199:
case 1668:
case 1240:
case 3059:
case 2207:
case 4051:
case 3425:
case 1150:
case 2915:
case 1942:
case 2069:
case 1826:
case 3679:
case 1469:
case 3910:
case 2420:
case 3495:
case 3800:
case 2534:
case 885:
case 2547:
case 3566:
case 2029:
case 1675:
case 2805:
case 1500:
case 3465:
case 2159:
case 192:
case 87:
case 199:
case 3229:
case 4081:
case 3112:
case 2351:
case 1295:
case 998:
case 884:
case 2586:
case 196:
case 548:
case 697:
case 2149:
case 1225:
case 3759:
case 1085:
case 944:
case 319:
case 3092:
case 1912:
case 2793:
case 305:
case 3043:
case 2723:
case 3152:
case 594:
case 3282:
case 3022:
case 3502:
case 2517:
case 2183:
case 2672:
case 2253:
case 1110:
case 2955:
case 4077:
case 595:
case 3950:
case 3142:
case 2292:
case 1482:
case 3163:
case 439:
case 432:
case 1834:
case 2465:
case 3159:
case 3289:
case 996:
case 2749:
case 55:
case 1847:
case 1406:
case 3029:
case 3460:
case 2800:
case 4091:
case 1065:
case 3534:
case 3420:
case 1285:
case 2526:
case 542:
case 3341:
case 2596:
case 549:
case 81:
case 3509:
case 992:
case 3069:
case 4061:
case 3490:
case 2425:
case 1740:
case 1095:
case 1857:
case 1290:
case 3213:
case 1778:
case 3586:
case 2269:
case 1080:
case 3557:
case 1983:
case 1220:
case 3485:
case 2112:
case 1260:
case 3351:
case 3107:
case 2089:
case 2299:
case 2314:
case 324:
case 3253:
case 1462:
case 3183:
case 3763:
case 3517:
case 216:
case 1949:
case 3742:
case 1492:
case 205:
case 2043:
case 3311:
case 438:
case 2152:
case 1443:
case 145:
case 2354:
case 1907:
case 2531:
case 3082:
case 3119:
case 2163:
case 376:
case 1115:
case 2053:
case 2950:
case 363:
case 372:
case 4036:
case 2123:
case 3752:
case 379:
case 743:
case 2673:
case 2965:
case 2019:
case 1803:
case 2182:
case 222:
case 1906:
case 946:
case 229:
case 2762:
case 1419:
case 2384:
case 3516:
case 3283:
case 275:
case 2743:
case 2632:
case 2410:
case 2722:
case 949:
case 592:
case 1010:
case 226:
case 599:
case 2792:
case 3415:
case 1816:
case 2980:
case 2083:
case 3364:
case 1215:
case 3782:
case 2242:
case 180:
case 3377:
case 306:
case 2293:
case 4037:
case 3143:
case 2753:
case 309:
case 3938:
case 3324:
case 1962:
case 1688:
case 1185:
case 2361:
case 2706:
case 3189:
case 1992:
case 63:
case 311:
case 3012:
case 1725:
case 3604:
case 2440:
case 2574:
case 1846:
case 1407:
case 1078:
case 3207:
case 431:
case 2059:
case 1160:
case 1245:
case 1459:
case 1780:
case 4014:
case 882:
case 2199:
case 886:
case 693:
case 3556:
case 1856:
case 3455:
case 793:
case 1050:
case 1848:
case 651:
case 1244:
case 4015:
case 3548:
case 2708:
case 2411:
case 1657:
case 1011:
case 934:
case 803:
case 2879:
case 1184:
case 449:
case 3558:
case 1382:
case 3108:
case 2476:
case 1647:
case 3570:
case 45:
case 3444:
case 1870:
case 2575:
case 1794:
case 446:
case 1076:
case 3437:
case 1214:
case 1399:
case 4045:
case 153:
case 1329:
case 3984:
case 3325:
case 2964:
case 3380:
case 655:
case 1781:
case 4055:
case 755:
case 1617:
case 2451:
case 710:
case 1191:
case 1121:
case 3414:
case 4020:
case 26:
case 3421:
case 534:
case 2911:
case 1312:
case 3954:
case 1741:
case 2481:
case 1291:
case 4038:
case 1081:
case 658:
case 1261:
case 2873:
case 4085:
case 1687:
case 1656:
case 3484:
case 1137:
case 2941:
case 862:
case 2315:
case 1323:
case 1835:
case 3804:
case 2464:
case 3208:
case 637:
case 1077:
case 938:
case 1064:
case 3535:
case 2951:
case 2494:
case 3839:
case 139:
case 3588:
case 827:
case 1539:
case 1352:
case 656:
case 1021:
case 1281:
case 157:
case 3345:
case 1151:
case 2340:
case 36:
case 64:
case 387:
case 2421:
case 756:
case 2461:
case 659:
case 3801:
case 1349:
case 752:
case 1061:
case 4095:
case 1501:
case 2944:
case 4080:
case 2350:
case 1714:
case 3976:
case 1359:
case 3832:
case 3315:
case 932:
case 1868:
case 3568:
case 2310:
case 1754:
case 939:
case 1294:
case 1319:
case 807:
case 1898:
case 445:
case 3598:
case 1828:
case 936:
case 3424:
case 813:
case 1697:
case 2839:
case 1627:
case 3494:
case 1383:
case 1036:
case 868:
case 1667:
case 3477:
case 2436:
case 2208:
case 444:
case 3530:
case 79:
case 2454:
case 1322:
case 2991:
case 1194:
case 1343:
case 135:
case 3411:
case 1124:
case 448:
case 1392:
case 877:
case 1276:
case 1164:
case 4010:
case 1784:
case 1177:
case 560:
case 134:
case 1353:
case 3600:
case 2108:
case 3476:
case 823:
case 1736:
case 1211:
case 2558:
case 491:
case 3879:
case 3981:
case 861:
case 3390:
case 539:
case 1791:
case 3441:
case 2395:
case 2984:
case 3360:
case 536:
case 1761:
case 1306:
case 2365:
case 3924:
case 4078:
case 1389:
case 2414:
case 1014:
case 3451:
case 1241:
case 2936:
case 3964:
case 2380:
case 494:
case 4050:
case 767:
case 78:
case 1346:
case 4000:
case 2821:
case 68:
case 913:
case 162:
case 3718:
case 169:
case 722:
case 907:
case 1772:
case 708:
case 608:
case 1581:
case 2615:
case 1642:
case 626:
case 3979:
case 481:
case 726:
case 3432:
case 3610:
case 839:
case 3175:
case 2068:
case 2508:
case 523:
case 3230:
case 2170:
case 2158:
case 771:
case 1498:
case 2028:
case 2288:
case 2655:
case 2098:
case 3650:
case 860:
case 671:
case 2775:
case 1594:
case 3088:
case 1371:
case 577:
case 3770:
case 3894:
case 1430:
case 1612:
case 1004:
case 1564:
case 3877:
case 2030:
case 3864:
case 2933:
case 2404:
case 3640:
case 1279:
case 2854:
case 853:
case 2685:
case 1511:
case 3680:
case 2768:
case 568:
case 2728:
case 2638:
case 3275:
case 2135:
case 601:
case 2270:
case 2798:
case 513:
case 3788:
case 2248:
case 1629:
case 1739:
case 2075:
case 3973:
case 3665:
case 9:
case 961:
case 3058:
case 3735:
case 3695:
case 2620:
case 1173:
case 1682:
case 1541:
case 1968:
case 3018:
case 704:
case 1928:
case 1334:
case 2218:
case 2814:
case 117:
case 778:
case 678:
case 716:
case 2472:
case 964:
case 619:
case 1101:
case 719:
case 612:
case 1357:
case 605:
case 2904:
case 2433:
case 1302:
case 3798:
case 42:
case 2130:
case 161:
case 2275:
case 3728:
case 2048:
case 3638:
case 1:
case 2811:
case 3188:
case 2479:
case 562:
case 2695:
case 3730:
case 3620:
case 831:
case 3690:
case 1331:
case 569:
case 2128:
case 1606:
case 1537:
case 2665:
case 1544:
case 2070:
case 3075:
case 3248:
case 2788:
case 566:
case 2305:
case 1366:
case 1701:
case 679:
case 763:
case 1653:
case 772:
case 835:
case 3300:
case 1396:
case 776:
case 917:
case 177:
case 1233:
case 725:
case 1935:
case 3904:
case 1622:
case 1732:
case 165:
case 2851:
case 1662:
case 724:
case 1561:
case 1948:
case 709:
case 1327:
case 2718:
case 715:
case 927:
case 2401:
case 3861:
case 702:
case 1397:
case 706:
case 1374:
case 1683:
case 606:
case 1172:
case 1367:
case 107:
case 3891:
case 650:
case 1958:
case 113:
case 3615:
case 962:
case 966:
case 1073:
case 1918:
case 3098:
case 930:
case 3028:
case 3288:
case 857:
case 3884:
case 2230:
case 3170:
case 3068:
case 517:
case 3508:
case 1808:
case 1659:
case 2864:
case 2640:
case 3933:
case 611:
case 2268:
case 33:
case 3836:
case 2877:
case 3148:
case 2035:
case 3645:
case 3972:
case 1488:
case 3439:
case 2088:
case 1649:
case 2824:
case 2714:
case 1944:
case 3751:
case 2141:
case 1937:
case 4089:
case 2532:
case 401:
case 3221:
case 360:
case 70:
case 640:
case 2091:
case 3114:
case 1340:
case 2281:
case 60:
case 1491:
case 2307:
case 2744:
case 2737:
case 3888:
case 339:
case 1839:
case 2627:
case 3539:
case 332:
case 1588:
case 1914:
case 2111:
case 3094:
case 1804:
case 2674:
case 336:
case 1436:
case 2383:
case 3064:
case 1535:
case 4062:
case 416:
case 2277:
case 2754:
case 3137:
case 2868:
case 2176:
case 3236:
case 3408:
case 2264:
case 3711:
case 2084:
case 2224:
case 419:
case 847:
case 405:
case 412:
case 3647:
case 2037:
case 1108:
case 3724:
case 1605:
case 1570:
case 3794:
case 3870:
case 1444:
case 56:
case 587:
case 1437:
case 3076:
case 2353:
case 234:
case 3254:
case 3777:
case 3858:
case 2211:
case 1558:
case 3382:
case 2054:
case 3657:
case 235:
case 2343:
case 422:
case 2322:
case 1991:
case 3237:
case 426:
case 781:
case 681:
case 3136:
case 1548:
case 475:
case 3191:
case 1872:
case 2389:
case 1414:
case 231:
case 1833:
case 1936:
case 2241:
case 1395:
case 2791:
case 2313:
case 2631:
case 67:
case 4049:
case 2306:
case 784:
case 3399:
case 897:
case 2761:
case 183:
case 2181:
case 684:
case 1984:
case 3626:
case 2382:
case 3579:
case 415:
case 3211:
case 402:
case 428:
case 2184:
case 2609:
case 3696:
case 2076:
case 1575:
case 2870:
case 2724:
case 406:
case 450:
case 3666:
case 1476:
case 414:
case 4093:
case 3177:
case 2848:
case 2011:
case 335:
case 3343:
case 2657:
case 3124:
case 3392:
case 1708:
case 2781:
case 2161:
case 1964:
case 331:
case 1924:
case 2121:
case 61:
case 2191:
case 3014:
case 71:
case 1994:
case 3251:
case 4012:
case 253:
case 411:
case 3306:
case 2399:
case 2214:
case 2818:
case 3631:
case 3721:
case 3791:
case 1320:
case 62:
case 2221:
case 2081:
case 3359:
case 2291:
case 1832:
case 72:
case 1355:
case 2603:
case 1873:
case 3714:
case 1976:
case 682:
case 4069:
case 689:
case 782:
case 3061:
case 357:
case 2741:
case 3281:
case 3307:
case 2312:
case 260:
case 3091:
case 187:
case 893:
case 3383:
case 472:
case 3830:
case 2504:
case 1477:
case 583:
case 3036:
case 3111:
case 4082:
case 2352:
case 232:
case 2776:
case 2888:
case 3737:
case 3627:
case 2024:
case 1494:
case 1951:
case 3294:
case 338:
case 3898:
case 1598:
case 3084:
case 2363:
case 2323:
case 2711:
case 3176:
case 3868:
case 2408:
case 2236:
case 3754:
case 1568:
case 2137:
case 2144:
case 2393:
case 2331:
case 2458:
case 1695:
case 1198:
case 3669:
case 3739:
case 1665:
case 2544:
case 1973:
case 1070:
case 2537:
case 1876:
case 1168:
case 2689:
case 261:
case 3317:
case 699:
case 792:
case 3279:
case 796:
case 3511:
case 1680:
case 696:
case 197:
case 3033:
case 2732:
case 593:
case 2622:
case 3101:
case 3357:
case 3551:
case 223:
case 317:
case 2662:
case 1851:
case 4067:
case 3998:
case 264:
case 303:
case 3132:
case 2701:
case 4074:
case 3347:
case 3334:
case 1305:
case 2233:
case 277:
case 3541:
case 2326:
case 3682:
case 2396:
case 4027:
case 3642:
case 451:
case 2032:
case 3581:
case 213:
case 327:
case 3733:
case 3623:
case 3693:
case 1881:
case 1432:
case 1979:
case 3772:
case 3356:
case 2073:
case 2619:
case 3201:
case 1401:
case 362:
case 2133:
case 3273:
case 742:
case 2948:
case 2561:
case 369:
case 207:
case 2367:
case 746:
case 4066:
case 147:
case 366:
case 1758:
case 3564:
case 3612:
case 3430:
case 2607:
case 543:
case 1877:
case 993:
case 2435:
case 1640:
case 1864:
case 3594:
case 3371:
case 1088:
case 1748:
case 455:
case 1650:
case 2584:
case 3303:
case 2659:
case 2204:
case 2808:
case 3468:
case 1230:
case 410:
case 2387:
case 4057:
case 2663:
case 2975:
case 2356:
case 3073:
case 3619:
case 49:
case 2772:
case 368:
case 2693:
case 2733:
case 1118:
case 227:
case 1615:
case 1821:
case 680:
case 3374:
case 433:
case 3683:
case 307:
case 2232:
case 791:
case 691:
case 3133:
case 2273:
case 1861:
case 262:
case 1439:
case 3488:
case 2594:
case 795:
case 1030:
case 1404:
case 1933:
case 1836:
case 2577:
case 13:
case 230:
case 3607:
case 3779:
case 3536:
case 1170:
case 1068:
case 2316:
case 3918:
case 3584:
case 2303:
case 794:
case 86:
case 1098:
case 193:
case 887:
case 1288:
case 3239:
case 1158:
case 1884:
case 3537:
case 997:
case 2699:
case 798:
case 3606:
case 2475:
case 3544:
case 44:
case 1075:
case 698:
case 1837:
case 2576:
case 547:
case 2669:
case 1620:
case 452:
case 1690:
case 2704:
case 3331:
case 3613:
case 3554:
case 1768:
case 3:
case 1685:
case 2511:
case 1854:
case 1188:
case 3448:
case 1798:
case 741:
case 2317:
case 361:
case 4016:
case 3689:
case 1472:
case 3988:
case 2072:
case 1814:
case 323:
case 217:
case 3773:
case 1433:
case 3935:
case 2357:
case 2101:
case 4056:
case 3622:
case 645:
case 2033:
case 3396:
case 2309:
case 377:
case 2968:
case 3326:
case 3233:
case 2173:
case 2334:
case 143:
case 744:
case 2347:
case 644:
case 3653:
case 203:
case 4058:
case 289:
case 1661:
case 3471:
case 282:
case 1203:
case 2852:
case 3957:
case 1583:
case 2335:
case 1216:
case 1621:
case 1731:
case 660:
case 1691:
case 3986:
case 533:
case 4070:
case 1117:
case 3330:
case 952:
case 2996:
case 120:
case 1815:
case 2510:
case 22:
case 3416:
case 1905:
case 1519:
case 2863:
case 3328:
case 956:
case 59:
case 900:
case 3398:
case 497:
case 88:
case 1373:
case 2550:
case 874:
case 1559:
case 3105:
case 1067:
case 808:
case 4018:
case 822:
case 2474:
case 3545:
case 2540:
case 2467:
case 829:
case 2902:
case 2427:
case 570:
case 3700:
case 3917:
case 1157:
case 2705:
case 2497:
case 1027:
case 3849:
case 151:
case 3971:
case 1247:
case 1838:
case 3889:
case 3205:
case 381:
case 3457:
case 933:
case 804:
case 1654:
case 2580:
case 1885:
case 1820:
case 878:
case 1026:
case 1187:
case 3813:
case 1774:
case 2595:
case 1890:
case 3916:
case 3434:
case 3000:
case 805:
case 1405:
case 1797:
case 812:
case 99:
case 3447:
case 2466:
case 1506:
case 819:
case 1860:
case 2565:
case 753:
case 1553:
case 154:
case 3987:
case 3375:
case 3956:
case 3853:
case 1379:
case 1031:
case 2358:
case 1103:
case 37:
case 1522:
case 1543:
case 155:
case 2974:
case 3843:
case 3822:
case 2967:
case 2348:
case 2927:
case 110:
case 1002:
case 970:
case 21:
case 1614:
case 635:
case 1057:
case 1296:
case 1197:
case 863:
case 1333:
case 1611:
case 1880:
case 735:
case 2205:
case 281:
case 1787:
case 1266:
case 2889:
case 1372:
case 520:
case 818:
case 825:
case 1756:
case 3200:
case 1034:
case 3565:
case 3005:
case 634:
case 1599:
case 3829:
case 133:
case 1529:
case 2434:
case 3595:
case 1825:
case 1569:
case 2813:
case 824:
case 3869:
case 3525:
case 951:
case 27:
case 3882:
case 170:
case 3431:
case 3358:
case 1582:
case 1202:
case 2853:
case 4030:
case 43:
case 3370:
case 4068:
case 2417:
case 731:
case 1651:
case 3348:
case 3967:
case 285:
case 2843:
case 493:
case 1716:
case 2892:
case 2883:
case 2330:
case 20:
case 2986:
case 100:
case 657:
case 958:
case 757:
case 4075:
case 2957:
case 3852:
case 159:
case 1071:
case 389:
case 2398:
case 2947:
case 3966:
case 2328:
case 3863:
case 3823:
case 2416:
case 3510:
case 32:
case 2368:
case 2515:
case 2909:
case 1542:
case 1523:
case 1016:
case 809:
case 2105:
case 2859:
case 815:
case 1786:
case 828:
case 1267:
case 3550:
case 1087:
case 1227:
case 555:
case 1126:
case 937:
case 1297:
case 3497:
case 2849:
case 1624:
case 1694:
case 814:
case 2807:
case 2446:
case 554:
case 1677:
case 1709:
case 3540:
case 443:
case 3812:
case 3474:
case 1046:
case 3295:
case 2886:
case 396:
case 2290:
case 2857:
case 3952:
case 3265:
case 1314:
case 2489:
case 514:
case 1089:
case 2648:
case 1229:
case 2260:
case 101:
case 2145:
case 1566:
case 298:
case 3866:
case 3178:
case 2238:
case 1749:
case 1465:
case 3060:
case 2834:
case 855:
case 3675:
case 3280:
case 2095:
case 3020:
case 515:
case 3923:
case 3826:
case 810:
case 502:
case 1013:
case 3896:
case 2809:
case 3469:
case 509:
case 1707:
case 1495:
case 2285:
case 3090:
case 1978:
case 3831:
case 1783:
case 851:
case 924:
case 1337:
case 244:
case 603:
case 511:
case 1344:
case 1193:
case 2618:
case 703:
case 104:
case 2949:
case 976:
case 617:
case 925:
case 1719:
case 2817:
case 178:
case 717:
case 1092:
case 2422:
case 979:
case 2710:
case 119:
case 3912:
case 1152:
case 105:
case 1043:
case 1940:
case 2492:
case 1022:
case 1282:
case 521:
case 2483:
case 1293:
case 35:
case 280:
case 666:
case 18:
case 1336:
case 1980:
case 1223:
case 291:
case 2871:
case 673:
case 769:
case 349:
case 174:
case 2419:
case 906:
case 108:
case 837:
case 1182:
case 122:
case 2906:
case 1252:
case 1019:
case 3463:
case 2803:
case 1673:
case 2816:
case 1925:
case 627:
case 1792:
case 3308:
case 3442:
case 928:
case 1632:
case 3493:
case 175:
case 3668:
case 2459:
case 2780:
case 3240:
case 3165:
case 2245:
case 1059:
case 1212:
case 2078:
case 3698:
case 2953:
case 294:
case 2050:
case 1169:
case 3195:
case 1450:
case 2887:
case 3055:
case 820:
case 1527:
case 525:
case 2255:
case 2688:
case 576:
case 2962:
case 563:
case 3867:
case 2846:
case 2407:
case 1391:
case 1574:
case 2795:
case 3412:
case 2943:
case 2040:
case 1440:
case 2635:
case 3874:
case 3278:
case 1321:
case 579:
case 1394:
case 1143:
case 1219:
case 1052:
case 975:
case 1122:
case 1938:
case 242:
case 3989:
case 1364:
case 1782:
case 380:
case 3215:
case 25:
case 1377:
case 607:
case 1162:
case 150:
case 1985:
case 1023:
case 1283:
case 2015:
case 1042:
case 974:
case 2308:
case 3913:
case 3816:
case 1093:
case 1990:
case 2423:
case 501:
case 3803:
case 967:
case 768:
case 3906:
case 3419:
case 1063:
case 1503:
case 84:
case 2628:
case 519:
case 3887:
case 2055:
case 1113:
case 2125:
case 2195:
case 856:
case 3953:
case 394:
case 512:
case 516:
case 852:
case 1207:
case 3160:
case 2240:
case 2165:
case 2668:
case 859:
case 578:
case 1106:
case 3992:
case 1259:
case 1604:
case 2790:
case 2045:
case 3795:
case 2630:
case 395:
case 3040:
case 1445:
case 2867:
case 3846:
case 3407:
case 3185:
case 2180:
case 1799:
case 2250:
case 2897:
case 3145:
case 761:
case 526:
case 3648:
case 299:
case 3489:
case 870:
case 1206:
case 1438:
case 661:
case 2952:
case 2140:
case 2225:
case 6:
case 1149:
case 1586:
case 3886:
case 508:
case 3220:
case 1485:
case 3983:
case 2295:
case 1557:
case 3025:
case 1712:
case 1420:
case 3285:
case 3658:
case 2993:
case 2090:
case 2896:
case 2942:
case 3413:
case 574:
case 1069:
case 2826:
case 2150:
case 1915:
case 3740:
case 2280:
case 3095:
case 1805:
case 2060:
case 121:
case 2675:
case 2499:
case 1029:
case 3847:
case 567:
case 58:
case 1547:
case 3065:
case 1534:
case 1460:
case 3505:
case 1376:
case 912:
case 3115:
case 905:
case 2110:
case 1955:
case 978:
case 118:
case 1243:
case 125:
case 1119:
case 2831:
case 176:
case 916:
case 2715:
case 833:
case 904:
case 1742:
case 665:
case 3422:
case 3710:
case 723:
case 1183:
case 3817:
case 4008:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755082801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,];
var gg_b = "1755082801/";

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
