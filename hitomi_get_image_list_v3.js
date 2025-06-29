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
case 785:
case 3260:
case 2592:
case 802:
case 997:
case 2463:
case 2168:
case 3706:
case 2430:
case 3031:
case 910:
case 428:
case 126:
case 1129:
case 1568:
case 283:
case 681:
case 545:
case 3937:
case 1416:
case 3272:
case 799:
case 921:
case 1423:
case 1569:
case 1128:
case 3615:
case 630:
case 3823:
case 300:
case 4035:
case 1147:
case 222:
case 2528:
case 2801:
case 2547:
case 1000:
case 8:
case 4090:
case 3342:
case 1236:
case 1703:
case 2056:
case 1858:
case 2775:
case 2029:
case 2210:
case 3413:
case 3797:
case 3118:
case 852:
case 3458:
case 3426:
case 642:
case 3742:
case 1859:
case 773:
case 2047:
case 3459:
case 816:
case 3119:
case 1574:
case 2028:
case 1826:
case 275:
case 3761:
case 2375:
case 350:
case 3208:
case 1980:
case 4089:
case 2665:
case 1184:
case 3397:
case 1194:
case 3200:
case 4022:
case 2108:
case 1990:
case 3274:
case 916:
case 1395:
case 3875:
case 2594:
case 3421:
case 700:
case 1475:
case 2842:
case 2082:
case 3787:
case 667:
case 3676:
case 444:
case 1072:
case 3648:
case 1509:
case 1795:
case 79:
case 2253:
case 3627:
case 2109:
case 2861:
case 952:
case 1989:
case 1060:
case 526:
case 821:
case 750:
case 2806:
case 3301:
case 2716:
case 1924:
case 1617:
case 9:
case 3145:
case 2683:
case 1411:
case 1330:
case 902:
case 897:
case 1935:
case 810:
case 1363:
case 2172:
case 3701:
case 3036:
case 2316:
case 2964:
case 2551:
case 356:
case 1572:
case 2133:
case 2605:
case 1559:
case 1577:
case 1874:
case 1526:
case 2736:
case 2001:
case 371:
case 3023:
case 1275:
case 380:
case 2419:
case 1187:
case 3394:
case 3221:
case 2159:
case 1710:
case 2907:
case 3250:
case 786:
case 1612:
case 569:
case 203:
case 331:
case 2336:
case 3016:
case 601:
case 1558:
case 3794:
case 1915:
case 882:
case 1431:
case 1166:
case 1940:
case 2239:
case 2952:
case 1101:
case 3320:
case 1971:
case 1345:
case 2981:
case 815:
case 3622:
case 394:
case 132:
case 1026:
case 3699:
case 2828:
case 2655:
case 2829:
case 755:
case 113:
case 1013:
case 1058:
case 2856:
case 1745:
case 1211:
case 4076:
case 3516:
case 253:
case 3934:
case 2066:
case 3130:
case 172:
case 236:
case 168:
case 466:
case 267:
case 169:
case 3329:
case 2263:
case 1833:
case 3460:
case 2061:
case 386:
case 3690:
case 2042:
case 2882:
case 731:
case 3747:
case 1872:
case 3729:
case 2506:
case 3689:
case 941:
case 1021:
case 3328:
case 540:
case 1976:
case 1948:
case 771:
case 1614:
case 1106:
case 242:
case 1809:
case 1550:
case 1161:
case 3624:
case 3784:
case 1318:
case 281:
case 1353:
case 3409:
case 2561:
case 3213:
case 1142:
case 2410:
case 2150:
case 270:
case 572:
case 2121:
case 3259:
case 3384:
case 1718:
case 1197:
case 3226:
case 44:
case 1521:
case 2894:
case 4015:
case 3575:
case 230:
case 2731:
case 1808:
case 3635:
case 3103:
case 1319:
case 3529:
case 3168:
case 1607:
case 3556:
case 2233:
case 655:
case 3311:
case 383:
case 1251:
case 2272:
case 3693:
case 419:
case 29:
case 143:
case 2937:
case 502:
case 1220:
case 3245:
case 2306:
case 3711:
case 2823:
case 3844:
case 3801:
case 845:
case 3528:
case 3547:
case 2912:
case 701:
case 1350:
case 1131:
case 1466:
case 1518:
case 492:
case 121:
case 2531:
case 1721:
case 2361:
case 3210:
case 1696:
case 3047:
case 3495:
case 2742:
case 3962:
case 197:
case 2477:
case 3028:
case 298:
case 3584:
case 2459:
case 1895:
case 2208:
case 3904:
case 1519:
case 2397:
case 926:
case 3174:
case 552:
case 722:
case 3108:
case 1377:
case 1359:
case 694:
case 3946:
case 1667:
case 3978:
case 2274:
case 102:
case 4055:
case 1045:
case 1885:
case 3594:
case 41:
case 3219:
case 826:
case 2421:
case 1686:
case 2648:
case 2676:
case 783:
case 1691:
case 3842:
case 2627:
case 3253:
case 2536:
case 3218:
case 2914:
case 2366:
case 1726:
case 2110:
case 3051:
case 2450:
case 206:
case 285:
case 1358:
case 543:
case 1461:
case 3520:
case 1839:
case 775:
case 2269:
case 3806:
case 3439:
case 1545:
case 152:
case 1228:
case 911:
case 2344:
case 2301:
case 2145:
case 735:
case 1229:
case 418:
case 3902:
case 3172:
case 2811:
case 1256:
case 2268:
case 457:
case 301:
case 2701:
case 2036:
case 3160:
case 3582:
case 3438:
case 3133:
case 920:
case 1484:
case 271:
case 3736:
case 3044:
case 3203:
case 913:
case 3159:
case 2221:
case 968:
case 3419:
case 280:
case 1308:
case 582:
case 2195:
case 1309:
case 2250:
case 3418:
case 3336:
case 1853:
case 4083:
case 932:
case 3239:
case 3952:
case 730:
case 2523:
case 2925:
case 2469:
case 3981:
case 699:
case 3828:
case 2699:
case 1447:
case 3544:
case 3501:
case 1095:
case 2622:
case 3847:
case 1123:
case 3655:
case 1772:
case 925:
case 3892:
case 1456:
case 2720:
case 96:
case 1530:
case 2698:
case 1670:
case 1429:
case 1492:
case 1333:
case 515:
case 2680:
case 336:
case 2351:
case 2130:
case 3066:
case 353:
case 2516:
case 781:
case 2163:
case 2468:
case 1769:
case 3230:
case 2138:
case 86:
case 2511:
case 3263:
case 123:
case 1538:
case 1368:
case 2728:
case 2472:
case 286:
case 2688:
case 1451:
case 2747:
case 3042:
case 3445:
case 3097:
case 4065:
case 1085:
case 1420:
case 1679:
case 1657:
case 650:
case 3986:
case 1244:
case 2139:
case 342:
case 2347:
case 753:
case 115:
case 1700:
case 2624:
case 736:
case 1774:
case 4093:
case 381:
case 2784:
case 2836:
case 370:
case 2213:
case 2258:
case 255:
case 3954:
case 3561:
case 832:
case 1810:
case 2259:
case 1300:
case 2277:
case 1905:
case 2226:
case 2384:
case 600:
case 2973:
case 868:
case 946:
case 1494:
case 3597:
case 2408:
case 2635:
case 1191:
case 2176:
case 2148:
case 1186:
case 2610:
case 3271:
case 2127:
case 2906:
case 425:
case 2586:
case 3609:
case 704:
case 788:
case 27:
case 2737:
case 3032:
case 440:
case 3608:
case 887:
case 1835:
case 2265:
case 2149:
case 46:
case 2567:
case 2712:
case 468:
case 3488:
case 137:
case 1076:
case 2091:
case 2293:
case 3672:
case 1048:
case 3660:
case 3975:
case 3341:
case 3573:
case 1921:
case 3370:
case 413:
case 3105:
case 262:
case 1950:
case 3762:
case 177:
case 278:
case 432:
case 3741:
case 3489:
case 2961:
case 2554:
case 395:
case 1049:
case 2879:
case 1822:
case 2115:
case 1217:
case 2455:
case 2314:
case 3034:
case 3746:
case 3422:
case 2966:
case 914:
case 3778:
case 279:
case 1515:
case 4021:
case 3379:
case 3357:
case 2862:
case 1977:
case 148:
case 446:
case 2987:
case 388:
case 304:
case 3378:
case 2205:
case 1926:
case 1898:
case 1071:
case 2096:
case 2081:
case 3025:
case 2507:
case 3498:
case 524:
case 469:
case 987:
case 3302:
case 577:
case 2619:
case 1743:
case 1015:
case 3600:
case 3364:
case 3534:
case 3674:
case 2552:
case 789:
case 537:
case 1540:
case 3923:
case 2581:
case 2596:
case 1571:
case 627:
case 3276:
case 2901:
case 354:
case 1412:
case 3812:
case 2653:
case 1181:
case 2618:
case 1909:
case 4000:
case 3299:
case 3817:
case 3936:
case 693:
case 1417:
case 1793:
case 291:
case 1179:
case 1035:
case 3707:
case 2579:
case 992:
case 2638:
case 2546:
case 1393:
case 1588:
case 426:
case 128:
case 544:
case 3298:
case 2994:
case 1908:
case 1473:
case 3307:
case 3280:
case 1146:
case 2188:
case 1089:
case 4069:
case 2057:
case 1960:
case 1675:
case 1164:
case 3781:
case 2725:
case 919:
case 1365:
case 679:
case 3796:
case 3449:
case 2564:
case 3014:
case 70:
case 12:
case 2867:
case 790:
case 165:
case 1765:
case 2325:
case 717:
case 3381:
case 3396:
case 639:
case 1524:
case 2891:
case 3650:
case 1848:
case 1088:
case 2886:
case 2046:
case 3143:
case 1212:
case 3448:
case 3476:
case 1080:
case 1969:
case 3471:
case 1098:
case 3440:
case 2041:
case 4033:
case 3825:
case 638:
case 3391:
case 3512:
case 4072:
case 2465:
case 2929:
case 957:
case 2992:
case 2956:
case 420:
case 678:
case 3834:
case 3659:
case 3791:
case 2695:
case 1022:
case 3367:
case 1099:
case 35:
case 1900:
case 67:
case 3012:
case 2493:
case 3290:
case 91:
case 1974:
case 2541:
case 2630:
case 709:
case 2663:
case 1580:
case 2317:
case 1522:
case 796:
case 2773:
case 2122:
case 3931:
case 1783:
case 3155:
case 1623:
case 892:
case 3289:
case 1939:
case 1252:
case 739:
case 3443:
case 3148:
case 2240:
case 587:
case 617:
case 1281:
case 2073:
case 1296:
case 4063:
case 1083:
case 3610:
case 1005:
case 658:
case 3312:
case 2032:
case 161:
case 2608:
case 937:
case 1694:
case 3802:
case 1402:
case 3054:
case 3864:
case 1938:
case 33:
case 3337:
case 1464:
case 3567:
case 1173:
case 1478:
case 1722:
case 2362:
case 1799:
case 2183:
case 2488:
case 1651:
case 608:
case 338:
case 3293:
case 860:
case 3878:
case 1505:
case 2975:
case 2304:
case 84:
case 3997:
case 3067:
case 362:
case 2517:
case 1399:
case 4095:
case 295:
case 3554:
case 3961:
case 2215:
case 1798:
case 1117:
case 2489:
case 1620:
case 1479:
case 2741:
case 3645:
case 3879:
case 3857:
case 1628:
case 1790:
case 1647:
case 2422:
case 696:
case 4003:
case 1254:
case 1389:
case 824:
case 3987:
case 1390:
case 1462:
case 187:
case 3205:
case 77:
case 204:
case 1995:
case 1692:
case 2025:
case 3081:
case 2480:
case 3283:
case 339:
case 1629:
case 3096:
case 1470:
case 609:
case 2757:
case 2498:
case 3052:
case 2779:
case 2302:
case 4039:
case 948:
case 866:
case 3619:
case 2534:
case 393:
case 2600:
case 778:
case 2837:
case 114:
case 659:
case 3581:
case 1093:
case 3944:
case 3901:
case 2764:
case 3140:
case 1291:
case 2276:
case 415:
case 3171:
case 2299:
case 68:
case 2222:
case 391:
case 3189:
case 3255:
case 1315:
case 3854:
case 1606:
case 1114:
case 1454:
case 3579:
case 2707:
case 2832:
case 119:
case 443:
case 3405:
case 4053:
case 3578:
case 327:
case 1204:
case 2873:
case 1715:
case 259:
case 1883:
case 1270:
case 3483:
case 507:
case 2280:
case 2307:
case 3502:
case 928:
case 1740:
case 2796:
case 3725:
case 2781:
case 1697:
case 374:
case 497:
case 2014:
case 410:
case 3982:
case 1340:
case 3124:
case 557:
case 3920:
case 2396:
case 1543:
case 1371:
case 209:
case 3886:
case 688:
case 518:
case 2650:
case 192:
case 3891:
case 3078:
case 1642:
case 2143:
case 1486:
case 2471:
case 1749:
case 1496:
case 3852:
case 2613:
case 2825:
case 3004:
case 3041:
case 3243:
case 689:
case 1452:
case 3896:
case 107:
case 284:
case 2386:
case 3947:
case 2512:
case 1666:
case 3062:
case 3992:
case 1349:
case 1202:
case 3465:
case 1865:
case 1137:
case 2235:
case 1687:
case 1776:
case 2659:
case 2834:
case 1055:
case 402:
case 25:
case 2537:
case 791:
case 929:
case 1727:
case 3493:
case 734:
case 3717:
case 2288:
case 258:
case 3180:
case 2754:
case 82:
case 3373:
case 3504:
case 3807:
case 592:
case 4010:
case 1644:
case 1601:
case 20:
case 1918:
case 452:
case 865:
case 1555:
case 1953:
case 2354:
case 2931:
case 1279:
case 2155:
case 1257:
case 2713:
case 2497:
case 2758:
case 2885:
case 2045:
case 3508:
case 883:
case 2377:
case 500:
case 3194:
case 2667:
case 2803:
case 2326:
case 1274:
case 59:
case 2358:
case 185:
case 3231:
case 2510:
case 822:
case 311:
case 345:
case 2136:
case 2461:
case 3850:
case 3072:
case 2777:
case 3509:
case 2686:
case 2759:
case 1914:
case 2442:
case 3795:
case 1536:
case 408:
case 2726:
case 3924:
case 2228:
case 1145:
case 2247:
case 835:
case 2839:
case 2654:
case 1269:
case 112:
case 2406:
case 458:
case 156:
case 3632:
case 2838:
case 1701:
case 3009:
case 4012:
case 3560:
case 2010:
case 3411:
case 2229:
case 216:
case 3935:
case 490:
case 2053:
case 3192:
case 2018:
case 3338:
case 1272:
case 1937:
case 615:
case 3156:
case 243:
case 641:
case 1233:
case 2607:
case 2863:
case 3738:
case 3074:
case 2444:
case 1912:
case 599:
case 2401:
case 3423:
case 3128:
case 3569:
case 851:
case 720:
case 2019:
case 2220:
case 3147:
case 1306:
case 100:
case 1531:
case 409:
case 3813:
case 1640:
case 3785:
case 3858:
case 922:
case 1413:
case 2681:
case 1458:
case 1153:
case 1671:
case 556:
case 3922:
case 2466:
case 2350:
case 3068:
case 2518:
case 3236:
case 2553:
case 150:
case 3998:
case 2294:
case 3385:
case 1761:
case 1397:
case 3184:
case 2519:
case 3500:
case 512:
case 682:
case 3303:
case 1459:
case 1119:
case 621:
case 2538:
case 488:
case 404:
case 2368:
case 3050:
case 2111:
case 2646:
case 1688:
case 930:
case 1747:
case 2769:
case 1329:
case 1138:
case 3860:
case 1433:
case 1356:
case 105:
case 1139:
case 2201:
case 2003:
case 2768:
case 1328:
case 282:
case 610:
case 3927:
case 1729:
case 981:
case 2539:
case 2420:
case 2679:
case 2085:
case 2845:
case 1689:
case 2657:
case 155:
case 1213:
case 3719:
case 2810:
case 3436:
case 241:
case 3809:
case 3550:
case 768:
case 1409:
case 1836:
case 3318:
case 1784:
case 1973:
case 3808:
case 2585:
case 3521:
case 2494:
case 594:
case 836:
case 2039:
case 1635:
case 853:
case 1408:
case 1103:
case 2300:
case 1932:
case 1259:
case 1277:
case 2175:
case 48:
case 2374:
case 2905:
case 3753:
case 3197:
case 3187:
case 1221:
case 1023:
case 3275:
case 180:
case 2819:
case 2297:
case 4017:
case 1474:
case 3577:
case 2484:
case 2595:
case 171:
case 2993:
case 652:
case 3874:
case 3526:
case 36:
case 325:
case 4073:
case 842:
case 3915:
case 2708:
case 3431:
case 2030:
case 3166:
case 1250:
case 2309:
case 505:
case 131:
case 2853:
case 1016:
case 2818:
case 3612:
case 746:
case 332:
case 1699:
case 3026:
case 1622:
case 2095:
case 194:
case 2447:
case 3059:
case 870:
case 2772:
case 3077:
case 2428:
case 1320:
case 2760:
case 3144:
case 903:
case 3869:
case 3345:
case 1130:
case 2662:
case 1382:
case 2372:
case 1720:
case 2456:
case 313:
case 2429:
case 2670:
case 2965:
case 3211:
case 489:
case 6:
case 3013:
case 1594:
case 3497:
case 2821:
case 1485:
case 1020:
case 933:
case 2475:
case 3359:
case 2990:
case 1108:
case 302:
case 2988:
case 1946:
case 3284:
case 4004:
case 1861:
case 4041:
case 3461:
case 613:
case 211:
case 583:
case 973:
case 3691:
case 3759:
case 2509:
case 2850:
case 672:
case 1051:
case 1253:
case 151:
case 2795:
case 912:
case 3442:
case 1716:
case 2617:
case 710:
case 2924:
case 66:
case 985:
case 797:
case 575:
case 640:
case 3654:
case 1520:
case 3943:
case 1806:
case 1323:
case 3838:
case 2632:
case 1964:
case 999:
case 1605:
case 1133:
case 3229:
case 2151:
case 3010:
case 2411:
case 3292:
case 2673:
case 2560:
case 625:
case 1172:
case 2363:
case 1723:
case 2568:
case 2129:
case 2338:
case 183:
case 3282:
case 2156:
case 950:
case 1693:
case 899:
case 2739:
case 7:
case 1529:
case 3830:
case 998:
case 1311:
case 702:
case 4002:
case 806:
case 2339:
case 3019:
case 1245:
case 2147:
case 2785:
case 3721:
case 2813:
case 1775:
case 716:
case 1210:
case 669:
case 3696:
case 501:
case 264:
case 3466:
case 2922:
case 900:
case 2999:
case 3553:
case 2236:
case 812:
case 4078:
case 4046:
case 2703:
case 2068:
case 175:
case 3294:
case 2998:
case 1941:
case 1904:
case 99:
case 2069:
case 3519:
case 2184:
case 1665:
case 1962:
case 752:
case 3750:
case 310:
case 1495:
case 2859:
case 3487:
case 2826:
case 397:
case 2303:
case 1851:
case 3538:
case 323:
case 2050:
case 3451:
case 246:
case 2872:
case 3769:
case 1061:
case 2833:
case 3003:
case 3768:
case 3244:
case 3201:
case 955:
case 3539:
case 3369:
case 831:
case 479:
case 2223:
case 3085:
case 3845:
case 3679:
case 1561:
case 170:
case 1331:
case 1643:
case 3810:
case 2550:
case 2353:
case 2318:
case 3266:
case 1894:
case 3983:
case 1006:
case 130:
case 576:
case 3175:
case 1121:
case 3287:
case 2197:
case 2718:
case 2753:
case 493:
case 3374:
case 542:
case 4054:
case 2275:
case 1159:
case 1285:
case 1419:
case 886:
case 3819:
case 1907:
case 2559:
case 805:
case 2577:
case 3709:
case 782:
case 1203:
case 2526:
case 26:
case 2874:
case 3595:
case 1736:
case 3708:
case 2513:
case 2915:
case 2558:
case 2166:
case 2431:
case 3242:
case 1418:
case 723:
case 1158:
case 1566:
case 3818:
case 103:
case 1501:
case 2026:
case 478:
case 176:
case 3123:
case 462:
case 855:
case 3772:
case 530:
case 4067:
case 2059:
case 2869:
case 2940:
case 931:
case 2144:
case 2101:
case 1239:
case 2971:
case 2345:
case 1996:
case 1981:
case 3662:
case 715:
case 741:
case 4091:
case 438:
case 136:
case 570:
case 268:
case 3372:
case 645:
case 1892:
case 3456:
case 213:
case 3641:
case 3116:
case 3360:
case 3604:
case 1856:
case 2058:
case 3492:
case 3333:
case 2013:
case 3965:
case 3670:
case 4075:
case 3515:
case 2254:
case 1669:
case 3958:
case 2389:
case 1422:
case 2647:
case 2788:
case 2855:
case 83:
case 2692:
case 3898:
case 2629:
case 3071:
case 1498:
case 3880:
case 3040:
case 2404:
case 2656:
case 3232:
case 724:
case 3107:
case 692:
case 2462:
case 3926:
case 2995:
case 1346:
case 2593:
case 2388:
case 486:
case 34:
case 2724:
case 2684:
case 939:
case 1674:
case 838:
case 2930:
case 1249:
case 360:
case 2565:
case 154:
case 2286:
case 3412:
case 2093:
case 1276:
case 979:
case 1227:
case 3181:
case 737:
case 878:
case 3540:
case 2735:
case 3571:
case 749:
case 4011:
case 1525:
case 1923:
case 455:
case 862:
case 3824:
case 3576:
case 431:
case 1609:
case 1032:
case 879:
case 3527:
case 1424:
case 261:
case 2252:
case 504:
case 1240:
case 1073:
case 3225:
case 1271:
case 471:
case 1017:
case 839:
case 2464:
case 1435:
case 3549:
case 1608:
case 938:
case 1911:
case 3835:
case 847:
case 189:
case 3921:
case 1304:
case 1660:
case 1341:
case 1975:
case 893:
case 2207:
case 1633:
case 2380:
case 554:
case 1370:
case 2478:
case 3027:
case 2173:
case 3890:
case 2651:
case 366:
case 2799:
case 2682:
case 2505:
case 337:
case 3076:
case 1490:
case 607:
case 1489:
case 1215:
case 61:
case 2620:
case 1741:
case 1704:
case 3889:
case 2322:
case 1517:
case 3414:
case 3154:
case 74:
case 3355:
case 494:
case 377:
case 2376:
case 1391:
case 207:
case 184:
case 406:
case 108:
case 2666:
case 1512:
case 728:
case 344:
case 3080:
case 3840:
case 3425:
case 485:
case 1825:
case 3871:
case 3098:
case 3968:
case 1659:
case 2776:
case 2687:
case 2748:
case 1834:
case 3022:
case 2727:
case 1367:
case 827:
case 2202:
case 499:
case 1235:
case 21:
case 329:
case 765:
case 3162:
case 2407:
case 190:
case 117:
case 3580:
case 263:
case 661:
case 3616:
case 3141:
case 3900:
case 509:
case 433:
case 1931:
case 834:
case 2279:
case 2257:
case 1289:
case 412:
case 2601:
case 2644:
case 3599:
case 1037:
case 72:
case 2953:
case 3214:
case 3705:
case 55:
case 2454:
case 2114:
case 2606:
case 934:
case 1707:
case 3909:
case 1222:
case 3179:
case 3157:
case 1514:
case 3417:
case 3793:
case 2204:
case 2241:
case 4031:
case 1298:
case 159:
case 3146:
case 508:
case 584:
case 3473:
case 3178:
case 1307:
case 974:
case 3590:
case 49:
case 328:
case 3432:
case 2467:
case 498:
case 3102:
case 3972:
case 32:
case 3164:
case 1621:
case 2740:
case 3849:
case 927:
case 3089:
case 3960:
case 50:
case 1781:
case 3365:
case 3088:
case 517:
case 1143:
case 2486:
case 1448:
case 2661:
case 2340:
case 365:
case 558:
case 729:
case 2371:
case 3765:
case 1381:
case 2958:
case 179:
case 3065:
case 954:
case 3790:
case 2822:
case 3628:
case 1115:
case 3855:
case 1966:
case 1283:
case 139:
case 1096:
case 2898:
case 2273:
case 4061:
case 98:
case 1804:
case 3404:
case 1052:
case 1870:
case 4042:
case 1862:
case 3390:
case 2959:
case 3462:
case 2107:
case 761:
case 3724:
case 2437:
case 24:
case 3684:
case 889:
case 260:
case 3134:
case 3930:
case 904:
case 3963:
case 2015:
case 1140:
case 3324:
case 3286:
case 2412:
case 3125:
case 1653:
case 2631:
case 538:
case 2540:
case 1007:
case 2343:
case 1596:
case 470:
case 224:
case 3005:
case 2576:
case 2824:
case 361:
case 995:
case 2527:
case 787:
case 2636:
case 17:
case 1176:
case 2191:
case 3252:
case 1443:
case 1148:
case 629:
case 3296:
case 3843:
case 1610:
case 547:
case 1127:
case 3938:
case 1567:
case 989:
case 13:
case 2835:
case 1265:
case 3583:
case 714:
case 3985:
case 2921:
case 3207:
case 3446:
case 3799:
case 644:
case 3173:
case 2027:
case 3722:
case 467:
case 1878:
case 1091:
case 237:
case 2048:
case 2755:
case 4066:
case 436:
case 1293:
case 3479:
case 1961:
case 1554:
case 3117:
case 1857:
case 1645:
case 1879:
case 2414:
case 1942:
case 3399:
case 3322:
case 2950:
case 178:
case 476:
case 4051:
case 3348:
case 307:
case 637:
case 3327:
case 1947:
case 2840:
case 527:
case 3496:
case 3749:
case 3452:
case 2098:
case 2871:
case 90:
case 1881:
case 3055:
case 677:
case 2968:
case 3264:
case 3727:
case 2022:
case 1695:
case 2099:
case 2434:
case 3202:
case 1929:
case 1465:
case 958:
case 1992:
case 3349:
case 591:
case 3137:
case 3865:
case 1373:
case 1541:
case 1630:
case 2598:
case 1663:
case 318:
case 1807:
case 1198:
case 1717:
case 1332:
case 2104:
case 792:
case 1180:
case 3278:
case 401:
case 3893:
case 624:
case 3246:
case 1984:
case 1122:
case 4094:
case 2815:
case 2783:
case 1199:
case 574:
case 2623:
case 3257:
case 1732:
case 1317:
case 2705:
case 2214:
case 3953:
case 3315:
case 1579:
case 884:
case 1002:
case 2589:
case 660:
case 3114:
case 1557:
case 71:
case 909:
case 2417:
case 64:
case 2157:
case 2179:
case 3043:
case 85:
case 1190:
case 2178:
case 2473:
case 3270:
case 2146:
case 2611:
case 1405:
case 707:
case 1638:
case 319:
case 2432:
case 1546:
case 3805:
case 483:
case 127:
case 1578:
case 2024:
case 2102:
case 1564:
case 174:
case 817:
case 4028:
case 2237:
case 1603:
case 1982:
case 2972:
case 1057:
case 1685:
case 2164:
case 1079:
case 3697:
case 2933:
case 3771:
case 1891:
case 763:
case 2876:
case 392:
case 2524:
case 1078:
case 1734:
case 2848:
case 648:
case 2212:
case 3486:
case 757:
case 2090:
case 1920:
case 3340:
case 3661:
case 1124:
case 435:
case 2765:
case 4056:
case 3371:
case 3945:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751180402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,];
var gg_b = "1751180402/";

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
