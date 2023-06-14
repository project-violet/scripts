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
var o = 1;
switch (g) {
case 1643:
case 3054:
case 4069:
case 2838:
case 2497:
case 2291:
case 2204:
case 2676:
case 2901:
case 126:
case 882:
case 1438:
case 2480:
case 3550:
case 4026:
case 3455:
case 2811:
case 2310:
case 3825:
case 3801:
case 2869:
case 2929:
case 1480:
case 2864:
case 125:
case 1004:
case 127:
case 2635:
case 3315:
case 524:
case 2327:
case 1947:
case 1037:
case 3935:
case 1128:
case 1874:
case 1240:
case 18:
case 1245:
case 3911:
case 3397:
case 240:
case 3195:
case 2061:
case 3155:
case 792:
case 3765:
case 1607:
case 332:
case 772:
case 34:
case 758:
case 3119:
case 3401:
case 2726:
case 2863:
case 300:
case 2662:
case 437:
case 1706:
case 2800:
case 3678:
case 3918:
case 2775:
case 501:
case 4072:
case 1423:
case 2655:
case 4034:
case 2171:
case 1806:
case 1285:
case 2498:
case 2889:
case 2812:
case 3529:
case 1963:
case 2603:
case 819:
case 3602:
case 3331:
case 350:
case 1378:
case 3652:
case 355:
case 1989:
case 3761:
case 820:
case 387:
case 3879:
case 1344:
case 3730:
case 1347:
case 2826:
case 408:
case 1860:
case 194:
case 1887:
case 719:
case 1179:
case 451:
case 3353:
case 2751:
case 3653:
case 81:
case 0:
case 2364:
case 1883:
case 2048:
case 2530:
case 1305:
case 2599:
case 2452:
case 64:
case 3427:
case 2280:
case 915:
case 3844:
case 2866:
case 941:
case 2222:
case 3153:
case 910:
case 2661:
case 721:
case 976:
case 1795:
case 2060:
case 1585:
case 3480:
case 618:
case 2750:
case 2977:
case 3931:
case 227:
case 3785:
case 687:
case 3514:
case 1994:
case 185:
case 2050:
case 2200:
case 1108:
case 805:
case 2783:
case 3555:
case 1353:
case 1435:
case 1134:
case 3430:
case 3557:
case 1674:
case 133:
case 2504:
case 2514:
case 1038:
case 2118:
case 1849:
case 469:
case 2860:
case 753:
case 3336:
case 850:
case 1109:
case 3062:
case 2408:
case 779:
case 1207:
case 2249:
case 2145:
case 3695:
case 2437:
case 2548:
case 4062:
case 3794:
case 174:
case 4086:
case 981:
case 1790:
case 84:
case 3183:
case 3093:
case 3995:
case 2271:
case 1628:
case 1600:
case 794:
case 1257:
case 1462:
case 3537:
case 1154:
case 710:
case 2381:
case 211:
case 3693:
case 48:
case 1008:
case 3616:
case 3499:
case 1193:
case 3946:
case 1082:
case 2447:
case 3779:
case 1295:
case 730:
case 32:
case 2940:
case 613:
case 2784:
case 1975:
case 3335:
case 955:
case 1630:
case 936:
case 4035:
case 1818:
case 3990:
case 2825:
case 364:
case 2682:
case 1053:
case 1123:
case 616:
case 2756:
case 1768:
case 739:
case 3355:
case 361:
case 751:
case 966:
case 1192:
case 2752:
case 3861:
case 3466:
case 2225:
case 2422:
case 1194:
case 1402:
case 3008:
case 3470:
case 796:
case 3178:
case 2545:
case 2526:
case 3732:
case 1657:
case 1446:
case 1464:
case 3462:
case 180:
case 4070:
case 556:
case 3459:
case 725:
case 3816:
case 2052:
case 1352:
case 3494:
case 1884:
case 2024:
case 3656:
case 1495:
case 3718:
case 370:
case 2683:
case 1104:
case 1766:
case 1016:
case 3011:
case 3915:
case 2372:
case 1063:
case 2379:
case 572:
case 1059:
case 348:
case 2974:
case 3849:
case 2467:
case 1400:
case 3144:
case 283:
case 1507:
case 2984:
case 302:
case 3885:
case 791:
case 927:
case 52:
case 1618:
case 2623:
case 2873:
case 1299:
case 3402:
case 3131:
case 1826:
case 418:
case 603:
case 2387:
case 4017:
case 3137:
case 3359:
case 3982:
case 521:
case 1586:
case 2533:
case 3687:
case 3681:
case 426:
case 662:
case 3686:
case 1364:
case 2896:
case 3738:
case 736:
case 2549:
case 1905:
case 295:
case 2264:
case 1121:
case 1213:
case 787:
case 530:
case 500:
case 2821:
case 800:
case 2575:
case 707:
case 3510:
case 1511:
case 216:
case 1682:
case 31:
case 2582:
case 155:
case 3241:
case 2106:
case 3782:
case 3113:
case 459:
case 2062:
case 2894:
case 1169:
case 2231:
case 1188:
case 160:
case 1317:
case 1386:
case 2094:
case 2648:
case 4068:
case 3737:
case 3591:
case 472:
case 3866:
case 2289:
case 1918:
case 3001:
case 1418:
case 260:
case 1943:
case 1552:
case 3368:
case 2087:
case 1714:
case 1681:
case 1434:
case 2998:
case 3759:
case 3775:
case 2169:
case 1206:
case 1389:
case 1770:
case 2512:
case 3032:
case 296:
case 1619:
case 1358:
case 1666:
case 2645:
case 559:
case 2577:
case 3182:
case 848:
case 30:
case 3519:
case 2790:
case 470:
case 2265:
case 2763:
case 600:
case 3756:
case 1990:
case 3130:
case 1426:
case 2633:
case 865:
case 1785:
case 2471:
case 3356:
case 1684:
case 2576:
case 2596:
case 1725:
case 3802:
case 3390:
case 3194:
case 1613:
case 2520:
case 428:
case 16:
case 3265:
case 2507:
case 400:
case 1210:
case 1010:
case 3516:
case 2978:
case 1956:
case 1377:
case 3212:
case 319:
case 1000:
case 2932:
case 629:
case 765:
case 3298:
case 2625:
case 658:
case 2193:
case 1726:
case 3749:
case 713:
case 611:
case 1637:
case 1959:
case 351:
case 832:
case 2224:
case 3619:
case 1865:
case 3674:
case 575:
case 2639:
case 3061:
case 26:
case 152:
case 3398:
case 649:
case 2528:
case 2248:
case 3443:
case 353:
case 846:
case 1742:
case 3021:
case 4020:
case 258:
case 604:
case 2933:
case 3997:
case 3361:
case 3114:
case 2175:
case 234:
case 2041:
case 259:
case 1236:
case 3031:
case 2072:
case 3880:
case 2892:
case 3501:
case 1187:
case 793:
case 3698:
case 3234:
case 675:
case 3689:
case 3083:
case 1068:
case 241:
case 3811:
case 759:
case 1094:
case 1776:
case 1249:
case 1141:
case 3905:
case 3053:
case 3405:
case 957:
case 366:
case 3692:
case 1071:
case 666:
case 2330:
case 398:
case 3983:
case 642:
case 916:
case 2328:
case 3576:
case 801:
case 1772:
case 1539:
case 2399:
case 2938:
case 195:
case 3758:
case 2385:
case 997:
case 3371:
case 2124:
case 354:
case 1139:
case 68:
case 3415:
case 1324:
case 1556:
case 3383:
case 3872:
case 1750:
case 2341:
case 3272:
case 2214:
case 934:
case 2981:
case 1899:
case 3549:
case 2140:
case 3325:
case 3704:
case 608:
case 104:
case 3797:
case 2209:
case 2598:
case 2420:
case 245:
case 92:
case 2560:
case 885:
case 554:
case 1758:
case 2316:
case 1199:
case 1542:
case 2366:
case 3416:
case 3246:
case 1019:
case 3829:
case 2082:
case 215:
case 202:
case 1930:
case 2463:
case 1289:
case 839:
case 1485:
case 455:
case 3939:
case 1699:
case 515:
case 545:
case 1131:
case 3245:
case 3507:
case 3479:
case 2390:
case 1132:
case 249:
case 1432:
case 3627:
case 2001:
case 3273:
case 346:
case 3108:
case 3224:
case 1301:
case 192:
case 255:
case 703:
case 975:
case 3294:
case 96:
case 920:
case 2832:
case 3942:
case 3531:
case 2183:
case 2875:
case 2351:
case 140:
case 3146:
case 3948:
case 3771:
case 1597:
case 1087:
case 1773:
case 3370:
case 3959:
case 3607:
case 3875:
case 2126:
case 1054:
case 2759:
case 838:
case 3417:
case 1980:
case 1931:
case 4008:
case 1244:
case 2689:
case 1424:
case 2324:
case 2319:
case 3796:
case 3894:
case 2449:
case 634:
case 303:
case 2093:
case 951:
case 1588:
case 821:
case 2157:
case 671:
case 1045:
case 2152:
case 529:
case 1962:
case 520:
case 2342:
case 3803:
case 3436:
case 3774:
case 923:
case 2799:
case 2643:
case 2636:
case 3798:
case 3572:
case 3645:
case 532:
case 1894:
case 993:
case 2578:
case 330:
case 2610:
case 3521:
case 2068:
case 3993:
case 321:
case 1573:
case 3085:
case 1455:
case 1724:
case 3815:
case 2951:
case 3551:
case 2414:
case 897:
case 1655:
case 2805:
case 2824:
case 3795:
case 3293:
case 2380:
case 1808:
case 2658:
case 3374:
case 2729:
case 371:
case 1107:
case 2631:
case 1056:
case 2897:
case 2823:
case 3989:
case 2572:
case 1952:
case 2568:
case 415:
case 435:
case 1028:
case 2423:
case 3088:
case 3034:
case 1895:
case 2270:
case 433:
case 3910:
case 2012:
case 2278:
case 998:
case 538:
case 2402:
case 1473:
case 3620:
case 1969:
case 1474:
case 2323:
case 3437:
case 2211:
case 362:
case 889:
case 2818:
case 1702:
case 1608:
case 3617:
case 110:
case 3363:
case 3068:
case 1807:
case 2872:
case 1204:
case 854:
case 2702:
case 735:
case 1113:
case 2440:
case 2930:
case 4063:
case 388:
case 2455:
case 1166:
case 506:
case 1709:
case 237:
case 163:
case 2917:
case 2505:
case 476:
case 1754:
case 1833:
case 3345:
case 3987:
case 3683:
case 1691:
case 3928:
case 512:
case 3497:
case 2411:
case 977:
case 3548:
case 2253:
case 3069:
case 1551:
case 2573:
case 2880:
case 3465:
case 3141:
case 2909:
case 1271:
case 1890:
case 213:
case 4061:
case 1594:
case 3193:
case 2785:
case 1555:
case 3185:
case 2309:
case 2935:
case 3847:
case 3495:
case 2088:
case 1256:
case 2238:
case 1041:
case 580:
case 1538:
case 2475:
case 3023:
case 3250:
case 2329:
case 1753:
case 2241:
case 308:
case 389:
case 2043:
case 1566:
case 499:
case 1953:
case 166:
case 954:
case 899:
case 983:
case 1546:
case 1911:
case 1973:
case 148:
case 1447:
case 3086:
case 693:
case 1550:
case 262:
case 3971:
case 1901:
case 1482:
case 2651:
case 136:
case 2095:
case 1885:
case 3509:
case 778:
case 3860:
case 3621:
case 2346:
case 1178:
case 98:
case 2123:
case 33:
case 345:
case 465:
case 1804:
case 3525:
case 3000:
case 3004:
case 97:
case 2242:
case 906:
case 2590:
case 1440:
case 4054:
case 1205:
case 3496:
case 341:
case 2252:
case 625:
case 3526:
case 507:
case 235:
case 3204:
case 2565:
case 3082:
case 2418:
case 149:
case 3610:
case 172:
case 2886:
case 2672:
case 1570:
case 3116:
case 2369:
case 1185:
case 869:
case 2994:
case 1715:
case 1578:
case 3579:
case 4047:
case 3712:
case 3233:
case 3916:
case 3979:
case 3574:
case 105:
case 1626:
case 2413:
case 1490:
case 3288:
case 1250:
case 1277:
case 3768:
case 3002:
case 1841:
case 1481:
case 3095:
case 1836:
case 3923:
case 1140:
case 3949:
case 1298:
case 252:
case 2688:
case 3440:
case 2233:
case 768:
case 866:
case 1996:
case 4045:
case 3412:
case 1002:
case 1276:
case 2555:
case 1437:
case 2343:
case 2953:
case 4012:
case 3262:
case 1615:
case 1909:
case 404:
case 816:
case 3291:
case 963:
case 1051:
case 3058:
case 25:
case 4024:
case 2695:
case 3753:
case 1577:
case 2173:
case 2398:
case 1279:
case 2509:
case 56:
case 2358:
case 3013:
case 2244:
case 1284:
case 3623:
case 1914:
case 1048:
case 2188:
case 3921:
case 1978:
case 2135:
case 3659:
case 2148:
case 2064:
case 3491:
case 2491:
case 352:
case 672:
case 3121:
case 2170:
case 2793:
case 1031:
case 2018:
case 2567:
case 3039:
case 2517:
case 2378:
case 2438:
case 1796:
case 3159:
case 3218:
case 654:
case 2350:
case 1012:
case 1670:
case 3431:
case 3075:
case 1085:
case 647:
case 406:
case 540:
case 2667:
case 3892:
case 2525:
case 3981:
case 2828:
case 2529:
case 3643:
case 990:
case 2405:
case 3223:
case 1675:
case 483:
case 1547:
case 656:
case 908:
case 2698:
case 3713:
case 2765:
case 1253:
case 1757:
case 3474:
case 1070:
case 1592:
case 2727:
case 1988:
case 1442:
case 3310:
case 2679:
case 3606:
case 3658:
case 767:
case 1144:
case 2059:
case 2255:
case 2482:
case 1520:
case 2539:
case 3726:
case 3950:
case 2728:
case 1374:
case 2409:
case 3217:
case 1155:
case 926:
case 313:
case 374:
case 4075:
case 2132:
case 2887:
case 3769:
case 789:
case 3788:
case 3092:
case 1226:
case 3556:
case 2594:
case 4065:
case 1431:
case 357:
case 377:
case 1465:
case 3953:
case 3320:
case 3297:
case 1967:
case 2164:
case 4089:
case 4091:
case 3123:
case 3954:
case 3321:
case 2456:
case 1361:
case 69:
case 3524:
case 1287:
case 1170:
case 3414:
case 3703:
case 3454:
case 3381:
case 274:
case 1162:
case 3112:
case 1764:
case 3208:
case 3209:
case 3858:
case 2755:
case 3842:
case 1792:
case 847:
case 3977:
case 722:
case 1816:
case 1023:
case 131:
case 1149:
case 3644:
case 3254:
case 607:
case 1799:
case 3832:
case 4018:
case 1:
case 1445:
case 2190:
case 2632:
case 1985:
case 549:
case 1627:
case 1896:
case 2326:
case 531:
case 3409:
case 2432:
case 253:
case 3515:
case 3483:
case 2725:
case 1687:
case 3871:
case 1263:
case 2986:
case 1710:
case 1150:
case 1493:
case 2227:
case 1960:
case 3503:
case 1201:
case 3563:
case 1223:
case 2150:
case 3109:
case 1979:
case 733:
case 1114:
case 1751:
case 3191:
case 1735:
case 3766:
case 396:
case 3059:
case 2538:
case 4078:
case 528:
case 1355:
case 2619:
case 4067:
case 754:
case 2502:
case 3684:
case 3216:
case 984:
case 598:
case 2236:
case 1774:
case 699:
case 3906:
case 2516:
case 3:
case 3251:
case 3887:
case 3089:
case 3372:
case 3074:
case 3404:
case 2738:
case 3661:
case 2780:
case 2597:
case 2063:
case 186:
case 1311:
case 2208:
case 3124:
case 1360:
case 1135:
case 2000:
case 3106:
case 1261:
case 1747:
case 3614:
case 226:
case 74:
case 2348:
case 2767:
case 2842:
case 2501:
case 652:
case 2117:
case 3604:
case 2360:
case 1270:
case 4053:
case 615:
case 2306:
case 3449:
case 2458:
case 2806:
case 2462:
case 3584:
case 2650:
case 2035:
case 3424:
case 1934:
case 504:
case 66:
case 190:
case 1235:
case 972:
case 1997:
case 1120:
case 2553:
case 3174:
case 3586:
case 785:
case 2185:
case 1414:
case 4001:
case 2421:
case 3175:
case 179:
case 2172:
case 320:
case 2457:
case 2762:
case 3283:
case 247:
case 47:
case 38:
case 1410:
case 267:
case 870:
case 3024:
case 2009:
case 1665:
case 206:
case 2956:
case 680:
case 933:
case 2617:
case 511:
case 773:
case 2817:
case 1781:
case 391:
case 1498:
case 4014:
case 1762:
case 2766:
case 546:
case 2659:
case 3203:
case 329:
case 2810:
case 2006:
case 815:
case 952:
case 1304:
case 1564:
case 1837:
case 1791:
case 3485:
case 77:
case 1348:
case 1195:
case 3964:
case 3134:
case 1227:
case 37:
case 1267:
case 1164:
case 3582:
case 2871:
case 1817:
case 3996:
case 129:
case 1017:
case 2045:
case 11:
case 1274:
case 154:
case 1718:
case 1730:
case 913:
case 3172:
case 967:
case 674:
case 2856:
case 777:
case 4019:
case 1319:
case 102:
case 2786:
case 1052:
case 3433:
case 2181:
case 3176:
case 550:
case 2365:
case 552:
case 1617:
case 2194:
case 1332:
case 3070:
case 2159:
case 2077:
case 1091:
case 3257:
case 1559:
case 3066:
case 1662:
case 1381:
case 1965:
case 1983:
case 1251:
case 1601:
case 3967:
case 890:
case 44:
case 23:
case 2768:
case 1351:
case 2602:
case 2100:
case 450:
case 3677:
case 498:
case 3168:
case 2550:
case 2376:
case 2442:
case 727:
case 1737:
case 3660:
case 953:
case 2515:
case 2002:
case 706:
case 4000:
case 2205:
case 3308:
case 411:
case 3520:
case 2796:
case 217:
case 315:
case 181:
case 3067:
case 3649:
case 1935:
case 2544:
case 581:
case 1514:
case 522:
case 76:
case 1294:
case 36:
case 3133:
case 3189:
case 740:
case 22:
case 1729:
case 120:
case 1471:
case 1703:
case 3792:
case 2693:
case 3360:
case 24:
case 3846:
case 902:
case 2347:
case 2036:
case 359:
case 1066:
case 2460:
case 182:
case 1933:
case 4010:
case 4002:
case 107:
case 539:
case 2995:
case 783:
case 3980:
case 2934:
case 960:
case 2054:
case 3546:
case 1007:
case 2876:
case 2607:
case 3199:
case 109:
case 1835:
case 2640:
case 3728:
case 2960:
case 2772:
case 2717:
case 3435:
case 1342:
case 299:
case 2425:
case 1026:
case 168:
case 2428:
case 61:
case 3154:
case 1686:
case 340:
case 3384:
case 2128:
case 261:
case 2608:
case 3963:
case 3899:
case 2263:
case 946:
case 3452:
case 855:
case 3037:
case 1325:
case 1651:
case 1412:
case 2761:
case 2246:
case 2127:
case 3559:
case 293:
case 1035:
case 3863:
case 1755:
case 1902:
case 3446:
case 1092:
case 311:
case 2735:
case 2584:
case 2139:
case 2032:
case 569:
case 3343:
case 831:
case 322:
case 1529:
case 3267:
case 797:
case 423:
case 452:
case 2037:
case 3473:
case 1003:
case 1083:
case 2586:
case 1533:
case 3513:
case 2713:
case 3527:
case 971:
case 2918:
case 2857:
case 35:
case 1190:
case 776:
case 4050:
case 1116:
case 1544:
case 822:
case 3630:
case 2431:
case 1685:
case 2878:
case 3426:
case 349:
case 1479:
case 3986:
case 1229:
case 2820:
case 2641:
case 2110:
case 1872:
case 55:
case 2836:
case 3077:
case 3045:
case 2109:
case 2652:
case 3777:
case 3046:
case 1948:
case 454:
case 2178:
case 146:
case 4093:
case 2704:
case 2904:
case 1198:
case 2044:
case 1802:
case 2023:
case 2331:
case 1307:
case 2166:
case 2116:
case 2410:
case 43:
case 2624:
case 2570:
case 3512:
case 3743:
case 3877:
case 2990:
case 1971:
case 3836:
case 347:
case 679:
case 4049:
case 1359:
case 2877:
case 1863:
case 3277:
case 3534:
case 1623:
case 1787:
case 1119:
case 633:
case 2771:
case 193:
case 67:
case 1384:
case 2282:
case 2881:
case 1356:
case 3169:
case 2997:
case 1130:
case 1496:
case 1050:
case 3855:
case 1892:
case 1282:
case 2086:
case 594:
case 1530:
case 6:
case 2580:
case 3450:
case 3242:
case 2259:
case 3812:
case 1567:
case 4092:
case 1125:
case 60:
case 1658:
case 3071:
case 1641:
case 1788:
case 87:
case 3554:
case 3974:
case 1986:
case 1313:
case 3850:
case 292:
case 2292:
case 517:
case 3522:
case 3127:
case 1915:
case 2383:
case 2613:
case 4032:
case 1388:
case 1269:
case 1713:
case 4044:
case 2638:
case 3762:
case 1314:
case 1907:
case 3290:
case 1492:
case 2927:
case 1868:
case 2931:
case 2221:
case 1604:
case 2830:
case 1870:
case 3181:
case 2609:
case 1288:
case 2924:
case 728:
case 3876:
case 305:
case 2964:
case 2982:
case 3567:
case 509:
case 4007:
case 2490:
case 3179:
case 2371:
case 3859:
case 2692:
case 3568:
case 1433:
case 2039:
case 1906:
case 2281:
case 3843:
case 3442:
case 741:
case 1759:
case 1880:
case 285:
case 2234:
case 3270:
case 1315:
case 2714:
case 3129:
case 1419:
case 2781:
case 965:
case 3647:
case 2653:
case 3530:
case 1073:
case 466:
case 622:
case 4021:
case 3379:
case 907:
case 911:
case 1268:
case 2776:
case 1469:
case 1151:
case 2489:
case 2910:
case 3806:
case 365:
case 823:
case 2058:
case 1553:
case 275:
case 325:
case 3295:
case 2322:
case 2523:
case 1011:
case 218:
case 2315:
case 655:
case 2882:
case 2829:
case 1343:
case 1176:
case 2055:
case 1147:
case 1124:
case 2770:
case 2855:
case 138:
case 676:
case 3047:
case 1407:
case 3160:
case 898:
case 2400:
case 826:
case 2967:
case 752:
case 3552:
case 1375:
case 3817:
case 724:
case 3073:
case 3991:
case 807:
case 3110:
case 868:
case 2749:
case 568:
case 1936:
case 624:
case 178:
case 1349:
case 702:
case 1362:
case 1732:
case 2416:
case 3696:
case 372:
case 3365:
case 2240:
case 3587:
case 3705:
case 2028:
case 3408:
case 3854:
case 1786:
case 888:
case 2362:
case 1769:
case 2290:
case 3342:
case 1291:
case 3754:
case 3577:
case 2903:
case 4071:
case 3229:
case 3122:
case 2913:
case 1202:
case 2433:
case 860:
case 2197:
case 1950:
case 432:
case 3276:
case 806:
case 3380:
case 799:
case 1112:
case 3461:
case 720:
case 900:
case 1647:
case 2841:
case 2308:
case 175:
case 1487:
case 929:
case 1272:
case 3539:
case 1832:
case 3839:
case 1663:
case 393:
case 2724:
case 2891:
case 1632:
case 27:
case 2996:
case 1225:
case 2495:
case 3268:
case 356:
case 1688:
case 1350:
case 3508:
case 1650:
case 669:
case 1829:
case 1723:
case 2700:
case 3588:
case 4055:
case 3048:
case 1470:
case 3079:
case 2016:
case 2396:
case 627:
case 2122:
case 513:
case 961:
case 2370:
case 2647:
case 1265:
case 3741:
case 3838:
case 3734:
case 2588:
case 1590:
case 587:
case 2753:
case 3835:
case 969:
case 2486:
case 3477:
case 3827:
case 139:
case 3751:
case 287:
case 1916:
case 2107:
case 668:
case 3038:
case 2950:
case 1516:
case 1677:
case 1184:
case 2279:
case 1233:
case 3051:
case 2025:
case 3190:
case 1605:
case 1380:
case 3739:
case 3438:
case 810:
case 1021:
case 3907:
case 3263:
case 2468:
case 3097:
case 3813:
case 2138:
case 492:
case 2587:
case 2665:
case 558:
case 896:
case 1908:
case 2303:
case 2269:
case 1634:
case 338:
case 2334:
case 835:
case 2527:
case 3648:
case 3573:
case 239:
case 1798:
case 3585:
case 2740:
case 1972:
case 2304:
case 2162:
case 4081:
case 874:
case 2073:
case 602:
case 2368:
case 2739:
case 3327:
case 3377:
case 1290:
case 1040:
case 1497:
case 875:
case 2266:
case 2220:
case 1357:
case 14:
case 2176:
case 3387:
case 2441:
case 2111:
case 588:
case 1334:
case 2081:
case 1611:
case 471:
case 798:
case 442:
case 3770:
case 2557:
case 441:
case 2563:
case 2788:
case 3247:
case 2649:
case 887:
case 3103:
case 3569:
case 709:
case 1854:
case 3709:
case 57:
case 214:
case 2112:
case 495:
case 1856:
case 269:
case 3332:
case 3148:
case 1331:
case 3478:
case 620:
case 2604:
case 3917:
case 3145:
case 1106:
case 2574:
case 3773:
case 3710:
case 424:
case 3282:
case 3729:
case 1252:
case 1061:
case 3641:
case 678:
case 3957:
case 113:
case 3197:
case 2685:
case 573:
case 2854:
case 1778:
case 2168:
case 2311:
case 1576:
case 1219:
case 651:
case 1660:
case 265:
case 2276:
case 3583:
case 2980:
case 1648:
case 956:
case 657:
case 2392:
case 197:
case 1579:
case 1461:
case 3589:
case 1264:
case 1949:
case 2837:
case 2970:
case 2339:
case 2928:
case 4057:
case 1501:
case 1338:
case 3975:
case 4028:
case 2521:
case 419:
case 3284:
case 122:
case 3809:
case 1408:
case 2098:
case 41:
case 3385:
case 3317:
case 2161:
case 3094:
case 3488:
case 3280:
case 1783:
case 1540:
case 3423:
case 343:
case 1255:
case 3135:
case 2014:
case 942:
case 121:
case 2026:
case 63:
case 2337:
case 2546:
case 3601:
case 2040:
case 3733:
case 3564:
case 987:
case 948:
case 3322:
case 2948:
case 165:
case 1376:
case 1851:
case 3517:
case 3292:
case 3030:
case 207:
case 3314:
case 3740:
case 3410:
case 1825:
case 3210:
case 2481:
case 828:
case 1027:
case 748:
case 2779:
case 1489:
case 1129:
case 3187:
case 3807:
case 1679:
case 3706:
case 2374:
case 2206:
case 1449:
case 3100:
case 1869:
case 2801:
case 1160:
case 2235:
case 837:
case 2395:
case 3922:
case 2163:
case 2620:
case 2069:
case 1728:
case 4066:
case 2338:
case 486:
case 1330:
case 1842:
case 878:
case 583:
case 1999:
case 2843:
case 2942:
case 1717:
case 1889:
case 2008:
case 3943:
case 1372:
case 2719:
case 3296:
case 328:
case 278:
case 209:
case 2102:
case 4030:
case 2386:
case 2354:
case 93:
case 3165:
case 335:
case 2634:
case 1234:
case 3411:
case 2496:
case 390:
case 1761:
case 2936:
case 1694:
case 1974:
case 3041:
case 3518:
case 3878:
case 2143:
case 3180:
case 2543:
case 244:
case 3161:
case 2954:
case 2049:
case 493:
case 3419:
case 3500:
case 3618:
case 4059:
case 1457:
case 2317:
case 3937:
case 527:
case 1760:
case 167:
case 857:
case 2487:
case 732:
case 344:
case 2256:
case 1076:
case 2742:
case 3171:
case 1583:
case 4022:
case 3578:
case 4083:
case 2250:
case 2426:
case 1661:
case 1843:
case 1069:
case 1736:
case 2919:
case 3789:
case 2680:
case 2199:
case 2321:
case 1391:
case 3389:
case 378:
case 225:
case 2715:
case 2066:
case 1323:
case 1006:
case 1049:
case 1494:
case 3205:
case 3064:
case 1191:
case 891:
case 1303:
case 83:
case 2621:
case 1927:
case 4084:
case 392:
case 108:
case 958:
case 3781:
case 1523:
case 3115:
case 200:
case 1998:
case 2277:
case 909:
case 1015:
case 2298:
case 2307:
case 1472:
case 1308:
case 220:
case 1145:
case 1582:
case 747:
case 1945:
case 3326:
case 3724:
case 1044:
case 2469:
case 3603:
case 2850:
case 2301:
case 1821:
case 223:
case 159:
case 2443:
case 2890:
case 2133:
case 3156:
case 1451:
case 3895:
case 1545:
case 579:
case 3642:
case 3221:
case 1932:
case 12:
case 2510:
case 2038:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1686762002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,];
var gg_b = "1686762002/";

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
