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
case 791:
case 1365:
case 1602:
case 3863:
case 550:
case 2979:
case 3995:
case 760:
case 24:
case 2931:
case 2085:
case 1842:
case 614:
case 1159:
case 3298:
case 1794:
case 4078:
case 3366:
case 3902:
case 925:
case 3420:
case 1996:
case 140:
case 2109:
case 727:
case 2103:
case 3167:
case 4015:
case 2219:
case 1921:
case 1272:
case 3944:
case 2854:
case 962:
case 451:
case 3861:
case 3557:
case 3072:
case 594:
case 135:
case 2286:
case 1745:
case 3330:
case 604:
case 3750:
case 2933:
case 3814:
case 3623:
case 4038:
case 2688:
case 2517:
case 1644:
case 1098:
case 1929:
case 2797:
case 1569:
case 1563:
case 2101:
case 3067:
case 479:
case 2003:
case 1804:
case 3251:
case 1232:
case 832:
case 230:
case 3639:
case 158:
case 1009:
case 3700:
case 2644:
case 172:
case 2098:
case 1264:
case 3320:
case 130:
case 2563:
case 1101:
case 3466:
case 2804:
case 1939:
case 3201:
case 1286:
case 3019:
case 3484:
case 2151:
case 901:
case 23:
case 2053:
case 2059:
case 1688:
case 1517:
case 1465:
case 2745:
case 1185:
case 1971:
case 2996:
case 967:
case 240:
case 1109:
case 485:
case 765:
case 2857:
case 1652:
case 3673:
case 1001:
case 2561:
case 3086:
case 76:
case 1103:
case 3890:
case 277:
case 1979:
case 2365:
case 3011:
case 145:
case 2842:
case 3952:
case 678:
case 696:
case 920:
case 1931:
case 3209:
case 3530:
case 2215:
case 2206:
case 3958:
case 1693:
case 15:
case 3357:
case 2918:
case 3737:
case 431:
case 642:
case 1240:
case 4013:
case 2116:
case 3255:
case 878:
case 1155:
case 2278:
case 896:
case 3140:
case 250:
case 1658:
case 3993:
case 2414:
case 3028:
case 2181:
case 2975:
case 3999:
case 54:
case 1884:
case 3454:
case 999:
case 2676:
case 1741:
case 1256:
case 2192:
case 238:
case 3056:
case 572:
case 1228:
case 3724:
case 2005:
case 1565:
case 488:
case 2820:
case 530:
case 1361:
case 3040:
case 675:
case 2238:
case 3982:
case 1055:
case 3762:
case 38:
case 3991:
case 385:
case 116:
case 3407:
case 281:
case 2636:
case 1743:
case 4086:
case 2183:
case 3566:
case 2081:
case 2935:
case 3128:
case 1314:
case 3625:
case 3926:
case 1189:
case 194:
case 216:
case 3354:
case 3734:
case 1238:
case 3548:
case 2314:
case 3015:
case 2490:
case 181:
case 2830:
case 2743:
case 647:
case 1081:
case 2682:
case 1887:
case 3457:
case 4032:
case 1016:
case 3078:
case 2626:
case 2565:
case 928:
case 1005:
case 1390:
case 206:
case 3520:
case 3774:
case 3780:
case 1278:
case 814:
case 3307:
case 1192:
case 138:
case 1975:
case 3106:
case 1181:
case 1676:
case 2741:
case 379:
case 3618:
case 643:
case 3281:
case 1848:
case 2693:
case 3292:
case 853:
case 1215:
case 351:
case 3178:
case 255:
case 1116:
case 3675:
case 25:
case 1105:
case 1918:
case 30:
case 1372:
case 3840:
case 3771:
case 3165:
case 737:
case 162:
case 2744:
case 1030:
case 93:
case 3739:
case 2313:
case 1528:
case 1166:
case 2087:
case 1486:
case 865:
case 3270:
case 3284:
case 4090:
case 1788:
case 1900:
case 408:
case 1610:
case 263:
case 1422:
case 822:
case 220:
case 1332:
case 77:
case 3351:
case 315:
case 2889:
case 1084:
case 1070:
case 211:
case 1419:
case 1556:
case 2883:
case 3828:
case 2311:
case 2795:
case 2467:
case 668:
case 1747:
case 2506:
case 1066:
case 2322:
case 2048:
case 2386:
case 2702:
case 125:
case 3555:
case 12:
case 940:
case 418:
case 3592:
case 1322:
case 1515:
case 823:
case 321:
case 2066:
case 1506:
case 3796:
case 167:
case 1120:
case 770:
case 310:
case 286:
case 2413:
case 2752:
case 3505:
case 3220:
case 2332:
case 1364:
case 3712:
case 3287:
case 1311:
case 1795:
case 747:
case 2130:
case 2070:
case 2084:
case 3309:
case 827:
case 2788:
case 930:
case 1148:
case 1087:
case 2528:
case 1645:
case 2166:
case 2486:
case 1946:
case 958:
case 2610:
case 3729:
case 2411:
case 2855:
case 3945:
case 884:
case 1950:
case 3646:
case 1313:
case 891:
case 393:
case 1892:
case 3806:
case 3248:
case 262:
case 2184:
case 2170:
case 789:
case 101:
case 2030:
case 1736:
case 228:
case 1356:
case 2511:
case 2809:
case 3242:
case 1532:
case 2564:
case 2803:
case 1263:
case 627:
case 2378:
case 563:
case 497:
case 3872:
case 3355:
case 3483:
case 1853:
case 2586:
case 2107:
case 3061:
case 2054:
case 3163:
case 819:
case 691:
case 3257:
case 2726:
case 2782:
case 684:
case 2217:
case 1934:
case 2962:
case 2791:
case 1859:
case 3014:
case 95:
case 369:
case 2937:
case 1214:
case 2641:
case 1776:
case 1478:
case 3416:
case 2801:
case 3674:
case 2519:
case 1057:
case 493:
case 2338:
case 757:
case 1261:
case 3063:
case 2799:
case 3161:
case 199:
case 3832:
case 3481:
case 1851:
case 1927:
case 1708:
case 809:
case 336:
case 1760:
case 1980:
case 2440:
case 1974:
case 2885:
case 2708:
case 2927:
case 2415:
case 3090:
case 3503:
case 1154:
case 3941:
case 2406:
case 299:
case 308:
case 456:
case 3509:
case 1793:
case 2980:
case 1440:
case 622:
case 2042:
case 3822:
case 3017:
case 40:
case 1641:
case 52:
case 1338:
case 1758:
case 1519:
case 525:
case 2572:
case 3943:
case 981:
case 3819:
case 1107:
case 3624:
case 3813:
case 1791:
case 346:
case 1522:
case 3949:
case 796:
case 3392:
case 2934:
case 1962:
case 752:
case 1217:
case 1809:
case 1511:
case 415:
case 1643:
case 2356:
case 4065:
case 3207:
case 2263:
case 66:
case 1378:
case 1649:
case 1564:
case 3662:
case 1290:
case 1803:
case 2250:
case 3100:
case 2429:
case 2876:
case 4062:
case 1670:
case 1396:
case 3168:
case 2423:
case 3210:
case 1701:
case 3302:
case 2246:
case 207:
case 1439:
case 213:
case 1110:
case 1899:
case 2751:
case 1312:
case 3711:
case 3395:
case 1525:
case 1433:
case 3297:
case 1666:
case 2145:
case 608:
case 1965:
case 1097:
case 3593:
case 290:
case 2496:
case 2798:
case 261:
case 2836:
case 102:
case 856:
case 3000:
case 2421:
case 959:
case 1329:
case 3447:
case 1010:
case 468:
case 1479:
case 1826:
case 2412:
case 2753:
case 3930:
case 3719:
case 2371:
case 2339:
case 195:
case 1891:
case 534:
case 805:
case 19:
case 2045:
case 1431:
case 646:
case 2687:
case 3452:
case 391:
case 1333:
case 1371:
case 3835:
case 2479:
case 2010:
case 1412:
case 360:
case 2826:
case 1620:
case 3576:
case 3050:
case 674:
case 2882:
case 384:
case 3402:
case 2630:
case 4074:
case 800:
case 529:
case 2323:
case 190:
case 1496:
case 3920:
case 3046:
case 2329:
case 4027:
case 1421:
case 636:
case 3875:
case 897:
case 2268:
case 1246:
case 2439:
case 113:
case 544:
case 1860:
case 2433:
case 2965:
case 2785:
case 2312:
case 2525:
case 1429:
case 3818:
case 2670:
case 154:
case 2321:
case 3245:
case 1535:
case 821:
case 3146:
case 2858:
case 3948:
case 1423:
case 1789:
case 2277:
case 513:
case 144:
case 507:
case 2375:
case 1657:
case 3399:
case 1529:
case 3134:
case 939:
case 3080:
case 3812:
case 1895:
case 1523:
case 836:
case 309:
case 2041:
case 427:
case 1963:
case 460:
case 764:
case 3669:
case 3821:
case 966:
case 2847:
case 3957:
case 621:
case 3544:
case 491:
case 2318:
case 3896:
case 3738:
case 1234:
case 869:
case 780:
case 3358:
case 484:
case 610:
case 2533:
case 3663:
case 1914:
case 1596:
case 3180:
case 3034:
case 2755:
case 3460:
case 2335:
case 1604:
case 874:
case 234:
case 1521:
case 3715:
case 3408:
case 3706:
case 1781:
case 1844:
case 779:
case 2141:
case 423:
case 3382:
case 2888:
case 129:
case 2579:
case 3614:
case 1512:
case 3661:
case 2654:
case 3476:
case 3829:
case 2531:
case 1705:
case 3336:
case 2227:
case 1579:
case 2512:
case 3024:
case 1654:
case 2418:
case 3552:
case 3077:
case 422:
case 2274:
case 818:
case 605:
case 3871:
case 846:
case 3740:
case 1335:
case 2604:
case 60:
case 2781:
case 3954:
case 59:
case 2475:
case 595:
case 983:
case 1847:
case 1318:
case 3243:
case 1539:
case 3037:
case 2802:
case 924:
case 2234:
case 1262:
case 1425:
case 3873:
case 3831:
case 2529:
case 3482:
case 1852:
case 78:
case 808:
case 3162:
case 61:
case 785:
case 2789:
case 3308:
case 1149:
case 244:
case 1277:
case 3491:
case 1041:
case 2435:
case 46:
case 2783:
case 1224:
case 2963:
case 4068:
case 3617:
case 465:
case 3588:
case 2895:
case 2523:
case 3023:
case 721:
case 1527:
case 3121:
case 1659:
case 1300:
case 4075:
case 332:
case 3295:
case 1212:
case 3196:
case 710:
case 2231:
case 414:
case 680:
case 1653:
case 1574:
case 1580:
case 902:
case 3202:
case 3494:
case 995:
case 2849:
case 3834:
case 3667:
case 2603:
case 99:
case 1296:
case 797:
case 3112:
case 1195:
case 1698:
case 2843:
case 1972:
case 2350:
case 2188:
case 3123:
case 2986:
case 1446:
case 4035:
case 2047:
case 700:
case 2562:
case 3129:
case 1651:
case 3632:
case 587:
case 1229:
case 2911:
case 3880:
case 3874:
case 2601:
case 343:
case 457:
case 793:
case 3012:
case 1144:
case 1223:
case 2841:
case 2964:
case 389:
case 70:
case 2450:
case 3765:
case 3171:
case 1052:
case 3133:
case 3073:
case 3985:
case 2229:
case 4025:
case 705:
case 1911:
case 2223:
case 1784:
case 1770:
case 2095:
case 3622:
case 913:
case 1766:
case 3901:
case 2446:
case 3543:
case 1239:
case 1685:
case 2748:
case 1468:
case 1562:
case 2534:
case 2002:
case 1400:
case 3664:
case 3837:
case 342:
case 1922:
case 3497:
case 566:
case 3131:
case 3071:
case 71:
case 2296:
case 715:
case 375:
case 1913:
case 1849:
case 831:
case 3345:
case 1730:
case 2221:
case 1843:
case 903:
case 1609:
case 3247:
case 3179:
case 1279:
case 3541:
case 1147:
case 582:
case 2787:
case 3903:
case 2212:
case 2967:
case 3613:
case 1088:
case 2659:
case 2527:
case 3877:
case 2653:
case 2580:
case 2102:
case 496:
case 3909:
case 1231:
case 2108:
case 1026:
case 2427:
case 1810:
case 1199:
case 249:
case 2906:
case 3258:
case 1754:
case 3441:
case 2605:
case 2362:
case 88:
case 631:
case 1082:
case 442:
case 3955:
case 2845:
case 2160:
case 2474:
case 437:
case 2978:
case 1897:
case 3025:
case 2692:
case 826:
case 1437:
case 2036:
case 3868:
case 3299:
case 1158:
case 2377:
case 1655:
case 2704:
case 1568:
case 3443:
case 746:
case 3597:
case 1191:
case 718:
case 944:
case 2894:
case 378:
case 2434:
case 352:
case 2060:
case 1500:
case 1225:
case 1182:
case 433:
case 3282:
case 475:
case 2136:
case 47:
case 3628:
case 3291:
case 1477:
case 2683:
case 3510:
case 4039:
case 2235:
case 166:
case 2757:
case 2337:
case 124:
case 3545:
case 1938:
case 1757:
case 1235:
case 1689:
case 353:
case 2058:
case 266:
case 2374:
case 2707:
case 3075:
case 432:
case 3763:
case 3135:
case 4023:
case 641:
case 2568:
case 2462:
case 1434:
case 2225:
case 4029:
case 1060:
case 774:
case 2093:
case 3989:
case 470:
case 3236:
case 559:
case 1681:
case 282:
case 3606:
case 2437:
case 1176:
case 3905:
case 3594:
case 3260:
case 1377:
case 489:
case 3208:
case 864:
case 1704:
case 2158:
case 357:
case 2754:
case 3981:
case 3035:
case 2199:
case 2334:
case 934:
case 1915:
case 183:
case 3678:
case 1427:
case 1845:
case 1160:
case 571:
case 3343:
case 2082:
case 2940:
case 2193:
case 2370:
case 79:
case 1952:
case 3973:
case 34:
case 3931:
case 345:
case 2621:
case 2869:
case 1119:
case 1064:
case 2032:
case 2504:
case 2995:
case 1890:
case 1203:
case 2696:
case 997:
case 3001:
case 1086:
case 3652:
case 666:
case 1673:
case 921:
case 3213:
case 4055:
case 910:
case 1348:
case 1817:
case 3109:
case 2420:
case 3222:
case 45:
case 2750:
case 3465:
case 2330:
case 131:
case 3517:
case 1013:
case 455:
case 3688:
case 2623:
case 58:
case 2557:
case 1019:
case 7:
case 1470:
case 2944:
case 3854:
case 1201:
case 3710:
case 3286:
case 585:
case 1633:
case 526:
case 1186:
case 330:
case 3264:
case 2448:
case 1988:
case 2251:
case 1387:
case 2542:
case 3211:
case 406:
case 1285:
case 859:
case 2320:
case 1251:
case 2768:
case 1448:
case 2988:
case 3232:
case 2633:
case 2466:
case 3563:
case 1067:
case 2186:
case 2387:
case 1542:
case 2700:
case 992:
case 2013:
case 2111:
case 1623:
case 3059:
case 231:
case 373:
case 707:
case 713:
case 871:
case 2201:
case 335:
case 1132:
case 1944:
case 2470:
case 683:
case 2019:
case 1861:
case 1253:
case 3921:
case 3272:
case 2554:
case 1167:
case 2631:
case 4081:
case 1487:
case 790:
case 2022:
case 1420:
case 1612:
case 340:
case 3198:
case 288:
case 1298:
case 2011:
case 915:
case 1869:
case 2209:
case 1384:
case 2952:
case 3842:
case 703:
case 3365:
case 2430:
case 3602:
case 141:
case 687:
case 1863:
case 3051:
case 3153:
case 2064:
case 1976:
case 2737:
case 3918:
case 2357:
case 2255:
case 4059:
case 1038:
case 3116:
case 3608:
case 151:
case 1292:
case 1404:
case 43:
case 3206:
case 2958:
case 3317:
case 473:
case 729:
case 179:
case 1618:
case 3975:
case 3181:
case 3192:
case 1908:
case 1115:
case 1307:
case 2140:
case 1774:
case 1780:
case 1960:
case 2993:
case 3089:
case 1520:
case 1635:
case 2304:
case 2777:
case 3820:
case 180:
case 1138:
case 1457:
case 2584:
case 2724:
case 164:
case 1283:
case 2566:
case 3935:
case 2128:
case 1006:
case 381:
case 2926:
case 1015:
case 3092:
case 1548:
case 2762:
case 2040:
case 1354:
case 285:
case 3189:
case 3490:
case 1926:
case 2006:
case 776:
case 3749:
case 316:
case 798:
case 185:
case 1982:
case 3055:
case 2354:
case 882:
case 3417:
case 3626:
case 445:
case 126:
case 264:
case 1056:
case 3369:
case 734:
case 2727:
case 2908:
case 3256:
case 430:
case 279:
case 2618:
case 4003:
case 1993:
case 458:
case 2205:
case 1140:
case 1865:
case 3363:
case 3155:
case 2780:
case 2774:
case 355:
case 2038:
case 2178:
case 2976:
case 2675:
case 3699:
case 1958:
case 2281:
case 1156:
case 3866:
case 2292:
case 4057:
case 1806:
case 1248:
case 1451:
case 3881:
case 2266:
case 193:
case 3892:
case 2359:
case 2910:
case 2739:
case 574:
case 1815:
case 3319:
case 2840:
case 2165:
case 2353:
case 2485:
case 20:
case 3538:
case 2668:
case 3805:
case 1303:
case 292:
case 890:
case 861:
case 3816:
case 256:
case 2401:
case 2856:
case 3946:
case 1650:
case 499:
case 3087:
case 4004:
case 2828:
case 3472:
case 3883:
case 807:
case 311:
case 2779:
case 1712:
case 320:
case 2065:
case 2731:
case 2773:
case 988:
case 1994:
case 1516:
case 3889:
case 2555:
case 1498:
case 1301:
case 3120:
case 1796:
case 367:
case 569:
case 1581:
case 3187:
case 2403:
case 3467:
case 759:
case 3515:
case 1592:
case 3322:
case 1409:
case 812:
case 32:
case 2498:
case 1555:
case 2301:
case 3540:
case 221:
case 2721:
case 2581:
case 297:
case 2712:
case 2287:
case 2453:
case 3084:
case 3419:
case 3556:
case 3413:
case 386:
case 2516:
case 2459:
case 11:
case 1731:
case 2505:
case 1773:
case 1065:
case 156:
case 200:
case 802:
case 3265:
case 2729:
case 192:
case 3968:
case 2723:
case 3788:
case 3528:
case 2583:
case 293:
case 1910:
case 1359:
case 3697:
case 518:
case 1739:
case 634:
case 3184:
case 3170:
case 362:
case 2451:
case 2248:
case 105:
case 1733:
case 1771:
case 1165:
case 2945:
case 1485:
case 1662:
case 2634:
case 2867:
case 3290:
case 1316:
case 3649:
case 1207:
case 3924:
case 1585:
case 980:
case 2242:
case 1725:
case 1117:
case 3809:
case 486:
case 3962:
case 3217:
case 2014:
case 1949:
case 2489:
case 1392:
case 274:
case 1624:
case 3791:
case 2169:
case 2735:
case 3054:
case 3586:
case 1819:
case 1943:
case 50:
case 2872:
case 4066:
case 3726:
case 505:
case 2257:
case 462:
case 2680:
case 2674:
case 4030:
case 3758:
case 3641:
case 269:
case 1822:
case 2627:
case 1455:
case 1383:
case 3440:
case 108:
case 2114:
case 2481:
case 979:
case 1864:
case 51:
case 2832:
case 1503:
case 3007:
case 2161:
case 2775:
case 236:
case 2492:
case 2204:
case 515:
case 208:
case 463:
case 597:
case 2383:
case 2455:
case 3760:
case 844:
case 1204:
case 2864:
case 4087:
case 2941:
case 1481:
case 3567:
case 607:
case 1063:
case 613:
case 510:
case 2254:
case 3057:
case 1553:
case 3104:
case 2017:
case 521:
case 1627:
case 1559:
case 1405:
case 654:
case 1014:
case 593:
case 467:
case 985:
case 174:
case 98:
case 3142:
case 1257:
case 4048:
case 2190:
case 603:
case 3340:
case 1735:
case 617:
case 1355:
case 1483:
case 500:
case 2207:
case 411:
case 2662:
case 1634:
case 3004:
case 3157:
case 1242:
case 3438:
case 2725:
case 420:
case 3269:
case 3736:
case 926:
case 3423:
case 2526:
case 2302:
case 3535:
case 123:
case 354:
case 2591:
case 2722:
case 3250:
case 942:
case 1818:
case 867:
case 3876:
case 3429:
case 2582:
case 222:
case 3379:
case 2395:
case 820:
case 509:
case 2297:
case 313:
case 429:
case 811:
case 3246:
case 699:
case 1732:
case 2764:
case 2984:
case 1444:
case 1352:
case 2068:
case 265:
case 3575:
case 2447:
case 390:
case 2825:
case 2593:
case 2000:
case 863:
case 1294:
case 3836:
case 361:
case 933:
case 975:
case 3687:
case 2452:
case 97:
case 3045:
case 2344:
case 1050:
case 3518:
case 317:
case 1495:
case 303:
case 777:
case 3333:
case 3371:
case 191:
case 2930:
case 39:
case 3431:
case 3473:
case 2050:
case 74:
case 2576:
case 745:
case 284:
case 1930:
case 947:
case 260:
case 3010:
case 3479:
case 2495:
case 2767:
case 227:
case 1599:
case 1068:
case 165:
case 2560:
case 1000:
case 2402:
case 3630:
case 628:
case 1825:
case 3709:
case 498:
case 2388:
case 3323:
case 2150:
case 2536:
case 3965:
case 1297:
case 3433:
case 3471:
case 886:
case 3666:
case 1711:
case 122:
case 1395:
case 3893:
case 3200:
case 1984:
case 2732:
case 1764:
case 3899:
case 3:
case 2352:
case 3439:
case 3110:
case 943:
case 1665:
case 2146:
case 1302:
case 223:
case 1786:
case 4043:
case 730:
case 434:
case 1488:
case 3396:
case 1526:
case 3684:
case 2818:
case 772:
case 1100:
case 3197:
case 4049:
case 3321:
case 825:
case 1722:
case 2393:
case 1588:
case 1879:
case 3990:
case 2812:
case 3224:
case 1728:
case 1360:
case 3041:
case 3149:
case 716:
case 398:
case 1491:
case 748:
case 914:
case 2074:
case 1873:
case 2942:
case 3375:
case 2399:
case 2358:
case 495:
case 3425:
case 3262:
case 2896:
case 2738:
case 2436:
case 49:
case 1177:
case 1249:
case 1037:
case 2821:
case 4010:
case 2669:
case 953:
case 1124:
case 3318:
case 2957:
case 662:
case 2715:
case 334:
case 219:
case 3141:
case 1954:
case 904:
case 2326:
case 3049:
case 3237:
case 1493:
case 1871:
case 1833:
case 1740:
case 3335:
case 412:
case 2034:
case 2502:
case 2778:
case 755:
case 56:
case 1137:
case 3573:
case 3654:
case 2661:
case 75:
case 957:
case 1241:
case 2614:
case 2595:
case 3888:
case 3705:
case 1661:
case 663:
case 1778:
case 3716:
case 3280:
case 3274:
case 2336:
case 2458:
case 407:
case 1614:
case 1382:
case 119:
case 3961:
case 2954:
case 738:
case 1408:
case 2839:
case 1127:
case 584:
case 2871:
case 1174:
case 1180:
case 2062:
case 560:
case 667:
case 2249:
case 4045:
case 2177:
case 1358:
case 1896:
case 2690:
case 1738:
case 1544:
case 1957:
case 417:
case 2243:
case 1821:
case 403:
case 268:
case 3963:
case 2907:
case 781:
case 3435:
case 1027:
case 2879:
case 3523:
case 899:
case 2426:
case 952:
case 1074:
case 1399:
case 3529:
case 978:
case 2491:
case 996:
case 344:
case 490:
case 3969:
case 1252:
case 4093:
case 872:
case 3231:
case 72:
case 1909:
case 3346:
case 2672:
case 439:
case 2998:
case 3088:
case 2397:
case 232:
case 1541:
case 1247:
case 1179:
case 960:
case 466:
case 3609:
case 3350:
case 3730:
case 2953:
case 786:
case 3849:
case 133:
case 2494:
case 2202:
case 3603:
case 2667:
case 1862:
case 616:
case 65:
case 4091:
case 3922:
case 3271:
case 3233:
case 1497:
case 2129:
case 1611:
case 2244:
case 3468:
case 2123:
case 2021:
case 1543:
case 3239:
case 3685:
case 923:
case 596:
case 3524:
case 2012:
case 2827:
case 1622:
case 1139:
case 1288:
case 289:
case 3841:
case 3784:
case 762:
case 84:
case 137:
case 3052:
case 1171:
case 1133:
case 1073:
case 606:
case 1031:
case 3577:
case 845:
case 2874:
case 701:
case 1951:
case 2288:
case 877:
case 3932:
case 638:
case 3144:
case 2394:
case 2410:
case 2139:
case 3095:
case 2079:
case 514:
case 2073:
case 2031:
case 2985:
case 2133:
case 650:
case 2686:
case 1880:
case 242:
case 3651:
case 1632:
case 2664:
case 2837:
case 3534:
case 763:
case 1096:
case 2549:
case 553:
case 2543:
case 3446:
case 2901:
case 2611:
case 1244:
case 3748:
case 483:
case 835:
case 3698:
case 1953:
case 711:
case 873:
case 3195:
case 2179:
case 504:
case 1112:
case 1667:
case 1834:
case 3296:
case 2033:
case 2173:
case 1959:
case 233:
case 1494:
case 2619:
case 1998:
case 3653:
case 1672:
case 3720:
case 2909:
case 3368:
case 3787:
case 2903:
case 3300:
case 132:
case 2541:
case 1023:
case 1397:
case 4008:
case 2613:
case 2824:
case 104:
case 1276:
case 1714:
case 3218:
case 3480:
case 4002:
case 3845:
case 2955:
case 1992:
case 383:
case 1349:
case 3427:
case 3362:
case 799:
case 1981:
case 1035:
case 349:
case 1761:
case 4095:
case 2640:
case 3704:
case 3692:
case 3978:
case 1594:
case 3324:
case 3681:
case 532:
case 296:
case 1769:
case 2449:
case 1989:
case 850:
case 589:
case 3434:
case 3742:
case 387:
case 1638:
case 2790:
case 1983:
case 2443:
case 1763:
case 677:
case 838:
case 3546:
case 968:
case 3235:
case 3689:
case 2510:
case 3337:
case 3938:
case 2282:
case 324:
case 2628:
case 1545:
case 3076:
case 1018:
case 542:
case 366:
case 3058:
case 1291:
case 2545:
case 2018:
case 855:
case 1717:
case 152:
case 2341:
case 339:
case 3500:
case 3225:
case 806:
case 645:
case 64:
case 2989:
case 214:
case 3191:
case 2769:
case 3327:
case 2763:
case 2135:
case 3928:
case 3099:
case 3707:
case 3568:
case 1790:
case 3158:
case 2118:
case 658:
case 2606:
case 1293:
case 4052:
case 3437:
case 2260:
case 2594:
case 2850:
case 1656:
case 3193:
case 204:
case 2276:
case 2714:
case 3334:
case 919:
case 2761:
case 1258:
case 3754:
case 2981:
case 533:
case 2992:
case 2349:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760781601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,];
var gg_b = "1760781601/";

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
