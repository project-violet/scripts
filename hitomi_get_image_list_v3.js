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
case 443:
case 1307:
case 297:
case 1056:
case 4018:
case 1785:
case 887:
case 548:
case 1597:
case 2465:
case 2528:
case 3708:
case 2584:
case 1059:
case 3276:
case 693:
case 3892:
case 3517:
case 3233:
case 2751:
case 1976:
case 367:
case 3831:
case 2023:
case 913:
case 2388:
case 1283:
case 2680:
case 2891:
case 1508:
case 2515:
case 3613:
case 852:
case 2910:
case 1690:
case 1475:
case 1881:
case 2293:
case 2832:
case 1371:
case 3794:
case 3983:
case 3136:
case 2327:
case 3464:
case 3318:
case 669:
case 3669:
case 3610:
case 2855:
case 1280:
case 2683:
case 3585:
case 1714:
case 600:
case 3980:
case 1458:
case 3139:
case 3170:
case 3467:
case 2290:
case 3102:
case 1576:
case 1952:
case 1217:
case 3687:
case 2806:
case 1044:
case 1994:
case 1783:
case 3489:
case 2416:
case 653:
case 3252:
case 3917:
case 3061:
case 3320:
case 48:
case 1214:
case 2928:
case 3684:
case 2809:
case 1047:
case 948:
case 1997:
case 2617:
case 1579:
case 1072:
case 1121:
case 3914:
case 257:
case 3486:
case 2177:
case 765:
case 180:
case 2025:
case 2987:
case 1285:
case 647:
case 1634:
case 1343:
case 3088:
case 1436:
case 3027:
case 3175:
case 405:
case 634:
case 712:
case 3776:
case 85:
case 1340:
case 282:
case 2018:
case 2234:
case 497:
case 2510:
case 2853:
case 418:
case 3583:
case 2685:
case 1829:
case 4020:
case 2915:
case 156:
case 1439:
case 1908:
case 3158:
case 1665:
case 159:
case 2054:
case 1197:
case 1770:
case 2092:
case 500:
case 3221:
case 2942:
case 2128:
case 569:
case 258:
case 1135:
case 385:
case 2187:
case 3433:
case 2599:
case 1082:
case 3823:
case 934:
case 2057:
case 1773:
case 3349:
case 3902:
case 3677:
case 2265:
case 677:
case 2184:
case 3820:
case 3430:
case 351:
case 3117:
case 1258:
case 2353:
case 3536:
case 2490:
case 1622:
case 2719:
case 2760:
case 3055:
case 1967:
case 953:
case 593:
case 1480:
case 3958:
case 2115:
case 1329:
case 171:
case 1011:
case 812:
case 3941:
case 2716:
case 379:
case 3789:
case 2222:
case 3078:
case 3091:
case 346:
case 2493:
case 648:
case 2350:
case 2658:
case 1964:
case 1326:
case 792:
case 1483:
case 2219:
case 3497:
case 1663:
case 2996:
case 3392:
case 613:
case 2574:
case 368:
case 1133:
case 738:
case 3502:
case 1176:
case 3435:
case 3699:
case 666:
case 3331:
case 121:
case 3825:
case 3006:
case 432:
case 844:
case 1521:
case 217:
case 2722:
case 298:
case 2263:
case 2216:
case 2577:
case 3452:
case 1368:
case 1619:
case 969:
case 1741:
case 199:
case 888:
case 1417:
case 1312:
case 1130:
case 104:
case 1179:
case 3575:
case 2673:
case 2636:
case 1564:
case 752:
case 3180:
case 3862:
case 79:
case 2434:
case 578:
case 4092:
case 2765:
case 3050:
case 1845:
case 2378:
case 2391:
case 1273:
case 993:
case 2670:
case 2888:
case 2495:
case 4054:
case 2827:
case 1702:
case 4031:
case 2448:
case 1871:
case 1898:
case 458:
case 2332:
case 163:
case 3936:
case 3183:
case 3087:
case 2247:
case 1886:
case 797:
case 340:
case 1376:
case 3520:
case 1225:
case 1904:
case 3154:
case 3661:
case 2272:
case 2896:
case 1889:
case 3207:
case 1112:
case 3743:
case 2961:
case 1330:
case 1379:
case 817:
case 898:
case 3084:
case 1647:
case 2700:
case 62:
case 355:
case 1168:
case 1672:
case 237:
case 3157:
case 288:
case 2625:
case 3523:
case 1449:
case 705:
case 1543:
case 3015:
case 2366:
case 672:
case 1034:
case 3870:
case 2924:
case 3839:
case 3962:
case 654:
case 3627:
case 465:
case 2155:
case 3836:
case 3873:
case 1048:
case 1998:
case 2369:
case 1181:
case 2756:
case 2927:
case 506:
case 3426:
case 2191:
case 3624:
case 983:
case 942:
case 1945:
case 914:
case 2705:
case 622:
case 110:
case 2877:
case 2259:
case 1431:
case 2482:
case 2620:
case 1223:
case 2842:
case 41:
case 1762:
case 2561:
case 2109:
case 1492:
case 858:
case 1659:
case 3412:
case 2874:
case 1457:
case 757:
case 3468:
case 3149:
case 3798:
case 1220:
case 444:
case 3240:
case 832:
case 3013:
case 3066:
case 2203:
case 583:
case 1600:
case 1308:
case 2315:
case 2747:
case 906:
case 1090:
case 1940:
case 488:
case 1598:
case 2153:
case 1725:
case 437:
case 3481:
case 3875:
case 4014:
case 743:
case 2200:
case 67:
case 3069:
case 782:
case 2083:
case 2150:
case 660:
case 3562:
case 1016:
case 2374:
case 1249:
case 3817:
case 3592:
case 64:
case 606:
case 3407:
case 3531:
case 3302:
case 758:
case 1852:
case 190:
case 3606:
case 315:
case 1835:
case 452:
case 2649:
case 3814:
case 909:
case 1019:
case 1060:
case 3123:
case 4075:
case 1897:
case 4041:
case 572:
case 960:
case 2438:
case 3404:
case 2342:
case 201:
case 2711:
case 164:
case 49:
case 3768:
case 2036:
case 614:
case 2555:
case 3653:
case 3712:
case 52:
case 3445:
case 3226:
case 1462:
case 1754:
case 2591:
case 2039:
case 882:
case 1792:
case 25:
case 1418:
case 2532:
case 2953:
case 1581:
case 4002:
case 1731:
case 2782:
case 1140:
case 103:
case 4039:
case 4070:
case 1420:
case 2692:
case 972:
case 818:
case 139:
case 954:
case 492:
case 150:
case 1968:
case 3726:
case 3957:
case 57:
case 1107:
case 3931:
case 2506:
case 1876:
case 1833:
case 717:
case 3549:
case 4073:
case 4036:
case 683:
case 331:
case 2396:
case 1231:
case 2282:
case 3042:
case 3729:
case 1104:
case 88:
case 2075:
case 2127:
case 3883:
case 3336:
case 3655:
case 1171:
case 1198:
case 401:
case 1145:
case 29:
case 1529:
case 2188:
case 933:
case 723:
case 2978:
case 2866:
case 3162:
case 2058:
case 92:
case 36:
case 3632:
case 2955:
case 370:
case 3001:
case 522:
case 2535:
case 118:
case 197:
case 3676:
case 839:
case 2307:
case 3344:
case 911:
case 2056:
case 2785:
case 219:
case 3116:
case 1020:
case 3163:
case 2812:
case 1361:
case 850:
case 967:
case 456:
case 1528:
case 3442:
case 2304:
case 535:
case 3338:
case 3679:
case 3630:
case 2976:
case 3477:
case 2933:
case 3882:
case 3160:
case 3119:
case 3372:
case 1388:
case 1878:
case 3043:
case 1515:
case 296:
case 441:
case 3784:
case 4038:
case 2717:
case 1293:
case 2881:
case 2371:
case 3551:
case 4072:
case 775:
case 1422:
case 4044:
case 3305:
case 3990:
case 3040:
case 2280:
case 2458:
case 1324:
case 926:
case 1290:
case 1913:
case 3595:
case 2693:
case 2576:
case 3499:
case 3356:
case 60:
case 0:
case 9:
case 679:
case 2994:
case 4003:
case 1463:
case 1416:
case 1793:
case 1174:
case 2780:
case 1928:
case 1142:
case 567:
case 2047:
case 3004:
case 2530:
case 2997:
case 890:
case 241:
case 976:
case 864:
case 3228:
case 1790:
case 2121:
case 3694:
case 3652:
case 1419:
case 157:
case 1177:
case 526:
case 3300:
case 1237:
case 3608:
case 2343:
case 651:
case 3590:
case 2651:
case 3122:
case 377:
case 2826:
case 2648:
case 2340:
case 1234:
case 1018:
case 2637:
case 1569:
case 143:
case 419:
case 2908:
case 2439:
case 256:
case 1915:
case 3593:
case 3516:
case 2665:
case 1309:
case 2589:
case 1054:
case 810:
case 2197:
case 825:
case 2135:
case 463:
case 230:
case 951:
case 3242:
case 1031:
case 173:
case 1057:
case 3519:
case 3560:
case 347:
case 1265:
case 334:
case 1974:
case 90:
case 2258:
case 3803:
case 1353:
case 2840:
case 979:
case 132:
case 1760:
case 3466:
case 3201:
case 3413:
case 635:
case 1115:
case 2108:
case 3134:
case 271:
case 1493:
case 3667:
case 1350:
case 3195:
case 1658:
case 2964:
case 2326:
case 2241:
case 3799:
case 676:
case 421:
case 3410:
case 739:
case 2616:
case 3565:
case 2663:
case 1996:
case 1260:
case 2804:
case 3428:
case 2758:
case 1574:
case 2986:
case 2176:
case 3872:
case 221:
case 3296:
case 2414:
case 3701:
case 2775:
case 2807:
case 1049:
case 117:
case 3686:
case 745:
case 1216:
case 1263:
case 1999:
case 3844:
case 2619:
case 991:
case 2368:
case 1577:
case 471:
case 3484:
case 2741:
case 626:
case 968:
case 2130:
case 1861:
case 2312:
case 3190:
case 611:
case 1451:
case 393:
case 3415:
case 667:
case 3029:
case 875:
case 2845:
case 2236:
case 1378:
case 1391:
case 2567:
case 1670:
case 1495:
case 3774:
case 3193:
case 1827:
case 579:
case 2702:
case 4082:
case 1448:
case 546:
case 263:
case 1437:
case 1501:
case 66:
case 1703:
case 1247:
case 3972:
case 3819:
case 3860:
case 2333:
case 2376:
case 2225:
case 670:
case 3097:
case 595:
case 1896:
case 940:
case 2889:
case 2638:
case 2379:
case 2330:
case 3816:
case 1244:
case 3559:
case 144:
case 3944:
case 981:
case 1899:
case 2168:
case 2672:
case 2907:
case 899:
case 3094:
case 4090:
case 3052:
case 2449:
case 2543:
case 1366:
case 3500:
case 1924:
case 3111:
case 342:
case 2051:
case 3453:
case 383:
case 2723:
case 3390:
case 1155:
case 3671:
case 631:
case 410:
case 3288:
case 2605:
case 1369:
case 2971:
case 1310:
case 1132:
case 2037:
case 1756:
case 2540:
case 2720:
case 236:
case 3393:
case 1178:
case 1988:
case 2945:
case 2095:
case 3076:
case 2821:
case 4048:
case 1482:
case 2431:
case 581:
case 2454:
case 1328:
case 3724:
case 2762:
case 436:
case 830:
case 2397:
case 225:
case 4034:
case 555:
case 995:
case 1256:
case 1384:
case 662:
case 1874:
case 3547:
case 2504:
case 314:
case 3572:
case 2457:
case 780:
case 3956:
case 2352:
case 3727:
case 2220:
case 3643:
case 2545:
case 1080:
case 1738:
case 1203:
case 615:
case 2867:
case 489:
case 1772:
case 112:
case 1527:
case 2940:
case 2598:
case 2571:
case 2725:
case 1153:
case 3337:
case 3505:
case 1744:
case 3640:
case 3822:
case 1083:
case 3491:
case 3478:
case 756:
case 3900:
case 608:
case 306:
case 1374:
case 3089:
case 3791:
case 3778:
case 394:
case 37:
case 915:
case 920:
case 730:
case 3156:
case 1906:
case 360:
case 2852:
case 1887:
case 841:
case 2835:
case 531:
case 2246:
case 3086:
case 2425:
case 1649:
case 2060:
case 2897:
case 101:
case 1342:
case 264:
case 1711:
case 3427:
case 3322:
case 1073:
case 2364:
case 3250:
case 445:
case 771:
case 3629:
case 3100:
case 1950:
case 3895:
case 3511:
case 2808:
case 2462:
case 695:
case 439:
case 1591:
case 1039:
case 1070:
case 322:
case 15:
case 2929:
case 856:
case 1301:
case 2418:
case 450:
case 3103:
case 1782:
case 192:
case 3626:
case 2140:
case 3750:
case 2420:
case 1654:
case 1692:
case 1161:
case 2830:
case 2879:
case 3316:
case 239:
case 3363:
case 1509:
case 1002:
case 403:
case 721:
case 931:
case 1631:
case 2682:
case 2107:
case 3360:
case 3982:
case 1506:
case 3668:
case 2876:
case 1657:
case 2292:
case 520:
case 515:
case 3612:
case 1282:
case 2231:
case 799:
case 3147:
case 152:
case 32:
case 3706:
case 96:
case 1075:
case 1127:
case 4019:
case 896:
case 2749:
case 3278:
case 490:
case 2171:
case 1869:
case 562:
case 464:
case 2529:
case 3893:
case 286:
case 3232:
case 1041:
case 1978:
case 1991:
case 174:
case 716:
case 3255:
case 1550:
case 1124:
case 1211:
case 763:
case 3105:
case 3890:
case 59:
case 2848:
case 3757:
case 2322:
case 3926:
case 1768:
case 1653:
case 2250:
case 2837:
case 4021:
case 1375:
case 1471:
case 877:
case 2629:
case 992:
case 454:
case 552:
case 2511:
case 2488:
case 665:
case 2100:
case 3754:
case 3808:
case 2253:
case 3929:
case 2834:
case 3792:
case 2103:
case 3581:
case 2851:
case 778:
case 2791:
case 3249:
case 1554:
case 1120:
case 3016:
case 2206:
case 2461:
case 538:
case 27:
case 884:
case 1099:
case 2732:
case 108:
case 3894:
case 260:
case 433:
case 2582:
case 2156:
case 3835:
case 1557:
case 2209:
case 4064:
case 3568:
case 1606:
case 1123:
case 3019:
case 42:
case 3425:
case 1814:
case 3246:
case 2086:
case 2159:
case 120:
case 3897:
case 364:
case 1096:
case 612:
case 2706:
case 4086:
case 644:
case 22:
case 3198:
case 3022:
case 2278:
case 1336:
case 2064:
case 1373:
case 3529:
case 1443:
case 637:
case 3611:
case 688:
case 2893:
case 1370:
case 1691:
case 1678:
case 3746:
case 2911:
case 2255:
case 2709:
case 494:
case 592:
case 2067:
case 233:
case 460:
case 422:
case 1546:
case 524:
case 2316:
case 700:
case 61:
case 3107:
case 1957:
case 1212:
case 827:
case 3682:
case 1726:
case 3968:
case 2021:
case 2668:
case 2172:
case 2319:
case 2360:
case 2982:
case 1125:
case 2753:
case 501:
case 3423:
case 1549:
case 3231:
case 1042:
case 1992:
case 2612:
case 987:
case 3104:
case 254:
case 1954:
case 2147:
case 414:
case 4030:
case 1015:
case 2008:
case 1429:
case 2111:
case 1380:
case 1870:
case 893:
case 3034:
case 3218:
case 375:
case 2905:
case 1918:
case 3723:
case 2224:
case 3998:
case 2503:
case 713:
case 2288:
case 638:
case 2450:
case 1624:
case 687:
case 336:
case 3720:
case 1271:
case 766:
case 2227:
case 944:
case 1204:
case 1740:
case 140:
case 3333:
case 2182:
case 3644:
case 406:
case 800:
case 2097:
case 3904:
case 1520:
case 44:
case 2409:
case 1192:
case 1661:
case 2559:
case 2863:
case 389:
case 3112:
case 3330:
case 565:
case 3889:
case 1207:
case 652:
case 2261:
case 2406:
case 674:
case 2094:
case 3907:
case 3168:
case 3672:
case 828:
case 155:
case 69:
case 3449:
case 2052:
case 1066:
case 1013:
case 3545:
case 2643:
case 1704:
case 3940:
case 777:
case 601:
case 4052:
case 2903:
case 2337:
case 1385:
case 1243:
case 2822:
case 2640:
case 1707:
case 51:
case 4035:
case 2491:
case 2478:
case 878:
case 912:
case 1841:
case 3093:
case 206:
case 3943:
case 2761:
case 24:
case 3821:
case 2076:
case 3431:
case 3507:
case 3656:
case 2724:
case 692:
case 3454:
case 3492:
case 2959:
case 3397:
case 2865:
case 537:
case 3659:
case 588:
case 2538:
case 1317:
case 1745:
case 2788:
case 2030:
case 214:
case 1920:
case 1468:
case 483:
case 1525:
case 3220:
case 1798:
case 107:
case 3394:
case 544:
case 1573:
case 2151:
case 3258:
case 2664:
case 3840:
case 3622:
case 3480:
case 2413:
case 3967:
case 371:
case 2796:
case 3843:
case 1091:
case 1789:
case 1264:
case 179:
case 10:
case 2667:
case 469:
case 3275:
case 1570:
case 1539:
case 2799:
case 3326:
case 3241:
case 1032:
case 400:
case 2148:
case 3964:
case 2469:
case 1975:
case 3483:
case 2137:
case 2277:
case 2516:
case 3665:
case 2563:
case 682:
case 1346:
case 3770:
case 3739:
case 794:
case 330:
case 1433:
case 1476:
case 185:
case 3135:
case 4026:
case 3921:
case 1823:
case 2242:
case 3194:
case 1349:
case 814:
case 2560:
case 2856:
case 2519:
case 1902:
case 3152:
case 3586:
case 517:
case 1430:
case 598:
case 1721:
case 3270:
case 3239:
case 1575:
case 2805:
case 1818:
case 93:
case 1053:
case 4068:
case 3564:
case 883:
case 2029:
case 2311:
case 1970:
case 1939:
case 1408:
case 532:
case 434:
case 1541:
case 842:
case 1050:
case 1558:
case 3273:
case 618:
case 733:
case 1936:
case 2026:
case 3871:
case 998:
case 917:
case 1392:
case 191:
case 2565:
case 573:
case 1331:
case 2919:
case 1435:
case 1502:
case 3133:
case 1825:
case 3414:
case 478:
case 200:
case 1006:
case 1494:
case 772:
case 2844:
case 3660:
case 2686:
case 1764:
case 3312:
case 228:
case 3989:
case 2299:
case 3417:
case 1696:
case 2269:
case 4004:
case 2784:
case 3508:
case 2210:
case 1613:
case 1666:
case 2993:
case 3283:
case 617:
case 3345:
case 3717:
case 3441:
case 1983:
case 1136:
case 1173:
case 661:
case 3398:
case 3881:
case 3690:
case 3475:
case 1464:
case 742:
case 98:
case 2548:
case 1735:
case 2040:
case 213:
case 3280:
case 2401:
case 2537:
case 1610:
case 1318:
case 1669:
case 582:
case 1797:
case 266:
case 2595:
case 3693:
case 2728:
case 1467:
case 833:
case 1980:
case 3458:
case 3402:
case 3868:
case 2676:
case 1230:
case 2633:
case 3785:
case 63:
case 3189:
case 3979:
case 3930:
case 3812:
case 3597:
case 2116:
case 2163:
case 3059:
case 2347:
case 1708:
case 3304:
case 1517:
case 1233:
case 1892:
case 2338:
case 1276:
case 111:
case 557:
case 4071:
case 1421:
case 854:
case 2372:
case 1831:
case 3186:
case 2477:
case 623:
case 2608:
case 943:
case 2300:
case 2045:
case 1088:
case 1779:
case 3343:
case 3634:
case 1985:
case 2071:
case 58:
case 3164:
case 2122:
case 3005:
case 1776:
case 3648:
case 822:
case 3637:
case 2215:
case 1024:
case 356:
case 3439:
case 3908:
case 1687:
case 2356:
case 3533:
case 2635:
case 2499:
case 3783:
case 1849:
case 3994:
case 2007:
case 2769:
case 3044:
case 2710:
case 1917:
case 2697:
case 149:
case 466:
case 518:
case 597:
case 1489:
case 1320:
case 1294:
case 2766:
case 632:
case 3038:
case 505:
case 1846:
case 3780:
case 3997:
case 3530:
case 2287:
case 3047:
case 1914:
case 1486:
case 3073:
case 1322:
case 4077:
case 2768:
case 1837:
case 2653:
case 586:
case 2498:
case 2885:
case 2341:
case 2445:
case 903:
case 2712:
case 431:
case 3950:
case 3591:
case 4074:
case 610:
case 1424:
case 2650:
case 1834:
case 779:
case 3070:
case 3039:
case 1103:
case 3953:
case 1851:
case 3405:
case 2229:
case 3782:
case 1626:
case 194:
case 1791:
case 46:
case 1461:
case 1206:
case 990:
case 1365:
case 550:
case 2592:
case 4001:
case 324:
case 876:
case 3444:
case 2302:
case 539:
case 160:
case 3906:
case 2407:
case 1156:
case 3472:
case 3887:
case 3377:
case 1755:
case 2123:
case 3649:
case 3909:
case 1159:
case 3447:
case 2946:
case 301:
case 2404:
case 352:
case 702:
case 3553:
case 1278:
case 1064:
case 415:
case 374:
case 3991:
case 3400:
case 3188:
case 1232:
case 1893:
case 2281:
case 1255:
case 3866:
case 3550:
case 26:
case 503:
case 3955:
case 2632:
case 1105:
case 133:
case 3403:
case 3211:
case 2001:
case 270:
case 2440:
case 3654:
case 3509:
case 2074:
case 791:
case 3692:
case 3456:
case 768:
case 2957:
case 3631:
case 1021:
case 3657:
case 811:
case 3506:
case 1172:
case 729:
case 1982:
case 1360:
case 2931:
case 564:
case 2125:
case 2549:
case 867:
case 3459:
case 590:
case 2992:
case 154:
case 2429:
case 1645:
case 645:
case 802:
case 2688:
case 2870:
case 3924:
case 2839:
case 1500:
case 3366:
case 2627:
case 407:
case 2918:
case 1698:
case 726:
case 936:
case 183:
case 1453:
case 1224:
case 3310:
case 3132:
case 3369:
case 1503:
case 639:
case 1288:
case 2383:
case 2426:
case 3085:
case 3927:
case 2245:
case 3988:
case 3191:
case 3178:
case 650:
case 1393:
case 2298:
case 31:
case 975:
case 1227:
case 3703:
case 3014:
case 1607:
case 240:
case 2740:
case 1860:
case 1556:
case 989:
case 1819:
case 2154:
case 1097:
case 1947:
case 281:
case 868:
case 2028:
case 1938:
case 1409:
case 2192:
case 2084:
case 3244:
case 1816:
case 1863:
case 3961:
case 829:
case 1604:
case 344:
case 3700:
case 388:
case 1406:
case 767:
case 1094:
case 686:
case 2066:
case 1334:
case 1643:
case 2240:
case 2704:
case 4084:
case 690:
case 2858:
case 3527:
case 312:
case 1903:
case 455:
case 3801:
case 440:
case 2518:
case 1337:
case 536:
case 2481:
case 1640:
case 3083:
case 2707:
case 1348:
case 3744:
case 2562:
case 3524:
case 1395:
case 3150:
case 1761:
case 14:
case 3705:
case 2923:
case 1033:
case 2314:
case 3482:
case 3877:
case 3259:
case 3387:
case 603:
case 1959:
case 3109:
case 3561:
case 3256:
case 1865:
case 1538:
case 4015:
case 1030:
case 2920:
case 1547:
case 3384:
case 2468:
case 1956:
case 365:
case 1572:
case 3623:
case 2798:
case 207:
case 429:
case 3901:
case 641:
case 332:
case 3760:
case 4006:
case 3115:
case 2958:
case 1413:
case 1466:
case 1796:
case 1134:
case 2078:
case 2091:
case 2789:
case 2941:
case 563:
case 1800:
case 3493:
case 2570:
case 491:
case 1799:
case 2032:
case 2185:
case 1469:
case 2601:
case 516:
case 1137:
case 895:
case 1859:
case 1516:
case 2674:
case 2221:
case 3977:
case 656:
case 3187:
case 2476:
case 2114:
case 2823:
case 2349:
case 1068:
case 147:
case 1856:
case 3265:
case 1519:
case 715:
case 2677:
case 504:
case 2902:
case 402:
case 2642:
case 1012:
case 134:
case 2117:
case 720:
case 251:
case 3596:
case 2479:
case 3636:
case 2575:
case 3451:
case 1190:
case 1777:
case 2053:
case 1029:
case 3166:
case 3113:
case 2180:
case 323:
case 451:
case 2408:
case 1415:
case 2939:
case 2970:
case 3824:
case 3434:
case 1193:
case 3495:
case 3378:
case 3448:
case 3827:
case 3501:
case 3110:
case 1026:
case 3169:
case 1838:
case 530:
case 2392:
case 3046:
case 169:
case 446:
case 3260:
case 840:
case 479:
case 2767:
case 1428:
case 2331:
case 1296:
case 1960:
case 999:
case 904:
case 2502:
case 881:
case 559:
case 268:
case 4032:
case 2452:
case 3577:
case 3216:
case 2357:
case 398:
case 1686:
case 3722:
case 3542:
case 128:
case 3861:
case 921:
case 1299:
case 2696:
case 361:
case 1963:
case 1269:
case 1993:
case 1210:
case 3891:
case 3680:
case 3878:
case 1043:
case 3388:
case 4:
case 38:
case 2136:
case 2983:
case 604:
case 3969:
case 3832:
case 3910:
case 2464:
case 86:
case 2735:
case 556:
case 3683:
case 113:
case 2610:
case 3855:
case 1990:
case 1266:
case 1537:
case 2669:
case 2318:
case 870:
case 2797:
case 4061:
case 1595:
case 3913:
case 166:
case 621:
case 2139:
case 3324:
case 2980:
case 3587:
case 616:
case 1676:
case 740:
case 1633:
case 2230:
case 2857:
case 2279:
case 2514:
case 3361:
case 1163:
case 3795:
case 4024:
case 3528:
case 1474:
case 3584:
case 4088:
case 1442:
case 2854:
case 1679:
case 2892:
case 2517:
case 3196:
case 211:
case 3751:
case 305:
case 2325:
case 1882:
case 1160:
case 3023:
case 3566:
case 3850:
case 3513:
case 2615:
case 1608:
case 411:
case 1045:
case 862:
case 2175:
case 596:
case 2027:
case 467:
case 1937:
case 956:
case 1098:
case 177:
case 1122:
case 3234:
case 3018:
case 1951:
case 3101:
case 1303:
case 659:
case 2208:
case 3853:
case 1215:
case 3062:
case 1934:
case 2158:
case 1593:
case 3251:
case 148:
case 795:
case 1356:
case 519:
case 1007:
case 3614:
case 1710:
case 2252:
case 249:
case 3463:
case 1165:
case 980:
case 2489:
case 2628:
case 808:
case 276:
case 3142:
case 1766:
case 1713:
case 2:
case 3928:
case 2846:
case 815:
case 2235:
case 3809:
case 1359:
case 2914:
case 671:
case 3987:
case 3025:
case 3177:
case 426:
case 3460:
case 357:
case 1652:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746396002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,];
var gg_b = "1746396002/";

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
