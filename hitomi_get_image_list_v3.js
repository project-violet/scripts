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
case 1092:
case 1022:
case 2628:
case 586:
case 574:
case 2698:
case 1426:
case 1496:
case 2735:
case 265:
case 2842:
case 431:
case 2181:
case 389:
case 2055:
case 2176:
case 826:
case 16:
case 3527:
case 3659:
case 3858:
case 2256:
case 2750:
case 1337:
case 511:
case 2102:
case 198:
case 690:
case 448:
case 4020:
case 3820:
case 746:
case 3890:
case 1903:
case 1616:
case 1189:
case 2274:
case 976:
case 2041:
case 2297:
case 2366:
case 2227:
case 835:
case 203:
case 402:
case 3556:
case 4073:
case 121:
case 3400:
case 910:
case 723:
case 2154:
case 1401:
case 4058:
case 3775:
case 3039:
case 3313:
case 1980:
case 564:
case 2511:
case 2798:
case 897:
case 3513:
case 1512:
case 3814:
case 3831:
case 813:
case 1830:
case 3660:
case 855:
case 2588:
case 3918:
case 2205:
case 2476:
case 2481:
case 1042:
case 2849:
case 2769:
case 1308:
case 2072:
case 2648:
case 572:
case 1196:
case 3547:
case 538:
case 760:
case 376:
case 737:
case 2900:
case 2213:
case 2964:
case 404:
case 1157:
case 3065:
case 1778:
case 2669:
case 665:
case 3100:
case 940:
case 2748:
case 569:
case 183:
case 3752:
case 1753:
case 3288:
case 781:
case 3604:
case 3374:
case 451:
case 1182:
case 3397:
case 2871:
case 907:
case 1841:
case 2247:
case 2118:
case 1277:
case 4014:
case 4031:
case 3909:
case 1294:
case 3787:
case 989:
case 2021:
case 1579:
case 1270:
case 2746:
case 3044:
case 1555:
case 3163:
case 3780:
case 593:
case 39:
case 2522:
case 1959:
case 2945:
case 517:
case 1391:
case 3390:
case 3767:
case 3847:
case 1975:
case 3320:
case 525:
case 622:
case 3531:
case 1239:
case 368:
case 1812:
case 3615:
case 2019:
case 437:
case 3085:
case 3268:
case 301:
case 3151:
case 885:
case 4005:
case 3358:
case 3249:
case 3540:
case 1541:
case 2008:
case 3373:
case 332:
case 481:
case 3916:
case 470:
case 3715:
case 952:
case 127:
case 1293:
case 959:
case 4013:
case 2329:
case 704:
case 1198:
case 2231:
case 3425:
case 3495:
case 1128:
case 2214:
case 1011:
case 416:
case 115:
case 4047:
case 751:
case 1681:
case 2478:
case 1754:
case 1676:
case 2453:
case 731:
case 1450:
case 2682:
case 1709:
case 2012:
case 1819:
case 1618:
case 1232:
case 500:
case 2416:
case 3978:
case 939:
case 3077:
case 1435:
case 3953:
case 2657:
case 2726:
case 2220:
case 2599:
case 3024:
case 2796:
case 2601:
case 1462:
case 3463:
case 1169:
case 3340:
case 2386:
case 2542:
case 3874:
case 1572:
case 359:
case 891:
case 1066:
case 4056:
case 352:
case 2938:
case 2153:
case 2037:
case 1217:
case 2178:
case 196:
case 495:
case 1330:
case 2626:
case 901:
case 1428:
case 2834:
case 2533:
case 787:
case 2322:
case 3520:
case 1904:
case 1591:
case 2782:
case 2161:
case 3484:
case 2273:
case 229:
case 3242:
case 423:
case 3797:
case 2081:
case 988:
case 1442:
case 3443:
case 3656:
case 3360:
case 1149:
case 1284:
case 2472:
case 1046:
case 2939:
case 2155:
case 3774:
case 890:
case 3387:
case 3123:
case 2826:
case 2611:
case 393:
case 1516:
case 2130:
case 730:
case 3941:
case 1940:
case 325:
case 1353:
case 1245:
case 2406:
case 2002:
case 626:
case 1809:
case 2348:
case 1089:
case 947:
case 3170:
case 2141:
case 539:
case 2882:
case 532:
case 1186:
case 1931:
case 3235:
case 2491:
case 777:
case 1818:
case 2598:
case 1207:
case 2857:
case 2528:
case 2711:
case 444:
case 3955:
case 2734:
case 3979:
case 3036:
case 3304:
case 3674:
case 3559:
case 2054:
case 1168:
case 3627:
case 15:
case 2923:
case 2993:
case 1251:
case 461:
case 1802:
case 3991:
case 2252:
case 2788:
case 3605:
case 3375:
case 2009:
case 1990:
case 13:
case 3359:
case 2106:
case 3248:
case 6:
case 2398:
case 300:
case 408:
case 1295:
case 803:
case 235:
case 1712:
case 1096:
case 1422:
case 3423:
case 347:
case 3747:
case 1129:
case 613:
case 2766:
case 2932:
case 2260:
case 2455:
case 552:
case 655:
case 2172:
case 936:
case 3880:
case 1142:
case 1001:
case 3552:
case 243:
case 2350:
case 442:
case 4080:
case 192:
case 3972:
case 1973:
case 2943:
case 1316:
case 414:
case 4067:
case 3132:
case 2917:
case 2018:
case 3815:
case 1612:
case 1238:
case 706:
case 534:
case 865:
case 4003:
case 993:
case 3560:
case 1486:
case 471:
case 2362:
case 3705:
case 3083:
case 917:
case 3470:
case 3567:
case 829:
case 1318:
case 3494:
case 2215:
case 1956:
case 507:
case 3144:
case 761:
case 3580:
case 1755:
case 3289:
case 2668:
case 582:
case 2869:
case 2382:
case 2546:
case 589:
case 3063:
case 3185:
case 3640:
case 311:
case 4060:
case 1050:
case 969:
case 2016:
case 540:
case 3007:
case 84:
case 358:
case 291:
case 2396:
case 2267:
case 2326:
case 3887:
case 3515:
case 2985:
case 3084:
case 2589:
case 2280:
case 1861:
case 3740:
case 742:
case 3860:
case 3246:
case 2848:
case 2649:
case 1309:
case 72:
case 1878:
case 3045:
case 1554:
case 20:
case 1655:
case 1853:
case 2203:
case 364:
case 1927:
case 1028:
case 2622:
case 1111:
case 406:
case 105:
case 3110:
case 941:
case 2419:
case 3257:
case 3620:
case 3690:
case 3201:
case 1509:
case 964:
case 3485:
case 372:
case 4059:
case 1069:
case 379:
case 2389:
case 2862:
case 1166:
case 3758:
case 3282:
case 1283:
case 3444:
case 576:
case 584:
case 2526:
case 60:
case 3177:
case 3315:
case 3124:
case 3038:
case 2733:
case 477:
case 566:
case 2828:
case 2629:
case 2898:
case 2557:
case 3095:
case 2994:
case 3658:
case 3859:
case 2053:
case 2137:
case 2501:
case 3875:
case 1672:
case 369:
case 2977:
case 1302:
case 719:
case 3380:
case 2061:
case 712:
case 1264:
case 1376:
case 2582:
case 2346:
case 1606:
case 1518:
case 1721:
case 3367:
case 3720:
case 3226:
case 3296:
case 3276:
case 906:
case 2861:
case 2741:
case 3405:
case 1108:
case 3281:
case 518:
case 191:
case 2630:
case 1267:
case 1396:
case 793:
case 205:
case 438:
case 3536:
case 3739:
case 2028:
case 2927:
case 330:
case 2098:
case 3895:
case 1692:
case 367:
case 2134:
case 3693:
case 1622:
case 4038:
case 1437:
case 479:
case 3059:
case 2554:
case 273:
case 1649:
case 2679:
case 1546:
case 3127:
case 620:
case 1869:
case 2779:
case 3934:
case 2576:
case 3911:
case 462:
case 2581:
case 1910:
case 3174:
case 2466:
case 2956:
case 1215:
case 3447:
case 736:
case 1722:
case 68:
case 4095:
case 2318:
case 3639:
case 3838:
case 1412:
case 3413:
case 2236:
case 2730:
case 1357:
case 2502:
case 3254:
case 551:
case 1671:
case 2048:
case 2672:
case 2947:
case 3456:
case 1642:
case 3643:
case 3845:
case 28:
case 1501:
case 1053:
case 1898:
case 2434:
case 663:
case 700:
case 486:
case 185:
case 3732:
case 1733:
case 2411:
case 756:
case 3988:
case 2518:
case 3617:
case 2913:
case 1061:
case 1408:
case 411:
case 3105:
case 930:
case 2188:
case 2354:
case 1850:
case 2200:
case 3336:
case 853:
case 3807:
case 350:
case 1112:
case 3632:
case 1526:
case 788:
case 3147:
case 1596:
case 1729:
case 673:
case 3218:
case 587:
case 2283:
case 3474:
case 2166:
case 827:
case 502:
case 605:
case 2069:
case 3863:
case 1862:
case 1389:
case 3497:
case 2619:
case 3338:
case 400:
case 308:
case 1491:
case 1421:
case 2186:
case 2263:
case 2931:
case 2914:
case 1141:
case 2089:
case 3685:
case 2171:
case 1993:
case 1801:
case 25:
case 1923:
case 711:
case 113:
case 1711:
case 1857:
case 447:
case 1896:
case 1826:
case 314:
case 1535:
case 3968:
case 2122:
case 2499:
case 2192:
case 4000:
case 595:
case 692:
case 3744:
case 3864:
case 3458:
case 1076:
case 1155:
case 2442:
case 2361:
case 2284:
case 3080:
case 1179:
case 32:
case 3003:
case 2608:
case 1259:
case 2809:
case 1550:
case 1406:
case 371:
case 2245:
case 4083:
case 1275:
case 3325:
case 3395:
case 380:
case 2940:
case 1130:
case 3986:
case 488:
case 883:
case 3507:
case 2958:
case 3694:
case 2133:
case 3307:
case 299:
case 2973:
case 92:
case 3942:
case 1350:
case 1666:
case 741:
case 3351:
case 2854:
case 1204:
case 3929:
case 2553:
case 2001:
case 980:
case 2468:
case 3363:
case 779:
case 2471:
case 1362:
case 914:
case 1441:
case 2238:
case 1191:
case 3190:
case 949:
case 1018:
case 1917:
case 1335:
case 126:
case 86:
case 2225:
case 1430:
case 436:
case 135:
case 821:
case 1398:
case 3278:
case 581:
case 1788:
case 2990:
case 2920:
case 908:
case 2881:
case 312:
case 1172:
case 2142:
case 2449:
case 2492:
case 2199:
case 3538:
case 3777:
case 2026:
case 3794:
case 961:
case 2096:
case 3724:
case 4036:
case 1287:
case 1329:
case 1399:
case 633:
case 3950:
case 124:
case 1461:
case 1907:
case 1342:
case 3255:
case 1586:
case 3460:
case 1571:
case 561:
case 3279:
case 3570:
case 3317:
case 2837:
case 1568:
case 3935:
case 1478:
case 2681:
case 459:
case 3175:
case 1214:
case 215:
case 3636:
case 346:
case 2391:
case 3523:
case 1522:
case 3593:
case 357:
case 2959:
case 696:
case 2135:
case 3824:
case 549:
case 2162:
case 542:
case 2555:
case 2469:
case 645:
case 937:
case 3998:
case 3097:
case 3928:
case 2270:
case 2776:
case 3241:
case 2579:
case 1549:
case 1746:
case 2150:
case 3404:
case 820:
case 434:
case 1019:
case 580:
case 1116:
case 2498:
case 710:
case 2428:
case 49:
case 245:
case 2330:
case 1757:
case 1701:
case 1178:
case 3206:
case 296:
case 3565:
case 3459:
case 1938:
case 1153:
case 14:
case 4085:
case 129:
case 3272:
case 2243:
case 3783:
case 1349:
case 946:
case 3160:
case 3005:
case 2379:
case 2904:
case 2718:
case 2521:
case 995:
case 1322:
case 1392:
case 776:
case 1416:
case 370:
case 2232:
case 2618:
case 478:
case 1682:
case 2709:
case 1368:
case 3885:
case 2088:
case 2987:
case 439:
case 381:
case 805:
case 233:
case 2066:
case 3844:
case 3764:
case 2572:
case 2341:
case 3370:
case 2462:
case 1371:
case 2952:
case 3291:
case 2435:
case 653:
case 1796:
case 1290:
case 1529:
case 1726:
case 1599:
case 1220:
case 1657:
case 4010:
case 3047:
case 1227:
case 1366:
case 1650:
case 2508:
case 3784:
case 3040:
case 2071:
case 2244:
case 1274:
case 1041:
case 79:
case 1418:
case 410:
case 3324:
case 902:
case 2821:
case 567:
case 3510:
case 1798:
case 1728:
case 530:
case 1534:
case 83:
case 1833:
case 1662:
case 3663:
case 27:
case 103:
case 4043:
case 2285:
case 26:
case 4065:
case 2146:
case 732:
case 1079:
case 3645:
case 2872:
case 2496:
case 466:
case 1735:
case 2022:
case 1899:
case 1698:
case 3167:
case 1829:
case 3707:
case 2716:
case 931:
case 3031:
case 1409:
case 298:
case 892:
case 351:
case 899:
case 2806:
case 3684:
case 2753:
case 331:
case 482:
case 3926:
case 1454:
case 2537:
case 1748:
case 3385:
case 1868:
case 1669:
case 4093:
case 2319:
case 1213:
case 951:
case 3020:
case 2294:
case 348:
case 1021:
case 1091:
case 3415:
case 2277:
case 1118:
case 698:
case 440:
case 1871:
case 190:
case 2182:
case 2841:
case 3344:
case 1006:
case 3237:
case 3310:
case 2830:
case 2512:
case 1334:
case 3625:
case 1822:
case 1900:
case 3594:
case 2099:
case 2126:
case 2678:
case 2042:
case 1481:
case 2879:
case 1566:
case 918:
case 3480:
case 1072:
case 309:
case 1648:
case 1769:
case 1849:
case 2653:
case 1476:
case 3957:
case 3058:
case 2949:
case 1955:
case 2216:
case 2992:
case 1756:
case 1697:
case 394:
case 1559:
case 1674:
case 2545:
case 644:
case 1575:
case 2644:
case 1304:
case 3931:
case 3263:
case 1930:
case 1262:
case 2883:
case 2140:
case 887:
case 3914:
case 1170:
case 3089:
case 2584:
case 728:
case 2015:
case 527:
case 802:
case 426:
case 2971:
case 3940:
case 2325:
case 2114:
case 1941:
case 1298:
case 2131:
case 3516:
case 3809:
case 999:
case 3378:
case 70:
case 1417:
case 2458:
case 2864:
case 2744:
case 242:
case 2080:
case 1656:
case 443:
case 1443:
case 193:
case 791:
case 3499:
case 3122:
case 1387:
case 3192:
case 1193:
case 214:
case 2067:
case 2120:
case 2190:
case 3238:
case 1815:
case 1587:
case 1470:
case 3471:
case 2363:
case 1705:
case 804:
case 2440:
case 3486:
case 680:
case 4002:
case 2351:
case 614:
case 1552:
case 2999:
case 2929:
case 596:
case 1000:
case 2525:
case 642:
case 3057:
case 2694:
case 2942:
case 851:
case 399:
case 244:
case 2777:
case 147:
case 3492:
case 3129:
case 1423:
case 2794:
case 1880:
case 818:
case 2173:
case 3876:
case 3637:
case 2261:
case 1064:
case 2933:
case 1359:
case 2278:
case 533:
case 33:
case 1504:
case 3802:
case 4:
case 2345:
case 1921:
case 1713:
case 2431:
case 3225:
case 2414:
case 95:
case 994:
case 661:
case 57:
case 3655:
case 3853:
case 1852:
case 2059:
case 1045:
case 521:
case 2536:
case 3974:
case 881:
case 3111:
case 267:
case 3927:
case 164:
case 3098:
case 230:
case 3997:
case 1631:
case 158:
case 3630:
case 2276:
case 1919:
case 1084:
case 713:
case 2254:
case 3050:
case 1503:
case 111:
case 4061:
case 920:
case 1051:
case 797:
case 3488:
case 1640:
case 2300:
case 1185:
case 598:
case 2670:
case 3641:
case 1731:
case 3236:
case 1007:
case 277:
case 2793:
case 485:
case 174:
case 1477:
case 1424:
case 2639:
case 3318:
case 3062:
case 4053:
case 1063:
case 3779:
case 3576:
case 2934:
case 2127:
case 2383:
case 4078:
case 2174:
case 363:
case 1144:
case 2911:
case 3581:
case 2583:
case 3376:
case 2060:
case 846:
case 3381:
case 3264:
case 2105:
case 963:
case 1296:
case 1720:
case 3791:
case 3721:
case 3518:
case 1025:
case 428:
case 3411:
case 735:
case 2966:
case 2845:
case 3302:
case 1303:
case 1875:
case 169:
case 3048:
case 2052:
case 583:
case 2500:
case 3166:
case 630:
case 1282:
case 40:
case 2665:
case 2863:
case 2564:
case 1773:
case 172:
case 1038:
case 726:
case 2632:
case 2218:
case 1177:
case 2807:
case 1620:
case 3905:
case 3354:
case 141:
case 3509:
case 2717:
case 3401:
case 3967:
case 321:
case 4072:
case 1556:
case 687:
case 1981:
case 2946:
case 2832:
case 3312:
case 1976:
case 1039:
case 2324:
case 2377:
case 812:
case 1347:
case 2784:
case 3086:
case 1483:
case 3482:
case 1070:
case 3189:
case 844:
case 2040:
case 4006:
case 251:
case 2103:
case 2684:
case 2751:
case 3337:
case 2585:
case 648:
case 490:
case 3210:
case 3716:
case 3519:
case 2707:
case 4021:
case 1234:
case 3426:
case 724:
case 204:
case 3022:
case 1023:
case 3092:
case 1093:
case 1659:
case 1858:
case 1597:
case 3146:
case 1464:
case 3049:
case 2544:
case 2843:
case 2645:
case 1305:
case 3841:
case 3761:
case 814:
case 1760:
case 3182:
case 1183:
case 1327:
case 1505:
case 2344:
case 4030:
case 1909:
case 3294:
case 2090:
case 651:
case 2415:
case 3277:
case 3033:
case 1032:
case 520:
case 3319:
case 2638:
case 82:
case 166:
case 465:
case 2795:
case 2725:
case 2996:
case 604:
case 1752:
case 1288:
case 58:
case 231:
case 1100:
case 2385:
case 4055:
case 3778:
case 3101:
case 202:
case 808:
case 2480:
case 2073:
case 209:
case 3879:
case 403:
case 1652:
case 3446:
case 722:
case 3029:
case 475:
case 184:
case 176:
case 2901:
case 2893:
case 2625:
case 3196:
case 861:
case 3830:
case 2310:
case 1814:
case 1687:
case 1513:
case 110:
case 921:
case 74:
case 618:
case 4041:
case 1660:
case 315:
case 1010:
case 1667:
case 1425:
case 3034:
case 2962:
case 2159:
case 3837:
case 850:
case 3681:
case 3754:
case 353:
case 1145:
case 2255:
case 1916:
case 1603:
case 2343:
case 132:
case 1373:
case 3372:
case 1249:
case 178:
case 681:
case 3293:
case 327:
case 1292:
case 2950:
case 1715:
case 1514:
case 1813:
case 1615:
case 2332:
case 168:
case 1531:
case 2404:
case 637:
case 945:
case 1268:
case 660:
case 2365:
case 3702:
case 1703:
case 223:
case 1085:
case 3781:
case 2097:
case 3162:
case 1163:
case 3469:
case 3776:
case 3270:
case 2074:
case 2241:
case 1767:
case 1320:
case 1390:
case 246:
case 2636:
case 2894:
case 3135:
case 3959:
case 1438:
case 19:
case 257:
case 2593:
case 623:
case 3718:
case 3904:
case 1229:
case 1590:
case 4019:
case 260:
case 3243:
case 1484:
case 2272:
case 3379:
case 3808:
case 2160:
case 2783:
case 1856:
case 2700:
case 3148:
case 657:
case 2664:
case 2565:
case 2152:
case 2532:
case 592:
case 695:
case 3498:
case 1125:
case 1195:
case 1331:
case 3330:
case 345:
case 1094:
case 1953:
case 2221:
case 216:
case 2047:
case 1077:
case 3066:
case 1573:
case 159:
case 927:
case 2543:
case 2600:
case 1340:
case 3462:
case 790:
case 41:
case 2370:
case 2517:
case 830:
case 3987:
case 1451:
case 4008:
case 2104:
case 1961:
case 1407:
case 424:
case 953:
case 3960:
case 3618:
case 2703:
case 1365:
case 721:
case 634:
case 3116:
case 268:
case 2531:
case 94:
case 3984:
case 3333:
case 2813:
case 1824:
case 2438:
case 3592:
case 1593:
case 929:
case 922:
case 3522:
case 29:
case 1523:
case 2847:
case 1636:
case 1877:
case 3945:
case 3240:
case 3866:
case 195:
case 3549:
case 2044:
case 496:
case 1928:
case 1998:
case 2286:
case 4066:
case 798:
case 1159:
case 1452:
case 3453:
case 2425:
case 555:
case 659:
case 2495:
case 1962:
case 1230:
case 3963:
case 2222:
case 2292:
case 3399:
case 3329:
case 2184:
case 3571:
case 2358:
case 2540:
case 433:
case 2603:
case 1255:
case 2805:
case 3008:
case 3461:
case 3907:
case 2558:
case 2897:
case 3371:
case 1600:
case 2827:
case 1370:
case 3925:
case 3995:
case 3601:
case 1844:
case 453:
case 924:
case 1948:
case 415:
case 2978:
case 3220:
case 3599:
case 2094:
case 3657:
case 3290:
case 4034:
case 2138:
case 2953:
case 632:
case 535:
case 91:
case 2407:
case 3416:
case 170:
case 2451:
case 3682:
case 1885:
case 3161:
case 874:
case 3782:
case 1160:
case 3258:
case 668:
case 322:
case 2484:
case 137:
case 601:
case 160:
case 234:
case 2590:
case 2520:
case 2299:
case 3626:
case 2331:
case 1810:
case 3834:
case 1664:
case 34:
case 1152:
case 2445:
case 1206:
case 2856:
case 1700:
case 3701:
case 3030:
case 1031:
case 1014:
case 240:
case 1817:
case 1751:
case 1684:
case 1585:
case 3750:
case 3256:
case 151:
case 1544:
case 2873:
case 1645:
case 2574:
case 3842:
case 1763:
case 1843:
case 483:
case 1208:
case 666:
case 3055:
case 3698:
case 2954:
case 990:
case 2093:
case 2023:
case 3735:
case 727:
case 365:
case 4029:
case 3635:
case 3833:
case 2039:
case 3511:
case 3728:
case 3798:
case 676:
case 2759:
case 50:
case 303:
case 2775:
case 1745:
case 2400:
case 847:
case 3041:
case 3274:
case 3650:
case 3366:
case 118:
case 1377:
case 2347:
case 2820:
case 591:
case 1115:
case 3418:
case 2547:
case 1738:
case 1577:
case 276:
case 284:
case 1625:
case 1823:
case 1901:
case 1695:
case 1467:
case 1058:
case 4068:
case 3476:
case 2164:
case 1073:
case 109:
case 3769:
case 3849:
case 1480:
case 47:
case 2043:
case 3481:
case 3109:
case 2660:
case 3402:
case 3588:
case 2704:
case 2814:
case 3334:
case 2513:
case 3983:
case 3311:
case 745:
case 1415:
case 3091:
case 3021:
case 1020:
case 148:
case 498:
case 1344:
case 1870:
case 2327:
case 2266:
case 2840:
case 2760:
case 3868:
case 2100:
case 3748:
case 3669:
case 3454:
case 4049:
case 131:
case 607:
case 2752:
case 266:
case 2436:
case 3213:
case 1212:
case 1795:
case 3964:
case 585:
case 682:
case 4022:
case 4092:
case 2007:
case 2908:
case 2714:
case 2731:
case 3357:
case 3412:
case 75:
case 2640:
case 1300:
case 3301:
case 794:
case 1670:
case 2804:
case 2051:
case 985:
case 2503:
case 211:
case 1174:
case 2580:
case 3910:
case 4048:
case 1911:
case 2144:
case 1934:
case 48:
case 3749:
case 3382:
case 3869:
case 3668:
case 3546:
case 1639:
case 1838:
case 2424:
case 2494:
case 2567:
case 3722:
case 1723:
case 1447:
case 3792:
case 177:
case 1793:
case 274:
case 3622:
case 1825:
case 264:
case 130:
case 1739:
case 2110:
case 1536:
case 679:
case 672:
case 2045:
case 3649:
case 1156:
case 3768:
case 3848:
case 638:
case 503:
case 1202:
case 1059:
case 1281:
case 3280:
case 2246:
case 3108:
case 1276:
case 3396:
case 3267:
case 258:
case 391:
case 2515:
case 2614:
case 2177:
case 1147:
case 3596:
case 405:
case 106:
case 3526:
case 1632:
case 2315:
case 2194:
case 3835:
case 2124:
case 3862:
case 3742:
case 3389:
case 1743:
case 1863:
case 1665:
case 1427:
case 2773:
case 2282:
case 1474:
case 1004:
case 1717:
case 1851:
case 2201:
case 2485:
case 658:
case 1113:
case 3419:
case 90:
case 1336:
case 799:
case 2720:
case 611:
case 1988:
case 3408:
case 3061:
case 89:
case 928:
case 1583:
case 2912:
case 3501:
case 3137:
case 3053:
case 73:
case 686:
case 674:
case 2859:
case 1209:
case 3977:
case 1765:
case 1456:
case 463:
case 269:
case 2875:
case 3733:
case 1966:
case 1732:
case 2095:
case 3828:
case 3557:
case 4082:
case 1785:
case 3348:
case 3259:
case 1551:
case 12:
case 866:
case 2228:
case 1131:
case 705:
case 943:
case 3130:
case 1986:
case 225:
case 180:
case 1971:
case 3970:
case 2193:
case 2123:
case 1968:
case 4057:
case 1067:
case 293:
case 499:
case 492:
case 3179:
case 149:
case 2443:
case 2797:
case 2727:
case 2656:
case 2360:
case 3939:
case 3562:
case 1563:
case 926:
case 1458:
case 313:
case 647:
case 1922:
case 3923:
case 1992:
case 810:
case 3801:
case 3993:
case 656:
case 3054:
case 2559:
case 2465:
case 2697:
case 2627:
case 2756:
case 1800:
case 2432:
case 2955:
case 3857:
case 3711:
case 355:
case 1949:
case 2235:
case 236:
case 1490:
case 1015:
case 524:
case 1140:
case 1883:
case 1584:
case 876:
case 3141:
case 763:
case 2930:
case 2262:
case 3:
case 1384:
case 3260:
case 3766:
case 3569:
case 494:
case 3455:
case 2880:
case 1173:
case 119:
case 3479:
case 1724:
case 1794:
case 256:
case 2423:
case 2867:
case 247:
case 3398:
case 3328:
case 1414:
case 3430:
case 2504:
case 2921:
case 3788:
case 2991:
case 3252:
case 2803:
case 636:
case 2359:
case 522:
case 2269:
case 2560:
case 2083:
case 3441:
case 807:
case 2470:
case 1440:
case 3688:
case 2705:
case 3889:
case 1363:
case 2613:
case 3917:
case 2587:
case 1120:
case 889:
case 288:
case 3121:
case 2647:
case 2439:
case 2000:
case 4046:
case 1929:
case 3204:
case 3350:
case 3666:
case 54:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1762642801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,];
var gg_b = "1762642801/";

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
