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
case 2596:
case 3634:
case 1676:
case 1229:
case 566:
case 2573:
case 3236:
case 405:
case 1525:
case 1711:
case 832:
case 3510:
case 3659:
case 2565:
case 3100:
case 3618:
case 1654:
case 2224:
case 3323:
case 1031:
case 3705:
case 2205:
case 2145:
case 3320:
case 1596:
case 3752:
case 483:
case 3677:
case 838:
case 2208:
case 621:
case 3385:
case 3295:
case 288:
case 1471:
case 2212:
case 2126:
case 2960:
case 396:
case 2715:
case 3739:
case 4027:
case 1728:
case 2610:
case 1802:
case 1922:
case 4019:
case 2774:
case 1869:
case 745:
case 793:
case 2716:
case 446:
case 411:
case 1960:
case 2663:
case 3200:
case 1872:
case 2959:
case 341:
case 2818:
case 2548:
case 1426:
case 2606:
case 3881:
case 3751:
case 660:
case 2478:
case 2293:
case 3522:
case 3896:
case 3984:
case 3040:
case 1478:
case 3364:
case 2158:
case 175:
case 1372:
case 791:
case 3606:
case 4016:
case 3274:
case 2694:
case 3772:
case 3712:
case 3398:
case 1982:
case 151:
case 1014:
case 3296:
case 1703:
case 553:
case 1981:
case 2508:
case 3282:
case 852:
case 45:
case 2590:
case 3057:
case 1261:
case 1636:
case 1201:
case 1714:
case 1287:
case 3538:
case 2595:
case 3405:
case 2896:
case 777:
case 955:
case 1797:
case 1496:
case 3969:
case 816:
case 4011:
case 2675:
case 3887:
case 3728:
case 2321:
case 4004:
case 274:
case 1663:
case 1094:
case 2386:
case 1053:
case 2072:
case 3186:
case 218:
case 2486:
case 3933:
case 819:
case 3572:
case 1239:
case 2334:
case 2911:
case 498:
case 854:
case 3091:
case 1889:
case 3803:
case 1275:
case 635:
case 3627:
case 1195:
case 1420:
case 3607:
case 1659:
case 2177:
case 454:
case 3458:
case 2535:
case 907:
case 2337:
case 172:
case 4088:
case 3237:
case 2153:
case 524:
case 5:
case 2879:
case 2534:
case 2259:
case 2353:
case 971:
case 3065:
case 161:
case 1483:
case 3403:
case 1948:
case 2688:
case 1209:
case 1015:
case 1208:
case 390:
case 2553:
case 2258:
case 1615:
case 1577:
case 3876:
case 2221:
case 3533:
case 3693:
case 2015:
case 4079:
case 1973:
case 2693:
case 4071:
case 2170:
case 2254:
case 3757:
case 672:
case 2537:
case 1652:
case 1569:
case 3885:
case 2119:
case 1833:
case 444:
case 634:
case 3910:
case 1482:
case 338:
case 3286:
case 3862:
case 190:
case 377:
case 2147:
case 1299:
case 1573:
case 2367:
case 1473:
case 1963:
case 2199:
case 3521:
case 2272:
case 2381:
case 2118:
case 1631:
case 3455:
case 924:
case 598:
case 3095:
case 2322:
case 1374:
case 2512:
case 7:
case 1863:
case 2075:
case 718:
case 3226:
case 2723:
case 757:
case 891:
case 3197:
case 2604:
case 2222:
case 3499:
case 3610:
case 622:
case 2133:
case 3975:
case 2867:
case 3695:
case 2446:
case 2288:
case 2526:
case 1077:
case 3059:
case 989:
case 330:
case 381:
case 2022:
case 2481:
case 2985:
case 2908:
case 2750:
case 2665:
case 1023:
case 3936:
case 3679:
case 4032:
case 1049:
case 704:
case 843:
case 726:
case 1957:
case 3185:
case 685:
case 1778:
case 2165:
case 2767:
case 3631:
case 3711:
case 3704:
case 2371:
case 680:
case 1136:
case 2340:
case 3201:
case 3104:
case 3534:
case 3003:
case 520:
case 1501:
case 3452:
case 1388:
case 2827:
case 941:
case 1611:
case 1336:
case 1698:
case 334:
case 1708:
case 1494:
case 3248:
case 969:
case 3381:
case 1614:
case 695:
case 3898:
case 3408:
case 1276:
case 1020:
case 2407:
case 3002:
case 1356:
case 3846:
case 3981:
case 292:
case 2510:
case 1860:
case 3004:
case 2383:
case 508:
case 1430:
case 2349:
case 3717:
case 1672:
case 647:
case 248:
case 3740:
case 3239:
case 679:
case 915:
case 3551:
case 2035:
case 943:
case 2942:
case 3436:
case 243:
case 499:
case 2803:
case 3508:
case 3844:
case 763:
case 2837:
case 244:
case 1237:
case 1442:
case 2198:
case 3552:
case 937:
case 2017:
case 2641:
case 792:
case 1009:
case 2246:
case 2901:
case 2560:
case 3656:
case 1122:
case 3027:
case 1628:
case 1941:
case 2012:
case 148:
case 3899:
case 540:
case 831:
case 464:
case 3253:
case 3971:
case 3459:
case 2696:
case 1283:
case 1406:
case 3346:
case 2496:
case 2634:
case 807:
case 533:
case 2618:
case 1701:
case 147:
case 2448:
case 1159:
case 3036:
case 2244:
case 1251:
case 2203:
case 1622:
case 3447:
case 3088:
case 1803:
case 2289:
case 2525:
case 1445:
case 447:
case 3330:
case 607:
case 21:
case 1067:
case 10:
case 1507:
case 2748:
case 2868:
case 825:
case 2727:
case 2982:
case 3014:
case 1643:
case 94:
case 4052:
case 3768:
case 2587:
case 2436:
case 2106:
case 2504:
case 3317:
case 3951:
case 1422:
case 2829:
case 1242:
case 1600:
case 1801:
case 3624:
case 2624:
case 6:
case 3270:
case 1231:
case 1972:
case 707:
case 604:
case 1526:
case 2877:
case 984:
case 2276:
case 3882:
case 2599:
case 2658:
case 896:
case 1843:
case 1503:
case 677:
case 3360:
case 4063:
case 687:
case 2206:
case 1019:
case 486:
case 1710:
case 2775:
case 465:
case 2073:
case 102:
case 1555:
case 1135:
case 3583:
case 3702:
case 1446:
case 223:
case 3916:
case 2706:
case 425:
case 2766:
case 2053:
case 1460:
case 982:
case 1971:
case 3448:
case 515:
case 3840:
case 3676:
case 492:
case 1544:
case 213:
case 163:
case 577:
case 3466:
case 2733:
case 2661:
case 3013:
case 260:
case 1795:
case 4061:
case 3215:
case 2057:
case 3461:
case 2071:
case 3397:
case 1002:
case 2174:
case 536:
case 1142:
case 3376:
case 195:
case 822:
case 2296:
case 1224:
case 551:
case 1529:
case 2016:
case 440:
case 959:
case 3225:
case 821:
case 2297:
case 3529:
case 1328:
case 3987:
case 696:
case 361:
case 2274:
case 2670:
case 3372:
case 3748:
case 2068:
case 3525:
case 3511:
case 3439:
case 3490:
case 2736:
case 1693:
case 1334:
case 663:
case 118:
case 3155:
case 3629:
case 3733:
case 74:
case 2033:
case 478:
case 4067:
case 1060:
case 2925:
case 3850:
case 3264:
case 3037:
case 1773:
case 3194:
case 1137:
case 1360:
case 3421:
case 1805:
case 1590:
case 1176:
case 3411:
case 4056:
case 2513:
case 127:
case 247:
case 394:
case 1868:
case 648:
case 1793:
case 921:
case 1247:
case 620:
case 1421:
case 790:
case 2273:
case 2061:
case 3937:
case 354:
case 3245:
case 3413:
case 1038:
case 3379:
case 1444:
case 404:
case 3246:
case 1624:
case 2851:
case 1743:
case 3048:
case 923:
case 2025:
case 2159:
case 2262:
case 812:
case 2865:
case 321:
case 2105:
case 645:
case 72:
case 1322:
case 1138:
case 697:
case 15:
case 1086:
case 1235:
case 2010:
case 3715:
case 3900:
case 1449:
case 1199:
case 2731:
case 1996:
case 1578:
case 3031:
case 3420:
case 2980:
case 1143:
case 2602:
case 1823:
case 116:
case 2160:
case 966:
case 1920:
case 3148:
case 2551:
case 1343:
case 574:
case 545:
case 2453:
case 656:
case 865:
case 1865:
case 3292:
case 1345:
case 3182:
case 2819:
case 1837:
case 197:
case 3820:
case 3488:
case 900:
case 4017:
case 3723:
case 690:
case 1066:
case 1341:
case 238:
case 1082:
case 2531:
case 3075:
case 3654:
case 1939:
case 3050:
case 3478:
case 3106:
case 3905:
case 24:
case 3302:
case 2299:
case 1516:
case 2962:
case 1139:
case 3121:
case 120:
case 380:
case 2621:
case 3495:
case 596:
case 2095:
case 2:
case 182:
case 1623:
case 3785:
case 1999:
case 3760:
case 3229:
case 2268:
case 2240:
case 3999:
case 2261:
case 2720:
case 2140:
case 1637:
case 1967:
case 1110:
case 1980:
case 2065:
case 872:
case 1061:
case 927:
case 500:
case 1474:
case 412:
case 1510:
case 1883:
case 2281:
case 528:
case 2319:
case 615:
case 2759:
case 911:
case 1488:
case 1145:
case 158:
case 3130:
case 1252:
case 1102:
case 3307:
case 949:
case 2013:
case 3366:
case 2685:
case 3084:
case 591:
case 1278:
case 2245:
case 633:
case 1799:
case 946:
case 2480:
case 1610:
case 103:
case 1418:
case 1447:
case 3077:
case 4076:
case 2228:
case 3566:
case 2376:
case 1092:
case 3573:
case 3807:
case 806:
case 3384:
case 2746:
case 2464:
case 643:
case 350:
case 1225:
case 3052:
case 2369:
case 2430:
case 2978:
case 983:
case 2300:
case 1874:
case 2857:
case 2290:
case 3520:
case 863:
case 2637:
case 2043:
case 1891:
case 3761:
case 917:
case 4029:
case 2562:
case 2953:
case 546:
case 3487:
case 3080:
case 402:
case 4002:
case 3180:
case 3227:
case 2898:
case 847:
case 571:
case 905:
case 2298:
case 2844:
case 2085:
case 2738:
case 1994:
case 1829:
case 2487:
case 3940:
case 673:
case 3550:
case 667:
case 268:
case 1350:
case 1296:
case 3549:
case 4035:
case 2816:
case 32:
case 1389:
case 1479:
case 2157:
case 348:
case 3038:
case 413:
case 2004:
case 2897:
case 132:
case 572:
case 468:
case 1127:
case 737:
case 3860:
case 2873:
case 3343:
case 3515:
case 1367:
case 3359:
case 3557:
case 1570:
case 1842:
case 1832:
case 1712:
case 4053:
case 2184:
case 2493:
case 953:
case 972:
case 3684:
case 3678:
case 3347:
case 2398:
case 2674:
case 2020:
case 2265:
case 3138:
case 90:
case 3220:
case 1207:
case 3983:
case 3957:
case 389:
case 818:
case 593:
case 180:
case 1128:
case 1753:
case 3081:
case 3595:
case 3766:
case 3818:
case 1100:
case 781:
case 2616:
case 2024:
case 1457:
case 3870:
case 3187:
case 3089:
case 1839:
case 2883:
case 586:
case 1651:
case 3217:
case 3703:
case 4074:
case 1337:
case 3467:
case 2915:
case 1245:
case 1154:
case 1888:
case 1212:
case 3874:
case 3628:
case 861:
case 2476:
case 3425:
case 453:
case 210:
case 2921:
case 462:
case 331:
case 129:
case 1040:
case 375:
case 86:
case 3996:
case 1729:
case 1620:
case 820:
case 298:
case 2726:
case 2361:
case 507:
case 886:
case 981:
case 1255:
case 152:
case 2782:
case 3018:
case 3794:
case 2122:
case 811:
case 2420:
case 3174:
case 2809:
case 3291:
case 2918:
case 206:
case 869:
case 1476:
case 384:
case 3580:
case 2413:
case 2889:
case 2963:
case 2142:
case 1621:
case 400:
case 2007:
case 1025:
case 1882:
case 805:
case 2701:
case 3746:
case 1234:
case 1091:
case 3982:
case 1282:
case 2974:
case 1329:
case 1484:
case 3588:
case 996:
case 3046:
case 1852:
case 3883:
case 1373:
case 3989:
case 1155:
case 2397:
case 109:
case 1549:
case 4012:
case 2933:
case 1749:
case 1695:
case 1912:
case 2993:
case 2608:
case 1354:
case 1790:
case 3399:
case 1386:
case 2860:
case 165:
case 511:
case 1911:
case 1556:
case 3471:
case 2866:
case 2810:
case 1114:
case 104:
case 3409:
case 585:
case 2332:
case 2976:
case 1489:
case 2869:
case 186:
case 3865:
case 1704:
case 3569:
case 3431:
case 431:
case 2519:
case 1030:
case 950:
case 3955:
case 1151:
case 1226:
case 1149:
case 393:
case 3536:
case 1292:
case 2861:
case 850:
case 1338:
case 1978:
case 879:
case 3613:
case 3062:
case 1713:
case 323:
case 2242:
case 1783:
case 2949:
case 1492:
case 2181:
case 1260:
case 2380:
case 3298:
case 1515:
case 2631:
case 2466:
case 1645:
case 3616:
case 987:
case 3491:
case 2676:
case 1630:
case 1382:
case 1653:
case 1992:
case 1916:
case 1302:
case 1528:
case 231:
case 236:
case 3858:
case 3412:
case 1218:
case 3897:
case 3183:
case 3946:
case 2541:
case 266:
case 428:
case 1962:
case 1731:
case 3531:
case 1932:
case 3252:
case 2428:
case 1385:
case 3314:
case 2984:
case 904:
case 3675:
case 587:
case 2939:
case 3479:
case 1953:
case 2628:
case 304:
case 623:
case 123:
case 682:
case 1884:
case 2922:
case 1184:
case 2756:
case 419:
case 2834:
case 1264:
case 1099:
case 2023:
case 632:
case 3429:
case 2451:
case 2609:
case 630:
case 4059:
case 2210:
case 3913:
case 2083:
case 3959:
case 1464:
case 1140:
case 2236:
case 3662:
case 567:
case 3902:
case 26:
case 906:
case 2771:
case 734:
case 3324:
case 2009:
case 1306:
case 3821:
case 2354:
case 1007:
case 3039:
case 1896:
case 259:
case 4001:
case 2801:
case 3122:
case 3137:
case 3638:
case 3401:
case 801:
case 111:
case 752:
case 725:
case 1658:
case 2954:
case 3571:
case 1521:
case 2094:
case 3230:
case 3559:
case 3090:
case 2104:
case 561:
case 1325:
case 742:
case 857:
case 1662:
case 3650:
case 2914:
case 342:
case 2320:
case 1095:
case 2335:
case 3494:
case 2173:
case 741:
case 2008:
case 2517:
case 4031:
case 678:
case 2421:
case 2494:
case 1581:
case 1052:
case 302:
case 3722:
case 658:
case 3167:
case 3193:
case 3815:
case 2660:
case 952:
case 371:
case 3909:
case 423:
case 3318:
case 3548:
case 565:
case 301:
case 2490:
case 3462:
case 1767:
case 2824:
case 414:
case 355:
case 964:
case 908:
case 2612:
case 1917:
case 3203:
case 1906:
case 625:
case 2588:
case 3124:
case 1548:
case 1741:
case 3116:
case 2439:
case 1921:
case 2437:
case 3801:
case 3361:
case 67:
case 2213:
case 1119:
case 3389:
case 1738:
case 3930:
case 965:
case 372:
case 1677:
case 1605:
case 2996:
case 1365:
case 1047:
case 134:
case 344:
case 2463:
case 557:
case 3464:
case 2832:
case 3570:
case 3947:
case 875:
case 3504:
case 3368:
case 1202:
case 2344:
case 426:
case 2326:
case 1141:
case 1918:
case 1064:
case 3069:
case 1959:
case 273:
case 2131:
case 100:
case 3341:
case 1412:
case 3655:
case 2227:
case 237:
case 609:
case 2571:
case 2979:
case 1432:
case 4000:
case 970:
case 543:
case 1024:
case 2405:
case 1026:
case 2355:
case 2988:
case 1517:
case 2301:
case 3596:
case 889:
case 2069:
case 714:
case 3524:
case 2327:
case 3561:
case 2389:
case 2814:
case 2700:
case 1401:
case 1263:
case 1952:
case 87:
case 2238:
case 4077:
case 527:
case 3345:
case 1487:
case 3406:
case 3111:
case 2722:
case 3906:
case 627:
case 3562:
case 2545:
case 1776:
case 1558:
case 3098:
case 2093:
case 2506:
case 717:
case 364:
case 4055:
case 1607:
case 2373:
case 391:
case 1106:
case 1481:
case 1847:
case 1005:
case 78:
case 179:
case 3099:
case 80:
case 868:
case 2737:
case 3710:
case 460:
case 2422:
case 1090:
case 317:
case 1157:
case 2958:
case 849:
case 1851:
case 3932:
case 3387:
case 275:
case 2583:
case 1000:
case 2728:
case 2128:
case 149:
case 782:
case 296:
case 1835:
case 322:
case 1640:
case 2251:
case 1303:
case 1715:
case 60:
case 1845:
case 683:
case 3234:
case 3127:
case 264:
case 4030:
case 575:
case 1602:
case 1700:
case 2048:
case 3386:
case 325:
case 936:
case 2191:
case 3798:
case 1109:
case 2402:
case 1944:
case 1423:
case 2881:
case 935:
case 3457:
case 582:
case 804:
case 1664:
case 3686:
case 3440:
case 44:
case 1395:
case 2850:
case 1069:
case 326:
case 369:
case 1346:
case 1520:
case 2704:
case 3956:
case 1008:
case 1685:
case 2572:
case 2037:
case 1048:
case 1081:
case 3290:
case 3446:
case 823:
case 307:
case 2874:
case 3483:
case 1415:
case 3608:
case 2488:
case 2161:
case 1502:
case 706:
case 438:
case 3460:
case 50:
case 178:
case 349:
case 1571:
case 2097:
case 3114:
case 3400:
case 1821:
case 3635:
case 783:
case 156:
case 312:
case 4020:
case 1125:
case 477:
case 1892:
case 91:
case 235:
case 2543:
case 1279:
case 1193:
case 1498:
case 2260:
case 3594:
case 644:
case 3855:
case 1164:
case 3810:
case 2186:
case 1043:
case 2304:
case 808:
case 2690:
case 215:
case 768:
case 3980:
case 2452:
case 2713:
case 1890:
case 3144:
case 135:
case 570:
case 2127:
case 2935:
case 2052:
case 1926:
case 3276:
case 234:
case 2741:
case 3134:
case 1744:
case 1182:
case 1678:
case 3331:
case 2091:
case 1470:
case 4050:
case 1120:
case 3338:
case 897:
case 3749:
case 2926:
case 3577:
case 4045:
case 53:
case 799:
case 1016:
case 2515:
case 4034:
case 1068:
case 755:
case 2162:
case 3011:
case 2719:
case 3497:
case 542:
case 34:
case 1204:
case 2331:
case 3145:
case 2843:
case 1215:
case 3355:
case 3097:
case 1766:
case 3260:
case 3023:
case 1757:
case 860:
case 3586:
case 3920:
case 2124:
case 2018:
case 3288:
case 2640:
case 122:
case 1513:
case 3864:
case 2684:
case 3998:
case 434:
case 1327:
case 2278:
case 532:
case 133:
case 3451:
case 513:
case 1943:
case 1027:
case 3623:
case 376:
case 225:
case 3012:
case 909:
case 918:
case 699:
case 1429:
case 1349:
case 3584:
case 2447:
case 3765:
case 3393:
case 788:
case 1167:
case 1342:
case 3793:
case 2196:
case 951:
case 2900:
case 1902:
case 592:
case 521:
case 107:
case 1477:
case 2585:
case 1523:
case 3962:
case 1717:
case 3041:
case 2875:
case 1557:
case 1788:
case 610:
case 555:
case 2547:
case 2434:
case 3265:
case 202:
case 2323:
case 3866:
case 3086:
case 3891:
case 162:
case 2156:
case 3579:
case 739:
case 3609:
case 356:
case 4023:
case 2671:
case 756:
case 3010:
case 1459:
case 722:
case 2536:
case 2411:
case 3073:
case 1010:
case 3423:
case 2747:
case 2102:
case 2394:
case 780:
case 1499:
case 2772:
case 2940:
case 153:
case 2912:
case 2524:
case 2270:
case 1055:
case 990:
case 1825:
case 1050:
case 1493:
case 3475:
case 3743:
case 3378:
case 3977:
case 1417:
case 1876:
case 2968:
case 1087:
case 1751:
case 2141:
case 2100:
case 1117:
case 3430:
case 328:
case 710:
case 1673:
case 2520:
case 2528:
case 3233:
case 764:
case 1546:
case 2981:
case 144:
case 2622:
case 3214:
case 1033:
case 3632:
case 2324:
case 3110:
case 3949:
case 2360:
case 3231:
case 3673:
case 2414:
case 2668:
case 4009:
case 2523:
case 1213:
case 1733:
case 2615:
case 1775:
case 2721:
case 1734:
case 3308:
case 254:
case 1531:
case 1537:
case 1857:
case 510:
case 3542:
case 3303:
case 31:
case 3707:
case 3990:
case 1759:
case 760:
case 3388:
case 3513:
case 3045:
case 2503:
case 1399:
case 2032:
case 1111:
case 382:
case 30:
case 3103:
case 1702:
case 3309:
case 1006:
case 779:
case 1144:
case 3442:
case 1179:
case 2086:
case 1051:
case 1295:
case 2292:
case 2758:
case 1314:
case 3283:
case 3141:
case 2833:
case 1736:
case 3076:
case 2404:
case 71:
case 1819:
case 2155:
case 1190:
case 52:
case 1792:
case 3151:
case 727:
case 2220:
case 789:
case 137:
case 491:
case 1241:
case 1243:
case 3142:
case 3604:
case 1046:
case 1133:
case 3614:
case 1956:
case 3652:
case 3035:
case 1709:
case 2886:
case 3502:
case 2473:
case 200:
case 1124:
case 3709:
case 1850:
case 1914:
case 1376:
case 618:
case 3169:
case 1461:
case 3235:
case 1977:
case 3861:
case 650:
case 2793:
case 1771:
case 2317:
case 931:
case 2757:
case 1402:
case 1232:
case 439:
case 3107:
case 198:
case 2903:
case 652:
case 79:
case 3802:
case 2303:
case 1565:
case 168:
case 69:
case 3842:
case 1936:
case 1440:
case 2778:
case 3811:
case 2862:
case 2828:
case 1188:
case 1123:
case 3915:
case 1381:
case 2712:
case 2798:
case 2584:
case 3340:
case 3468:
case 4005:
case 2365:
case 3362:
case 538:
case 2907:
case 3278:
case 1305:
case 2225:
case 3872:
case 2492:
case 668:
case 204:
case 824:
case 3509:
case 2263:
case 855:
case 277:
case 3553:
case 1297:
case 1568:
case 740:
case 3945:
case 4038:
case 3721:
case 968:
case 2252:
case 2215:
case 1397:
case 113:
case 3190:
case 4057:
case 1366:
case 1989:
case 3432:
case 709:
case 3537:
case 187:
case 2410:
case 1183:
case 96:
case 2923:
case 1696:
case 2459:
case 2495:
case 617:
case 2125:
case 3064:
case 3886:
case 3117:
case 3428:
case 639:
case 76:
case 3030:
case 343:
case 3805:
case 589:
case 1809:
case 1169:
case 1998:
case 1880:
case 2582:
case 2374:
case 3824:
case 3332:
case 2991:
case 3437:
case 1512:
case 1985:
case 954:
case 1034:
case 270:
case 1289:
case 3083:
case 2957:
case 2705:
case 3492:
case 1820:
case 316:
case 3868:
case 3994:
case 2592:
case 3929:
case 1838:
case 810:
case 2412:
case 961:
case 3184:
case 2791:
case 1508:
case 1691:
case 2642:
case 3939:
case 1072:
case 4014:
case 1822:
case 1705:
case 2885:
case 407:
case 1798:
case 114:
case 1925:
case 3126:
case 2076:
case 1597:
case 3129:
case 1840:
case 2357:
case 926:
case 311:
case 84:
case 3771:
case 2482:
case 2563:
case 1326:
case 516:
case 1480:
case 2744:
case 506:
case 664:
case 211:
case 1462:
case 2735:
case 549:
case 3021:
case 459:
case 3465:
case 2777:
case 256:
case 1674:
case 3289:
case 3311:
case 2555:
case 2359:
case 1437:
case 3042:
case 1436:
case 3390:
case 3354:
case 4051:
case 3177:
case 2983:
case 1246:
case 2561:
case 2277:
case 3838:
case 1411:
case 1564:
case 480:
case 2913:
case 4072:
case 3764:
case 2752:
case 1036:
case 366:
case 4042:
case 2966:
case 3213:
case 281:
case 1619:
case 3043:
case 2450:
case 1609:
case 1363:
case 435:
case 41:
case 1830:
case 2679:
case 4087:
case 2148:
case 3934:
case 2808:
case 199:
case 2235:
case 1196:
case 1562:
case 1552:
case 1873:
case 3890:
case 3067:
case 3774:
case 1784:
case 3863:
case 2311:
case 3351:
case 353:
case 2745:
case 232:
case 3918:
case 1291:
case 219:
case 455:
case 1253:
case 1543:
case 3469:
case 558:
case 1011:
case 3219:
case 2754:
case 2632:
case 4021:
case 3221:
case 3294:
case 703:
case 535:
case 2409:
case 3778:
case 537:
case 3241:
case 3299:
case 1424:
case 463:
case 4084:
case 2378:
case 2839:
case 1908:
case 2330:
case 1877:
case 1358:
case 4085:
case 2870:
case 957:
case 1594:
case 3032:
case 2056:
case 3928:
case 2121:
case 3806:
case 2256:
case 3178:
case 3489:
case 171:
case 938:
case 3275:
case 1913:
case 2116:
case 272:
case 1172:
case 212:
case 3172:
case 2338:
case 2313:
case 1707:
case 83:
case 1747:
case 563:
case 1393:
case 4094:
case 75:
case 2358:
case 3394:
case 599:
case 1332:
case 1300:
case 2783:
case 1361:
case 1737:
case 1878:
case 686:
case 2081:
case 1254:
case 262:
case 883:
case 128:
case 2143:
case 108:
case 97:
case 1666:
case 154:
case 2597:
case 2366:
case 1955:
case 2529:
case 2625:
case 92:
case 2441:
case 3450:
case 665:
case 2438:
case 631:
case 77:
case 3049:
case 1641:
case 2474:
case 2066:
case 470:
case 2287:
case 1648:
case 2469:
case 3015:
case 642:
case 3165:
case 3474:
case 1062:
case 3392:
case 3170:
case 2282:
case 3199:
case 43:
case 2717:
case 1301:
case 2054:
case 778:
case 233:
case 2753:
case 3979:
case 1147:
case 3166:
case 40:
case 750:
case 194:
case 3825:
case 1463:
case 1146:
case 2103:
case 3001:
case 2336:
case 2502:
case 3556:
case 2050:
case 2194:
case 2302:
case 2620:
case 1846:
case 3306:
case 4006:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1736744401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,];
var gg_b = "1736744401/";

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
    if (rr["hasavif"] == 1) rr["haswebp"] = 1;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
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
