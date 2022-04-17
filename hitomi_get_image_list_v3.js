// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 3005:
case 958:
case 3255:
case 2782:
case 3030:
case 494:
case 2309:
case 1406:
case 2414:
case 2159:
case 64:
case 343:
case 2568:
case 2013:
case 3062:
case 3818:
case 3163:
case 70:
case 3651:
case 3657:
case 3127:
case 869:
case 1091:
case 1492:
case 164:
case 2281:
case 2347:
case 426:
case 738:
case 1519:
case 3446:
case 2974:
case 439:
case 2829:
case 3442:
case 2999:
case 3096:
case 2033:
case 929:
case 1047:
case 2431:
case 3827:
case 3419:
case 518:
case 1200:
case 1743:
case 2903:
case 661:
case 2763:
case 3725:
case 1221:
case 3331:
case 1235:
case 3980:
case 77:
case 165:
case 3550:
case 21:
case 4093:
case 3008:
case 3474:
case 1567:
case 754:
case 3465:
case 1040:
case 1250:
case 3307:
case 2993:
case 1462:
case 1758:
case 2754:
case 2863:
case 519:
case 2207:
case 792:
case 3562:
case 3886:
case 507:
case 1497:
case 2890:
case 2785:
case 217:
case 1927:
case 1347:
case 568:
case 1168:
case 564:
case 1987:
case 1904:
case 163:
case 1404:
case 3425:
case 1182:
case 860:
case 1331:
case 508:
case 1980:
case 346:
case 353:
case 1216:
case 3908:
case 622:
case 1382:
case 1883:
case 79:
case 135:
case 2838:
case 3853:
case 896:
case 1794:
case 1937:
case 2064:
case 3921:
case 3941:
case 3799:
case 2718:
case 3353:
case 2307:
case 3520:
case 3870:
case 2204:
case 2016:
case 3856:
case 2742:
case 1831:
case 2609:
case 3348:
case 316:
case 3117:
case 3614:
case 3033:
case 1359:
case 3927:
case 1233:
case 2975:
case 152:
case 1880:
case 1152:
case 2015:
case 984:
case 2574:
case 3757:
case 1594:
case 345:
case 2528:
case 1207:
case 1899:
case 2965:
case 3231:
case 1352:
case 4079:
case 579:
case 1167:
case 1772:
case 299:
case 2850:
case 662:
case 1993:
case 673:
case 194:
case 337:
case 219:
case 2080:
case 2411:
case 1061:
case 2765:
case 1564:
case 475:
case 2637:
case 2652:
case 1431:
case 3885:
case 3828:
case 2206:
case 1649:
case 3883:
case 274:
case 1675:
case 2955:
case 74:
case 2683:
case 1705:
case 3215:
case 467:
case 960:
case 2054:
case 2479:
case 3830:
case 3629:
case 1144:
case 1425:
case 1341:
case 1159:
case 841:
case 1761:
case 884:
case 2801:
case 1305:
case 2285:
case 3514:
case 1166:
case 3463:
case 97:
case 1475:
case 1698:
case 969:
case 1:
case 3016:
case 3210:
case 1597:
case 2183:
case 877:
case 145:
case 3139:
case 3158:
case 1708:
case 1622:
case 206:
case 2226:
case 3081:
case 3656:
case 798:
case 245:
case 1338:
case 852:
case 2068:
case 3733:
case 1136:
case 2713:
case 1825:
case 1388:
case 1574:
case 1561:
case 1000:
case 1154:
case 3087:
case 370:
case 3429:
case 2780:
case 2573:
case 957:
case 1870:
case 1199:
case 3539:
case 2921:
case 25:
case 1195:
case 1543:
case 2457:
case 1498:
case 3368:
case 3247:
case 3178:
case 774:
case 1333:
case 1550:
case 1364:
case 1029:
case 843:
case 2634:
case 3367:
case 2530:
case 3427:
case 3812:
case 2944:
case 3755:
case 3730:
case 248:
case 2615:
case 363:
case 1051:
case 750:
case 2121:
case 2779:
case 154:
case 2460:
case 3326:
case 728:
case 3793:
case 1134:
case 1630:
case 1158:
case 1058:
case 1031:
case 2330:
case 1526:
case 3228:
case 681:
case 3833:
case 3880:
case 3332:
case 2229:
case 1733:
case 1283:
case 2693:
case 1502:
case 3692:
case 2735:
case 3110:
case 3852:
case 864:
case 2519:
case 1605:
case 3176:
case 744:
case 3987:
case 472:
case 3377:
case 3918:
case 664:
case 1717:
case 3069:
case 1460:
case 3638:
case 543:
case 2060:
case 3435:
case 3552:
case 941:
case 3777:
case 956:
case 5:
case 3274:
case 3211:
case 1215:
case 4056:
case 1379:
case 2591:
case 2910:
case 3956:
case 3786:
case 1627:
case 136:
case 655:
case 2882:
case 920:
case 3681:
case 381:
case 1145:
case 1178:
case 2260:
case 2416:
case 292:
case 3145:
case 2761:
case 2141:
case 1369:
case 1222:
case 327:
case 1535:
case 1912:
case 3709:
case 1495:
case 3772:
case 1062:
case 1074:
case 1046:
case 2673:
case 205:
case 3619:
case 854:
case 365:
case 3381:
case 47:
case 1834:
case 1680:
case 3195:
case 1644:
case 2621:
case 1433:
case 3949:
case 9:
case 2294:
case 2450:
case 769:
case 1530:
case 660:
case 3912:
case 3457:
case 3086:
case 824:
case 2249:
case 489:
case 2677:
case 2418:
case 646:
case 1641:
case 1343:
case 2627:
case 3634:
case 3586:
case 1496:
case 1093:
case 18:
case 1802:
case 3795:
case 1572:
case 4060:
case 2869:
case 1312:
case 1027:
case 992:
case 336:
case 1326:
case 2459:
case 3088:
case 1894:
case 3897:
case 3774:
case 571:
case 1721:
case 3824:
case 842:
case 1741:
case 939:
case 2421:
case 2529:
case 3778:
case 12:
case 3026:
case 453:
case 3522:
case 1372:
case 2861:
case 1386:
case 1528:
case 3876:
case 3392:
case 677:
case 2367:
case 2860:
case 3232:
case 2744:
case 699:
case 771:
case 1088:
case 3806:
case 3964:
case 4004:
case 1453:
case 1634:
case 201:
case 3405:
case 2625:
case 1613:
case 2488:
case 3408:
case 2516:
case 1838:
case 2106:
case 224:
case 3750:
case 3208:
case 3546:
case 3318:
case 339:
case 2447:
case 2705:
case 2003:
case 4042:
case 3214:
case 38:
case 690:
case 2605:
case 2126:
case 3257:
case 3347:
case 2087:
case 3717:
case 3089:
case 2154:
case 1096:
case 2090:
case 65:
case 3902:
case 2095:
case 3844:
case 2619:
case 2681:
case 1799:
case 2405:
case 418:
case 3497:
case 1493:
case 720:
case 2363:
case 262:
case 3502:
case 400:
case 2919:
case 1115:
case 2894:
case 3782:
case 2770:
case 1105:
case 2036:
case 3415:
case 4005:
case 2169:
case 3622:
case 3567:
case 252:
case 3686:
case 1575:
case 1262:
case 1722:
case 3762:
case 2389:
case 620:
case 763:
case 615:
case 1137:
case 2803:
case 831:
case 970:
case 3000:
case 259:
case 3796:
case 1865:
case 3276:
case 3022:
case 3264:
case 1126:
case 1381:
case 1684:
case 2491:
case 3273:
case 3125:
case 651:
case 451:
case 2351:
case 2979:
case 1296:
case 2061:
case 45:
case 3744:
case 1441:
case 3440:
case 3764:
case 2678:
case 2171:
case 1247:
case 31:
case 1208:
case 3284:
case 1662:
case 2525:
case 254:
case 3810:
case 1393:
case 3998:
case 246:
case 1263:
case 20:
case 3990:
case 907:
case 101:
case 625:
case 3455:
case 2601:
case 1193:
case 1640:
case 3147:
case 1302:
case 1183:
case 488:
case 2972:
case 691:
case 3151:
case 2264:
case 816:
case 237:
case 2956:
case 3250:
case 1289:
case 4087:
case 500:
case 3468:
case 3975:
case 814:
case 3528:
case 3857:
case 2898:
case 2361:
case 2865:
case 1238:
case 3535:
case 1004:
case 1578:
case 1750:
case 1565:
case 3402:
case 1437:
case 2027:
case 3411:
case 2702:
case 2996:
case 120:
case 2524:
case 4017:
case 3097:
case 1745:
case 3617:
case 2588:
case 1322:
case 2004:
case 4094:
case 1970:
case 778:
case 2878:
case 1396:
case 3647:
case 2559:
case 2849:
case 2298:
case 1730:
case 3020:
case 1218:
case 3445:
case 1879:
case 496:
case 1774:
case 1906:
case 3379:
case 1579:
case 3297:
case 2997:
case 3621:
case 3663:
case 1784:
case 2787:
case 387:
case 2086:
case 2200:
case 4070:
case 3010:
case 557:
case 3930:
case 562:
case 3044:
case 3729:
case 3188:
case 1002:
case 2783:
case 578:
case 2273:
case 362:
case 415:
case 761:
case 3802:
case 3732:
case 3239:
case 765:
case 349:
case 608:
case 972:
case 734:
case 2531:
case 3661:
case 2263:
case 1843:
case 1294:
case 1109:
case 2283:
case 3801:
case 2051:
case 3505:
case 504:
case 72:
case 2717:
case 2046:
case 4022:
case 359:
case 3660:
case 3760:
case 2659:
case 3628:
case 1443:
case 106:
case 3237:
case 989:
case 818:
case 3144:
case 2493:
case 2372:
case 2939:
case 2374:
case 1952:
case 1188:
case 1580:
case 3727:
case 1045:
case 3386:
case 1989:
case 2286:
case 1763:
case 422:
case 162:
case 3600:
case 2316:
case 4043:
case 2322:
case 1560:
case 933:
case 3900:
case 3199:
case 133:
case 2:
case 3608:
case 1962:
case 3553:
case 3454:
case 3794:
case 2002:
case 1816:
case 2239:
case 2236:
case 3476:
case 3631:
case 1696:
case 3739:
case 2776:
case 2595:
case 550:
case 1150:
case 2730:
case 3548:
case 3942:
case 1714:
case 3995:
case 2055:
case 1800:
case 725:
case 3172:
case 1363:
case 1380:
case 967:
case 2989:
case 326:
case 1900:
case 95:
case 1419:
case 1832:
case 364:
case 2884:
case 2692:
case 1073:
case 1709:
case 3357:
case 1030:
case 2313:
case 1532:
case 2661:
case 2039:
case 1591:
case 3417:
case 3298:
case 3561:
case 777:
case 1224:
case 54:
case 2856:
case 2842:
case 3316:
case 1754:
case 915:
case 1923:
case 2707:
case 908:
case 1959:
case 2788:
case 55:
case 1844:
case 4021:
case 2244:
case 2885:
case 3896:
case 2052:
case 3957:
case 3499:
case 1678:
case 1261:
case 2506:
case 2596:
case 3931:
case 2913:
case 1019:
case 2332:
case 378:
case 555:
case 1439:
case 581:
case 1988:
case 3126:
case 1227:
case 983:
case 2326:
case 900:
case 3412:
case 3595:
case 411:
case 3698:
case 200:
case 2303:
case 1301:
case 53:
case 1753:
case 1632:
case 1466:
case 3431:
case 2617:
case 3690:
case 3804:
case 1782:
case 3095:
case 1652:
case 3279:
case 98:
case 3067:
case 3267:
case 447:
case 898:
case 1212:
case 3400:
case 1114:
case 4055:
case 269:
case 698:
case 1943:
case 749:
case 127:
case 278:
case 2402:
case 2268:
case 2357:
case 1346:
case 3487:
case 2243:
case 2872:
case 1651:
case 3699:
case 2576:
case 1522:
case 968:
case 3229:
case 1141:
case 2945:
case 3855:
case 2188:
case 3428:
case 3225:
case 2139:
case 1725:
case 2977:
case 2301:
case 358:
case 2880:
case 1905:
case 1965:
case 689:
case 322:
case 567:
case 2318:
case 2259:
case 3220:
case 1191:
case 606:
case 2137:
case 2284:
case 980:
case 3213:
case 2508:
case 3209:
case 1853:
case 586:
case 3023:
case 712:
case 3334:
case 865:
case 2364:
case 2806:
case 3511:
case 3432:
case 785:
case 914:
case 3054:
case 2117:
case 3418:
case 2254:
case 3598:
case 2721:
case 1005:
case 910:
case 2687:
case 2119:
case 3342:
case 1932:
case 3549:
case 2675:
case 1095:
case 1151:
case 3911:
case 3754:
case 3290:
case 1976:
case 3249:
case 1813:
case 2963:
case 1738:
case 2386:
case 89:
case 2384:
case 2299:
case 2187:
case 2959:
case 3472:
case 3759:
case 2653:
case 2319:
case 2691:
case 3788:
case 3893:
case 209:
case 540:
case 319:
case 2699:
case 1405:
case 2565:
case 2664:
case 3849:
case 2798:
case 904:
case 410:
case 110:
case 2490:
case 3031:
case 1133:
case 2335:
case 298:
case 3971:
case 2672:
case 481:
case 111:
case 261:
case 4047:
case 3547:
case 503:
case 1209:
case 221:
case 2917:
case 805:
case 126:
case 3217:
case 3036:
case 1358:
case 4059:
case 2401:
case 1797:
case 847:
case 975:
case 997:
case 862:
case 3932:
case 678:
case 264:
case 215:
case 2390:
case 371:
case 1032:
case 2607:
case 3471:
case 3892:
case 2831:
case 534:
case 3458:
case 2794:
case 2480:
case 1515:
case 951:
case 168:
case 1119:
case 899:
case 732:
case 1311:
case 3243:
case 583:
case 412:
case 2341:
case 536:
case 3700:
case 3073:
case 1783:
case 2216:
case 3577:
case 3068:
case 2186:
case 2195:
case 2513:
case 565:
case 3986:
case 926:
case 469:
case 1035:
case 1124:
case 3831:
case 225:
case 1665:
case 3835:
case 2904:
case 1878:
case 417:
case 2468:
case 3542:
case 2329:
case 3770:
case 1972:
case 3336:
case 493:
case 2499:
case 2854:
case 3551:
case 3390:
case 1681:
case 605:
case 1664:
case 502:
case 3836:
case 1016:
case 3878:
case 1146:
case 3399:
case 113:
case 1685:
case 1148:
case 452:
case 3186:
case 979:
case 850:
case 515:
case 807:
case 3616:
case 2879:
case 1688:
case 2533:
case 3746:
case 3003:
case 2960:
case 1297:
case 928:
case 1101:
case 2818:
case 715:
case 3713:
case 641:
case 4009:
case 1642:
case 2648:
case 4058:
case 2380:
case 1339:
case 3974:
case 1260:
case 3922:
case 3053:
case 446:
case 2130:
case 1598:
case 2604:
case 3594:
case 1446:
case 2276:
case 1187:
case 1817:
case 3506:
case 2444:
case 119:
case 2840:
case 42:
case 304:
case 946:
case 2804:
case 2998:
case 3740:
case 2302:
case 3785:
case 1910:
case 834:
case 1869:
case 3588:
case 4020:
case 1851:
case 1100:
case 1617:
case 3038:
case 2133:
case 56:
case 3711:
case 3074:
case 32:
case 1583:
case 3792:
case 3112:
case 2715:
case 3582:
case 1204:
case 1033:
case 833:
case 2626:
case 1186:
case 3093:
case 570:
case 3473:
case 1719:
case 2306:
case 1588:
case 178:
case 1249:
case 2987:
case 3420:
case 2813:
case 1766:
case 2752:
case 3509:
case 1391:
case 3926:
case 1416:
case 2578:
case 1328:
case 3025:
case 429:
case 596:
case 3978:
case 2190:
case 2907:
case 2115:
case 779:
case 1434:
case 2089:
case 1940:
case 822:
case 153:
case 3756:
case 2543:
case 3944:
case 3166:
case 2035:
case 2660:
case 1654:
case 2250:
case 323:
case 1582:
case 1399:
case 90:
case 2815:
case 3170:
case 3965:
case 650:
case 185:
case 3710:
case 1336:
case 3077:
case 2613:
case 480:
case 3453:
case 3406:
case 505:
case 1615:
case 3483:
case 3314:
case 3959:
case 2147:
case 945:
case 2951:
case 3845:
case 3503:
case 425:
case 3477:
case 3184:
case 94:
case 2102:
case 2684:
case 589:
case 1330:
case 1056:
case 132:
case 694:
case 366:
case 1012:
case 1127:
case 445:
case 2214:
case 1619:
case 1934:
case 3133:
case 2173:
case 4039:
case 3789:
case 2553:
case 2510:
case 1586:
case 747:
case 2327:
case 2175:
case 767:
case 2116:
case 2523:
case 2476:
case 2022:
case 1915:
case 3129:
case 4034:
case 759:
case 2792:
case 3958:
case 1348:
case 2025:
case 1749:
case 2536:
case 809:
case 3841:
case 886:
case 1826:
case 4044:
case 3283:
case 4076:
case 3384:
case 1867:
case 971:
case 3205:
case 3820:
case 3504:
case 2131:
case 2995:
case 2624:
case 1812:
case 3724:
case 1806:
case 1458:
case 2577:
case 61:
case 3310:
case 2140:
case 1975:
case 1624:
case 3720:
case 2230:
case 4002:
case 2851:
case 2807:
case 603:
case 1513:
case 3691:
case 613:
case 1701:
case 2638:
case 197:
case 3693:
case 1536:
case 2922:
case 1852:
case 1169:
case 3091:
case 175:
case 3393:
case 2026:
case 2392:
case 755:
case 573:
case 1873:
case 2404:
case 770:
case 4050:
case 1818:
case 473:
case 1626:
case 2132:
case 2814:
case 2400:
case 341:
case 4028:
case 1911:
case 2049:
case 3359:
case 913:
case 4088:
case 2614:
case 495:
case 3702:
case 3590:
case 2082:
case 3391:
case 2237:
case 3018:
case 1788:
case 3884:
case 3263:
case 3345:
case 2079:
case 1854:
case 2248:
case 1194:
case 3914:
case 300:
case 1214:
case 846:
case 2093:
case 2549:
case 3863:
case 3365:
case 1436:
case 443:
case 1079:
case 2793:
case 2642:
case 1184:
case 1917:
case 791:
case 1426:
case 1697:
case 680:
case 11:
case 1820:
case 1108:
case 2355:
case 2265:
case 1671:
case 2976:
case 3599:
case 3302:
case 88:
case 3475:
case 3670:
case 3648:
case 3352:
case 2010:
case 1303:
case 2555:
case 3014:
case 2800:
case 3649:
case 3837:
case 2430:
case 2109:
case 244:
case 1677:
case 1667:
case 1740:
case 549:
case 4016:
case 1309:
case 2042:
case 402:
case 2751:
case 2393:
case 826:
case 2215:
case 735:
case 207:
case 3398:
case 1729:
case 307:
case 3245:
case 3811:
case 3587:
case 14:
case 2149:
case 2711:
case 3579:
case 3203:
case 2948:
case 3130:
case 3041:
case 1534:
case 636:
case 2569:
case 2453:
case 1135:
case 4080:
case 2611:
case 2618:
case 3645:
case 739:
case 1211:
case 3337:
case 748:
case 350:
case 147:
case 2649:
case 2862:
case 1511:
case 1375:
case 229:
case 2474:
case 180:
case 3923:
case 227:
case 2750:
case 260:
case 340:
case 1318:
case 3173:
case 2714:
case 398:
case 302:
case 812:
case 2296:
case 1310:
case 3271:
case 2170:
case 531:
case 3328:
case 393:
case 2852:
case 2108:
case 962:
case 3128:
case 3094:
case 894:
case 3304:
case 714:
case 1863:
case 764:
case 704:
case 129:
case 4065:
case 456:
case 3134:
case 3667:
case 1823:
case 2353:
case 1132:
case 1185:
case 2911:
case 2698:
case 2679:
case 379:
case 4048:
case 3924:
case 3299:
case 3456:
case 1895:
case 3065:
case 455:
case 4057:
case 1877:
case 1288:
case 3156:
case 2288:
case 1397:
case 1836:
case 2163:
case 2366:
case 3688:
case 288:
case 2202:
case 1610:
case 1764:
case 4067:
case 1007:
case 2071:
case 1585:
case 516:
case 2387:
case 294:
case 424:
case 2848:
case 397:
case 3783:
case 2167:
case 2381:
case 1620:
case 3433:
case 1504:
case 454:
case 2434:
case 3703:
case 3169:
case 482:
case 3387:
case 1527:
case 1470:
case 1593:
case 2876:
case 2929:
case 1596:
case 799:
case 2563:
case 1809:
case 2685:
case 3079:
case 2075:
case 3523:
case 3251:
case 3152:
case 1777:
case 390:
case 1220:
case 4013:
case 2463:
case 2612:
case 3708:
case 4082:
case 526:
case 2194:
case 442:
case 160:
case 3603:
case 863:
case 167:
case 352:
case 808:
case 357:
case 1256:
case 1727:
case 1176:
case 1413:
case 3508:
case 2315:
case 1997:
case 258:
case 597:
case 190:
case 2256:
case 4008:
case 1361:
case 1949:
case 2445:
case 2462:
case 3113:
case 542:
case 840:
case 2448:
case 403:
case 2946:
case 2048:
case 1170:
case 41:
case 1821:
case 3083:
case 3058:
case 1083:
case 3043:
case 3938:
case 420:
case 3555:
case 238:
case 1737:
case 1089:
case 1655:
case 3637:
case 2461:
case 1078:
case 2199:
case 344:
case 529:
case 3632:
case 895:
case 1920:
case 3716:
case 212:
case 2019:
case 3293:
case 4029:
case 702:
case 2467:
case 4024:
case 1430:
case 2415:
case 836:
case 2217:
case 3773:
case 1314:
case 3592:
case 2983:
case 2443:
case 3866:
case 1444:
case 1298:
case 1950:
case 3106:
case 3258:
case 86:
case 3282:
case 105:
case 1967:
case 1039:
case 1648:
case 1344:
case 3338:
case 2928:
case 3533:
case 191:
case 991:
case 1173:
case 3877:
case 320:
case 3981:
case 3668:
case 313:
case 2727:
case 2632:
case 2933:
case 4026:
case 3084:
case 3230:
case 1509:
case 4092:
case 3991:
case 2834:
case 2670:
case 2391:
case 2662:
case 3108:
case 3564:
case 499:
case 2511:
case 1542:
case 2837:
case 3114:
case 144:
case 189:
case 2091:
case 726:
case 3769:
case 1595:
case 3726:
case 1647:
case 1539:
case 849:
case 4027:
case 3422:
case 554:
case 1461:
case 4038:
case 59:
case 3843:
case 2047:
case 1452:
case 2017:
case 2739:
case 2362:
case 192:
case 2542:
case 3680:
case 477:
case 3758:
case 2937:
case 112:
case 821:
case 1807:
case 3136:
case 3240:
case 3070:
case 1156:
case 2645:
case 949:
case 1277:
case 4075:
case 2901:
case 3366:
case 2275:
case 2472:
case 122:
case 672:
case 2658:
case 1856:
case 1897:
case 1755:
case 1704:
case 2745:
case 4006:
case 2338:
case 457:
case 1189:
case 3360:
case 2778:
case 2620:
case 3444:
case 3570:
case 4078:
case 3486:
case 35:
case 2156:
case 3343:
case 3194:
case 1907:
case 2796:
case 3002:
case 671:
case 2635:
case 705:
case 1008:
case 3501:
case 2518:
case 1085:
case 3105:
case 4046:
case 955:
case 2905:
case 1457:
case 2628:
case 828:
case 8:
case 902:
case 545:
case 285:
case 271:
case 3268:
case 3658:
case 2539:
case 3999:
case 3489:
case 2833:
case 2704:
case 820:
case 544:
case 1985:
case 1487:
case 2138:
case 3180:
case 2666:
case 2425:
case 1255:
case 2105:
case 633:
case 3383:
case 1847:
case 1646:
case 1432:
case 2758:
case 1118:
case 1325:
case 1656:
case 3722:
case 3513:
case 2797:
case 7:
case 2843:
case 513:
case 3234:
case 3226:
case 666:
case 2868:
case 541:
case 124:
case 468:
case 3516:
case 4019:
case 1540:
case 2417:
case 3623:
case 3311:
case 1609:
case 1281:
case 3024:
case 2943:
case 232:
case 2413:
case 3256:
case 1780:
case 1871:
case 2277:
case 3201:
case 2701:
case 1357:
case 1602:
case 2128:
case 3123:
case 806:
case 3124:
case 685:
case 2732:
case 853:
case 940:
case 2581:
case 2297:
case 2826:
case 1069:
case 696:
case 2058:
case 301:
case 1903:
case 1411:
case 2496:
case 3888:
case 2899:
case 911:
case 2822:
case 1520:
case 3206:
case 1868:
case 4:
case 462:
case 3576:
case 1464:
case 2968:
case 729:
case 3950:
case 123:
case 1070:
case 775:
case 3860:
case 3705:
case 2360:
case 1087:
case 2556:
case 2438:
case 947:
case 2038:
case 368:
case 286:
case 2354:
case 724:
case 2706:
case 3323:
case 3946:
case 2151:
case 3:
case 670:
case 4041:
case 645:
case 1638:
case 2124:
case 444:
case 2455:
case 2344:
case 351:
case 1304:
case 236:
case 2379:
case 3907:
case 24:
case 3862:
case 1329:
case 1964:
case 2602:
case 511:
case 3424:
case 551:
case 195:
case 30:
case 312:
case 3867:
case 1203:
case 76:
case 2923:
case 3679:
case 4072:
case 384:
case 3905:
case 845:
case 856:
case 2892:
case 3697:
case 556:
case 1789:
case 2348:
case 2398:
case 335:
case 512:
case 2656:
case 1465:
case 235:
case 67:
case 2196:
case 2805:
case 82:
case 1010:
case 3854:
case 2864:
case 1392:
case 2373:
case 2571:
case 2847:
case 2924:
case 396:
case 3138:
case 716:
case 2085:
case 1490:
case 2180:
case 3414:
case 3102:
case 2501:
case 1506:
case 604:
case 3148:
case 3161:
case 1449:
case 1052:
case 3925:
case 1038:
case 1456:
case 1171:
case 1041:
case 3252:
case 330:
case 3737:
case 1478:
case 3834:
case 222:
case 2841:
case 3676:
case 1512:
case 1604:
case 2371:
case 2145:
case 1842:
case 3019:
case 3496:
case 1142:
case 2300:
case 2000:
case 223:
case 184:
case 1231:
case 348:
case 99:
case 1060:
case 2062:
case 1412:
case 576:
case 930:
case 1631:
case 2512:
case 3906:
case 1541:
case 2703:
case 2211:
case 2101:
case 2321:
case 3654:
case 3988:
case 1625:
case 148:
case 642:
case 1265:
case 2828:
case 2399:
case 2426:
case 1172:
case 2257:
case 2272:
case 1097:
case 3464:
case 3968:
case 3819:
case 172:
case 3706:
case 3142:
case 4053:
case 26:
case 4061:
case 1349:
case 872:
case 6:
case 621:
case 3887:
case 827:
case 3004:
case 2893:
case 2370:
case 3480:
case 3111:
case 2941:
case 4012:
case 1845:
case 1121:
case 801:
case 3721:
case 3122:
case 3160:
case 2072:
case 3894:
case 3159:
case 1954:
case 2050:
case 1489:
case 270:
case 1428:
case 1676:
case 1438:
case 331:
case 1531:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1650236402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,];
var gg_b = "1650236402/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
