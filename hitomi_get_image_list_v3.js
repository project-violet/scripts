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
case 155:
case 735:
case 1320:
case 30:
case 2191:
case 3060:
case 45:
case 1283:
case 3918:
case 3622:
case 758:
case 577:
case 1397:
case 3695:
case 1094:
case 3749:
case 398:
case 1318:
case 1187:
case 3666:
case 3551:
case 4051:
case 3282:
case 1623:
case 1839:
case 3381:
case 2997:
case 3920:
case 928:
case 662:
case 1539:
case 1719:
case 3348:
case 598:
case 3024:
case 1625:
case 3327:
case 3482:
case 89:
case 3390:
case 3851:
case 3169:
case 3964:
case 48:
case 808:
case 3693:
case 628:
case 1483:
case 760:
case 1990:
case 2180:
case 1948:
case 2693:
case 50:
case 761:
case 312:
case 377:
case 686:
case 2041:
case 1472:
case 1144:
case 1865:
case 2781:
case 1430:
case 2349:
case 3781:
case 4026:
case 3526:
case 891:
case 3133:
case 3473:
case 2406:
case 3416:
case 481:
case 1454:
case 1720:
case 1170:
case 2275:
case 76:
case 178:
case 2416:
case 1949:
case 2473:
case 3406:
case 468:
case 537:
case 2237:
case 1797:
case 480:
case 104:
case 3971:
case 2919:
case 2437:
case 3909:
case 834:
case 450:
case 2971:
case 3919:
case 3862:
case 3475:
case 986:
case 200:
case 451:
case 301:
case 337:
case 442:
case 1001:
case 1319:
case 197:
case 2631:
case 3826:
case 2790:
case 3114:
case 656:
case 2748:
case 1863:
case 1838:
case 1011:
case 1764:
case 3790:
case 2177:
case 2826:
case 3631:
case 3429:
case 56:
case 2396:
case 737:
case 1461:
case 1965:
case 3093:
case 2429:
case 880:
case 696:
case 346:
case 1996:
case 3365:
case 1299:
case 2519:
case 4009:
case 3571:
case 4071:
case 1849:
case 822:
case 2509:
case 3624:
case 3739:
case 996:
case 1326:
case 546:
case 2809:
case 3819:
case 226:
case 2066:
case 1751:
case 1678:
case 2962:
case 3066:
case 3338:
case 3689:
case 3363:
case 326:
case 3809:
case 61:
case 3484:
case 3660:
case 3022:
case 902:
case 1963:
case 2229:
case 1938:
case 187:
case 851:
case 3926:
case 873:
case 2660:
case 2484:
case 1362:
case 3229:
case 610:
case 3200:
case 2210:
case 4064:
case 1105:
case 2339:
case 3818:
case 3031:
case 1440:
case 1679:
case 1527:
case 1601:
case 2143:
case 611:
case 3210:
case 2200:
case 1548:
case 2031:
case 2818:
case 3339:
case 3820:
case 1236:
case 260:
case 1417:
case 777:
case 1150:
case 3247:
case 3796:
case 2820:
case 3897:
case 2453:
case 85:
case 388:
case 3228:
case 360:
case 1207:
case 2102:
case 70:
case 3112:
case 3428:
case 408:
case 235:
case 358:
case 911:
case 561:
case 2455:
case 3447:
case 4020:
case 2951:
case 2428:
case 833:
case 2112:
case 1217:
case 910:
case 1762:
case 2447:
case 3253:
case 1059:
case 1827:
case 1726:
case 1581:
case 195:
case 3508:
case 4008:
case 2518:
case 2145:
case 2738:
case 1103:
case 1890:
case 2641:
case 3864:
case 3145:
case 3738:
case 2157:
case 3518:
case 3400:
case 2508:
case 2279:
case 215:
case 2201:
case 1880:
case 907:
case 1945:
case 3312:
case 2302:
case 3072:
case 2913:
case 694:
case 2976:
case 4:
case 3903:
case 1957:
case 3201:
case 2211:
case 2903:
case 2072:
case 1288:
case 182:
case 2312:
case 1655:
case 847:
case 3054:
case 2587:
case 259:
case 1016:
case 665:
case 524:
case 3345:
case 4087:
case 3587:
case 2054:
case 67:
case 344:
case 1151:
case 120:
case 1303:
case 1912:
case 3887:
case 4021:
case 3607:
case 3343:
case 389:
case 2607:
case 2786:
case 544:
case 1315:
case 994:
case 3139:
case 1653:
case 2046:
case 3942:
case 1037:
case 289:
case 607:
case 827:
case 631:
case 1334:
case 2905:
case 1891:
case 1488:
case 1241:
case 1350:
case 3934:
case 3479:
case 152:
case 515:
case 965:
case 2915:
case 3640:
case 2698:
case 3856:
case 3757:
case 723:
case 2138:
case 683:
case 1877:
case 1533:
case 1713:
case 1568:
case 1126:
case 3138:
case 3494:
case 2856:
case 1703:
case 4044:
case 414:
case 2702:
case 4032:
case 2570:
case 3478:
case 3532:
case 2267:
case 4070:
case 2712:
case 3870:
case 2832:
case 93:
case 2467:
case 1742:
case 476:
case 166:
case 2870:
case 3832:
case 2661:
case 1705:
case 3083:
case 1260:
case 869:
case 3743:
case 3294:
case 670:
case 2386:
case 1535:
case 425:
case 2083:
case 3661:
case 1577:
case 743:
case 2844:
case 671:
case 1734:
case 2743:
case 2294:
case 2259:
case 905:
case 1904:
case 3052:
case 3780:
case 1914:
case 2040:
case 372:
case 2780:
case 3017:
case 3074:
case 3314:
case 343:
case 1637:
case 667:
case 3335:
case 2314:
case 2074:
case 1171:
case 1721:
case 1109:
case 243:
case 3646:
case 2333:
case 2036:
case 2654:
case 2368:
case 3932:
case 1028:
case 1787:
case 1055:
case 323:
case 1673:
case 605:
case 1616:
case 1933:
case 1010:
case 1968:
case 1370:
case 3630:
case 517:
case 1332:
case 967:
case 1000:
case 3672:
case 2630:
case 876:
case 2459:
case 4034:
case 3777:
case 1857:
case 1029:
case 3515:
case 447:
case 3735:
case 1756:
case 2777:
case 629:
case 2714:
case 1222:
case 3190:
case 3683:
case 1164:
case 1493:
case 2515:
case 3505:
case 1845:
case 8:
case 2542:
case 1812:
case 106:
case 3380:
case 1266:
case 2492:
case 3223:
case 413:
case 1682:
case 2380:
case 954:
case 2258:
case 1120:
case 3292:
case 929:
case 3850:
case 2099:
case 2987:
case 3225:
case 3258:
case 2842:
case 2391:
case 836:
case 4003:
case 3503:
case 1843:
case 2834:
case 1084:
case 2815:
case 1387:
case 1545:
case 2503:
case 3834:
case 3576:
case 3181:
case 4076:
case 427:
case 3733:
case 1991:
case 1108:
case 3713:
case 3568:
case 2460:
case 3126:
case 4068:
case 3814:
case 2804:
case 1757:
case 1856:
case 52:
case 3804:
case 1544:
case 2533:
case 3703:
case 34:
case 3684:
case 2568:
case 828:
case 2835:
case 1494:
case 1163:
case 779:
case 1138:
case 1745:
case 1699:
case 1478:
case 1532:
case 2224:
case 2162:
case 1702:
case 566:
case 3224:
case 2489:
case 862:
case 3162:
case 266:
case 3742:
case 908:
case 2986:
case 3424:
case 3289:
case 2742:
case 1278:
case 2750:
case 2629:
case 3504:
case 2833:
case 2514:
case 4004:
case 1165:
case 1743:
case 2734:
case 2868:
case 1386:
case 2535:
case 32:
case 2715:
case 3577:
case 3629:
case 4014:
case 22:
case 4035:
case 1556:
case 2260:
case 3535:
case 718:
case 1312:
case 2610:
case 3945:
case 41:
case 2591:
case 1211:
case 3880:
case 3441:
case 1030:
case 3288:
case 2945:
case 3591:
case 3610:
case 4091:
case 3313:
case 2303:
case 2151:
case 3073:
case 2912:
case 2006:
case 1357:
case 3655:
case 2647:
case 2016:
case 159:
case 3151:
case 2313:
case 221:
case 3869:
case 144:
case 2655:
case 541:
case 1821:
case 3647:
case 991:
case 739:
case 1345:
case 1587:
case 189:
case 2037:
case 1046:
case 1343:
case 3569:
case 1786:
case 1607:
case 2075:
case 1521:
case 3305:
case 496:
case 2315:
case 520:
case 3334:
case 3653:
case 3037:
case 3315:
case 3075:
case 240:
case 1950:
case 1617:
case 1674:
case 3342:
case 1934:
case 1479:
case 1401:
case 3488:
case 3350:
case 934:
case 1915:
case 1652:
case 252:
case 3943:
case 582:
case 1411:
case 2891:
case 1640:
case 1905:
case 2488:
case 886:
case 2980:
case 2295:
case 1735:
case 3857:
case 3029:
case 2493:
case 2164:
case 1061:
case 2222:
case 741:
case 1876:
case 2543:
case 651:
case 1813:
case 3493:
case 2857:
case 1505:
case 3845:
case 2756:
case 3295:
case 292:
case 1369:
case 4043:
case 3222:
case 1190:
case 3266:
case 1458:
case 456:
case 3812:
case 980:
case 1492:
case 968:
case 1550:
case 642:
case 518:
case 2266:
case 2969:
case 1223:
case 2812:
case 3802:
case 1425:
case 1542:
case 1225:
case 1850:
case 218:
case 1423:
case 2466:
case 3120:
case 2732:
case 2197:
case 1292:
case 4002:
case 802:
case 973:
case 318:
case 486:
case 1987:
case 199:
case 2502:
case 3512:
case 2770:
case 3197:
case 3732:
case 4045:
case 1805:
case 3545:
case 3084:
case 2108:
case 896:
case 1503:
case 3843:
case 592:
case 668:
case 3293:
case 3744:
case 3108:
case 2084:
case 721:
case 3991:
case 2545:
case 1815:
case 2387:
case 2293:
case 239:
case 681:
case 2843:
case 1768:
case 2495:
case 1181:
case 2935:
case 766:
case 3904:
case 3431:
case 462:
case 1098:
case 172:
case 2431:
case 3914:
case 3977:
case 2904:
case 95:
case 3356:
case 3053:
case 633:
case 3675:
case 1017:
case 1074:
case 2053:
case 428:
case 3171:
case 4086:
case 2119:
case 2356:
case 68:
case 3109:
case 72:
case 1007:
case 3028:
case 2673:
case 1149:
case 448:
case 379:
case 2886:
case 2344:
case 1791:
case 1459:
case 1630:
case 2332:
case 811:
case 2933:
case 2370:
case 2968:
case 3144:
case 947:
case 3538:
case 3472:
case 2430:
case 2708:
case 3718:
case 3563:
case 1133:
case 2144:
case 1168:
case 2718:
case 2563:
case 2472:
case 3430:
case 627:
case 1237:
case 3720:
case 2246:
case 204:
case 1562:
case 1473:
case 787:
case 278:
case 3246:
case 3797:
case 2170:
case 378:
case 913:
case 3949:
case 449:
case 3596:
case 100:
case 1206:
case 429:
case 1971:
case 3446:
case 1909:
case 1475:
case 504:
case 3254:
case 2446:
case 363:
case 647:
case 3230:
case 2272:
case 1114:
case 397:
case 3156:
case 2371:
case 1135:
case 1748:
case 3079:
case 2838:
case 4065:
case 1790:
case 3838:
case 2001:
case 3011:
case 2319:
case 2397:
case 2094:
case 853:
case 1191:
case 2485:
case 1908:
case 355:
case 405:
case 2320:
case 3283:
case 10:
case 319:
case 1666:
case 1089:
case 2839:
case 3078:
case 2308:
case 1749:
case 3318:
case 1920:
case 2318:
case 2187:
case 2078:
case 3839:
case 1482:
case 969:
case 1024:
case 493:
case 3719:
case 2709:
case 3692:
case 2364:
case 3539:
case 1851:
case 1169:
case 1390:
case 2539:
case 2692:
case 3658:
case 3364:
case 3709:
case 2719:
case 3121:
case 3067:
case 3990:
case 1693:
case 555:
case 83:
case 1964:
case 112:
case 177:
case 2285:
case 883:
case 3948:
case 538:
case 467:
case 595:
case 3440:
case 1765:
case 2498:
case 2601:
case 3611:
case 2134:
case 1143:
case 3115:
case 1808:
case 3881:
case 3679:
case 4027:
case 2611:
case 2452:
case 3601:
case 625:
case 3150:
case 805:
case 2407:
case 914:
case 3939:
case 564:
case 161:
case 3236:
case 3142:
case 1255:
case 1453:
case 1820:
case 303:
case 785:
case 2474:
case 2939:
case 1228:
case 188:
case 2150:
case 203:
case 1897:
case 2142:
case 470:
case 2236:
case 2436:
case 158:
case 1951:
case 503:
case 3207:
case 1112:
case 135:
case 1253:
case 1455:
case 867:
case 3762:
case 976:
case 1102:
case 1520:
case 645:
case 3298:
case 2252:
case 1157:
case 3848:
case 395:
case 4081:
case 3176:
case 3726:
case 2240:
case 3827:
case 1738:
case 719:
case 925:
case 3890:
case 2827:
case 2059:
case 3240:
case 2581:
case 2176:
case 3351:
case 2965:
case 763:
case 357:
case 1429:
case 849:
case 1284:
case 1093:
case 1571:
case 1509:
case 1186:
case 3299:
case 3996:
case 2092:
case 3058:
case 3667:
case 909:
case 1624:
case 2058:
case 2996:
case 1962:
case 2549:
case 3023:
case 4049:
case 1871:
case 1809:
case 1338:
case 1689:
case 3499:
case 3751:
case 47:
case 1022:
case 2261:
case 778:
case 829:
case 2963:
case 3362:
case 936:
case 387:
case 1926:
case 465:
case 7:
case 2954:
case 1271:
case 499:
case 963:
case 3954:
case 2599:
case 3670:
case 1330:
case 1668:
case 1829:
case 2306:
case 3861:
case 3373:
case 3316:
case 3159:
case 3076:
case 678:
case 3644:
case 547:
case 3003:
case 604:
case 2930:
case 2159:
case 3306:
case 227:
case 2861:
case 2015:
case 1884:
case 2375:
case 2034:
case 2656:
case 1043:
case 2561:
case 1346:
case 3015:
case 1529:
case 1614:
case 663:
case 1635:
case 3656:
case 2249:
case 815:
case 904:
case 2899:
case 1975:
case 697:
case 2946:
case 736:
case 3946:
case 213:
case 1754:
case 655:
case 745:
case 1420:
case 1853:
case 423:
case 2706:
case 3123:
case 2687:
case 3874:
case 1555:
case 369:
case 1528:
case 1497:
case 1547:
case 3807:
case 2817:
case 2536:
case 3687:
case 148:
case 3706:
case 2123:
case 2773:
case 2898:
case 3852:
case 1195:
case 714:
case 1500:
case 1418:
case 3290:
case 1772:
case 3481:
case 3898:
case 2852:
case 1730:
case 2290:
case 2985:
case 1691:
case 2840:
case 1208:
case 2983:
case 3598:
case 162:
case 2490:
case 3427:
case 2552:
case 3382:
case 938:
case 417:
case 1810:
case 3448:
case 2382:
case 1218:
case 2281:
case 1800:
case 1680:
case 1464:
case 1828:
case 1383:
case 1669:
case 1086:
case 1847:
case 3507:
case 4007:
case 1746:
case 3125:
case 1982:
case 3775:
case 685:
case 569:
case 443:
case 1220:
case 3517:
case 2621:
case 4017:
case 4074:
case 3907:
case 2917:
case 2974:
case 110:
case 1340:
case 376:
case 1352:
case 514:
case 3974:
case 3917:
case 3439:
case 3650:
case 3642:
case 276:
case 2885:
case 1374:
case 1317:
case 3615:
case 1188:
case 2940:
case 1077:
case 1014:
case 3179:
case 3729:
case 2111:
case 1035:
case 3634:
case 3056:
case 2615:
case 1004:
case 3885:
case 1307:
case 2634:
case 1643:
case 3583:
case 2179:
case 3111:
case 4083:
case 2353:
case 1900:
case 769:
case 3044:
case 3585:
case 3347:
case 3784:
case 3603:
case 2613:
case 525:
case 3883:
case 2585:
case 1336:
case 1068:
case 1033:
case 1657:
case 2328:
case 843:
case 2603:
case 214:
case 817:
case 872:
case 1882:
case 576:
case 3032:
case 2936:
case 2310:
case 1612:
case 1451:
case 1799:
case 2239:
case 1774:
case 1717:
case 657:
case 1361:
case 1873:
case 3753:
case 3329:
case 2167:
case 1806:
case 489:
case 3546:
case 4046:
case 1069:
case 3021:
case 2854:
case 2329:
case 899:
case 2830:
case 1740:
case 987:
case 3465:
case 1080:
case 1752:
case 3961:
case 2872:
case 2238:
case 1798:
case 713:
case 1929:
case 2263:
case 2700:
case 3710:
case 2:
case 2438:
case 4030:
case 1426:
case 536:
case 3:
case 3265:
case 2710:
case 3700:
case 11:
case 957:
case 1984:
case 1506:
case 1189:
case 309:
case 3296:
case 2755:
case 3384:
case 3999:
case 3087:
case 1462:
case 3755:
case 2296:
case 687:
case 1573:
case 2846:
case 727:
case 2728:
case 2178:
case 2384:
case 1875:
case 435:
case 2286:
case 516:
case 2989:
case 183:
case 2097:
case 308:
case 1199:
case 458:
case 2020:
case 64:
case 3989:
case 2662:
case 3018:
case 3184:
case 3960:
case 3378:
case 39:
case 1994:
case 1638:
case 1663:
case 1741:
case 2018:
case 3008:
case 1081:
case 1559:
case 2711:
case 2064:
case 3779:
case 59:
case 3701:
case 2367:
case 94:
case 1048:
case 1161:
case 1788:
case 1859:
case 3367:
case 3064:
case 2129:
case 1090:
case 316:
case 62:
case 1967:
case 488:
case 2924:
case 170:
case 733:
case 171:
case 153:
case 3924:
case 426:
case 3651:
case 2402:
case 4066:
case 3128:
case 1789:
case 3147:
case 722:
case 1250:
case 2128:
case 1341:
case 2651:
case 2412:
case 1136:
case 940:
case 2147:
case 1242:
case 590:
case 682:
case 1892:
case 475:
case 781:
case 234:
case 837:
case 2794:
case 2893:
case 2445:
case 165:
case 3457:
case 17:
case 1403:
case 952:
case 1205:
case 800:
case 2457:
case 4022:
case 3100:
case 620:
case 334:
case 3443:
case 750:
case 1152:
case 3245:
case 4093:
case 3822:
case 1405:
case 3593:
case 2988:
case 130:
case 1203:
case 3257:
case 2895:
case 1979:
case 2443:
case 1434:
case 751:
case 131:
case 534:
case 3153:
case 2866:
case 2071:
case 1442:
case 3019:
case 2009:
case 1117:
case 1639:
case 652:
case 3071:
case 3866:
case 390:
case 291:
case 446:
case 568:
case 437:
case 373:
case 351:
case 250:
case 401:
case 1992:
case 692:
case 875:
case 2469:
case 1925:
case 1421:
case 184:
case 251:
case 273:
case 86:
case 2182:
case 3469:
case 1065:
case 3480:
case 3664:
case 522:
case 2392:
case 1511:
case 2841:
case 1690:
case 2325:
case 2358:
case 2664:
case 1648:
case 3291:
case 3325:
case 1501:
case 342:
case 1627:
case 3888:
case 2618:
case 3608:
case 1681:
case 1879:
case 2608:
case 2491:
case 1185:
case 3618:
case 2026:
case 846:
case 222:
case 2323:
case 2759:
case 1811:
case 542:
case 2541:
case 3280:
case 992:
case 1322:
case 149:
case 3966:
case 1395:
case 1221:
case 2269:
case 906:
case 2966:
case 3671:
case 2619:
case 1146:
case 1232:
case 1270:
case 2758:
case 3137:
case 3792:
case 193:
case 2671:
case 4024:
case 3524:
case 3175:
case 3725:
case 1039:
case 979:
case 412:
case 333:
case 3435:
case 3268:
case 835:
case 55:
case 2404:
case 3477:
case 1894:
case 2268:
case 1244:
case 233:
case 3931:
case 2414:
case 3404:
case 858:
case 1594:
case 533:
case 1172:
case 708:
case 679:
case 860:
case 1444:
case 2433:
case 774:
case 1795:
case 4060:
case 35:
case 3214:
case 2204:
case 1959:
case 25:
case 2560:
case 3468:
case 861:
case 3359:
case 2051:
case 3824:
case 1470:
case 3051:
case 3589:
case 2173:
case 3106:
case 1432:
case 1578:
case 1766:
case 498:
case 2242:
case 394:
case 2892:
case 3789:
case 2523:
case 1566:
case 2341:
case 3049:
case 1412:
case 1651:
case 2789:
case 3523:
case 897:
case 294:
case 3136:
case 1155:
case 3242:
case 1402:
case 3250:
case 989:
case 1941:
case 863:
case 3413:
case 27:
case 3476:
case 2403:
case 3215:
case 531:
case 1243:
case 2234:
case 265:
case 659:
case 749:
case 3205:
case 37:
case 644:
case 3140:
case 330:
case 2276:
case 207:
case 804:
case 689:
case 3405:
case 2415:
case 729:
case 2198:
case 2434:
case 2979:
case 3911:
case 878:
case 784:
case 2901:
case 1895:
case 3415:
case 2405:
case 230:
case 3276:
case 3213:
case 1988:
case 2140:
case 3979:
case 3434:
case 2911:
case 2152:
case 3198:
case 3823:
case 3388:
case 3450:
case 3174:
case 1379:
case 1301:
case 2117:
case 1212:
case 3558:
case 190:
case 1009:
case 2442:
case 1767:
case 1071:
case 2525:
case 570:
case 885:
case 2199:
case 1989:
case 571:
case 1394:
case 283:
case 3199:
case 33:
case 3978:
case 1286:
case 3360:
case 3389:
case 2741:
case 1378:
case 1831:
case 4059:
case 2638:
case 2663:
case 3741:
case 3161:
case 3788:
case 3324:
case 793:
case 1701:
case 819:
case 2859:
case 2161:
case 3665:
case 1531:
case 2048:
case 1367:
case 271:
case 370:
case 583:
case 3696:
case 767:
case 353:
case 2696:
case 855:
case 2967:
case 3878:
case 2270:
case 3232:
case 3039:
case 1175:
case 2567:
case 393:
case 3270:
case 1137:
case 2232:
case 1792:
case 2146:
case 485:
case 367:
case 1477:
case 643:
case 771:
case 3456:
case 2894:
case 2244:
case 133:
case 18:
case 3793:
case 3244:
case 1560:
case 3795:
case 2256:
case 205:
case 972:
case 567:
case 1204:
case 2130:
case 3722:
case 2959:
case 455:
case 2444:
case 305:
case 3256:
case 1468:
case 1214:
case 1277:
case 2172:
case 2578:
case 3470:
case 1824:
case 1116:
case 2154:
case 3578:
case 3432:
case 2470:
case 4078:
case 3766:
case 3649:
case 593:
case 2287:
case 707:
case 999:
case 554:
case 151:
case 3992:
case 284:
case 887:
case 1469:
case 730:
case 3393:
case 2992:
case 150:
case 384:
case 2579:
case 3183:
case 4011:
case 2501:
case 1480:
case 3065:
case 1358:
case 1993:
case 142:
case 1841:
case 2690:
case 4001:
case 2511:
case 3579:
case 2731:
case 1325:
case 632:
case 2065:
case 2038:
case 2811:
case 2063:
case 1026:
case 1608:
case 1491:
case 2185:
case 1759:
case 1323:
case 3063:
case 2681:
case 3811:
case 2879:
case 1995:
case 3038:
case 1922:
case 1618:
case 932:
case 478:
case 349:
case 3487:
case 2923:
case 404:
case 77:
case 249:
case 765:
case 1062:
case 2221:
case 2395:
case 254:
case 2322:
case 2385:
case 1817:
case 2547:
case 1123:
case 1773:
case 1716:
case 3420:
case 3853:
case 3754:
case 1687:
case 479:
case 3547:
case 4047:
case 3385:
case 60:
case 2754:
case 82:
case 3166:
case 4028:
case 2420:
case 2730:
case 1840:
case 2691:
case 3500:
case 3418:
case 2510:
case 4000:
case 3195:
case 698:
case 562:
case 3264:
case 1852:
case 3510:
case 3408:
case 3691:
case 2500:
case 4010:
case 3730:
case 1898:
case 2264:
case 1248:
case 1481:
case 1281:
case 2800:
case 2464:
case 2193:
case 2680:
case 1427:
case 3208:
case 2218:
case 3680:
case 3800:
case 3218:
case 2208:
case 2220:
case 3297:
case 3746:
case 84:
case 3847:
case 1621:
case 3669:
case 3383:
case 1836:
case 1574:
case 3855:
case 548:
case 2746:
case 2297:
case 1737:
case 3220:
case 2383:
case 228:
case 2669:
case 2086:
case 2330:
case 2973:
case 71:
case 3012:
case 2002:
case 2219:
case 3271:
case 3209:
case 1599:
case 3002:
case 852:
case 2906:
case 2012:
case 1670:
case 900:
case 286:
case 1930:
case 1076:
case 1373:
case 1159:
case 841:
case 2584:
case 3785:
case 4084:
case 3584:
case 2057:
case 2633:
case 820:
case 3346:
case 3043:
case 2635:
case 3884:
case 3783:
case 3604:
case 1656:
case 1034:
case 601:
case 2346:
case 637:
case 2604:
case 1015:
case 3529:
case 3677:
case 4029:
case 2884:
case 1375:
case 2131:
case 3937:
case 882:
case 1782:
case 256:
case 2975:
case 1899:
case 3262:
case 3575:
case 296:
case 3537:
case 3361:
case 926:
case 3774:
case 3717:
case 2262:
case 2575:
case 1167:
case 1496:
case 2717:
case 3707:
case 1546:
case 2361:
case 2816:
case 2798:
case 1465:
case 818:
case 1263:
case 136:
case 975:
case 1872:
case 3929:
case 3798:
case 302:
case 452:
case 1961:
case 3226:
case 3426:
case 21:
case 3091:
case 2160:
case 2984:
case 3399:
case 626:
case 3160:
case 786:
case 1700:
case 502:
case 1:
case 1178:
case 2875:
case 1296:
case 420:
case 1846:
case 2573:
case 2516:
case 109:
case 4006:
case 1554:
case 3837:
case 4016:
case 3573:
case 421:
case 2582:
case 2953:
case 176:
case 211:
case 1907:
case 935:
case 1642:
case 3953:
case 3582:
case 3398:
case 958:
case 1650:
case 2340:
case 311:
case 2251:
case 1998:
case 2643:
case 661:
case 1634:
case 125:
case 1615:
case 3188:
case 3761:
case 3374:
case 1583:
case 660:
case 1952:
case 42:
case 879:
case 2077:
case 1940:
case 748:
case 658:
case 1603:
case 1585:
case 2336:
case 1347:
case 2910:
case 2033:
case 1613:
case 1676:
case 635:
case 3910:
case 145:
case 3657:
case 1355:
case 3336:
case 2612:
case 3955:
case 1070:
case 2882:
case 3612:
case 3451:
case 2602:
case 114:
case 511:
case 961:
case 1300:
case 1032:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744351201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,];
var gg_b = "1744351201/";

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
