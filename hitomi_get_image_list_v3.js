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
case 1329:
case 43:
case 998:
case 455:
case 3680:
case 21:
case 307:
case 1295:
case 2608:
case 1482:
case 2754:
case 1223:
case 1108:
case 3592:
case 807:
case 1737:
case 3278:
case 438:
case 2968:
case 8:
case 3921:
case 3118:
case 1070:
case 1358:
case 2483:
case 1864:
case 206:
case 1923:
case 2904:
case 28:
case 4026:
case 665:
case 3001:
case 3987:
case 3120:
case 1563:
case 2747:
case 2024:
case 2706:
case 773:
case 1577:
case 4052:
case 2283:
case 3561:
case 2528:
case 2468:
case 112:
case 3421:
case 2562:
case 3287:
case 1975:
case 3013:
case 532:
case 3298:
case 1282:
case 1423:
case 2956:
case 2571:
case 3585:
case 2983:
case 2192:
case 1692:
case 708:
case 3095:
case 858:
case 261:
case 2260:
case 1825:
case 335:
case 1799:
case 1413:
case 1021:
case 3810:
case 2625:
case 835:
case 3984:
case 786:
case 70:
case 2693:
case 3110:
case 1800:
case 2518:
case 2412:
case 2892:
case 181:
case 310:
case 358:
case 1401:
case 880:
case 3203:
case 3753:
case 3859:
case 3128:
case 1661:
case 3677:
case 1873:
case 1779:
case 3470:
case 1751:
case 3075:
case 4016:
case 3990:
case 969:
case 2172:
case 129:
case 1672:
case 553:
case 3309:
case 2907:
case 2520:
case 2549:
case 2185:
case 1436:
case 2246:
case 1098:
case 3211:
case 1167:
case 3171:
case 2338:
case 2667:
case 1594:
case 1319:
case 4042:
case 3484:
case 199:
case 1901:
case 1213:
case 579:
case 3159:
case 3290:
case 2673:
case 1173:
case 2207:
case 2912:
case 3788:
case 715:
case 487:
case 2700:
case 1699:
case 1360:
case 2336:
case 567:
case 3235:
case 730:
case 237:
case 2419:
case 2644:
case 2899:
case 2248:
case 1096:
case 836:
case 3653:
case 1238:
case 489:
case 1634:
case 1761:
case 1346:
case 2179:
case 4005:
case 1307:
case 2151:
case 979:
case 1651:
case 3869:
case 3030:
case 2313:
case 3169:
case 3317:
case 2851:
case 2919:
case 2767:
case 3152:
case 1312:
case 103:
case 4020:
case 2516:
case 3541:
case 2879:
case 3089:
case 953:
case 1489:
case 3314:
case 3599:
case 3476:
case 2940:
case 3327:
case 17:
case 602:
case 2929:
case 2631:
case 400:
case 2526:
case 1154:
case 2258:
case 2654:
case 3996:
case 3133:
case 178:
case 3774:
case 1637:
case 52:
case 2466:
case 2240:
case 1854:
case 2229:
case 2323:
case 843:
case 2395:
case 714:
case 2958:
case 2440:
case 3365:
case 422:
case 932:
case 1147:
case 3551:
case 3496:
case 3038:
case 666:
case 3142:
case 2382:
case 3534:
case 1553:
case 4071:
case 2045:
case 492:
case 1930:
case 2966:
case 3381:
case 1806:
case 2009:
case 1641:
case 1289:
case 548:
case 2375:
case 893:
case 1383:
case 3643:
case 3794:
case 2458:
case 1847:
case 4078:
case 3835:
case 876:
case 3031:
case 2299:
case 2393:
case 2325:
case 3469:
case 1760:
case 3226:
case 725:
case 3054:
case 2300:
case 3540:
case 609:
case 2451:
case 4021:
case 3397:
case 3135:
case 2479:
case 2596:
case 3926:
case 376:
case 795:
case 1648:
case 3388:
case 411:
case 2434:
case 937:
case 2373:
case 2251:
case 2701:
case 4087:
case 1957:
case 3566:
case 1712:
case 1138:
case 2638:
case 2234:
case 3724:
case 3006:
case 2119:
case 1042:
case 2713:
case 2576:
case 429:
case 1707:
case 253:
case 1372:
case 3426:
case 1555:
case 1361:
case 607:
case 3377:
case 2795:
case 58:
case 1026:
case 2829:
case 794:
case 2158:
case 468:
case 3550:
case 518:
case 1768:
case 3374:
case 1231:
case 138:
case 2441:
case 2308:
case 588:
case 3442:
case 1722:
case 3548:
case 1406:
case 724:
case 1954:
case 2535:
case 3933:
case 13:
case 3727:
case 1447:
case 2237:
case 46:
case 1629:
case 1640:
case 2129:
case 1931:
case 2053:
case 1206:
case 1756:
case 3876:
case 3394:
case 658:
case 2630:
case 412:
case 1666:
case 2775:
case 610:
case 1454:
case 1069:
case 1830:
case 3655:
case 313:
case 1431:
case 3765:
case 635:
case 1189:
case 3057:
case 1509:
case 1195:
case 2088:
case 4035:
case 2584:
case 301:
case 2104:
case 1208:
case 298:
case 478:
case 2168:
case 1337:
case 1264:
case 374:
case 3918:
case 1622:
case 2122:
case 156:
case 3025:
case 1908:
case 906:
case 2868:
case 98:
case 918:
case 228:
case 3178:
case 751:
case 2331:
case 1415:
case 950:
case 1740:
case 29:
case 3420:
case 47:
case 1823:
case 1091:
case 100:
case 2077:
case 1517:
case 2156:
case 2503:
case 192:
case 3220:
case 1175:
case 572:
case 3418:
case 3898:
case 3249:
case 1882:
case 248:
case 3198:
case 1875:
case 1408:
case 733:
case 2511:
case 3205:
case 636:
case 3187:
case 962:
case 3920:
case 1464:
case 122:
case 2789:
case 3870:
case 2521:
case 3462:
case 3568:
case 623:
case 726:
case 1200:
case 1750:
case 3991:
case 1467:
case 117:
case 2292:
case 1136:
case 2160:
case 537:
case 961:
case 820:
case 760:
case 3884:
case 187:
case 1900:
case 2578:
case 2039:
case 2472:
case 1836:
case 320:
case 796:
case 2992:
case 3170:
case 1225:
case 3428:
case 1293:
case 1748:
case 191:
case 3522:
case 2461:
case 1581:
case 2357:
case 1020:
case 3959:
case 2846:
case 403:
case 1049:
case 3491:
case 4076:
case 539:
case 2738:
case 3583:
case 3890:
case 3103:
case 3410:
case 802:
case 1493:
case 3228:
case 752:
case 3556:
case 3971:
case 3617:
case 1113:
case 1400:
case 3190:
case 3803:
case 2613:
case 2972:
case 302:
case 1607:
case 2587:
case 1273:
case 3111:
case 3386:
case 2146:
case 1646:
case 2094:
case 2285:
case 2961:
case 141:
case 189:
case 2812:
case 2492:
case 2598:
case 1039:
case 1860:
case 949:
case 2900:
case 1578:
case 2018:
case 3997:
case 2399:
case 80:
case 1461:
case 291:
case 886:
case 997:
case 2225:
case 75:
case 3326:
case 2750:
case 30:
case 386:
case 816:
case 3297:
case 1080:
case 3595:
case 911:
case 2660:
case 221:
case 758:
case 3288:
case 808:
case 3684:
case 167:
case 927:
case 2467:
case 3523:
case 2925:
case 2273:
case 3497:
case 3817:
case 2565:
case 3963:
case 2113:
case 3690:
case 1613:
case 3582:
case 2267:
case 2005:
case 3488:
case 1285:
case 1961:
case 2379:
case 2646:
case 1094:
case 2801:
case 1112:
case 3575:
case 2973:
case 2020:
case 1357:
case 929:
case 2101:
case 1601:
case 2049:
case 1272:
case 503:
case 219:
case 169:
case 4055:
case 3603:
case 1985:
case 1261:
case 2908:
case 3796:
case 256:
case 2622:
case 1122:
case 1354:
case 200:
case 3114:
case 2091:
case 2729:
case 128:
case 1331:
case 707:
case 2895:
case 3678:
case 968:
case 2123:
case 1104:
case 2758:
case 2208:
case 1623:
case 357:
case 1584:
case 1088:
case 3092:
case 1695:
case 3939:
case 405:
case 2337:
case 242:
case 96:
case 2264:
case 1822:
case 578:
case 3280:
case 859:
case 4045:
case 2071:
case 3881:
case 1306:
case 3342:
case 2182:
case 3698:
case 2408:
case 3294:
case 3513:
case 1789:
case 3480:
case 2464:
case 912:
case 3687:
case 2524:
case 1156:
case 3994:
case 2656:
case 2028:
case 2517:
case 2341:
case 3501:
case 148:
case 2175:
case 4009:
case 670:
case 2882:
case 292:
case 1730:
case 384:
case 646:
case 3232:
case 2931:
case 2640:
case 1364:
case 1237:
case 3778:
case 978:
case 2447:
case 2026:
case 3443:
case 1840:
case 406:
case 1795:
case 3099:
case 884:
case 3721:
case 2768:
case 97:
case 238:
case 450:
case 1937:
case 418:
case 652:
case 2069:
case 2830:
case 1782:
case 2454:
case 4024:
case 2509:
case 3349:
case 1689:
case 3320:
case 1315:
case 2431:
case 363:
case 4002:
case 2889:
case 3943:
case 2756:
case 626:
case 3305:
case 723:
case 1437:
case 3855:
case 3051:
case 1941:
case 1166:
case 1999:
case 1451:
case 736:
case 633:
case 461:
case 2244:
case 2648:
case 1148:
case 527:
case 3770:
case 1596:
case 830:
case 3635:
case 549:
case 1848:
case 4014:
case 2650:
case 2457:
case 254:
case 330:
case 2944:
case 815:
case 1325:
case 1736:
case 2760:
case 597:
case 153:
case 3845:
case 2372:
case 4081:
case 903:
case 1819:
case 2016:
case 1713:
case 1499:
case 1576:
case 3790:
case 2361:
case 1979:
case 651:
case 1934:
case 3953:
case 1043:
case 3711:
case 2957:
case 3530:
case 4065:
case 2712:
case 1251:
case 1701:
case 599:
case 3362:
case 2042:
case 2619:
case 2444:
case 1119:
case 2138:
case 1234:
case 2430:
case 1137:
case 278:
case 955:
case 498:
case 93:
case 3048:
case 2831:
case 2304:
case 3132:
case 1631:
case 27:
case 49:
case 938:
case 1929:
case 428:
case 3832:
case 3633:
case 2322:
case 1258:
case 1654:
case 1526:
case 1837:
case 556:
case 1141:
case 592:
case 2806:
case 1009:
case 2641:
case 686:
case 2930:
case 2356:
case 3255:
case 2989:
case 1266:
case 2230:
case 1440:
case 1429:
case 3749:
case 3955:
case 1045:
case 3398:
case 713:
case 2586:
case 1606:
case 3384:
case 1793:
case 1899:
case 1248:
case 2360:
case 517:
case 1725:
case 3040:
case 3029:
case 370:
case 171:
case 870:
case 591:
case 825:
case 2792:
case 1533:
case 673:
case 104:
case 776:
case 4039:
case 1700:
case 1199:
case 4074:
case 3303:
case 1767:
case 2543:
case 1055:
case 3945:
case 3771:
case 657:
case 845:
case 2938:
case 1657:
case 2157:
case 1301:
case 2076:
case 203:
case 519:
case 2312:
case 3759:
case 3209:
case 3853:
case 1834:
case 1179:
case 3506:
case 2679:
case 3245:
case 3311:
case 2346:
case 2238:
case 2634:
case 3153:
case 3728:
case 3390:
case 2307:
case 1151:
case 2651:
case 3909:
case 326:
case 3424:
case 790:
case 991:
case 3610:
case 297:
case 477:
case 3022:
case 1625:
case 2125:
case 3691:
case 2574:
case 360:
case 281:
case 2539:
case 1412:
case 1027:
case 1892:
case 987:
case 1518:
case 211:
case 1260:
case 860:
case 396:
case 3508:
case 4032:
case 2348:
case 227:
case 1192:
case 2692:
case 3402:
case 663:
case 2413:
case 2893:
case 1600:
case 2825:
case 3197:
case 247:
case 0:
case 2167:
case 3671:
case 740:
case 3924:
case 1505:
case 989:
case 1872:
case 2685:
case 1065:
case 1757:
case 1207:
case 352:
case 2173:
case 3662:
case 3659:
case 1861:
case 3877:
case 2779:
case 852:
case 3217:
case 3083:
case 1946:
case 684:
case 4043:
case 2867:
case 1549:
case 453:
case 1081:
case 1212:
case 1885:
case 3163:
case 2751:
case 2913:
case 701:
case 2808:
case 900:
case 150:
case 3227:
case 3481:
case 2737:
case 118:
case 106:
case 18:
case 2864:
case 3880:
case 1510:
case 2995:
case 3593:
case 3914:
case 26:
case 53:
case 2329:
case 3465:
case 3180:
case 2340:
case 3733:
case 3839:
case 1608:
case 2482:
case 2223:
case 2295:
case 3874:
case 3396:
case 351:
case 630:
case 2366:
case 1562:
case 3716:
case 3573:
case 1468:
case 3046:
case 1404:
case 2423:
case 2011:
case 1956:
case 4053:
case 1571:
case 1615:
case 3281:
case 2563:
case 1747:
case 333:
case 3012:
case 3376:
case 2275:
case 3649:
case 992:
case 615:
case 1389:
case 1017:
case 3742:
case 282:
case 2982:
case 1706:
case 1256:
case 78:
case 342:
case 3337:
case 3264:
case 2621:
case 1918:
case 2974:
case 856:
case 2280:
case 257:
case 1332:
case 3208:
case 800:
case 2814:
case 1878:
case 1405:
case 2092:
case 1560:
case 2536:
case 1420:
case 443:
case 524:
case 3823:
case 1449:
case 1218:
case 1627:
case 788:
case 2127:
case 2678:
case 3010:
case 1093:
case 3908:
case 356:
case 1025:
case 2501:
case 933:
case 2474:
case 259:
case 392:
case 1512:
case 3175:
case 1249:
case 544:
case 423:
case 3524:
case 1905:
case 2865:
case 3517:
case 2061:
case 762:
case 3028:
case 822:
case 1665:
case 3062:
case 2776:
case 3915:
case 3059:
case 1949:
case 2687:
case 3464:
case 322:
case 1507:
case 2881:
case 1546:
case 1205:
case 1755:
case 2342:
case 1198:
case 3875:
case 3502:
case 4038:
case 3660:
case 996:
case 3136:
case 321:
case 2595:
case 1910:
case 1008:
case 3467:
case 1504:
case 1471:
case 3925:
case 317:
case 2288:
case 2684:
case 1184:
case 190:
case 20:
case 3200:
case 1991:
case 1462:
case 3473:
case 1568:
case 1210:
case 216:
case 166:
case 3293:
case 3748:
case 926:
case 2477:
case 1522:
case 436:
case 1170:
case 960:
case 1291:
case 3018:
case 175:
case 120:
case 3527:
case 1884:
case 387:
case 3514:
case 208:
case 1556:
case 3967:
case 3425:
case 1971:
case 2117:
case 1583:
case 1890:
case 2352:
case 2124:
case 1624:
case 2603:
case 1228:
case 3493:
case 1962:
case 2575:
case 1015:
case 3612:
case 2802:
case 4089:
case 319:
case 2263:
case 1959:
case 1491:
case 3049:
case 1353:
case 2582:
case 3334:
case 3267:
case 1271:
case 1386:
case 1111:
case 819:
case 1928:
case 3801:
case 3379:
case 1262:
case 952:
case 3273:
case 3400:
case 2690:
case 1709:
case 545:
case 3565:
case 2963:
case 526:
case 3033:
case 3760:
case 1226:
case 1054:
case 410:
case 737:
case 560:
case 995:
case 354:
case 682:
case 3392:
case 480:
case 2635:
case 4095:
case 854:
case 925:
case 165:
case 215:
case 1540:
case 45:
case 1529:
case 1952:
case 2286:
case 2371:
case 1969:
case 3138:
case 2253:
case 1724:
case 2809:
case 3444:
case 2359:
case 668:
case 1566:
case 3957:
case 1252:
case 1702:
case 3361:
case 1377:
case 1426:
case 2711:
case 3257:
case 1363:
case 1609:
case 2041:
case 4075:
case 2109:
case 2790:
case 2589:
case 3838:
case 3768:
case 1374:
case 164:
case 1896:
case 699:
case 434:
case 2318:
case 3026:
case 3704:
case 3254:
case 629:
case 3629:
case 1727:
case 355:
case 2778:
case 3954:
case 838:
case 3722:
case 551:
case 1548:
case 1781:
case 3666:
case 681:
case 4013:
case 1519:
case 2538:
case 2305:
case 2034:
case 772:
case 3756:
case 2943:
case 2349:
case 3947:
case 1057:
case 2676:
case 533:
case 1176:
case 2155:
case 2798:
case 3906:
case 3699:
case 475:
case 295:
case 508:
case 2531:
case 731:
case 466:
case 2626:
case 516:
case 2370:
case 2554:
case 50:
case 490:
case 586:
case 225:
case 2040:
case 1537:
case 2029:
case 2710:
case 3532:
case 3144:
case 1852:
case 2909:
case 600:
case 402:
case 3772:
case 1763:
case 1030:
case 1869:
case 245:
case 656:
case 1435:
case 2245:
case 1653:
case 2728:
case 803:
case 2762:
case 1541:
case 1089:
case 3157:
case 440:
case 3312:
case 2759:
case 2853:
case 3543:
case 2652:
case 1152:
case 2303:
case 3938:
case 3785:
case 779:
case 3322:
case 4093:
case 2633:
case 1133:
case 2455:
case 2050:
case 37:
case 914:
case 2378:
case 224:
case 1599:
case 1476:
case 2832:
case 401:
case 87:
case 3831:
case 557:
case 2048:
case 2544:
case 2132:
case 3304:
case 1739:
case 1833:
case 294:
case 378:
case 3368:
case 2321:
case 2398:
case 3106:
case 1579:
case 2019:
case 691:
case 2387:
case 3147:
case 1976:
case 193:
case 2843:
case 573:
case 3230:
case 617:
case 2255:
case 3847:
case 732:
case 2143:
case 3383:
case 1794:
case 3289:
case 1842:
case 3930:
case 2616:
case 3641:
case 1818:
case 584:
case 3223:
case 3108:
case 3588:
case 1592:
case 1036:
case 2839:
case 2396:
case 868:
case 3084:
case 251:
case 1487:
case 1221:
case 36:
case 3597:
case 3164:
case 1680:
case 2180:
case 2927:
case 2500:
case 72:
case 86:
case 2593:
case 2880:
case 3358:
case 1639:
case 1921:
case 2618:
case 1118:
case 2227:
case 1561:
case 1998:
case 3003:
case 812:
case 382:
case 74:
case 4057:
case 1572:
case 2281:
case 3563:
case 1805:
case 959:
case 3115:
case 2894:
case 2649:
case 3275:
case 1987:
case 1149:
case 2620:
case 563:
case 2605:
case 3815:
case 3495:
case 1105:
case 1585:
case 748:
case 3423:
case 1849:
case 3282:
case 483:
case 1298:
case 2567:
case 1694:
case 1743:
case 3366:
case 2265:
case 3741:
case 3090:
case 3100:
case 3413:
case 3893:
case 1490:
case 3580:
case 1697:
case 3825:
case 135:
case 897:
case 296:
case 1411:
case 881:
case 1891:
case 849:
case 476:
case 180:
case 3236:
case 2188:
case 327:
case 1284:
case 1095:
case 381:
case 110:
case 158:
case 3401:
case 1191:
case 3539:
case 226:
case 3800:
case 1270:
case 397:
case 2897:
case 2022:
case 1309:
case 1871:
case 3867:
case 3201:
case 3751:
case 2515:
case 329:
case 2083:
case 2217:
case 1786:
case 3873:
case 3779:
case 1470:
case 899:
case 2628:
case 246:
case 1911:
case 1859:
case 3661:
case 1677:
case 3734:
case 1162:
case 3173:
case 2877:
case 1828:
case 3901:
case 3594:
case 3319:
case 1484:
case 1345:
case 3685:
case 1082:
case 2924:
case 1903:
case 3098:
case 769:
case 1211:
case 4006:
case 3027:
case 3892:
case 430:
case 717:
case 1691:
case 3014:
case 721:
case 258:
case 861:
case 2191:
case 920:
case 160:
case 210:
case 1897:
case 1417:
case 126:
case 3744:
case 3693:
case 2403:
case 2110:
case 1610:
case 3960:
case 235:
case 25:
case 1197:
case 3407:
case 2697:
case 415:
case 1068:
case 565:
case 2490:
case 2810:
case 3600:
case 2970:
case 3192:
case 1402:
case 576:
case 361:
case 3260:
case 196:
case 2411:
case 3446:
case 2828:
case 1877:
case 3065:
case 152:
case 3207:
case 3912:
case 3757:
case 2162:
case 1924:
case 2082:
case 3246:
case 2903:
case 2211:
case 719:
case 3505:
case 1769:
case 3872:
case 1671:
case 3885:
case 789:
case 2075:
case 1515:
case 2871:
case 2309:
case 3907:
case 3212:
case 1177:
case 2677:
case 3946:
case 2203:
case 1628:
case 146:
case 1083:
case 1217:
case 1902:
case 2786:
case 3483:
case 306:
case 1227:
case 350:
case 2278:
case 564:
case 2921:
case 1139:
case 1874:
case 850:
case 818:
case 1733:
case 3608:
case 2498:
case 700:
case 3204:
case 3754:
case 1500:
case 653:
case 2680:
case 1927:
case 1180:
case 88:
case 3731:
case 2487:
case 31:
case 1914:
case 974:
case 2849:
case 3404:
case 1046:
case 3571:
case 2585:
case 3002:
case 1605:
case 677:
case 2105:
case 2421:
case 2287:
case 1265:
case 1981:
case 2355:
case 722:
case 2998:
case 3706:
case 3528:
case 631:
case 3283:
case 2561:
case 3422:
case 513:
case 1649:
case 1414:
case 2987:
case 463:
case 2149:
case 1620:
case 2478:
case 3615:
case 3747:
case 1281:
case 133:
case 1427:
case 4092:
case 1544:
case 738:
case 3958:
case 457:
case 3395:
case 1321:
case 3240:
case 669:
case 2739:
case 2833:
case 305:
case 755:
case 73:
case 3837:
case 1455:
case 805:
case 3654:
case 1832:
case 2476:
case 2314:
case 1378:
case 124:
case 964:
case 1050:
case 243:
case 3929:
case 1143:
case 3458:
case 2643:
case 3552:
case 1705:
case 1255:
case 667:
case 223:
case 3141:
case 2116:
case 3009:
case 913:
case 372:
case 2842:
case 3375:
case 459:
case 2276:
case 983:
case 2579:
case 3841:
case 2496:
case 3606:
case 1019:
case 3045:
case 1642:
case 3382:
case 1398:
case 3266:
case 3440:
case 2551:
case 3715:
case 3647:
case 40:
case 1791:
case 871:
case 1029:
case 2826:
case 2235:
case 3336:
case 3725:
case 1384:
case 3419:
case 3644:
case 3793:
case 337:
case 3899:
case 408:
case 1531:
case 3250:
case 3700:
case 575:
case 1409:
case 520:
case 2788:
case 2935:
case 371:
case 566:
case 2126:
case 3948:
case 1209:
case 1759:
case 1853:
case 62:
case 1886:
case 2089:
case 3301:
case 1762:
case 3516:
case 2541:
case 3773:
case 3919:
case 3851:
case 1669:
case 1652:
case 2152:
case 1303:
case 3767:
case 1771:
case 69:
case 2763:
case 1547:
case 2030:
case 2869:
case 145:
case 628:
case 3313:
case 2777:
case 2302:
case 3448:
case 3179:
case 2435:
case 1186:
case 1311:
case 839:
case 3237:
case 2714:
case 3858:
case 3129:
case 451:
case 3308:
case 3535:
case 184:
case 2933:
case 77:
case 2044:
case 2196:
case 1318:
case 2339:
case 2896:
case 2416:
case 2374:
case 114:
case 778:
case 1932:
case 3795:
case 1443:
case 3829:
case 3840:
case 2233:
case 3315:
case 3241:
case 1787:
case 2176:
case 1349:
case 4012:
case 3689:
case 2057:
case 3782:
case 661:
case 1243:
case 1155:
case 832:
case 2942:
case 2916:
case 1051:
case 3775:
case 993:
case 2781:
case 1855:
case 3053:
case 4046:
case 1305:
case 1034:
case 1538:
case 2394:
case 2876:
case 1432:
case 2519:
case 3032:
case 1770:
case 3596:
case 1635:
case 276:
case 2926:
case 3850:
case 3148:
case 4004:
case 2388:
case 496:
case 2529:
case 535:
case 55:
case 265:
case 115:
case 3999:
case 4022:
case 1310:
case 936:
case 426:
case 185:
case 2469:
case 831:
case 3150:
case 3299:
case 558:
case 460:
case 879:
case 1953:
case 2426:
case 3043:
case 2252:
case 1986:
case 61:
case 3951:
case 3713:
case 353:
case 1703:
case 1809:
case 2006:
case 3119:
case 2969:
case 3367:
case 68:
case 703:
case 3234:
case 853:
case 2645:
case 3279:
case 1145:
case 3701:
case 3251:
case 1362:
case 452:
case 618:
case 2047:
case 1530:
case 650:
case 1670:
case 2170:
case 1326:
case 3461:
case 2210:
case 4058:
case 2428:
case 108:
case 727:
case 1997:
case 958:
case 220:
case 1463:
case 910:
case 1288:
case 367:
case 2910:
case 980:
case 749:
case 781:
case 3485:
case 3160:
case 935:
case 2870:
case 3521:
case 2462:
case 797:
case 2991:
case 2459:
case 186:
case 2064:
case 1977:
case 3285:
case 2928:
case 729:
case 3094:
case 3598:
case 1582:
case 2271:
case 3812:
case 1488:
case 3492:
case 445:
case 3972:
case 1963:
case 2709:
case 2803:
case 2262:
case 3587:
case 3107:
case 2890:
case 2410:
case 2103:
case 2624:
case 1603:
case 799:
case 1277:
case 3738:
case 3807:
case 2556:
case 2971:
case 2745:
case 1369:
case 3601:
case 2811:
case 2959:
case 2491:
case 3272:
case 240:
case 1802:
case 2962:
case 1575:
case 2015:
case 2178:
case 543:
case 2420:
case 3804:
case 2449:
case 2614:
case 2025:
case 898:
case 3122:
case 2093:
case 3822:
case 3097:
case 1280:
case 639:
case 32:
case 2000:
case 1621:
case 494:
case 1939:
case 3168:
case 274:
case 1092:
case 828:
case 3088:
case 1827:
case 768:
case 2405:
case 1494:
case 157:
case 3584:
case 201:
case 593:
case 34:
case 2920:
case 3347:
case 3856:
case 2949:
case 604:
case 1687:
case 1776:
case 3590:
case 2665:
case 1085:
case 4019:
case 1342:
case 2198:
case 3682:
case 1698:
case 1294:
case 2205:
case 2755:
case 1881:
case 2249:
case 3675:
case 2898:
case 1439:
case 444:
case 1072:
case 3063:
case 3730:
case 2512:
case 159:
case 2681:
case 1316:
case 1181:
case 1501:
case 1474:
case 2887:
case 1994:
case 84:
case 637:
case 1061:
case 3183:
case 3503:
case 2905:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1771639202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,];
var gg_b = "1771639202/";

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
