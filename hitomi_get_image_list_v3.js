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
case 4046:
case 1534:
case 3230:
case 1150:
case 3142:
case 3490:
case 3285:
case 3007:
case 3443:
case 3451:
case 2177:
case 1191:
case 2689:
case 864:
case 1885:
case 2583:
case 3963:
case 3384:
case 816:
case 2900:
case 3295:
case 1003:
case 228:
case 1447:
case 3435:
case 1967:
case 2079:
case 3117:
case 3109:
case 2337:
case 1895:
case 3394:
case 1181:
case 2699:
case 2511:
case 460:
case 2309:
case 3882:
case 2506:
case 1676:
case 2270:
case 1373:
case 916:
case 355:
case 964:
case 19:
case 765:
case 2627:
case 2869:
case 3415:
case 69:
case 1096:
case 3137:
case 3039:
case 3892:
case 3241:
case 2475:
case 370:
case 2184:
case 2756:
case 241:
case 1841:
case 3088:
case 2720:
case 2466:
case 1432:
case 2555:
case 2672:
case 2561:
case 23:
case 985:
case 784:
case 2092:
case 1680:
case 2286:
case 2973:
case 2771:
case 1346:
case 1163:
case 1651:
case 1643:
case 811:
case 3711:
case 1070:
case 1549:
case 3991:
case 3069:
case 3348:
case 2898:
case 2221:
case 3322:
case 1690:
case 702:
case 2057:
case 2436:
case 112:
case 1787:
case 3950:
case 1928:
case 3612:
case 2082:
case 937:
case 404:
case 2148:
case 1279:
case 2668:
case 2416:
case 108:
case 1564:
case 3260:
case 1774:
case 900:
case 813:
case 2423:
case 3933:
case 3879:
case 3505:
case 1860:
case 527:
case 3945:
case 1937:
case 3520:
case 3359:
case 911:
case 3465:
case 572:
case 2819:
case 4073:
case 3556:
case 837:
case 1478:
case 3824:
case 167:
case 1325:
case 1404:
case 3105:
case 2075:
case 3439:
case 853:
case 3488:
case 3914:
case 368:
case 2522:
case 1486:
case 2737:
case 3289:
case 3801:
case 2974:
case 588:
case 3361:
case 4052:
case 2262:
case 2630:
case 951:
case 1496:
case 195:
case 1889:
case 3156:
case 2685:
case 4087:
case 759:
case 3120:
case 369:
case 3238:
case 3015:
case 330:
case 953:
case 2479:
case 2610:
case 2728:
case 3080:
case 126:
case 478:
case 626:
case 1403:
case 3777:
case 2320:
case 386:
case 2356:
case 1102:
case 4074:
case 1818:
case 2997:
case 1773:
case 1971:
case 491:
case 3227:
case 2876:
case 514:
case 3090:
case 2305:
case 152:
case 2709:
case 566:
case 1149:
case 4029:
case 1563:
case 3043:
case 2204:
case 851:
case 2851:
case 3748:
case 3065:
case 1545:
case 3393:
case 2843:
case 3958:
case 315:
case 2212:
case 1956:
case 3311:
case 149:
case 123:
case 1352:
case 977:
case 3340:
case 2131:
case 797:
case 1387:
case 1078:
case 3444:
case 1872:
case 563:
case 1114:
case 425:
case 3383:
case 648:
case 2371:
case 3272:
case 2835:
case 1533:
case 1397:
case 940:
case 1905:
case 2023:
case 1639:
case 720:
case 2815:
case 3469:
case 1513:
case 856:
case 3355:
case 2577:
case 1526:
case 561:
case 1134:
case 496:
case 2036:
case 3542:
case 2457:
case 877:
case 3902:
case 1581:
case 2111:
case 1868:
case 2193:
case 822:
case 98:
case 840:
case 3517:
case 3875:
case 3603:
case 121:
case 3306:
case 1654:
case 3994:
case 2615:
case 4009:
case 2937:
case 209:
case 3207:
case 2404:
case 2729:
case 2325:
case 3095:
case 2300:
case 96:
case 3146:
case 3363:
case 361:
case 4042:
case 208:
case 1203:
case 175:
case 3666:
case 3418:
case 2564:
case 675:
case 2279:
case 959:
case 1148:
case 332:
case 3803:
case 2860:
case 2774:
case 1898:
case 1221:
case 3977:
case 2643:
case 858:
case 3896:
case 2163:
case 3298:
case 1082:
case 363:
case 3438:
case 498:
case 753:
case 212:
case 1436:
case 1057:
case 2690:
case 1401:
case 3239:
case 859:
case 3886:
case 3041:
case 13:
case 583:
case 1888:
case 2502:
case 86:
case 1672:
case 3053:
case 1973:
case 471:
case 1771:
case 2680:
case 1286:
case 3288:
case 2917:
case 1475:
case 1342:
case 777:
case 3326:
case 2432:
case 2853:
case 3948:
case 2841:
case 141:
case 2292:
case 1720:
case 641:
case 2086:
case 756:
case 314:
case 2373:
case 3574:
case 1270:
case 3269:
case 1705:
case 2021:
case 2145:
case 3870:
case 2257:
case 29:
case 1869:
case 3381:
case 3764:
case 2282:
case 445:
case 128:
case 2003:
case 3244:
case 1925:
case 942:
case 3060:
case 569:
case 3173:
case 1511:
case 1699:
case 1844:
case 3472:
case 388:
case 3345:
case 2895:
case 507:
case 1638:
case 2126:
case 143:
case 3601:
case 3597:
case 643:
case 3636:
case 1900:
case 3702:
case 2113:
case 2191:
case 2830:
case 3441:
case 3453:
case 3832:
case 2581:
case 2868:
case 1111:
case 865:
case 3099:
case 2374:
case 221:
case 3152:
case 4056:
case 3573:
case 2266:
case 1232:
case 3410:
case 3679:
case 2308:
case 2619:
case 4005:
case 2470:
case 2591:
case 3089:
case 1183:
case 2513:
case 2062:
case 1457:
case 1036:
case 2725:
case 1001:
case 687:
case 187:
case 3624:
case 965:
case 764:
case 1584:
case 354:
case 17:
case 3495:
case 1155:
case 606:
case 3018:
case 3235:
case 2905:
case 1023:
case 1880:
case 431:
case 1835:
case 2746:
case 2698:
case 249:
case 3430:
case 2920:
case 2387:
case 2078:
case 3812:
case 1131:
case 2004:
case 2352:
case 3174:
case 603:
case 252:
case 1305:
case 1876:
case 3265:
case 3804:
case 3878:
case 1424:
case 1997:
case 713:
case 818:
case 3781:
case 1865:
case 2563:
case 3276:
case 1204:
case 1278:
case 785:
case 902:
case 3460:
case 2047:
case 44:
case 3726:
case 3692:
case 555:
case 1728:
case 1742:
case 737:
case 3940:
case 2216:
case 1479:
case 1610:
case 3072:
case 1161:
case 2102:
case 3911:
case 1641:
case 3713:
case 3993:
case 1320:
case 819:
case 2223:
case 1559:
case 700:
case 1974:
case 110:
case 2838:
case 3931:
case 2421:
case 1908:
case 1685:
case 2158:
case 2496:
case 2889:
case 295:
case 3302:
case 2201:
case 3054:
case 1262:
case 1630:
case 2236:
case 436:
case 802:
case 480:
case 1737:
case 3745:
case 2899:
case 919:
case 3068:
case 3955:
case 1548:
case 1066:
case 2032:
case 101:
case 4071:
case 2164:
case 711:
case 1695:
case 3077:
case 38:
case 3388:
case 2119:
case 2107:
case 1589:
case 789:
case 1386:
case 2970:
case 12:
case 3780:
case 2634:
case 3697:
case 1982:
case 3501:
case 3735:
case 1747:
case 3339:
case 1538:
case 1693:
case 3461:
case 788:
case 1396:
case 815:
case 3751:
case 3953:
case 2848:
case 3398:
case 467:
case 1599:
case 1712:
case 1073:
case 273:
case 409:
case 1321:
case 56:
case 3790:
case 2009:
case 2017:
case 3687:
case 1992:
case 2766:
case 1732:
case 271:
case 1527:
case 2198:
case 2420:
case 1863:
case 2565:
case 2037:
case 299:
case 881:
case 3094:
case 2775:
case 2379:
case 3674:
case 2576:
case 3263:
case 2200:
case 1303:
case 1631:
case 2225:
case 3516:
case 3995:
case 3084:
case 104:
case 915:
case 356:
case 714:
case 3307:
case 3715:
case 1655:
case 1267:
case 1518:
case 2188:
case 3523:
case 2139:
case 3867:
case 4070:
case 3629:
case 3440:
case 2067:
case 1833:
case 2736:
case 1487:
case 807:
case 2903:
case 1025:
case 2701:
case 49:
case 1141:
case 1572:
case 85:
case 3233:
case 1661:
case 3493:
case 639:
case 1153:
case 2884:
case 3411:
case 4021:
case 597:
case 1497:
case 3245:
case 930:
case 2894:
case 1000:
case 1845:
case 2543:
case 3837:
case 638:
case 2169:
case 3776:
case 1704:
case 2382:
case 434:
case 3281:
case 1778:
case 732:
case 542:
case 3765:
case 969:
case 1881:
case 1209:
case 3048:
case 1046:
case 2144:
case 1370:
case 830:
case 1826:
case 3431:
case 660:
case 2921:
case 1850:
case 3842:
case 2392:
case 3291:
case 3226:
case 1813:
case 2996:
case 245:
case 886:
case 2716:
case 3250:
case 1891:
case 4003:
case 1242:
case 276:
case 2893:
case 1595:
case 196:
case 3646:
case 2544:
case 3351:
case 2252:
case 1796:
case 1648:
case 1622:
case 144:
case 3175:
case 2005:
case 2840:
case 1312:
case 1530:
case 2056:
case 1154:
case 1271:
case 421:
case 2115:
case 2020:
case 3788:
case 3871:
case 2904:
case 217:
case 1814:
case 4078:
case 3707:
case 1172:
case 3999:
case 2855:
case 2180:
case 337:
case 3625:
case 423:
case 3592:
case 385:
case 3989:
case 2569:
case 3600:
case 2151:
case 231:
case 2663:
case 1332:
case 125:
case 9:
case 313:
case 1936:
case 2428:
case 2806:
case 3557:
case 3938:
case 262:
case 625:
case 2779:
case 3031:
case 584:
case 790:
case 3249:
case 1694:
case 2165:
case 678:
case 426:
case 3744:
case 2598:
case 2633:
case 1029:
case 2336:
case 2539:
case 3968:
case 3055:
case 1446:
case 452:
case 179:
case 2588:
case 364:
case 3116:
case 679:
case 1966:
case 4012:
case 2932:
case 955:
case 316:
case 1220:
case 3258:
case 2626:
case 2323:
case 1138:
case 2071:
case 4032:
case 2912:
case 727:
case 236:
case 3820:
case 1858:
case 2691:
case 2507:
case 2519:
case 1400:
case 1378:
case 1425:
case 992:
case 2947:
case 3579:
case 3040:
case 3805:
case 2782:
case 1052:
case 474:
case 1304:
case 519:
case 855:
case 3011:
case 1770:
case 3972:
case 2681:
case 1205:
case 3365:
case 2850:
case 1392:
case 1723:
case 1921:
case 260:
case 157:
case 3310:
case 2408:
case 3656:
case 2554:
case 1877:
case 2228:
case 10:
case 3341:
case 3353:
case 645:
case 1716:
case 1996:
case 145:
case 3718:
case 1658:
case 3620:
case 2185:
case 676:
case 1515:
case 2778:
case 3939:
case 3605:
case 1986:
case 2195:
case 2046:
case 429:
case 2568:
case 2209:
case 3988:
case 443:
case 3512:
case 516:
case 1590:
case 302:
case 3919:
case 3907:
case 1649:
case 3063:
case 3395:
case 2000:
case 2845:
case 3799:
case 1551:
case 124:
case 1580:
case 7:
case 3284:
case 2110:
case 3738:
case 3547:
case 2979:
case 3789:
case 239:
case 2661:
case 3330:
case 1602:
case 4057:
case 2267:
case 3464:
case 2518:
case 513:
case 3754:
case 827:
case 1859:
case 1405:
case 770:
case 1139:
case 3259:
case 3825:
case 1565:
case 2863:
case 671:
case 3045:
case 199:
case 2527:
case 1198:
case 954:
case 1420:
case 755:
case 1766:
case 3360:
case 43:
case 2631:
case 282:
case 2606:
case 3578:
case 1775:
case 1379:
case 450:
case 2599:
case 3081:
case 927:
case 1848:
case 3402:
case 3846:
case 500:
case 2693:
case 2992:
case 2640:
case 2386:
case 2683:
case 1107:
case 2589:
case 3091:
case 446:
case 972:
case 494:
case 22:
case 1634:
case 475:
case 3980:
case 1467:
case 3617:
case 2425:
case 1947:
case 2087:
case 2378:
case 781:
case 2199:
case 989:
case 2770:
case 3327:
case 3642:
case 2097:
case 3162:
case 293:
case 401:
case 342:
case 680:
case 551:
case 2138:
case 1323:
case 1626:
case 1519:
case 1507:
case 636:
case 2189:
case 2400:
case 4075:
case 320:
case 136:
case 2858:
case 2975:
case 1539:
case 1336:
case 2362:
case 3261:
case 1301:
case 1633:
case 2966:
case 889:
case 3730:
case 2684:
case 0:
case 2118:
case 2446:
case 3178:
case 783:
case 2074:
case 1176:
case 3104:
case 397:
case 278:
case 2127:
case 3795:
case 2849:
case 3399:
case 888:
case 3596:
case 2694:
case 1165:
case 605:
case 3231:
case 1366:
case 3206:
case 3491:
case 3570:
case 3368:
case 1375:
case 1779:
case 3450:
case 1806:
case 3874:
case 3808:
case 662:
case 225:
case 2703:
case 406:
case 2901:
case 3112:
case 47:
case 2553:
case 1229:
case 2172:
case 3354:
case 786:
case 2659:
case 3667:
case 1135:
case 522:
case 730:
case 1180:
case 963:
case 2510:
case 3058:
case 1020:
case 1883:
case 769:
case 2154:
case 1297:
case 2271:
case 2530:
case 1056:
case 3445:
case 1437:
case 2786:
case 3976:
case 707:
case 117:
case 3283:
case 2834:
case 617:
case 1811:
case 244:
case 487:
case 2168:
case 1287:
case 2622:
case 4036:
case 3064:
case 1252:
case 2916:
case 4001:
case 3132:
case 2312:
case 3887:
case 133:
case 1005:
case 2923:
case 3852:
case 633:
case 2721:
case 3293:
case 760:
case 1219:
case 521:
case 2755:
case 1994:
case 2520:
case 2945:
case 1427:
case 3819:
case 1030:
case 2879:
case 2933:
case 4013:
case 2706:
case 917:
case 862:
case 1675:
case 2505:
case 4091:
case 1803:
case 3416:
case 3148:
case 346:
case 3122:
case 2260:
case 1418:
case 2044:
case 3436:
case 3401:
case 163:
case 1821:
case 1298:
case 1438:
case 2950:
case 4033:
case 1100:
case 1489:
case 1896:
case 2069:
case 2991:
case 2167:
case 3092:
case 4045:
case 2:
case 817:
case 3973:
case 3286:
case 1125:
case 465:
case 1734:
case 3888:
case 3561:
case 1041:
case 3672:
case 2783:
case 1053:
case 739:
case 1239:
case 1886:
case 3159:
case 166:
case 1313:
case 552:
case 704:
case 114:
case 3184:
case 1948:
case 1922:
case 614:
case 3720:
case 94:
case 1391:
case 402:
case 341:
case 1326:
case 1623:
case 2039:
case 2253:
case 4063:
case 1529:
case 3475:
case 1350:
case 3328:
case 2892:
case 3342:
case 3627:
case 1381:
case 3194:
case 1870:
case 1454:
case 1269:
case 247:
case 3309:
case 3531:
case 2857:
case 1574:
case 2604:
case 188:
case 1472:
case 84:
case 1749:
case 1345:
case 3337:
case 936:
case 3511:
case 3699:
case 805:
case 1552:
case 3925:
case 1244:
case 2295:
case 2109:
case 595:
case 1587:
case 419:
case 3079:
case 980:
case 2451:
case 689:
case 2443:
case 2007:
case 2761:
case 1702:
case 418:
case 1597:
case 2662:
case 2230:
case 1636:
case 3638:
case 2517:
case 1187:
case 172:
case 4058:
case 1410:
case 1679:
case 459:
case 2306:
case 1152:
case 3492:
case 3232:
case 2331:
case 2875:
case 3111:
case 567:
case 281:
case 1441:
case 899:
case 387:
case 1038:
case 1215:
case 458:
case 793:
case 2542:
case 2254:
case 973:
case 3001:
case 127:
case 2469:
case 627:
case 1089:
case 2759:
case 1129:
case 1847:
case 3835:
case 2272:
case 3023:
case 3880:
case 3155:
case 654:
case 999:
case 1495:
case 3247:
case 1235:
case 1018:
case 779:
case 3016:
case 791:
case 512:
case 306:
case 154:
case 1280:
case 37:
case 1243:
case 2076:
case 190:
case 1174:
case 1251:
case 3106:
case 283:
case 2621:
case 1812:
case 3843:
case 2065:
case 1430:
case 2748:
case 1290:
case 2696:
case 2722:
case 2311:
case 215:
case 2051:
case 3204:
case 2043:
case 1500:
case 1276:
case 3865:
case 2670:
case 4014:
case 3424:
case 924:
case 2934:
case 303:
case 3997:
case 1682:
case 3717:
case 3305:
case 1804:
case 1657:
case 286:
case 3320:
case 1358:
case 2777:
case 845:
case 1993:
case 2816:
case 3161:
case 1713:
case 497:
case 857:
case 2080:
case 3952:
case 230:
case 1940:
case 3987:
case 3262:
case 2361:
case 2784:
case 1054:
case 2015:
case 269:
case 2120:
case 3685:
case 1862:
case 1906:
case 4034:
case 796:
case 3066:
case 2488:
case 90:
case 442:
case 301:
case 1349:
case 3737:
case 534:
case 3075:
case 2105:
case 2299:
case 3929:
case 2439:
case 957:
case 3113:
case 891:
case 334:
case 1963:
case 1019:
case 3830:
case 3191:
case 1451:
case 1285:
case 3126:
case 4022:
case 3412:
case 4048:
case 1662:
case 2636:
case 1571:
case 1490:
case 2597:
case 1128:
case 2601:
case 2333:
case 3181:
case 878:
case 2749:
case 2959:
case 510:
case 3967:
case 1109:
case 2587:
case 2173:
case 993:
case 3447:
case 2552:
case 3003:
case 3665:
case 979:
case 2454:
case 1137:
case 3145:
case 799:
case 655:
case 3096:
case 2381:
case 771:
case 2764:
case 1415:
case 2574:
case 1604:
case 647:
case 3021:
case 147:
case 1678:
case 2269:
case 2508:
case 1088:
case 2758:
case 1377:
case 2391:
case 3853:
case 3432:
case 2922:
case 214:
case 2468:
case 798:
case 3086:
case 266:
case 2350:
case 893:
case 1892:
case 170:
case 1253:
case 3810:
case 2125:
case 925:
case 724:
case 1:
case 2010:
case 3797:
case 3909:
case 1167:
case 2499:
case 440:
case 2239:
case 3502:
case 1981:
case 2041:
case 3942:
case 1950:
case 3928:
case 263:
case 4084:
case 3752:
case 3690:
case 1069:
case 1991:
case 3549:
case 2977:
case 1348:
case 3651:
case 896:
case 2896:
case 477:
case 2803:
case 1505:
case 232:
case 3774:
case 825:
case 1879:
case 1933:
case 1731:
case 1260:
case 3564:
case 2418:
case 1632:
case 1044:
case 2363:
case 2095:
case 3279:
case 1476:
case 1824:
case 757:
case 3325:
case 3729:
case 2714:
case 776:
case 996:
case 1520:
case 1945:
case 944:
case 3937:
case 3615:
case 2427:
case 2994:
case 61:
case 1794:
case 2955:
case 2068:
case 2349:
case 543:
case 168:
case 3032:
case 1914:
case 529:
case 1439:
case 1299:
case 1498:
case 839:
case 1015:
case 169:
case 65:
case 4040:
case 15:
case 669:
case 1784:
case 1156:
case 2302:
case 3889:
case 3496:
case 3421:
case 4011:
case 2733:
case 717:
case 2931:
case 3838:
case 1836:
case 607:
case 4093:
case 1801:
case 1289:
case 2713:
case 4031:
case 4006:
case 2072:
case 938:
case 186:
case 2358:
case 2993:
case 1035:
case 2460:
case 630:
case 3403:
case 3216:
case 1823:
case 2940:
case 2750:
case 1080:
case 1043:
case 731:
case 2364:
case 939:
case 3827:
case 4055:
case 352:
case 1090:
case 3971:
case 541:
case 1934:
case 3078:
case 1621:
case 183:
case 1340:
case 2174:
case 4061:
case 3352:
case 2243:
case 3004:
case 1076:
case 705:
case 437:
case 904:
case 2027:
case 115:
case 3698:
case 3746:
case 74:
case 3545:
case 1393:
case 1537:
case 615:
case 2430:
case 1065:
case 485:
case 2847:
case 982:
case 2129:
case 413:
case 1383:
case 2235:
case 2018:
case 546:
case 3134:
case 3329:
case 1542:
case 1171:
case 1254:
case 1528:
case 3062:
case 2215:
case 3526:
case 780:
case 594:
case 2089:
case 1355:
case 3607:
case 3591:
case 3619:
case 3854:
case 3513:
case 804:
case 882:
case 2152:
case 3308:
case 272:
case 2410:
case 1268:
case 2832:
case 2453:
case 3275:
case 1866:
case 3700:
case 400:
case 681:
case 2763:
case 3868:
case 1902:
case 3581:
case 119:
case 709:
case 345:
case 3996:
case 3515:
case 901:
case 1341:
case 2250:
case 3877:
case 3716:
case 619:
case 1998:
case 357:
case 488:
case 3392:
case 1277:
case 3723:
case 2048:
case 1414:
case 1988:
case 618:
case 3986:
case 1727:
case 251:
case 3144:
case 3273:
case 3664:
case 2281:
case 3382:
case 2776:
case 803:
case 1873:
case 1799:
case 2837:
case 3543:
case 3894:
case 2344:
case 801:
case 3551:
case 3169:
case 3649:
case 1907:
case 2245:
case 591:
case 102:
case 3590:
case 712:
case 466:
case 253:
case 579:
case 414:
case 1330:
case 684:
case 2493:
case 2233:
case 3602:
case 2059:
case 184:
case 3884:
case 1738:
case 1547:
case 3535:
case 2192:
case 2440:
case 3701:
case 2960:
case 3736:
case 1284:
case 887:
case 1825:
case 2523:
case 1259:
case 277:
case 3405:
case 2995:
case 2084:
case 1754:
case 1186:
case 398:
case 1944:
case 3188:
case 1464:
case 525:
case 1121:
case 3775:
case 4041:
case 1360:
case 3200:
case 1504:
case 3420:
case 4010:
case 1458:
case 97:
case 835:
case 2930:
case 79:
case 3766:
case 222:
case 2094:
case 2985:
case 399:
case 3037:
case 3565:
case 1196:
case 3246:
case 4030:
case 373:
case 2910:
case 2652:
case 2179:
case 2687:
case 3017:
case 1248:
case 1222:
case 2461:
case 2941:
case 3848:
case 2398:
case 1081:
case 544:
case 3634:
case 3042:
case 2780:
case 1026:
case 2735:
case 1449:
case 806:
case 935:
case 3681:
case 2011:
case 2769:
case 2365:
case 2093:
case 2579:
case 943:
case 3947:
case 1935:
case 1609:
case 4054:
case 3782:
case 1503:
case 2083:
case 1753:
case 2820:
case 336:
case 1741:
case 2856:
case 1463:
case 3507:
case 841:
case 1318:
case 642:
case 3626:
case 2524:
case 2258:
case 3792:
case 1034:
case 2136:
case 142:
case 1162:
case 3588:
case 3861:
case 1389:
case 1785:
case 2968:
case 2422:
case 2116:
case 1730:
case 1261:
case 2202:
case 829:
case 3539:
case 538:
case 1338:
case 843:
case 1915:
case 1637:
case 3645:
case 1596:
case 3165:
case 3598:
case 749:
case 723:
case 1399:
case 1795:
case 4072:
case 197:
case 539:
case 1104:
case 2031:
case 697:
case 2249:
case 1808:
case 1426:
case 213:
case 3962:
case 454:
case 1112:
case 504:
case 3779:
case 3375:
case 362:
case 2938:
case 1874:
case 3806:
case 3428:
case 3569:
case 1049:
case 3208:
case 1368:
case 846:
case 285:
case 3143:
case 1491:
case 331:
case 875:
case 2477:
case 2600:
case 93:
case 3409:
case 237:
case 2214:
case 1255:
case 1829:
case 1667:
case 3135:
case 1147:
case 2592:
case 2315:
case 2707:
case 1481:
case 3229:
case 1002:
case 2999:
case 2871:
case 2739:
case 2335:
case 3978:
case 317:
case 1976:
case 1283:
case 200:
case 774:
case 2494:
case 1372:
case 659:
case 795:
case 16:
case 994:
case 2234:
case 1965:
case 472:
case 946:
case 3115:
case 1852:
case 3005:
case 3840:
case 2390:
case 4089:
case 1293:
case 1887:
case 1211:
case 427:
case 333:
case 950:
case 3252:
case 2646:
case 1132:
case 2343:
case 2484:
case 52:
case 1339:
case 1124:
case 3538:
case 921:
case 1536:
case 4044:
case 32:
case 1501:
case 3982:
case 1697:
case 2772:
case 2013:
case 3386:
case 2969:
case 2091:
case 533:
case 1077:
case 3589:
case 1790:
case 2248:
case 3992:
case 3712:
case 2103:
case 1910:
case 1398:
case 1953:
case 1751:
case 2081:
case 3599:
case 3611:
case 1743:
case 1941:
case 3396:
case 2846:
case 517:
case 1263:
case 640:
case 382:
case 3303:
case 821:
case 140:
case 1608:
case 2121:
case 2578:
case 1985:
case 1094:
case 948:
case 2768:
case 265:
case 2458:
case 3527:
case 177:
case 677:
case 4069:
case 2825:
case 2259:
case 531:
case 656:
case 1319:
case 1307:
case 741:
case 3267:
case 3655:
case 923:
case 1516:
case 2186:
case 304:
case 2754:
case 949:
case 339:
case 1059:
case 2789:
case 1233:
case 3141:
case 3572:
case 2330:
case 3661:
case 895:
case 455:
case 3487:
case 3110:
case 2284:
case 54:
case 3452:
case 3833:
case 952:
case 1192:
case 505:
case 4039:
case 2919:
case 3845:
case 1837:
case 470:
case 1182:
case 153:
case 1245:
case 3046:
case 995:
case 775:
case 974:
case 2727:
case 218:
case 580:
case 2988:
case 1369:
case 492:
case 1765:
case 1048:
case 746:
case 1022:
case 3568:
case 4019:
case 2605:
case 3778:
case 3704:
case 1776:
case 1809:
case 2998:
case 2353:
case 2341:
case 3891:
case 3228:
case 3554:
case 2656:
case 3813:
case 2718:
case 1291:
case 3474:
case 2277:
case 1213:
case 3408:
case 750:
case 2310:
case 826:
case 360:
case 967:
case 2211:
case 2293:
case 1175:
case 2433:
case 2852:
case 3923:
case 1390:
case 1918:
case 3648:
case 3796:
case 611:
case 3168:
case 344:
case 1484:
case 396:
case 1343:
case 1166:
case 3595:
case 3916:
case 1798:
case 2240:
case 258:
case 1646:
case 100:
case 2283:
case 3834:
case 600:
case 1871:
case 1739:
case 3347:
case 2897:
case 1335:
case 1788:
case 573:
case 2058:
case 26:
case 3271:
case 1494:
case 3154:
case 2147:
case 1592:
case 4065:
case 415:
case 1625:
case 137:
case 1214:
case 1999:
case 1061:
case 3172:
case 4076:
case 2002:
case 3659:
case 3814:
case 2481:
case 1719:
case 1938:
case 598:
case 2874:
case 3901:
case 3703:
case 2426:
case 2206:
case 2231:
case 2368:
case 185:
case 430:
case 2399:
case 1954:
case 2795:
case 1744:
case 524:
case 3694:
case 2596:
case 4035:
case 2637:
case 1249:
case 2178:
case 297:
case 3074:
case 1116:
case 164:
case 2586:
case 3684:
case 99:
case 391:
case 834:
case 1422:
case 2389:
case 616:
case 2785:
case 1055:
case 3446:
case 379:
case 664:
case 3029:
case 1202:
case 2261:
case 3677:
case 3858:
case 2753:
case 220:
case 242:
case 393:
case 2710:
case 2162:
case 3256:
case 1101:
case 2628:
case 2034:
case 3220:
case 787:
case 3864:
case 3205:
case 1769:
case 1365:
case 3770:
case 1011:
case 934:
case 45:
case 1264:
case 3560:
case 3052:
case 2503:
case 1040:
case 545:
case 1376:
case 2980:
case 3304:
case 3378:
case 3087:
case 1579:
case 469:
case 50:
case 4015:
case 2617:
case 576:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759568402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,];
var gg_b = "1759568402/";

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
