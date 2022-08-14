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
case 1955:
case 3766:
case 3337:
case 1987:
case 2074:
case 2929:
case 1741:
case 2382:
case 3095:
case 1485:
case 3006:
case 2815:
case 583:
case 125:
case 1714:
case 3040:
case 3223:
case 1990:
case 1475:
case 133:
case 2627:
case 2226:
case 3041:
case 2786:
case 1020:
case 2276:
case 3882:
case 2690:
case 2985:
case 1583:
case 1916:
case 2065:
case 1623:
case 262:
case 2843:
case 271:
case 1762:
case 3799:
case 2057:
case 1066:
case 1575:
case 2791:
case 3959:
case 1743:
case 3578:
case 1534:
case 2361:
case 62:
case 3304:
case 1541:
case 3419:
case 1296:
case 226:
case 2164:
case 2093:
case 1341:
case 3123:
case 3706:
case 265:
case 1943:
case 36:
case 1748:
case 2328:
case 2150:
case 2848:
case 1510:
case 1401:
case 3539:
case 337:
case 545:
case 1069:
case 513:
case 826:
case 123:
case 650:
case 3861:
case 432:
case 138:
case 1241:
case 2925:
case 3334:
case 2801:
case 2908:
case 1419:
case 1889:
case 1909:
case 2553:
case 2979:
case 3914:
case 1409:
case 653:
case 1364:
case 1705:
case 418:
case 2622:
case 3904:
case 3967:
case 3032:
case 1693:
case 3446:
case 484:
case 351:
case 1267:
case 305:
case 526:
case 2563:
case 1599:
case 3537:
case 4077:
case 558:
case 101:
case 2907:
case 259:
case 518:
case 1684:
case 2118:
case 3770:
case 1257:
case 1500:
case 3975:
case 3104:
case 806:
case 3438:
case 1569:
case 340:
case 2864:
case 1566:
case 2214:
case 3463:
case 2187:
case 86:
case 2197:
case 3812:
case 1427:
case 673:
case 1776:
case 454:
case 292:
case 2373:
case 1126:
case 589:
case 136:
case 1929:
case 1935:
case 1895:
case 1121:
case 2766:
case 1820:
case 3738:
case 2751:
case 2205:
case 3891:
case 1180:
case 2403:
case 3930:
case 113:
case 2517:
case 2221:
case 3110:
case 490:
case 2465:
case 2526:
case 2576:
case 3642:
case 2565:
case 3311:
case 161:
case 2673:
case 2833:
case 3167:
case 3143:
case 2693:
case 2500:
case 3530:
case 1368:
case 898:
case 1472:
case 275:
case 186:
case 3116:
case 1089:
case 148:
case 286:
case 1509:
case 762:
case 2111:
case 2620:
case 1199:
case 1087:
case 370:
case 1834:
case 1959:
case 2951:
case 211:
case 855:
case 1650:
case 1761:
case 800:
case 273:
case 808:
case 708:
case 2749:
case 1263:
case 1489:
case 651:
case 1847:
case 842:
case 2264:
case 401:
case 1435:
case 2955:
case 387:
case 1055:
case 2097:
case 3892:
case 630:
case 1281:
case 1338:
case 1936:
case 2706:
case 2420:
case 1836:
case 741:
case 355:
case 3001:
case 2210:
case 3872:
case 1158:
case 2002:
case 3871:
case 1422:
case 3054:
case 414:
case 2836:
case 2169:
case 2422:
case 543:
case 1336:
case 3571:
case 3702:
case 810:
case 1447:
case 352:
case 3016:
case 3774:
case 2360:
case 2604:
case 1234:
case 2061:
case 913:
case 1124:
case 496:
case 4093:
case 3109:
case 2043:
case 2626:
case 1233:
case 45:
case 2284:
case 2427:
case 1869:
case 2075:
case 405:
case 3608:
case 2493:
case 422:
case 615:
case 695:
case 3266:
case 1961:
case 192:
case 3637:
case 3481:
case 1068:
case 1540:
case 1698:
case 1276:
case 1395:
case 2498:
case 3453:
case 2762:
case 3801:
case 1246:
case 637:
case 209:
case 410:
case 1547:
case 3878:
case 2869:
case 1574:
case 375:
case 1285:
case 1175:
case 3466:
case 887:
case 3963:
case 1479:
case 15:
case 2510:
case 2228:
case 2810:
case 3205:
case 3782:
case 655:
case 3686:
case 918:
case 1108:
case 1460:
case 159:
case 2527:
case 1891:
case 3499:
case 2129:
case 516:
case 893:
case 1205:
case 2380:
case 1826:
case 150:
case 48:
case 4063:
case 1481:
case 1551:
case 3359:
case 1170:
case 1393:
case 2211:
case 2117:
case 3060:
case 2681:
case 2543:
case 3197:
case 3598:
case 3228:
case 3118:
case 1876:
case 3488:
case 1260:
case 301:
case 78:
case 1880:
case 1193:
case 2641:
case 1591:
case 246:
case 878:
case 3246:
case 1648:
case 492:
case 1362:
case 3722:
case 1453:
case 1598:
case 3727:
case 477:
case 1624:
case 2063:
case 2135:
case 2523:
case 672:
case 3573:
case 3473:
case 1042:
case 2437:
case 181:
case 3162:
case 768:
case 3866:
case 3824:
case 1097:
case 1187:
case 3241:
case 3443:
case 2535:
case 2928:
case 626:
case 2213:
case 3192:
case 908:
case 170:
case 3049:
case 3786:
case 330:
case 1417:
case 3519:
case 2460:
case 2450:
case 13:
case 561:
case 1542:
case 846:
case 1408:
case 263:
case 2247:
case 2963:
case 1149:
case 137:
case 1111:
case 3748:
case 2331:
case 4019:
case 4042:
case 1752:
case 2785:
case 2218:
case 3508:
case 1991:
case 2076:
case 575:
case 1946:
case 1466:
case 3470:
case 2212:
case 1673:
case 156:
case 2723:
case 2442:
case 512:
case 2776:
case 3518:
case 499:
case 3875:
case 4072:
case 404:
case 2151:
case 1801:
case 3955:
case 992:
case 2457:
case 795:
case 1358:
case 3753:
case 2581:
case 1839:
case 884:
case 3776:
case 1805:
case 3760:
case 2004:
case 1496:
case 2942:
case 2912:
case 400:
case 2695:
case 1404:
case 3552:
case 2754:
case 1819:
case 501:
case 2733:
case 3926:
case 437:
case 363:
case 754:
case 1841:
case 2820:
case 3482:
case 22:
case 2670:
case 3426:
case 2003:
case 4081:
case 1050:
case 831:
case 3389:
case 1998:
case 3985:
case 1796:
case 530:
case 2943:
case 1117:
case 547:
case 2468:
case 584:
case 1433:
case 2220:
case 1271:
case 2537:
case 3652:
case 448:
case 540:
case 2292:
case 1564:
case 2289:
case 3723:
case 788:
case 2377:
case 189:
case 3281:
case 1971:
case 2644:
case 3332:
case 1025:
case 3898:
case 2600:
case 3208:
case 1649:
case 3779:
case 1373:
case 2405:
case 124:
case 2711:
case 2814:
case 2595:
case 2958:
case 2499:
case 3313:
case 2665:
case 999:
case 3202:
case 574:
case 2924:
case 1906:
case 2973:
case 3715:
case 467:
case 291:
case 4050:
case 3719:
case 3860:
case 3566:
case 1886:
case 3666:
case 3063:
case 164:
case 1155:
case 3805:
case 2108:
case 1372:
case 509:
case 2978:
case 2830:
case 743:
case 682:
case 1732:
case 3529:
case 3994:
case 1900:
case 1861:
case 3249:
case 1079:
case 3710:
case 3528:
case 3424:
case 3307:
case 115:
case 3342:
case 2022:
case 3136:
case 110:
case 334:
case 803:
case 2752:
case 3364:
case 32:
case 1104:
case 1114:
case 1081:
case 3751:
case 2222:
case 851:
case 3317:
case 2854:
case 1526:
case 1896:
case 446:
case 1911:
case 2475:
case 2837:
case 2280:
case 250:
case 1084:
case 2127:
case 3585:
case 2841:
case 3354:
case 1029:
case 4027:
case 1016:
case 3179:
case 1933:
case 835:
case 1238:
case 74:
case 3358:
case 3605:
case 4040:
case 3998:
case 2293:
case 3327:
case 2024:
case 1773:
case 3969:
case 3905:
case 3196:
case 536:
case 4006:
case 3074:
case 2407:
case 1043:
case 2479:
case 2934:
case 1012:
case 2399:
case 1132:
case 1255:
case 270:
case 3025:
case 1034:
case 1970:
case 3090:
case 2935:
case 1051:
case 1634:
case 2718:
case 80:
case 880:
case 702:
case 2467:
case 1780:
case 67:
case 453:
case 1272:
case 2098:
case 1956:
case 1166:
case 3876:
case 1865:
case 196:
case 1536:
case 3152:
case 3377:
case 2524:
case 2643:
case 2489:
case 173:
case 1680:
case 2890:
case 207:
case 3105:
case 1573:
case 1799:
case 397:
case 21:
case 2491:
case 3611:
case 3480:
case 179:
case 3656:
case 3042:
case 395:
case 515:
case 396:
case 4086:
case 2899:
case 2735:
case 2853:
case 1958:
case 1493:
case 3707:
case 466:
case 746:
case 3754:
case 1722:
case 1213:
case 2547:
case 2944:
case 2780:
case 2585:
case 3217:
case 3479:
case 1706:
case 1587:
case 2186:
case 1589:
case 2812:
case 3716:
case 2741:
case 3461:
case 2784:
case 634:
case 2230:
case 1289:
case 2946:
case 3857:
case 1768:
case 2539:
case 664:
case 49:
case 242:
case 1563:
case 1824:
case 2272:
case 3061:
case 2160:
case 2559:
case 2199:
case 3986:
case 1527:
case 1047:
case 1169:
case 864:
case 3216:
case 1999:
case 2800:
case 1656:
case 257:
case 792:
case 1:
case 1230:
case 1927:
case 549:
case 2577:
case 1938:
case 752:
case 2323:
case 1363:
case 3854:
case 2556:
case 1113:
case 1080:
case 1719:
case 967:
case 403:
case 3902:
case 1286:
case 2387:
case 1202:
case 3267:
case 914:
case 772:
case 3619:
case 1641:
case 1922:
case 4066:
case 2309:
case 722:
case 2256:
case 142:
case 886:
case 1556:
case 1156:
case 333:
case 2714:
case 2363:
case 3210:
case 1600:
case 1616:
case 2782:
case 500:
case 3730:
case 3841:
case 3226:
case 2513:
case 3569:
case 304:
case 1984:
case 3206:
case 1788:
case 2722:
case 2383:
case 2260:
case 56:
case 517:
case 3943:
case 247:
case 758:
case 1386:
case 928:
case 3797:
case 529:
case 1937:
case 391:
case 3616:
case 3900:
case 641:
case 3563:
case 2395:
case 3683:
case 2233:
case 362:
case 3464:
case 1499:
case 1330:
case 2206:
case 1388:
case 27:
case 1729:
case 2299:
case 570:
case 338:
case 946:
case 1621:
case 726:
case 486:
case 1138:
case 3846:
case 2369:
case 1454:
case 4041:
case 2032:
case 364:
case 3853:
case 1512:
case 2083:
case 253:
case 428:
case 3112:
case 2893:
case 2252:
case 3285:
case 1976:
case 299:
case 2034:
case 2310:
case 361:
case 1165:
case 751:
case 4009:
case 2608:
case 3743:
case 3659:
case 2675:
case 348:
case 3680:
case 2496:
case 2081:
case 644:
case 4069:
case 2040:
case 3520:
case 1755:
case 2799:
case 2490:
case 2788:
case 1105:
case 3615:
case 3962:
case 3209:
case 238:
case 3576:
case 1032:
case 3018:
case 2603:
case 1516:
case 2789:
case 1183:
case 3840:
case 1092:
case 1428:
case 1023:
case 2863:
case 2317:
case 1224:
case 356:
case 1406:
case 1557:
case 699:
case 3731:
case 1850:
case 3588:
case 1770:
case 3775:
case 1136:
case 2192:
case 753:
case 1753:
case 3322:
case 1261:
case 2015:
case 367:
case 1275:
case 3868:
case 3303:
case 1983:
case 3629:
case 3106:
case 354:
case 3198:
case 3141:
case 2494:
case 2390:
case 3849:
case 3705:
case 2968:
case 2091:
case 2891:
case 1787:
case 3728:
case 3047:
case 3119:
case 1302:
case 2453:
case 2064:
case 3712:
case 1134:
case 3524:
case 66:
case 1251:
case 1558:
case 989:
case 3609:
case 1474:
case 3584:
case 3820:
case 2679:
case 4011:
case 524:
case 3352:
case 51:
case 3750:
case 1794:
case 4064:
case 3325:
case 684:
case 285:
case 1658:
case 50:
case 739:
case 1244:
case 969:
case 3360:
case 3562:
case 2047:
case 3759:
case 1120:
case 3455:
case 3262:
case 1008:
case 3953:
case 1240:
case 3004:
case 3396:
case 2965:
case 2337:
case 3661:
case 917:
case 19:
case 1928:
case 2503:
case 1376:
case 1209:
case 600:
case 1216:
case 317:
case 3839:
case 1122:
case 2454:
case 2538:
case 3808:
case 1225:
case 3497:
case 2438:
case 429:
case 552:
case 728:
case 231:
case 2593:
case 3013:
case 1632:
case 1492:
case 3553:
case 2346:
case 1367:
case 1459:
case 2301:
case 1306:
case 388:
case 565:
case 2889:
case 2637:
case 3153:
case 2088:
case 774:
case 2142:
case 2066:
case 747:
case 2242:
case 1096:
case 96:
case 2877:
case 1710:
case 2692:
case 4035:
case 202:
case 1038:
case 906:
case 2070:
case 1746:
case 3889:
case 1473:
case 2179:
case 819:
case 3182:
case 2259:
case 2688:
case 927:
case 2555:
case 2461:
case 4071:
case 2020:
case 447:
case 2781:
case 2017:
case 455:
case 1231:
case 1082:
case 2333:
case 390:
case 2966:
case 796:
case 3633:
case 204:
case 3618:
case 2541:
case 1595:
case 3299:
case 2340:
case 1194:
case 2411:
case 840:
case 4047:
case 588:
case 3350:
case 876:
case 3115:
case 2767:
case 700:
case 2254:
case 606:
case 415:
case 2708:
case 1749:
case 3641:
case 1236:
case 2159:
case 710:
case 2137:
case 264:
case 2191:
case 1660:
case 981:
case 3863:
case 3606:
case 3917:
case 2772:
case 3439:
case 1635:
case 3970:
case 3657:
case 2194:
case 149:
case 2997:
case 2087:
case 2897:
case 1884:
case 1378:
case 1652:
case 1450:
case 105:
case 1243:
case 3204:
case 611:
case 2364:
case 1525:
case 2745:
case 3950:
case 4074:
case 2452:
case 1337:
case 567:
case 3336:
case 3181:
case 2884:
case 2813:
case 3667:
case 2313:
case 1644:
case 322:
case 986:
case 3993:
case 2716:
case 2909:
case 3036:
case 369:
case 2232:
case 95:
case 94:
case 87:
case 1825:
case 1678:
case 11:
case 4051:
case 153:
case 3881:
case 2613:
case 2876:
case 85:
case 236:
case 252:
case 2275:
case 2736:
case 1962:
case 3935:
case 1989:
case 1625:
case 4008:
case 3495:
case 3134:
case 622:
case 2121:
case 1966:
case 2354:
case 1383:
case 4017:
case 1739:
case 1982:
case 736:
case 2444:
case 3625:
case 3949:
case 607:
case 2834:
case 3678:
case 3256:
case 2651:
case 3057:
case 1451:
case 3149:
case 640:
case 3988:
case 896:
case 885:
case 320:
case 409:
case 2821:
case 3240:
case 1808:
case 438:
case 3023:
case 3945:
case 745:
case 394:
case 2262:
case 2225:
case 3277:
case 2112:
case 2540:
case 3252:
case 1815:
case 1462:
case 3920:
case 2030:
case 951:
case 2599:
case 1131:
case 374:
case 965:
case 652:
case 2619:
case 1518:
case 1375:
case 1421:
case 3369:
case 309:
case 1237:
case 3362:
case 910:
case 778:
case 1567:
case 1026:
case 2045:
case 3517:
case 1701:
case 2189:
case 3734:
case 166:
case 451:
case 2990:
case 229:
case 118:
case 665:
case 909:
case 233:
case 1418:
case 2237:
case 780:
case 3295:
case 3796:
case 68:
case 4085:
case 764:
case 2646:
case 4062:
case 2849:
case 3929:
case 503:
case 3000:
case 3260:
case 2410:
case 828:
case 3421:
case 1242:
case 3484:
case 2170:
case 2588:
case 3982:
case 3816:
case 3859:
case 867:
case 2739:
case 937:
case 2441:
case 1380:
case 2957:
case 194:
case 599:
case 1392:
case 2253:
case 2443:
case 2402:
case 1793:
case 1480:
case 542:
case 3127:
case 2933:
case 2902:
case 1960:
case 419:
case 3142:
case 1721:
case 3193:
case 2080:
case 856:
case 1361:
case 73:
case 266:
case 281:
case 2896:
case 2110:
case 2724:
case 533:
case 3773:
case 608:
case 1735:
case 3992:
case 2656:
case 3082:
case 1503:
case 384:
case 3984:
case 1630:
case 2671:
case 1340:
case 1545:
case 900:
case 1842:
case 3768:
case 3156:
case 872:
case 475:
case 436:
case 924:
case 1711:
case 3496:
case 41:
case 489:
case 222:
case 1831:
case 1769:
case 1926:
case 2883:
case 3485:
case 2623:
case 2568:
case 3298:
case 2773:
case 3549:
case 3534:
case 2660:
case 1965:
case 1181:
case 3709:
case 1197:
case 2962:
case 2487:
case 1013:
case 185:
case 3199:
case 890:
case 224:
case 116:
case 3668:
case 1297:
case 3864:
case 3430:
case 2959:
case 687:
case 77:
case 2217:
case 862:
case 683:
case 2376:
case 3031:
case 1245:
case 2956:
case 2514:
case 2624:
case 3700:
case 2085:
case 3278:
case 3301:
case 3024:
case 1065:
case 1957:
case 3806:
case 2534:
case 2433:
case 3922:
case 3971:
case 3399:
case 507:
case 3999:
case 1901:
case 2156:
case 688:
case 1910:
case 234:
case 3415:
case 3663:
case 2288:
case 1309:
case 2847:
case 2932:
case 2162:
case 3532:
case 2759:
case 870:
case 4037:
case 2845:
case 3583:
case 365:
case 210:
case 2704:
case 3725:
case 3027:
case 3425:
case 2522:
case 2404:
case 3645:
case 169:
case 988:
case 2350:
case 188:
case 1469:
case 408:
case 450:
case 1059:
case 131:
case 2941:
case 3133:
case 1437:
case 2506:
case 1398:
case 480:
case 718:
case 560:
case 1562:
case 592:
case 2855:
case 2154:
case 3933:
case 1871:
case 1675:
case 2818:
case 3951:
case 272:
case 3272:
case 3697:
case 2336:
case 3724:
case 2133:
case 899:
case 787:
case 3406:
case 3698:
case 3976:
case 3173:
case 2358:
case 3597:
case 2887:
case 1612:
case 3225:
case 1818:
case 1033:
case 3077:
case 1344:
case 3690:
case 3800:
case 706:
case 2775:
case 825:
case 2755:
case 1118:
case 3195:
case 3676:
case 3148:
case 1733:
case 280:
case 1932:
case 3279:
case 2466:
case 3887:
case 1529:
case 199:
case 823:
case 3638:
case 232:
case 818:
case 2140:
case 1539:
case 3602:
case 2807:
case 107:
case 658:
case 2204:
case 2794:
case 1190:
case 3329:
case 2702:
case 4029:
case 627:
case 3417:
case 65:
case 3742:
case 2661:
case 2582:
case 954:
case 2324:
case 858:
case 327:
case 3829:
case 3852:
case 3174:
case 376:
case 613:
case 1037:
case 0:
case 3165:
case 443:
case 2927:
case 2921:
case 478:
case 3489:
case 2531:
case 392:
case 1060:
case 2095:
case 2685:
case 1606:
case 3076:
case 183:
case 2905:
case 1628:
case 1436:
case 494:
case 2533:
case 1554:
case 3823:
case 2880:
case 3873:
case 3009:
case 4046:
case 2449:
case 251:
case 2761:
case 976:
case 1128:
case 3050:
case 3269:
case 1852:
case 283:
case 693:
case 4073:
case 2277:
case 2512:
case 2986:
case 481:
case 46:
case 2431:
case 2391:
case 847:
case 632:
case 1438:
case 3827:
case 2672:
case 2320:
case 1691:
case 289:
case 1153:
case 1056:
case 1804:
case 3671:
case 2689:
case 3232:
case 3515:
case 2436:
case 2680:
case 3610:
case 2850:
case 2251:
case 1908:
case 1182:
case 1139:
case 1239:
case 3423:
case 3247:
case 1075:
case 1795:
case 2100:
case 3944:
case 528:
case 1950:
case 666:
case 3478:
case 604:
case 1727:
case 380:
case 1633:
case 55:
case 316:
case 2149:
case 719:
case 2115:
case 1651:
case 2463:
case 1495:
case 1229:
case 2659:
case 1832:
case 3318:
case 785:
case 2859:
case 3741:
case 2713:
case 310:
case 879:
case 1885:
case 1429:
case 2181:
case 538:
case 162:
case 1798:
case 2278:
case 2542:
case 1856:
case 2241:
case 4068:
case 2089:
case 2662:
case 282:
case 218:
case 343:
case 385:
case 1588:
case 2036:
case 2408:
case 1782:
case 1235:
case 98:
case 2349:
case 470:
case 1667:
case 3551:
case 734:
case 2429:
case 692:
case 1917:
case 3353:
case 690:
case 620:
case 952:
case 346:
case 3239:
case 897:
case 3433:
case 221:
case 3085:
case 2916:
case 2666:
case 3176:
case 3097:
case 3772:
case 3688:
case 1028:
case 3593:
case 1326:
case 614:
case 193:
case 2327:
case 3053:
case 2684:
case 1137:
case 3012:
case 2161:
case 1828:
case 2014:
case 1677:
case 849:
case 4033:
case 16:
case 2428:
case 3120:
case 2386:
case 1442:
case 4010:
case 2701:
case 3323:
case 2261:
case 2937:
case 696:
case 2485:
case 3383:
case 1319:
case 791:
case 3591:
case 920:
case 3685:
case 3177:
case 1063:
case 3020:
case 1325:
case 4032:
case 1505:
case 3514:
case 892:
case 3237:
case 2434:
case 3919:
case 546:
case 1639:
case 3560:
case 563:
case 911:
case 1934:
case 3592:
case 2509:
case 1515:
case 42:
case 514:
case 3220:
case 1742:
case 1416:
case 1952:
case 833:
case 1347:
case 3636:
case 815:
case 2529:
case 258:
case 2055:
case 2418:
case 3735:
case 3385:
case 829:
case 1135:
case 3990:
case 2819:
case 1072:
case 3843:
case 836:
case 1642:
case 1665:
case 3614:
case 1488:
case 2778:
case 1520:
case 4083:
case 3456:
case 3265:
case 799:
case 1471:
case 2182:
case 1360:
case 3500:
case 1758:
case 2597:
case 2549:
case 733:
case 1877:
case 2950:
case 3758:
case 1944:
case 4025:
case 2507:
case 621:
case 1627:
case 3462:
case 4090:
case 3708:
case 1668:
case 3416:
case 1458:
case 2698:
case 2273:
case 3015:
case 3822:
case 29:
case 228:
case 3107:
case 3936:
case 2969:
case 2616:
case 2050:
case 3908:
case 3777:
case 2829:
case 811:
case 1287:
case 980:
case 3631:
case 255:
case 2940:
case 71:
case 936:
case 939:
case 3931:
case 1790:
case 1511:
case 1188:
case 1560:
case 1394:
case 1397:
case 3087:
case 2728:
case 2356:
case 2291:
case 2729:
case 109:
case 865:
case 923:
case 1851:
case 3815:
case 3081:
case 3448:
case 861:
case 216:
case 2594:
case 4075:
case 328:
case 912:
case 1609:
case 2355:
case 3952:
case 3546:
case 3913:
case 2638:
case 3263:
case 1030:
case 3394:
case 1036:
case 1940:
case 882:
case 2746:
case 2591:
case 568:
case 3048:
case 468:
case 677:
case 2303:
case 869:
case 303:
case 2658:
case 2239:
case 180:
case 1000:
case 3627:
case 1813:
case 3899:
case 1201:
case 3903:
case 2250:
case 3418:
case 1163:
case 4:
case 1487:
case 1342:
case 2548:
case 4092:
case 3648:
case 279:
case 2421:
case 2545:
case 3747:
case 3230:
case 3361:
case 4038:
case 3437:
case 1611:
case 3699:
case 769:
case 2769:
case 3561:
case 2174:
case 1324:
case 2294:
case 977:
case 2663:
case 3132:
case 1708:
case 527:
case 3995:
case 1346:
case 1365:
case 2882:
case 3681:
case 3538:
case 2852:
case 2028:
case 730:
case 3222:
case 3255:
case 3513:
case 766:
case 3763:
case 1290:
case 2365:
case 3376:
case 1147:
case 2035:
case 814:
case 1455:
case 3:
case 3679:
case 786:
case 1941:
case 3780:
case 740:
case 2195:
case 3113:
case 2322:
case 1145:
case 1685:
case 2993:
case 3947:
case 378:
case 3422:
case 3094:
case 1846:
case 1456:
case 3817:
case 3138:
case 1756:
case 3288:
case 1767:
case 3088:
case 88:
case 1320:
case 3594:
case 398:
case 1405:
case 2779:
case 1486:
case 4015:
case 3250:
case 1986:
case 2208:
case 3486:
case 104:
case 1352:
case 3100:
case 2678:
case 2873:
case 3163:
case 1494:
case 3672:
case 2141:
case 3126:
case 957:
case 2046:
case 679:
case 2744:
case 1044:
case 2283:
case 2913:
case 947:
case 3067:
case 2316:
case 3366:
case 1024:
case 3365:
case 616:
case 2653:
case 1014:
case 3214:
case 3172:
case 3909:
case 2910:
case 1577:
case 2094:
case 1740:
case 2372:
case 2931:
case 294:
case 2783:
case 3445:
case 877:
case 1875:
case 2839:
case 325:
case 1300:
case 339:
case 1007:
case 737:
case 3291:
case 2423:
case 2572:
case 636:
case 1461:
case 1382:
case 3746:
case 1356:
case 1423:
case 1102:
case 3412:
case 1893:
case 3640:
case 724:
case 2031:
case 3151:
case 287:
case 3557:
case 3052:
case 539:
case 2802:
case 3390:
case 243:
case 1543:
case 2918:
case 2691:
case 1870:
case 117:
case 1586:
case 2740:
case 3677:
case 1027:
case 1349:
case 933:
case 1256:
case 2010:
case 154:
case 3044:
case 2851:
case 714:
case 1550:
case 157:
case 1582:
case 2983:
case 212:
case 3333:
case 205:
case 1674:
case 33:
case 638:
case 3093:
case 1789:
case 3682:
case 3781:
case 4018:
case 1858:
case 1759:
case 3124:
case 1849:
case 510:
case 2657:
case 3674:
case 1757:
case 659:
case 3912:
case 3065:
case 3459:
case 3331:
case 1709:
case 1775:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1660485601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,];
var gg_b = "1660485601/";

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
