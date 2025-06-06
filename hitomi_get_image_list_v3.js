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
case 1404:
case 273:
case 1274:
case 249:
case 15:
case 802:
case 3269:
case 3560:
case 3509:
case 3200:
case 1788:
case 3470:
case 2556:
case 431:
case 3546:
case 3012:
case 1721:
case 1258:
case 1560:
case 2672:
case 746:
case 2892:
case 99:
case 3788:
case 3990:
case 3274:
case 297:
case 1273:
case 1111:
case 1012:
case 470:
case 3989:
case 2020:
case 18:
case 3947:
case 938:
case 3235:
case 2957:
case 3860:
case 2140:
case 2962:
case 112:
case 2394:
case 1626:
case 86:
case 371:
case 2856:
case 418:
case 1860:
case 769:
case 1427:
case 2592:
case 2691:
case 2871:
case 69:
case 1947:
case 1742:
case 672:
case 4002:
case 3684:
case 1328:
case 330:
case 814:
case 2393:
case 1434:
case 3793:
case 270:
case 3865:
case 1794:
case 1352:
case 3539:
case 1099:
case 3230:
case 1578:
case 1080:
case 497:
case 2819:
case 2251:
case 405:
case 2728:
case 1539:
case 1230:
case 3099:
case 1793:
case 1554:
case 2781:
case 473:
case 3578:
case 3468:
case 2543:
case 3565:
case 3138:
case 7:
case 732:
case 2487:
case 2321:
case 1698:
case 1222:
case 133:
case 2413:
case 2519:
case 2210:
case 3396:
case 2388:
case 2623:
case 1179:
case 1839:
case 1138:
case 821:
case 1205:
case 1475:
case 2025:
case 1396:
case 3179:
case 564:
case 333:
case 3878:
case 2686:
case 3222:
case 466:
case 2843:
case 3163:
case 2414:
case 2443:
case 3135:
case 3559:
case 1780:
case 1998:
case 3478:
case 122:
case 2923:
case 3453:
case 2549:
case 1454:
case 3534:
case 200:
case 428:
case 2385:
case 2266:
case 723:
case 3332:
case 2081:
case 2924:
case 3454:
case 542:
case 1453:
case 1250:
case 1568:
case 496:
case 1559:
case 708:
case 3998:
case 3780:
case 1208:
case 2986:
case 3799:
case 3439:
case 2887:
case 2182:
case 3094:
case 3859:
case 2148:
case 3173:
case 3100:
case 2849:
case 3158:
case 1465:
case 3320:
case 3834:
case 2115:
case 135:
case 1169:
case 1158:
case 2419:
case 2725:
case 1211:
case 1859:
case 2513:
case 1868:
case 2297:
case 3174:
case 1173:
case 335:
case 3575:
case 234:
case 3465:
case 1834:
case 1320:
case 3105:
case 89:
case 1021:
case 3816:
case 3712:
case 34:
case 1263:
case 296:
case 3264:
case 614:
case 2471:
case 52:
case 1827:
case 2536:
case 1279:
case 4081:
case 2110:
case 2657:
case 747:
case 872:
case 3984:
case 228:
case 3302:
case 1816:
case 3446:
case 1105:
case 902:
case 3926:
case 2720:
case 1238:
case 811:
case 3570:
case 3409:
case 1325:
case 799:
case 1264:
case 14:
case 3263:
case 1647:
case 2991:
case 1504:
case 2067:
case 301:
case 2052:
case 2937:
case 536:
case 1689:
case 2399:
case 3042:
case 2218:
case 2861:
case 3804:
case 914:
case 2492:
case 2836:
case 2732:
case 1527:
case 1870:
case 2176:
case 1130:
case 602:
case 838:
case 1516:
case 101:
case 3689:
case 96:
case 289:
case 1804:
case 3351:
case 2987:
case 1639:
case 734:
case 935:
case 2341:
case 3653:
case 1654:
case 415:
case 1376:
case 3199:
case 2330:
case 1055:
case 2824:
case 3898:
case 2886:
case 2913:
case 1180:
case 1975:
case 1351:
case 3639:
case 541:
case 2045:
case 2644:
case 2252:
case 3242:
case 1653:
case 562:
case 2823:
case 3310:
case 2296:
case 1700:
case 3288:
case 1773:
case 3933:
case 3063:
case 1064:
case 4066:
case 2524:
case 420:
case 3598:
case 447:
case 554:
case 2305:
case 1968:
case 922:
case 456:
case 50:
case 2001:
case 1933:
case 3934:
case 2748:
case 3758:
case 3769:
case 1310:
case 3700:
case 1079:
case 2715:
case 1598:
case 499:
case 3959:
case 3968:
case 2523:
case 2102:
case 2457:
case 1112:
case 1660:
case 767:
case 2671:
case 2120:
case 2891:
case 2369:
case 2300:
case 3722:
case 4018:
case 3348:
case 1315:
case 830:
case 286:
case 314:
case 3705:
case 3660:
case 3112:
case 1927:
case 1722:
case 3011:
case 1348:
case 2656:
case 3916:
case 3646:
case 812:
case 901:
case 1884:
case 759:
case 3185:
case 1490:
case 2872:
case 1730:
case 3970:
case 2776:
case 1904:
case 1382:
case 2591:
case 3903:
case 1517:
case 1583:
case 2281:
case 3584:
case 423:
case 4001:
case 3526:
case 1741:
case 2335:
case 1050:
case 2031:
case 3382:
case 3293:
case 1294:
case 3904:
case 247:
case 256:
case 2961:
case 3730:
case 796:
case 3490:
case 94:
case 601:
case 85:
case 3050:
case 3741:
case 974:
case 2132:
case 3188:
case 3022:
case 2437:
case 2992:
case 3121:
case 3670:
case 1547:
case 1005:
case 65:
case 2338:
case 410:
case 1604:
case 3603:
case 1889:
case 604:
case 2379:
case 2010:
case 3005:
case 3604:
case 1121:
case 2202:
case 3483:
case 1946:
case 1616:
case 4048:
case 3318:
case 1750:
case 1041:
case 3589:
case 84:
case 3280:
case 2076:
case 3299:
case 2355:
case 3627:
case 425:
case 612:
case 1142:
case 797:
case 246:
case 39:
case 1847:
case 111:
case 3417:
case 2971:
case 4015:
case 3041:
case 2956:
case 1589:
case 705:
case 3708:
case 1280:
case 671:
case 904:
case 2740:
case 311:
case 2167:
case 3847:
case 19:
case 2491:
case 2731:
case 478:
case 3030:
case 2862:
case 749:
case 2857:
case 2128:
case 3366:
case 1668:
case 551:
case 3331:
case 2181:
case 4010:
case 1035:
case 3595:
case 2308:
case 1634:
case 1965:
case 3659:
case 210:
case 1331:
case 3193:
case 487:
case 835:
case 2649:
case 2919:
case 1633:
case 3634:
case 2:
case 2232:
case 1340:
case 2423:
case 278:
case 3953:
case 124:
case 633:
case 2613:
case 2220:
case 3779:
case 731:
case 1069:
case 1058:
case 3675:
case 1764:
case 3895:
case 1397:
case 3074:
case 446:
case 2614:
case 324:
case 1978:
case 544:
case 4076:
case 2424:
case 1953:
case 3212:
case 592:
case 2048:
case 1675:
case 3764:
case 57:
case 3069:
case 3058:
case 822:
case 2594:
case 3291:
case 2963:
case 481:
case 3528:
case 1006:
case 2778:
case 4004:
case 2195:
case 688:
case 1049:
case 2753:
case 3581:
case 3006:
case 2739:
case 1528:
case 492:
case 3901:
case 2593:
case 350:
case 546:
case 2964:
case 557:
case 326:
case 3049:
case 2754:
case 2392:
case 4070:
case 1581:
case 2480:
case 4003:
case 2059:
case 2068:
case 1743:
case 3744:
case 47:
case 3129:
case 2894:
case 180:
case 2674:
case 451:
case 2075:
case 2356:
case 629:
case 3087:
case 3828:
case 3402:
case 1237:
case 13:
case 513:
case 1014:
case 860:
case 3013:
case 1719:
case 2669:
case 2658:
case 1346:
case 1272:
case 2600:
case 380:
case 2893:
case 1129:
case 2673:
case 3648:
case 587:
case 569:
case 3719:
case 3425:
case 1881:
case 1309:
case 2955:
case 3237:
case 2371:
case 3945:
case 1013:
case 33:
case 309:
case 3771:
case 1061:
case 1966:
case 977:
case 895:
case 1036:
case 3596:
case 2070:
case 2298:
case 1867:
case 1610:
case 1940:
case 1223:
case 2521:
case 993:
case 2709:
case 3931:
case 1771:
case 3061:
case 2746:
case 3940:
case 3162:
case 578:
case 3157:
case 3610:
case 3223:
case 2908:
case 1365:
case 2950:
case 281:
case 807:
case 3852:
case 3867:
case 1378:
case 183:
case 2189:
case 2344:
case 677:
case 1353:
case 5:
case 532:
case 3354:
case 3432:
case 3896:
case 1477:
case 1207:
case 782:
case 1552:
case 3339:
case 2190:
case 2821:
case 71:
case 3353:
case 1792:
case 1676:
case 1432:
case 383:
case 3378:
case 819:
case 2542:
case 2016:
case 2485:
case 764:
case 1339:
case 965:
case 117:
case 3477:
case 3552:
case 3567:
case 2641:
case 3877:
case 3229:
case 4039:
case 155:
case 2314:
case 2703:
case 379:
case 1137:
case 3976:
case 2770:
case 1832:
case 2421:
case 508:
case 3951:
case 2512:
case 877:
case 254:
case 3056:
case 995:
case 1520:
case 2488:
case 3496:
case 3832:
case 3736:
case 2060:
case 3761:
case 2704:
case 143:
case 4078:
case 179:
case 3467:
case 3452:
case 2922:
case 185:
case 607:
case 3359:
case 1631:
case 3092:
case 865:
case 1666:
case 3640:
case 3910:
case 385:
case 1452:
case 2650:
case 1467:
case 316:
case 284:
case 1191:
case 1334:
case 1092:
case 963:
case 1359:
case 3043:
case 890:
case 1044:
case 2078:
case 2580:
case 1327:
case 2053:
case 1749:
case 3825:
case 1618:
case 547:
case 454:
case 327:
case 1107:
case 340:
case 1706:
case 1428:
case 2290:
case 72:
case 3327:
case 2054:
case 3749:
case 1043:
case 829:
case 3802:
case 3706:
case 3428:
case 2039:
case 2969:
case 858:
case 1316:
case 2958:
case 660:
case 3618:
case 599:
case 3107:
case 127:
case 2973:
case 3713:
case 1714:
case 3982:
case 2880:
case 2336:
case 736:
case 1370:
case 1019:
case 3525:
case 3186:
case 1601:
case 586:
case 2899:
case 3124:
case 515:
case 3787:
case 1123:
case 1262:
case 3370:
case 1525:
case 3714:
case 1982:
case 239:
case 3303:
case 1304:
case 1787:
case 462:
case 3502:
case 3262:
case 960:
case 3257:
case 2935:
case 2664:
case 441:
case 3601:
case 1186:
case 2065:
case 3057:
case 3062:
case 2830:
case 1696:
case 2386:
case 3398:
case 2265:
case 534:
case 2505:
case 3851:
case 655:
case 784:
case 1977:
case 2104:
case 119:
case 3497:
case 3161:
case 1398:
case 643:
case 1062:
case 3696:
case 2323:
case 1932:
case 319:
case 2522:
case 2411:
case 883:
case 2985:
case 1851:
case 1136:
case 741:
case 2530:
case 1576:
case 107:
case 1791:
case 1431:
case 2717:
case 376:
case 3551:
case 2254:
case 1440:
case 2642:
case 754:
case 616:
case 1920:
case 3667:
case 261:
case 3431:
case 3791:
case 176:
case 70:
case 2278:
case 2822:
case 2408:
case 1244:
case 1652:
case 2450:
case 1667:
case 1551:
case 195:
case 1810:
case 2127:
case 3149:
case 2869:
case 2858:
case 1292:
case 2800:
case 3326:
case 360:
case 2693:
case 2159:
case 3848:
case 2168:
case 739:
case 1925:
case 3106:
case 1445:
case 2391:
case 1317:
case 2694:
case 2095:
case 1848:
case 640:
case 1149:
case 2133:
case 3582:
case 4047:
case 968:
case 880:
case 236:
case 1106:
case 3681:
case 2455:
case 2558:
case 2260:
case 2500:
case 2209:
case 1271:
case 2573:
case 559:
case 3114:
case 2835:
case 1113:
case 528:
case 3723:
case 1187:
case 348:
case 4090:
case 3256:
case 2337:
case 2574:
case 3401:
case 3271:
case 494:
case 1114:
case 503:
case 940:
case 927:
case 826:
case 3786:
case 2438:
case 668:
case 3187:
case 148:
case 188:
case 2139:
case 3390:
case 237:
case 482:
case 3518:
case 41:
case 650:
case 626:
case 1007:
case 388:
case 698:
case 464:
case 2863:
case 3143:
case 1518:
case 2795:
case 2178:
case 1801:
case 2699:
case 2153:
case 1981:
case 158:
case 1024:
case 3023:
case 1625:
case 827:
case 1086:
case 3845:
case 1729:
case 1415:
case 3602:
case 1928:
case 3236:
case 3119:
case 3818:
case 3261:
case 680:
case 4026:
case 129:
case 390:
case 2474:
case 998:
case 2098:
case 3086:
case 505:
case 3625:
case 2362:
case 2357:
case 549:
case 1261:
case 2563:
case 329:
case 190:
case 2473:
case 4083:
case 2579:
case 2270:
case 2400:
case 1602:
case 2458:
case 2469:
case 2109:
case 365:
case 2942:
case 264:
case 3967:
case 291:
case 2511:
case 1213:
case 1171:
case 2422:
case 1620:
case 1287:
case 3762:
case 2146:
case 3866:
case 3757:
case 2747:
case 653:
case 3831:
case 1952:
case 1037:
case 3620:
case 645:
case 165:
case 917:
case 1156:
case 1831:
case 437:
case 3072:
case 1757:
case 1866:
case 3249:
case 843:
case 3395:
case 2259:
case 2811:
case 2268:
case 1897:
case 3476:
case 3206:
case 1996:
case 306:
case 683:
case 531:
case 2234:
case 1091:
case 177:
case 1395:
case 2441:
case 617:
case 3897:
case 3677:
case 2921:
case 2084:
case 744:
case 2685:
case 570:
case 106:
case 2233:
case 1531:
case 377:
case 2988:
case 2790:
case 855:
case 2430:
case 1632:
case 1476:
case 77:
case 2062:
case 2057:
case 1688:
case 3830:
case 2932:
case 263:
case 2398:
case 3386:
case 3047:
case 2219:
case 2510:
case 1985:
case 1170:
case 716:
case 1103:
case 785:
case 2737:
case 654:
case 1411:
case 2161:
case 60:
case 1265:
case 851:
case 1047:
case 2772:
case 1830:
case 2876:
case 2977:
case 219:
case 1841:
case 3411:
case 3985:
case 3116:
case 3239:
case 3530:
case 844:
case 1307:
case 4029:
case 276:
case 3805:
case 3717:
case 3642:
case 3254:
case 295:
case 522:
case 2551:
case 1278:
case 87:
case 1726:
case 1822:
case 394:
case 881:
case 207:
case 1717:
case 90:
case 1530:
case 448:
case 3408:
case 3822:
case 641:
case 1541:
case 3450:
case 161:
case 1912:
case 3253:
case 2440:
case 142:
case 1783:
case 3127:
case 3858:
case 3869:
case 2384:
case 3800:
case 3693:
case 260:
case 3873:
case 1694:
case 419:
case 3168:
case 3159:
case 939:
case 1455:
case 3391:
case 3134:
case 136:
case 3694:
case 1873:
case 3874:
case 1869:
case 2383:
case 2628:
case 2292:
case 463:
case 501:
case 2445:
case 2582:
case 1391:
case 768:
case 2317:
case 4057:
case 2681:
case 3479:
case 1999:
case 1464:
case 3835:
case 3463:
case 12:
case 3246:
case 2723:
case 1798:
case 1980:
case 1438:
case 1175:
case 1573:
case 2401:
case 54:
case 3574:
case 2113:
case 1835:
case 740:
case 727:
case 1569:
case 495:
case 1558:
case 1209:
case 1500:
case 1479:
case 2029:
case 3438:
case 3980:
case 1246:
case 2187:
case 73:
case 2390:
case 3555:
case 3216:
case 1680:
case 2007:
case 2545:
case 337:
case 1879:
case 1227:
case 1699:
case 3154:
case 780:
case 2144:
case 3864:
case 2518:
case 1795:
case 1863:
case 1178:
case 58:
case 1838:
case 3680:
case 288:
case 1216:
case 3863:
case 2143:
case 1864:
case 4037:
case 3178:
case 3699:
case 3879:
case 3153:
case 465:
case 2023:
case 1357:
case 4091:
case 3165:
case 3538:
case 1098:
case 726:
case 1579:
case 2119:
case 3564:
case 1563:
case 2818:
case 2501:
case 1203:
case 1994:
case 1473:
case 798:
case 1538:
case 2086:
case 3098:
case 2415:
case 258:
case 1855:
case 2448:
case 1474:
case 3400:
case 2928:
case 3579:
case 182:
case 3109:
case 3942:
case 3160:
case 3612:
case 2952:
case 3511:
case 391:
case 364:
case 2967:
case 533:
case 3422:
case 488:
case 2762:
case 1405:
case 3747:
case 2156:
case 1275:
case 3329:
case 841:
case 31:
case 191:
case 1422:
case 2171:
case 644:
case 2597:
case 2410:
case 717:
case 1942:
case 1160:
case 3405:
case 4007:
case 67:
case 2287:
case 2072:
case 1084:
case 1921:
case 3083:
case 2540:
case 2249:
case 3550:
case 3268:
case 3259:
case 1441:
case 651:
case 1789:
case 458:
case 2206:
case 1790:
case 1988:
case 2476:
case 1430:
case 2632:
case 3017:
case 206:
case 4086:
case 2531:
case 1233:
case 3234:
case 992:
case 1550:
case 1259:
case 2677:
case 745:
case 3026:
case 1083:
case 2451:
case 1234:
case 3233:
case 854:
case 277:
case 3430:
case 3790:
case 3988:
case 3033:
case 511:
case 3594:
case 1635:
case 1964:
case 1217:
case 3979:
case 1739:
case 1480:
case 3226:
case 3778:
case 2743:
case 1068:
case 3195:
case 758:
case 1059:
case 3753:
case 1754:
case 2581:
case 1283:
case 4036:
case 445:
case 3499:
case 3739:
case 2006:
case 250:
case 1033:
case 1963:
case 3217:
case 3754:
case 1753:
case 2049:
case 3392:
case 1284:
case 409:
case 3480:
case 1226:
case 2744:
case 3068:
case 3059:
case 3674:
case 1893:
case 1673:
case 3894:
case 3356:
case 1658:
case 2346:
case 2272:
case 2402:
case 2828:
case 483:
case 788:
case 2013:
case 2360:
case 2309:
case 2881:
case 3669:
case 1894:
case 3673:
case 1674:
case 417:
case 3765:
case 836:
case 2918:
case 2648:
case 937:
case 2425:
case 2615:
case 23:
case 3003:
case 2771:
case 209:
case 861:
case 1605:
case 37:
case 3319:
case 1760:
case 4049:
case 2596:
case 3298:
case 3622:
case 2286:
case 1908:
case 1950:
case 181:
case 1746:
case 682:
case 3412:
case 392:
case 2224:
case 3760:
case 2966:
case 793:
case 1070:
case 498:
case 706:
case 3709:
case 3004:
case 1003:
case 253:
case 2061:
case 17:
case 3605:
case 1412:
case 3842:
case 664:
case 3908:
case 1622:
case 1298:
case 2867:
case 381:
case 3344:
case 43:
case 1343:
case 2792:
case 2896:
case 3888:
case 480:
case 151:
case 982:
case 1485:
case 3821:
case 3190:
case 2353:
case 1027:
case 1888:
case 1189:
case 3343:
case 964:
case 991:
case 4087:
case 1821:
case 2477:
case 2207:
case 765:
case 3641:
case 351:
case 1941:
case 154:
case 2697:
case 2229:
case 2877:
case 2172:
case 1387:
case 1512:
case 3885:
case 30:
case 3314:
case 243:
case 279:
case 2071:
case 3703:
case 1009:
case 3770:
case 2976:
case 707:
case 994:
case 2951:
case 3046:
case 1885:
case 255:
case 2056:
case 2375:
case 3611:
case 942:
case 440:
case 427:
case 795:
case 2736:
case 2832:
case 852:
case 10:
case 3313:
case 4043:
case 2761:
case 1703:
case 2137:
case 341:
case 1117:
case 184:
case 2577:
case 521:
case 2334:
case 3442:
case 1716:
case 719:
case 891:
case 3184:
case 4019:
case 285:
case 1585:
case 3812:
case 216:
case 3650:
case 3117:
case 1922:
case 3183:
case 1184:
case 882:
case 3905:
case 2631:
case 81:
case 1759:
case 3289:
case 3078:
case 3580:
case 240:
case 3974:
case 1494:
case 3290:
case 1039:
case 92:
case 3599:
case 1958:
case 2316:
case 2481:
case 3655:
case 2327:
case 502:
case 1053:
case 748:
case 443:
case 4071:
case 1289:
case 2915:
case 1580:
case 479:
case 3039:
case 1599:
case 3958:
case 3969:
case 3734:
case 1493:
case 2304:
case 1638:
case 3336:
case 936:
case 268:
case 1247:
case 3663:
case 1065:
case 62:
case 3679:
case 3899:
case 2124:
case 2370:
case 1336:
case 2019:
case 1361:
case 3638:
case 1880:
case 2303:
case 1899:
case 1679:
case 2123:
case 2257:
case 1663:
case 1775:
case 3664:
case 3065:
case 2975:
case 1823:
case 585:
case 3330:
case 2199:
case 3824:
case 1507:
case 2678:
case 516:
case 1045:
case 3782:
case 3913:
case 1644:
case 414:
case 1914:
case 1267:
case 3643:
case 3018:
case 2495:
case 2639:
case 1987:
case 1782:
case 1886:
case 3507:
case 3914:
case 1643:
case 1913:
case 818:
case 2242:
case 2654:
case 1330:
case 2376:
case 3823:
case 2079:
case 1906:
case 2933:
case 1001:
case 4050:
case 1748:
case 1949:
case 1523:
case 2221:
case 1807:
case 2598:
case 870:
case 722:
case 2934:
case 2665:
case 3322:
case 2773:
case 3748:
case 2758:
case 402:
case 2700:
case 3715:
case 3807:
case 2968:
case 1305:
case 2959:
case 3949:
case 3462:
case 967:
case 115:
case 3457:
case 3572:
case 4055:
case 2927:
case 2315:
case 3891:
case 3671:
case 659:
case 26:
case 421:
case 2447:
case 3358:
case 3369:
case 628:
case 1374:
case 2722:
case 1537:
case 3097:
case 3373:
case 2348:
case 1656:
case 1120:
case 1671:
case 1891:
case 386:
case 214:
case 603:
case 2112:
case 1462:
case 2609:
case 1572:
case 3537:
case 3656:
case 2011:
case 2646:
case 568:
case 1358:
case 1300:
case 2883:
case 2185:
case 3872:
case 1936:
case 805:
case 3692:
case 4038:
case 2294:
case 3177:
case 689:
case 156:
case 667:
case 1040:
case 202:
case 3281:
case 2526:
case 1837:
case 2904:
case 347:
case 1177:
case 1591:
case 3031:
case 2382:
case 540:
case 2517:
case 527:
case 3066:
case 903:
case 2490:
case 1692:
case 996:
case 1228:
case 74:
case 3936:
case 2008:
case 975:
case 897:
case 3040:
case 3132:
case 3196:
case 1010:
case 4035:
case 3437:
case 2301:
case 53:
case 3797:
case 2022:
case 2670:
case 1472:
case 1202:
case 3992:
case 1562:
case 580:
case 1661:
case 712:
case 369:
case 3338:
case 387:
case 889:
case 1797:
case 1437:
case 3379:
case 1196:
case 3661:
case 2547:
case 2005:
case 2604:
case 1338:
case 238:
case 3636:
case 3557:
case 4000:
case 2483:
case 1740:
case 4069:
case 1956:
case 2318:
case 2280:
case 2589:
case 4073:
case 75:
case 2627:
case 2299:
case 3355:
case 2590:
case 1862:
case 1766:
case 997:
case 1857:
case 550:
case 346:
case 2345:
case 357:
case 3971:
case 2750:
case 2708:
case 2426:
case 2484:
case 2946:
case 598:
case 3167:
case 2847:
case 146:
case 211:
case 157:
case 1971:
case 1355:
case 2030:
case 1076:
case 3862:
case 3766:
case 438:
case 2366:
case 1919:
case 4005:
case 3082:
case 110:
case 1745:
case 3829:
case 2194:
case 1:
case 1606:
case 3181:
case 2595:
case 918:
case 583:
case 2633:
case 631:
case 2668:
case 517:
case 2659:
case 1407:
case 1082:
case 1128:
case 3919:
case 670:
case 2035:
case 2634:
case 4022:
case 3232:
case 1181:
case 3:
case 3606:
case 4030:
case 125:
case 2953:
case 1944:
case 800:
case 1015:
case 2978:
case 3220:
case 931:
case 2779:
case 2895:
case 4041:
case 3311:
case 553:
case 224:
case 1613:
case 3944:
case 1220:
case 3486:
case 2498:
case 1529:
case 2738:
case 3015:
case 3424:
case 545:
case 178:
case 1423:
case 325:
case 2954:
case 509:
case 2073:
case 2397:
case 2000:
case 2069:
case 2403:
case 1571:
case 2273:
case 373:
case 197:
case 3248:
case 529:
case 1461:
case 2258:
case 2269:
case 1436:
case 2470:
case 1672:
case 1796:
case 3215:
case 3556:
case 2546:
case 3796:
case 2788:
case 946:
case 2274:
case 3197:
case 3461:
case 105:
case 2721:
case 3020:
case 856:
case 820:
case 847:
case 433:
case 1871:
case 2108:
case 2235:
case 366:
case 3962:
case 2809:
case 2381:
case 3032:
case 1393:
case 1282:
case 3752:
case 913:
case 588:
case 3166:
case 2683:
case 2328:
case 987:
case 1140:
case 3592:
case 212:
case 3691:
case 657:
case 166:
case 28:
case 1166:
case 2085:
case 2416:
case 2684:
case 3077:
case 3393:
case 230:
case 2626:
case 886:
case 1752:
case 1767:
case 2865:
case 370:
case 2793:
case 131:
case 808:
case 1342:
case 632:
case 1728:
case 2230:
case 2155:
case 2539:
case 1276:
case 1929:
case 3544:
case 2241:
case 1543:
case 1449:
case 3251:
case 724:
case 3342:
case 4012:
case 3728:
case 170:
case 1145:
case 2367:
case 2352:
case 331:
case 1251:
case 2553:
case 2080:
case 3543:
case 823:
case 1544:
case 2459:
case 2565:
case 932:
case 9:
case 2839:
case 3487:
case 118:
case 3101:
case 1686:
case 3413:
case 48:
case 3623:
case 2396:
case 3388:
case 625:
case 412:
case 1624:
case 1487:
case 318:
case 1210:
case 1519:
case 678:
case 3025:
case 3624:
case 1623:
case 2179:
case 1388:
case 565:
case 3686:
case 2222:
case 2698:
case 1101:
case 2878:
case 2163:
case 3414:
case 1413:
case 2559:
case 2250:
case 3443:
case 3814:
case 3923:
case 1924:
case 3549:
case 3240:
case 2453:
case 2093:
case 300:
case 3231:
case 4021:
case 1887:
case 923:
case 878:
case 2332:
case 3081:
case 222:
case 1549:
case 908:
case 1814:
case 2780:
case 2998:
case 2439:
case 3028:
case 3887:
case 825:
case 2799:
case 1266:
case 1385:
case 474:
case 576:
case 1231:
case 2533:
case 2868:
case 2859:
case 3514:
case 1629:
case 2173:
case 721:
case 2100:
case 3849:
case 2169:
case 1725:
case 1419:
case 623:
case 134:
case 3115:
case 2834:
case 3702:
case 1587:
case 1312:
case 3725:
case 3419:
case 1849:
case 3629:
case 1806:
case 235:
case 3312:
case 401:
case 2465:
case 857:
case 2105:
case 846:
case 1720:
case 128:
case 2264:
case 3561:
case 303:
case 3201:
case 1991:
case 686:
case 2504:
case 3536:
case 920:
case 3662:
case 2325:
case 3657:
case 3110:
case 328:
case 2302:
case 2446:
case 2926:
case 1536:
case 2827:
case 2088:
case 1110:
case 999:
case 1561:
case 1471:
case 2122:
case 3991:
case 2503:
case 1201:
case 3052:
case 3937:
case 2130:
case 2255:
case 435:
case 647:
case 3861:
case 2141:
case 3218:
case 3380:
case 189:
case 2804:
case 656:
case 167:
case 3732:
case 3836:
case 1972:
case 3492:
case 986:
case 3151:
case 1399:
case 3176:
case 2785:
case 1067:
case 2689:
case 3777:
case 2690:
case 1492:
case 2870:
case 1732:
case 1151:
case 1861:
case 560:
case 1218:
case 699:
case 1380:
case 2803:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749222002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,];
var gg_b = "1749222002/";

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
