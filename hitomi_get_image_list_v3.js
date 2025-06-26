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
case 3310:
case 1475:
case 462:
case 4079:
case 3251:
case 2807:
case 450:
case 2372:
case 1086:
case 3277:
case 3241:
case 2783:
case 242:
case 3569:
case 369:
case 3007:
case 3860:
case 1789:
case 245:
case 933:
case 1911:
case 1491:
case 3165:
case 1710:
case 3998:
case 3418:
case 1906:
case 465:
case 3593:
case 2461:
case 747:
case 3544:
case 2749:
case 3332:
case 330:
case 2026:
case 1723:
case 2759:
case 2062:
case 3826:
case 1131:
case 670:
case 497:
case 1753:
case 3681:
case 2729:
case 1106:
case 3323:
case 1014:
case 3187:
case 648:
case 1732:
case 1111:
case 170:
case 2217:
case 2056:
case 2435:
case 3637:
case 2947:
case 1332:
case 1394:
case 3131:
case 4022:
case 2584:
case 2892:
case 1856:
case 2415:
case 3014:
case 1323:
case 3106:
case 1681:
case 1198:
case 3753:
case 1846:
case 370:
case 519:
case 3111:
case 2814:
case 3794:
case 2349:
case 3732:
case 2168:
case 4050:
case 3086:
case 2599:
case 3409:
case 2641:
case 2677:
case 2204:
case 2157:
case 126:
case 2886:
case 74:
case 1007:
case 169:
case 2171:
case 716:
case 1277:
case 2563:
case 3491:
case 2501:
case 805:
case 599:
case 1554:
case 2968:
case 2621:
case 1987:
case 4020:
case 971:
case 2772:
case 3906:
case 1418:
case 1998:
case 2040:
case 563:
case 246:
case 1805:
case 3850:
case 3155:
case 1100:
case 2441:
case 2477:
case 889:
case 21:
case 3564:
case 466:
case 3840:
case 429:
case 191:
case 2050:
case 1638:
case 3145:
case 1404:
case 3261:
case 3691:
case 2020:
case 3549:
case 2218:
case 2421:
case 324:
case 1784:
case 691:
case 3820:
case 3197:
case 1570:
case 2873:
case 1902:
case 325:
case 3437:
case 1763:
case 1096:
case 3336:
case 3008:
case 1235:
case 2793:
case 1039:
case 2066:
case 1900:
case 2808:
case 2615:
case 611:
case 1799:
case 3997:
case 1481:
case 1102:
case 3316:
case 3301:
case 1019:
case 3833:
case 2052:
case 2724:
case 3988:
case 1215:
case 3842:
case 2589:
case 1945:
case 3763:
case 1278:
case 1437:
case 311:
case 2148:
case 3900:
case 2896:
case 2510:
case 1955:
case 990:
case 4026:
case 1813:
case 792:
case 3572:
case 908:
case 598:
case 1316:
case 2128:
case 3080:
case 2393:
case 2530:
case 2185:
case 794:
case 2967:
case 2880:
case 1988:
case 1833:
case 1363:
case 4046:
case 3019:
case 1301:
case 1564:
case 1675:
case 1529:
case 806:
case 2553:
case 624:
case 910:
case 1850:
case 2958:
case 3082:
case 262:
case 2594:
case 625:
case 2543:
case 3638:
case 1840:
case 2948:
case 349:
case 622:
case 265:
case 1549:
case 2167:
case 1188:
case 1691:
case 1203:
case 957:
case 2512:
case 3618:
case 1125:
case 2523:
case 125:
case 1197:
case 3570:
case 2776:
case 2603:
case 715:
case 393:
case 2291:
case 2566:
case 3760:
case 1202:
case 3374:
case 1539:
case 443:
case 1072:
case 976:
case 123:
case 3508:
case 2498:
case 394:
case 1596:
case 2918:
case 1810:
case 1115:
case 3628:
case 2390:
case 711:
case 499:
case 3178:
case 2552:
case 1519:
case 441:
case 2707:
case 3658:
case 1360:
case 1830:
case 3648:
case 2542:
case 2533:
case 1774:
case 1135:
case 2864:
case 840:
case 2829:
case 2118:
case 2392:
case 3756:
case 3288:
case 1495:
case 367:
case 3064:
case 4036:
case 1843:
case 1832:
case 315:
case 1362:
case 2540:
case 1582:
case 2465:
case 180:
case 3667:
case 1200:
case 22:
case 2138:
case 3255:
case 1471:
case 312:
case 1346:
case 4001:
case 878:
case 1935:
case 2859:
case 3245:
case 791:
case 2600:
case 1823:
case 16:
case 3978:
case 419:
case 3726:
case 2520:
case 680:
case 3326:
case 3495:
case 2505:
case 200:
case 2267:
case 1288:
case 3915:
case 612:
case 2579:
case 114:
case 725:
case 380:
case 3582:
case 1029:
case 3843:
case 1064:
case 167:
case 3346:
case 3447:
case 112:
case 2023:
case 3471:
case 1255:
case 2645:
case 614:
case 2012:
case 907:
case 3200:
case 2870:
case 2734:
case 1573:
case 36:
case 3823:
case 2655:
case 1245:
case 323:
case 3072:
case 2228:
case 1760:
case 562:
case 2010:
case 1628:
case 2872:
case 1961:
case 2307:
case 3115:
case 2790:
case 3596:
case 194:
case 2089:
case 692:
case 2248:
case 321:
case 218:
case 2030:
case 564:
case 695:
case 3135:
case 3774:
case 3580:
case 2258:
case 2611:
case 1076:
case 3668:
case 4089:
case 542:
case 3305:
case 1884:
case 972:
case 3287:
case 770:
case 803:
case 3379:
case 2556:
case 396:
case 2631:
case 975:
case 879:
case 3977:
case 1231:
case 801:
case 4030:
case 1514:
case 545:
case 2917:
case 1322:
case 3265:
case 887:
case 3752:
case 1899:
case 2425:
case 3742:
case 1586:
case 1836:
case 3121:
case 147:
case 1333:
case 1801:
case 2380:
case 2937:
case 3151:
case 2560:
case 3647:
case 3671:
case 3713:
case 2893:
case 3722:
case 4012:
case 2708:
case 4023:
case 647:
case 34:
case 1816:
case 2036:
case 1507:
case 3899:
case 2719:
case 852:
case 1752:
case 3313:
case 1695:
case 1265:
case 3322:
case 347:
case 64:
case 2665:
case 2574:
case 2780:
case 2295:
case 1671:
case 2104:
case 1766:
case 1151:
case 3342:
case 1044:
case 854:
case 2739:
case 2796:
case 3590:
case 2271:
case 42:
case 1657:
case 2063:
case 3485:
case 3206:
case 934:
case 3076:
case 3340:
case 935:
case 1379:
case 3592:
case 3428:
case 3350:
case 3884:
case 3211:
case 1720:
case 932:
case 1977:
case 1941:
case 3779:
case 3705:
case 3320:
case 196:
case 3514:
case 2782:
case 3231:
case 1542:
case 496:
case 3258:
case 3786:
case 79:
case 2135:
case 663:
case 161:
case 3030:
case 318:
case 593:
case 3909:
case 221:
case 3431:
case 3248:
case 1552:
case 1602:
case 3089:
case 3790:
case 2810:
case 3406:
case 3307:
case 1513:
case 661:
case 979:
case 1522:
case 2889:
case 1566:
case 874:
case 549:
case 3228:
case 2539:
case 3411:
case 1386:
case 223:
case 2072:
case 591:
case 901:
case 3655:
case 2812:
case 987:
case 26:
case 398:
case 4044:
case 4093:
case 1849:
case 3645:
case 71:
case 2346:
case 2935:
case 2894:
case 2832:
case 511:
case 4024:
case 1465:
case 2582:
case 3579:
case 3625:
case 1829:
case 1334:
case 1864:
case 1392:
case 327:
case 62:
case 1118:
case 2853:
case 1550:
case 3267:
case 2915:
case 2326:
case 3505:
case 300:
case 1870:
case 2726:
case 762:
case 198:
case 2049:
case 1175:
case 2573:
case 1792:
case 952:
case 600:
case 1645:
case 3314:
case 1023:
case 2762:
case 627:
case 3138:
case 3540:
case 2297:
case 954:
case 98:
case 215:
case 2225:
case 1714:
case 698:
case 2064:
case 100:
case 2161:
case 1697:
case 3550:
case 568:
case 1032:
case 3118:
case 127:
case 3392:
case 3864:
case 3334:
case 1043:
case 955:
case 447:
case 1625:
case 1579:
case 361:
case 834:
case 2648:
case 1786:
case 3542:
case 524:
case 3938:
case 1248:
case 3707:
case 2658:
case 1431:
case 728:
case 1909:
case 835:
case 1975:
case 118:
case 2083:
case 525:
case 2961:
case 1872:
case 3513:
case 4076:
case 832:
case 1406:
case 1790:
case 3918:
case 1089:
case 1991:
case 1228:
case 1010:
case 295:
case 3566:
case 3487:
case 399:
case 2231:
case 2448:
case 341:
case 2514:
case 4083:
case 1556:
case 2779:
case 343:
case 1526:
case 3876:
case 2350:
case 2428:
case 2884:
case 2592:
case 1773:
case 1606:
case 2076:
case 1611:
case 2340:
case 1382:
case 1562:
case 2485:
case 3687:
case 80:
case 742:
case 3063:
case 2352:
case 940:
case 1708:
case 3247:
case 2816:
case 2590:
case 2863:
case 2801:
case 319:
case 3739:
case 1854:
case 1937:
case 3104:
case 1445:
case 4049:
case 3016:
case 1869:
case 1488:
case 1824:
case 3099:
case 3574:
case 247:
case 978:
case 2366:
case 414:
case 2322:
case 3719:
case 467:
case 4064:
case 1396:
case 3308:
case 548:
case 1400:
case 1796:
case 2657:
case 3455:
case 3708:
case 2054:
case 2722:
case 216:
case 1001:
case 3319:
case 1016:
case 3560:
case 3445:
case 2766:
case 1104:
case 2647:
case 729:
case 9:
case 2151:
case 956:
case 1739:
case 2093:
case 2121:
case 3824:
case 807:
case 3869:
case 2742:
case 1308:
case 2627:
case 2024:
case 619:
case 2507:
case 480:
case 1904:
case 2951:
case 3137:
case 421:
case 1373:
case 3606:
case 2287:
case 3773:
case 1698:
case 2305:
case 2298:
case 2921:
case 2668:
case 858:
case 3890:
case 4073:
case 2710:
case 642:
case 144:
case 1060:
case 424:
case 3772:
case 1403:
case 425:
case 2789:
case 2911:
case 884:
case 3501:
case 2491:
case 142:
case 644:
case 2730:
case 645:
case 3157:
case 2475:
case 3641:
case 366:
case 3074:
case 1807:
case 882:
case 2086:
case 1372:
case 2931:
case 2732:
case 2743:
case 3814:
case 270:
case 3927:
case 2106:
case 1046:
case 3834:
case 3329:
case 3957:
case 2723:
case 4008:
case 977:
case 3892:
case 1749:
case 93:
case 3971:
case 3947:
case 1026:
case 3217:
case 2965:
case 413:
case 2846:
case 1814:
case 743:
case 2856:
case 1415:
case 4019:
case 516:
case 3370:
case 3729:
case 2198:
case 1927:
case 937:
case 1359:
case 890:
case 2826:
case 808:
case 1892:
case 3062:
case 799:
case 741:
case 1834:
case 1329:
case 3026:
case 2862:
case 3749:
case 2394:
case 3461:
case 2544:
case 2418:
case 2221:
case 344:
case 1127:
case 1516:
case 810:
case 2998:
case 1890:
case 2554:
case 2987:
case 1886:
case 226:
case 4082:
case 2569:
case 269:
case 2524:
case 1536:
case 1147:
case 2604:
case 1651:
case 2389:
case 2438:
case 129:
case 491:
case 1599:
case 449:
case 1074:
case 166:
case 857:
case 1641:
case 719:
case 1677:
case 2251:
case 521:
case 2784:
case 3603:
case 3523:
case 2902:
case 1873:
case 831:
case 2618:
case 3167:
case 646:
case 3985:
case 365:
case 249:
case 3005:
case 291:
case 1050:
case 3209:
case 2638:
case 3275:
case 362:
case 3079:
case 1376:
case 2805:
case 1040:
case 469:
case 3958:
case 426:
case 11:
case 1769:
case 3967:
case 397:
case 69:
case 3530:
case 763:
case 2736:
case 213:
case 3819:
case 3393:
case 1615:
case 2080:
case 2102:
case 56:
case 3678:
case 1793:
case 430:
case 2716:
case 3510:
case 2900:
case 1808:
case 19:
case 1754:
case 1635:
case 2701:
case 2763:
case 3839:
case 3369:
case 211:
case 580:
case 328:
case 2096:
case 3589:
case 512:
case 1185:
case 2842:
case 1354:
case 2988:
case 2363:
case 2301:
case 3052:
case 3724:
case 2316:
case 2925:
case 2997:
case 1393:
case 470:
case 2417:
case 1344:
case 2852:
case 39:
case 2955:
case 3066:
case 1510:
case 2399:
case 1158:
case 515:
case 1589:
case 128:
case 1369:
case 3013:
case 1324:
case 2278:
case 3022:
case 3754:
case 1512:
case 2559:
case 1523:
case 2125:
case 662:
case 1928:
case 2197:
case 1291:
case 224:
case 165:
case 3218:
case 2549:
case 1985:
case 700:
case 873:
case 2188:
case 3020:
case 727:
case 809:
case 905:
case 1532:
case 1275:
case 1209:
case 3050:
case 1005:
case 150:
case 798:
case 2840:
case 3477:
case 31:
case 2675:
case 871:
case 904:
case 594:
case 2155:
case 1553:
case 2384:
case 2850:
case 1958:
case 2609:
case 346:
case 3040:
case 3376:
case 2058:
case 2321:
case 1630:
case 3704:
case 2048:
case 639:
case 3858:
case 3196:
case 2230:
case 2979:
case 3119:
case 283:
case 3484:
case 3828:
case 1973:
case 2802:
case 2377:
case 2028:
case 3002:
case 3885:
case 2210:
case 1304:
case 918:
case 557:
case 3317:
case 1561:
case 1503:
case 1249:
case 1908:
case 652:
case 2800:
case 1623:
case 18:
case 3416:
case 154:
case 702:
case 1737:
case 84:
case 3182:
case 3463:
case 590:
case 900:
case 2223:
case 927:
case 816:
case 3000:
case 2649:
case 1097:
case 3337:
case 3867:
case 2253:
case 152:
case 1025:
case 387:
case 1643:
case 1229:
case 1632:
case 998:
case 508:
case 1088:
case 2067:
case 3499:
case 1717:
case 207:
case 2629:
case 3781:
case 2243:
case 354:
case 3623:
case 3249:
case 4057:
case 2518:
case 2493:
case 1317:
case 2444:
case 2845:
case 3259:
case 4071:
case 20:
case 355:
case 2454:
case 1939:
case 1463:
case 2140:
case 1182:
case 3632:
case 3229:
case 2538:
case 3264:
case 187:
case 3694:
case 2469:
case 1337:
case 2942:
case 360:
case 3097:
case 2933:
case 3653:
case 2825:
case 92:
case 459:
case 4095:
case 847:
case 2120:
case 3088:
case 1919:
case 2751:
case 585:
case 1704:
case 3630:
case 179:
case 1848:
case 1982:
case 2940:
case 435:
case 1196:
case 55:
case 2777:
case 2741:
case 3283:
case 1858:
case 2950:
case 101:
case 276:
case 3610:
case 432:
case 3973:
case 1828:
case 2920:
case 679:
case 582:
case 3304:
case 4068:
case 1180:
case 339:
case 2133:
case 1535:
case 235:
case 943:
case 476:
case 3986:
case 77:
case 3134:
case 3318:
case 892:
case 737:
case 3709:
case 2831:
case 2361:
case 1718:
case 3990:
case 1087:
case 999:
case 1309:
case 941:
case 1684:
case 3868:
case 232:
case 2811:
case 571:
case 3857:
case 3412:
case 378:
case 3992:
case 2644:
case 1254:
case 2263:
case 638:
case 3871:
case 1663:
case 1601:
case 1244:
case 1293:
case 3494:
case 1636:
case 2027:
case 3443:
case 2299:
case 814:
case 340:
case 3827:
case 1577:
case 138:
case 919:
case 1269:
case 3895:
case 2715:
case 156:
case 1699:
case 2778:
case 2926:
case 3254:
case 640:
case 3107:
case 1992:
case 789:
case 178:
case 1412:
case 1934:
case 1186:
case 86:
case 1871:
case 2449:
case 2865:
case 4067:
case 420:
case 1914:
case 1432:
case 3551:
case 3636:
case 407:
case 1494:
case 2956:
case 3224:
case 338:
case 3577:
case 3541:
case 3391:
case 1986:
case 1031:
case 4048:
case 0:
case 1709:
case 2126:
case 3907:
case 1192:
case 4028:
case 1011:
case 3309:
case 3375:
case 274:
case 3087:
case 1990:
case 2898:
case 3718:
case 823:
case 436:
case 1791:
case 275:
case 1868:
case 2887:
case 1489:
case 3976:
case 3728:
case 1358:
case 1420:
case 273:
case 2199:
case 2702:
case 2557:
case 738:
case 1348:
case 825:
case 484:
case 45:
case 2547:
case 3785:
case 3290:
case 535:
case 1565:
case 2101:
case 2482:
case 2163:
case 1154:
case 4038:
case 1385:
case 532:
case 1041:
case 3804:
case 1144:
case 2595:
case 1193:
case 1450:
case 2274:
case 1051:
case 3479:
case 482:
case 2116:
case 1433:
case 3646:
case 2480:
case 1442:
case 1924:
case 1969:
case 2936:
case 67:
case 3176:
case 2419:
case 1817:
case 3214:
case 1993:
case 1422:
case 1944:
case 3626:
case 1413:
case 2325:
case 2496:
case 2901:
case 868:
case 1367:
case 559:
case 1837:
case 2439:
case 137:
case 1466:
case 2568:
case 177:
case 3969:
case 3924:
case 3442:
case 2788:
case 1767:
case 3433:
case 2256:
case 2300:
case 2725:
case 2246:
case 490:
case 1656:
case 3817:
case 2797:
case 1176:
case 3598:
case 2408:
case 408:
case 1506:
case 2634:
case 2262:
case 2037:
case 3413:
case 1662:
case 63:
case 1511:
case 3954:
case 3367:
case 942:
case 740:
case 410:
case 1660:
case 2821:
case 572:
case 3169:
case 4091:
case 1804:
case 3041:
case 2851:
case 3154:
case 1748:
case 3207:
case 3674:
case 3440:
case 849:
case 945:
case 891:
case 1758:
case 3193:
case 286:
case 1286:
case 2673:
case 1164:
case 2706:
case 760:
case 2490:
case 2910:
case 2153:
case 1818:
case 950:
case 3972:
case 431:
case 1545:
case 104:
case 2143:
case 2711:
case 1003:
case 581:
case 1061:
case 605:
case 1368:
case 964:
case 1838:
case 257:
case 1149:
case 2567:
case 433:
case 754:
case 78:
case 3474:
case 3640:
case 2205:
case 1159:
case 917:
case 2112:
case 826:
case 558:
case 102:
case 2123:
case 869:
case 3875:
case 604:
case 3170:
case 3809:
case 583:
case 2731:
case 755:
case 3282:
case 2189:
case 2943:
case 1347:
case 2414:
case 3633:
case 3015:
case 1446:
case 351:
case 3642:
case 928:
case 1929:
case 1357:
case 3727:
case 3795:
case 2815:
case 4017:
case 3652:
case 2912:
case 3502:
case 3757:
case 388:
case 2923:
case 3239:
case 3970:
case 3622:
case 353:
case 1395:
case 1208:
case 3666:
case 1462:
case 2585:
case 1078:
case 2680:
case 1642:
case 151:
case 3446:
case 1015:
case 3371:
case 1172:
case 3456:
case 1652:
case 1795:
case 1727:
case 870:
case 3357:
case 4081:
case 651:
case 3395:
case 1613:
case 3426:
case 1622:
case 1970:
case 1239:
case 1502:
case 2696:
case 779:
case 848:
case 1296:
case 3183:
case 3462:
case 1666:
case 1747:
case 1771:
case 576:
case 1972:
case 2861:
case 3818:
case 305:
case 3129:
case 284:
case 473:
case 3061:
case 1891:
case 2787:
case 91:
case 304:
case 3545:
case 1640:
case 2682:
case 409:
case 3588:
case 3983:
case 3838:
case 2240:
case 3605:
case 471:
case 2407:
case 1170:
case 2306:
case 1875:
case 3679:
case 2038:
case 3159:
case 2193:
case 109:
case 1607:
case 2144:
case 2328:
case 2450:
case 2051:
case 3302:
case 1004:
case 3877:
case 2674:
case 1163:
case 673:
case 2154:
case 2207:
case 2385:
case 2077:
case 2169:
case 331:
case 2124:
case 3821:
case 1136:
case 1547:
case 2420:
case 817:
case 3690:
case 759:
case 2021:
case 1557:
case 3260:
case 1963:
case 1439:
case 2837:
case 2954:
case 4035:
case 2466:
case 237:
case 2944:
case 3037:
case 556:
case 1397:
case 27:
case 1496:
case 3634:
case 1325:
case 2598:
case 3692:
case 3797:
case 451:
case 732:
case 930:
case 1999:
case 1355:
case 2442:
case 1345:
case 3614:
case 2234:
case 3388:
case 2511:
case 3963:
case 3901:
case 89:
case 1692:
case 1408:
case 1755:
case 1262:
case 3325:
case 3700:
case 1634:
case 3496:
case 2506:
case 3397:
case 2626:
case 970:
case 23:
case 1725:
case 3355:
case 2881:
case 2656:
case 775:
case 3184:
case 1797:
case 3419:
case 948:
case 1614:
case 3345:
case 277:
case 3081:
case 3936:
case 3480:
case 1017:
case 1788:
case 1841:
case 1877:
case 3527:
case 3116:
case 2286:
case 133:
case 3607:
case 2405:
case 309:
case 402:
case 2804:
case 1851:
case 1686:
case 2748:
case 289:
case 81:
case 3163:
case 405:
case 2290:
case 2785:
case 3547:
case 3571:
case 404:
case 1690:
case 373:
case 4061:
case 2728:
case 2976:
case 924:
case 202:
case 1123:
case 2525:
case 2597:
case 489:
case 3407:
case 3240:
case 1930:
case 1387:
case 925:
case 2149:
case 2983:
case 3682:
case 3311:
case 1009:
case 2588:
case 539:
case 3250:
case 2460:
case 1194:
case 720:
case 1132:
case 3018:
case 2273:
case 3220:
case 110:
case 707:
case 1711:
case 1490:
case 35:
case 657:
case 1673:
case 2164:
case 2555:
case 3798:
case 2818:
case 1091:
case 3331:
case 3803:
case 552:
case 2208:
case 1130:
case 2949:
case 2462:
case 2078:
case 3639:
case 3696:
case 2959:
case 1434:
case 781:
case 3266:
case 1923:
case 1608:
case 3878:
case 1528:
case 2357:
case 2964:
case 1110:
case 554:
case 58:
case 2456:
case 1994:
case 1189:
case 783:
case 1414:
case 968:
case 758:
case 3680:
case 1639:
case 1222:
case 3585:
case 587:
case 3130:
case 2747:
case 47:
case 2666:
case 2035:
case 2970:
case 2757:
case 1266:
case 3923:
case 437:
case 1696:
case 1233:
case 2172:
case 2280:
case 1619:
case 3953:
case 3110:
case 2642:
case 3548:
case 251:
case 3414:
case 2650:
case 1240:
case 2809:
case 2170:
case 70:
case 2875:
case 1306:
case 3398:
case 685:
case 1250:
case 3009:
case 503:
case 2474:
case 3075:
case 357:
case 3387:
case 3930:
case 2891:
case 310:
case 579:
case 1220:
case 2768:
case 1018:
case 3194:
case 4021:
case 501:
case 3091:
case 845:
case 949:
case 3673:
case 15:
case 682:
case 2500:
case 1028:
case 3142:
case 1210:
case 1351:
case 843:
case 2304:
case 136:
case 1476:
case 681:
case 3920:
case 1802:
case 790:
case 158:
case 1341:
case 502:
case 2610:
case 1289:
case 3122:
case 3950:
case 3113:
case 4031:
case 841:
case 3777:
case 1979:
case 1230:
case 899:
case 683:
case 636:
case 181:
case 1058:
case 3166:
case 994:
case 658:
case 1683:
case 120:
case 3952:
case 3897:
case 3120:
case 2088:
case 710:
case 3825:
case 1232:
case 1575:
case 1664:
case 2653:
case 3933:
case 260:
case 3888:
case 2643:
case 2025:
case 2694:
case 2229:
case 3538:
case 3140:
case 3454:
case 478:
case 255:
case 1649:
case 2259:
case 2503:
case 3922:
case 3444:
case 3518:
case 2249:
case 3855:
case 967:
case 1659:
case 2908:
case 915:
case 588:
case 3243:
case 307:
case 3575:
case 3232:
case 1825:
case 1120:
case 3067:
case 1952:
case 320:
case 785:
case 438:
case 96:
case 1538:
case 4:
case 75:
case 1424:
case 1888:
case 456:
case 2867:
case 1469:
case 1933:
case 1966:
case 2939:
case 551:
case 1140:
case 2416:
case 3659:
case 2996:
case 1913:
case 1150:
case 1444:
case 1922:
case 2317:
case 782:
case 1493:
case 3351:
case 3210:
case 4087:
case 3028:
case 203:
case 921:
case 3341:
case 3085:
case 2484:
case 1672:
case 2828:
case 2119:
case 383:
case 1741:
case 2196:
case 176:
case 1113:
case 2515:
case 3048:
case 3683:
case 279:
case 2848:
case 1940:
case 2982:
case 2098:
case 375:
case 3887:
case 634:
case 506:
case 996:
case 1811:
case 1068:
case 2087:
case 2718:
case 635:
case 2375:
case 1806:
case 2309:
case 3761:
case 403:
case 2684:
case 1472:
case 1581:
case 1361:
case 1303:
case 1831:
case 3126:
case 479:
case 3162:
case 3483:
case 818:
case 1974:
case 401:
case 2391:
case 2541:
case 2577:
case 2:
case 3429:
case 1236:
case 238:
case 1378:
case 256:
case 537:
case 773:
case 800:
case 94:
case 1299:
case 916:
case 3946:
case 1624:
case 3335:
case 3962:
case 709:
case 898:
case 2601:
case 1654:
case 2293:
case 2616:
case 1047:
case 3315:
case 1693:
case 659:
case 1644:
case 1470:
case 2107:
case 3926:
case 3778:
case 1201:
case 2895:
case 460:
case 3236:
case 1464:
case 4025:
case 452:
case 731:
case 2190:
case 4088:
case 1865:
case 3669:
case 3299:
case 2432:
case 2914:
case 2443:
case 3027:
case 2186:
case 3735:
case 786:
case 733:
case 4045:
case 2847:
case 48:
case 3057:
case 82:
case 3201:
case 1778:
case 3263:
case 1926:
case 3644:
case 3693:
case 3071:
case 2423:
case 947:
case 455:
case 4055:
case 278:
case 2791:
case 1146:
case 332:
case 863:
case 2338:
case 1887:
case 2489:
case 1960:
case 1156:
case 1676:
case 1703:
case 439:
case 3806:
case 1126:
case 3303:
case 3361:
case 3581:
case 675:
case 2134:
case 2031:
case 2986:
case 1483:
case 674:
case 172:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750928402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,];
var gg_b = "1750928402/";

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
