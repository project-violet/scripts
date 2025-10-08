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
case 324:
case 3902:
case 1939:
case 3719:
case 2758:
case 3805:
case 1127:
case 1497:
case 1331:
case 1434:
case 530:
case 9:
case 2251:
case 1280:
case 807:
case 3250:
case 2778:
case 3549:
case 3907:
case 1514:
case 521:
case 1553:
case 2403:
case 1636:
case 823:
case 2752:
case 2777:
case 4001:
case 3908:
case 2814:
case 1329:
case 2664:
case 3988:
case 3011:
case 1:
case 3793:
case 3503:
case 1310:
case 1171:
case 3995:
case 3346:
case 429:
case 3168:
case 3898:
case 2721:
case 1200:
case 3720:
case 2640:
case 1978:
case 1405:
case 538:
case 3961:
case 4068:
case 2180:
case 3885:
case 2228:
case 1855:
case 632:
case 3181:
case 1151:
case 3369:
case 1977:
case 31:
case 100:
case 1588:
case 2992:
case 2519:
case 3631:
case 3926:
case 169:
case 1024:
case 2895:
case 3557:
case 1595:
case 230:
case 3572:
case 911:
case 1587:
case 2324:
case 1903:
case 2421:
case 492:
case 3225:
case 2888:
case 2997:
case 3629:
case 1561:
case 3493:
case 694:
case 3336:
case 2286:
case 2165:
case 3552:
case 2439:
case 2998:
case 1582:
case 4090:
case 824:
case 2611:
case 3539:
case 2452:
case 1502:
case 415:
case 1792:
case 4076:
case 3610:
case 111:
case 2477:
case 1893:
case 2206:
case 3775:
case 567:
case 1460:
case 969:
case 1265:
case 2478:
case 2905:
case 307:
case 3521:
case 2808:
case 3953:
case 1983:
case 1797:
case 1949:
case 3755:
case 2520:
case 2472:
case 417:
case 2041:
case 67:
case 1820:
case 1508:
case 108:
case 2458:
case 3071:
case 2515:
case 2070:
case 2686:
case 1111:
case 3732:
case 2368:
case 1912:
case 3833:
case 626:
case 1815:
case 261:
case 810:
case 2745:
case 956:
case 3625:
case 1918:
case 134:
case 2050:
case 3794:
case 1062:
case 2435:
case 3231:
case 2381:
case 1350:
case 352:
case 794:
case 3028:
case 242:
case 1847:
case 766:
case 1848:
case 659:
case 3027:
case 219:
case 2547:
case 2712:
case 818:
case 1743:
case 1945:
case 1396:
case 929:
case 1574:
case 2874:
case 1433:
case 3022:
case 2211:
case 934:
case 90:
case 3415:
case 1935:
case 1056:
case 3715:
case 2417:
case 1733:
case 3809:
case 2671:
case 3913:
case 687:
case 2532:
case 2418:
case 561:
case 115:
case 3650:
case 2412:
case 2538:
case 1680:
case 3974:
case 640:
case 2025:
case 992:
case 1894:
case 2537:
case 3116:
case 504:
case 53:
case 2594:
case 1325:
case 1838:
case 1140:
case 542:
case 3494:
case 2579:
case 3748:
case 2784:
case 2628:
case 2240:
case 3747:
case 1600:
case 519:
case 3241:
case 3438:
case 917:
case 3512:
case 74:
case 586:
case 400:
case 1023:
case 227:
case 3889:
case 2264:
case 2622:
case 915:
case 3742:
case 2136:
case 3365:
case 3843:
case 2314:
case 2411:
case 1446:
case 3174:
case 398:
case 491:
case 3410:
case 1233:
case 2677:
case 3049:
case 949:
case 316:
case 1660:
case 547:
case 1053:
case 4013:
case 2678:
case 1469:
case 1184:
case 2672:
case 2373:
case 857:
case 580:
case 2657:
case 1964:
case 545:
case 2204:
case 3305:
case 2658:
case 222:
case 2430:
case 3869:
case 2235:
case 275:
case 3385:
case 1355:
case 3334:
case 2284:
case 3248:
case 3397:
case 3431:
case 2740:
case 1104:
case 3247:
case 2621:
case 2133:
case 3003:
case 3429:
case 1375:
case 277:
case 1810:
case 2510:
case 2639:
case 599:
case 3242:
case 2075:
case 45:
case 3052:
case 1082:
case 3077:
case 760:
case 3360:
case 2143:
case 2969:
case 3232:
case 2382:
case 1209:
case 247:
case 1061:
case 2649:
case 72:
case 1319:
case 2824:
case 2388:
case 3238:
case 1087:
case 280:
case 628:
case 1605:
case 3294:
case 2387:
case 1088:
case 3058:
case 2946:
case 1112:
case 3731:
case 2395:
case 2666:
case 890:
case 1524:
case 2816:
case 575:
case 1145:
case 2307:
case 3279:
case 158:
case 288:
case 1697:
case 816:
case 1634:
case 3655:
case 1516:
case 2308:
case 2541:
case 631:
case 714:
case 2093:
case 2218:
case 950:
case 3259:
case 2302:
case 2603:
case 577:
case 3710:
case 3675:
case 1930:
case 1692:
case 1393:
case 299:
case 1002:
case 3564:
case 2711:
case 1746:
case 2217:
case 2197:
case 3880:
case 2185:
case 614:
case 28:
case 2881:
case 3637:
case 668:
case 3551:
case 3923:
case 15:
case 4026:
case 3725:
case 2249:
case 2192:
case 3333:
case 1609:
case 3990:
case 2786:
case 3571:
case 991:
case 3496:
case 1568:
case 2399:
case 1103:
case 2867:
case 3470:
case 984:
case 874:
case 3522:
case 2374:
case 106:
case 2471:
case 497:
case 2706:
case 1689:
case 843:
case 3659:
case 1765:
case 3976:
case 1643:
case 1342:
case 541:
case 2612:
case 2313:
case 851:
case 609:
case 3173:
case 3450:
case 3527:
case 495:
case 1297:
case 1348:
case 3255:
case 1501:
case 2451:
case 660:
case 3528:
case 776:
case 3679:
case 4053:
case 62:
case 3035:
case 344:
case 1347:
case 4014:
case 3084:
case 3107:
case 374:
case 1825:
case 1244:
case 554:
case 2258:
case 3219:
case 746:
case 1121:
case 58:
case 635:
case 2876:
case 2604:
case 2257:
case 343:
case 3045:
case 3108:
case 2272:
case 1337:
case 2038:
case 1394:
case 2525:
case 1465:
case 1139:
case 2032:
case 2278:
case 351:
case 458:
case 571:
case 4008:
case 3901:
case 873:
case 1927:
case 2252:
case 1556:
case 2406:
case 3615:
case 844:
case 2160:
case 3343:
case 3865:
case 1178:
case 2486:
case 3962:
case 2239:
case 3389:
case 1359:
case 3796:
case 3017:
case 4087:
case 3293:
case 4088:
case 2059:
case 1152:
case 479:
case 1523:
case 39:
case 1951:
case 241:
case 613:
case 2221:
case 3647:
case 2727:
case 3425:
case 4082:
case 183:
case 1157:
case 3195:
case 1971:
case 2079:
case 1304:
case 1401:
case 841:
case 1580:
case 2638:
case 3862:
case 3645:
case 3550:
case 3427:
case 574:
case 3134:
case 354:
case 3197:
case 2880:
case 3266:
case 3185:
case 2694:
case 202:
case 1273:
case 2637:
case 4034:
case 3015:
case 4085:
case 1033:
case 3867:
case 551:
case 715:
case 1253:
case 2333:
case 2632:
case 1871:
case 2990:
case 3203:
case 2659:
case 1925:
case 459:
case 1822:
case 59:
case 1723:
case 2153:
case 1226:
case 862:
case 733:
case 2522:
case 3374:
case 3042:
case 3596:
case 2275:
case 3706:
case 2528:
case 3801:
case 2679:
case 1827:
case 244:
case 1462:
case 3048:
case 2084:
case 792:
case 3612:
case 2527:
case 2173:
case 1500:
case 1481:
case 3354:
case 14:
case 3451:
case 1781:
case 2045:
case 3038:
case 3272:
case 2108:
case 3751:
case 836:
case 2563:
case 966:
case 608:
case 2107:
case 362:
case 1120:
case 1762:
case 1996:
case 2219:
case 1863:
case 502:
case 2309:
case 2770:
case 729:
case 485:
case 1009:
case 440:
case 3032:
case 3856:
case 611:
case 1699:
case 70:
case 734:
case 2293:
case 1674:
case 2018:
case 1565:
case 341:
case 448:
case 1089:
case 854:
case 166:
case 2642:
case 2343:
case 1202:
case 2389:
case 2962:
case 2506:
case 1318:
case 2017:
case 88:
case 97:
case 2648:
case 1970:
case 3728:
case 3635:
case 1654:
case 2195:
case 1613:
case 1312:
case 2968:
case 3079:
case 1208:
case 2187:
case 600:
case 3221:
case 2647:
case 3727:
case 2967:
case 2220:
case 573:
case 3144:
case 1476:
case 1119:
case 2012:
case 1591:
case 1299:
case 216:
case 978:
case 2083:
case 3678:
case 3411:
case 769:
case 2174:
case 44:
case 2215:
case 700:
case 2410:
case 1682:
case 1383:
case 3652:
case 3204:
case 170:
case 1005:
case 1148:
case 3672:
case 3373:
case 2113:
case 289:
case 847:
case 4033:
case 2620:
case 3740:
case 3055:
case 2247:
case 1034:
case 1097:
case 1569:
case 2398:
case 2741:
case 1608:
case 634:
case 60:
case 493:
case 2385:
case 375:
case 3235:
case 1254:
case 2248:
case 2334:
case 178:
case 1098:
case 2397:
case 3510:
case 845:
case 1303:
case 3639:
case 2924:
case 3764:
case 1092:
case 2242:
case 2003:
case 3133:
case 2846:
case 3326:
case 2429:
case 970:
case 880:
case 557:
case 1274:
case 940:
case 3382:
case 2078:
case 2232:
case 3969:
case 516:
case 1536:
case 1352:
case 3649:
case 3464:
case 2052:
case 598:
case 2077:
case 2360:
case 3143:
case 985:
case 1044:
case 2237:
case 3019:
case 3946:
case 2058:
case 2731:
case 4043:
case 3730:
case 1358:
case 3824:
case 1179:
case 2238:
case 2072:
case 877:
case 987:
case 633:
case 3440:
case 589:
case 2021:
case 388:
case 481:
case 2655:
case 3212:
case 615:
case 7:
case 3816:
case 1840:
case 4009:
case 140:
case 2279:
case 187:
case 2710:
case 3109:
case 822:
case 2039:
case 399:
case 1132:
case 3711:
case 1931:
case 1626:
case 617:
case 3218:
case 1339:
case 257:
case 3603:
case 3368:
case 1371:
case 3146:
case 468:
case 4069:
case 414:
case 2071:
case 1979:
case 1533:
case 3070:
case 3686:
case 825:
case 3899:
case 2504:
case 2794:
case 596:
case 1454:
case 33:
case 3435:
case 2737:
case 3230:
case 1413:
case 182:
case 1959:
case 4046:
case 3362:
case 518:
case 2738:
case 827:
case 649:
case 3943:
case 1804:
case 3050:
case 1676:
case 1835:
case 1932:
case 3547:
case 946:
case 319:
case 1690:
case 3712:
case 2028:
case 1327:
case 2300:
case 342:
case 697:
case 3301:
case 2535:
case 3404:
case 2210:
case 1129:
case 2022:
case 3542:
case 872:
case 1994:
case 3211:
case 783:
case 3717:
case 386:
case 1499:
case 409:
case 3356:
case 1799:
case 1509:
case 3418:
case 3532:
case 1386:
case 1667:
case 131:
case 2954:
case 2086:
case 2670:
case 435:
case 2715:
case 1668:
case 2809:
case 2116:
case 120:
case 1141:
case 264:
case 1224:
case 1662:
case 1363:
case 886:
case 2545:
case 3538:
case 16:
case 3651:
case 2063:
case 1681:
case 3025:
case 650:
case 679:
case 1601:
case 2124:
case 563:
case 303:
case 931:
case 2241:
case 861:
case 1812:
case 1713:
case 2494:
case 1754:
case 2437:
case 325:
case 4036:
case 3628:
case 2889:
case 804:
case 83:
case 1818:
case 3622:
case 3264:
case 3323:
case 2006:
case 2517:
case 1817:
case 1543:
case 3559:
case 1306:
case 2518:
case 413:
case 327:
case 1589:
case 1774:
case 1281:
case 1505:
case 3251:
case 239:
case 2250:
case 3031:
case 3758:
case 2719:
case 160:
case 3100:
case 914:
case 1883:
case 3777:
case 750:
case 2270:
case 1426:
case 4000:
case 1849:
case 1920:
case 2549:
case 1761:
case 3403:
case 3029:
case 2793:
case 367:
case 1170:
case 830:
case 2892:
case 960:
case 3483:
case 3449:
case 2995:
case 909:
case 2346:
case 2987:
case 3010:
case 1702:
case 3944:
case 2167:
case 1803:
case 3575:
case 1046:
case 3180:
case 3228:
case 1473:
case 65:
case 2181:
case 21:
case 1708:
case 2369:
case 821:
case 2898:
case 3555:
case 2162:
case 1597:
case 3640:
case 1201:
case 2420:
case 1276:
case 1407:
case 683:
case 3263:
case 3888:
case 4065:
case 524:
case 3992:
case 1544:
case 3519:
case 3191:
case 3887:
case 795:
case 3895:
case 3286:
case 1402:
case 2336:
case 2552:
case 3165:
case 3998:
case 1256:
case 2578:
case 3934:
case 1955:
case 1036:
case 428:
case 321:
case 3882:
case 2493:
case 1753:
case 1560:
case 3783:
case 797:
case 3593:
case 3703:
case 3802:
case 913:
case 3905:
case 3478:
case 207:
case 2156:
case 1461:
case 749:
case 2539:
case 3452:
case 2610:
case 2775:
case 1340:
case 205:
case 1488:
case 1821:
case 3458:
case 2419:
case 2521:
case 223:
case 3520:
case 2755:
case 135:
case 3472:
case 1901:
case 2261:
case 1102:
case 593:
case 455:
case 3139:
case 3465:
case 4021:
case 3928:
case 281:
case 3633:
case 3332:
case 2282:
case 1586:
case 3922:
case 638:
case 3121:
case 457:
case 1219:
case 2863:
case 99:
case 2996:
case 2120:
case 2762:
case 3244:
case 2288:
case 2490:
case 3780:
case 1563:
case 532:
case 1045:
case 4039:
case 2781:
case 1012:
case 4052:
case 1425:
case 1647:
case 3700:
case 3590:
case 3172:
case 951:
case 1187:
case 2613:
case 383:
case 1891:
case 2456:
case 1796:
case 4072:
case 1962:
case 943:
case 1865:
case 1642:
case 3951:
case 4058:
case 2089:
case 1182:
case 3152:
case 1981:
case 2043:
case 2674:
case 719:
case 1293:
case 85:
case 1632:
case 1333:
case 2253:
case 1126:
case 2214:
case 3870:
case 944:
case 3567:
case 293:
case 3099:
case 581:
case 2033:
case 3103:
case 772:
case 667:
case 883:
case 2273:
case 1637:
case 1694:
case 4003:
case 2851:
case 1004:
case 3562:
case 2155:
case 232:
case 2401:
case 1923:
case 35:
case 1551:
case 2304:
case 57:
case 3205:
case 2776:
case 3166:
case 24:
case 1255:
case 173:
case 3348:
case 2384:
case 3297:
case 2500:
case 1173:
case 1956:
case 2462:
case 2827:
case 144:
case 3986:
case 3013:
case 1114:
case 2468:
case 594:
case 566:
case 489:
case 2226:
case 725:
case 3342:
case 3643:
case 3074:
case 2822:
case 1976:
case 902:
case 3963:
case 3689:
case 3087:
case 1072:
case 1344:
case 1441:
case 2416:
case 2910:
case 49:
case 1731:
case 957:
case 3112:
case 2357:
case 248:
case 1237:
case 4018:
case 350:
case 627:
case 849:
case 1360:
case 2378:
case 3082:
case 1052:
case 2159:
case 1729:
case 2060:
case 2352:
case 955:
case 812:
case 2377:
case 3436:
case 2339:
case 1259:
case 474:
case 2931:
case 3746:
case 3002:
case 1564:
case 1039:
case 3930:
case 1710:
case 358:
case 3008:
case 2138:
case 155:
case 2424:
case 895:
case 2321:
case 3841:
case 672:
case 3007:
case 2137:
case 3516:
case 2929:
case 1655:
case 1540:
case 3685:
case 1113:
case 2695:
case 2687:
case 3831:
case 642:
case 3184:
case 2830:
case 1154:
case 3469:
case 1530:
case 2688:
case 1619:
case 619:
case 548:
case 270:
case 3964:
case 3233:
case 2682:
case 2383:
case 858:
case 1410:
case 2349:
case 198:
case 3829:
case 3940:
case 2661:
case 3736:
case 4084:
case 2142:
case 2299:
case 2274:
case 1693:
case 1392:
case 2115:
case 4004:
case 1429:
case 402:
case 2811:
case 1846:
case 2546:
case 661:
case 226:
case 2092:
case 1924:
case 879:
case 2602:
case 2303:
case 1397:
case 1248:
case 1334:
case 278:
case 3355:
case 2608:
case 2097:
case 2716:
case 2569:
case 1247:
case 2034:
case 3104:
case 2607:
case 312:
case 1620:
case 771:
case 2681:
case 26:
case 1974:
case 315:
case 4064:
case 582:
case 2845:
case 3140:
case 164:
case 856:
case 3325:
case 407:
case 1913:
case 4040:
case 3832:
case 754:
case 2668:
case 3984:
case 2948:
case 910:
case 231:
case 2667:
case 3443:
case 2386:
case 3489:
case 3164:
case 1459:
case 405:
case 2799:
case 2509:
case 2065:
case 1432:
case 2306:
case 1518:
case 80:
case 2817:
case 1006:
case 1517:
case 1742:
case 829:
case 2818:
case 901:
case 680:
case 228:
case 1391:
case 1241:
case 2216:
case 1999:
case 110:
case 736:
case 1124:
case 3879:
case 2676:
case 56:
case 334:
case 30:
case 4011:
case 3918:
case 1625:
case 2959:
case 282:
case 152:
case 3350:
case 3917:
case 1448:
case 2454:
case 520:
case 3062:
case 1504:
case 1794:
case 677:
case 963:
case 2656:
case 2979:
case 3370:
case 2371:
case 1833:
case 3599:
case 3067:
case 1732:
case 3111:
case 2938:
case 1759:
case 3396:
case 2499:
case 952:
case 3665:
case 3842:
case 2623:
case 3743:
case 1415:
case 3246:
case 2937:
case 356:
case 1022:
case 1779:
case 1584:
case 3554:
case 3847:
case 1028:
case 622:
case 2131:
case 3001:
case 2690:
case 163:
case 2000:
case 2835:
case 3848:
case 3691:
case 2560:
case 2753:
case 2877:
case 2036:
case 3106:
case 905:
case 1629:
case 641:
case 1577:
case 1123:
case 1552:
case 410:
case 2402:
case 1860:
case 2773:
case 560:
case 369:
case 1190:
case 2857:
case 1926:
case 1631:
case 2872:
case 2408:
case 1558:
case 2544:
case 3588:
case 509:
case 1844:
case 1225:
case 3903:
case 3819:
case 2858:
case 1572:
case 2276:
case 1557:
case 1914:
case 2487:
case 123:
case 514:
case 1755:
case 3734:
case 3507:
case 3016:
case 777:
case 2290:
case 401:
case 1419:
case 3508:
case 3798:
case 3341:
case 2488:
case 3163:
case 2340:
case 568:
case 1775:
case 311:
case 1064:
case 3502:
case 237:
case 1539:
case 775:
case 4063:
case 1156:
case 496:
case 3265:
case 3460:
case 3122:
case 3760:
case 3636:
case 3553:
case 2196:
case 780:
case 91:
case 1907:
case 2267:
case 4027:
case 2426:
case 1270:
case 3573:
case 3127:
case 811:
case 1566:
case 1719:
case 1101:
case 2262:
case 209:
case 3939:
case 513:
case 747:
case 1250:
case 2993:
case 2787:
case 3434:
case 2795:
case 2281:
case 2201:
case 3405:
case 3978:
case 214:
case 2534:
case 3200:
case 1898:
case 11:
case 3977:
case 2708:
case 1181:
case 3952:
case 1897:
case 1834:
case 799:
case 4051:
case 3958:
case 2919:
case 1296:
case 3:
case 939:
case 1011:
case 2702:
case 1988:
case 800:
case 3526:
case 2414:
case 1987:
case 788:
case 924:
case 1346:
case 452:
case 2453:
case 1793:
case 868:
case 1998:
case 1165:
case 403:
case 938:
case 3852:
case 814:
case 3753:
case 2106:
case 3036:
case 425:
case 1997:
case 1888:
case 1421:
case 716:
case 1263:
case 130:
case 3407:
case 3276:
case 3773:
case 1895:
case 269:
case 1191:
case 427:
case 1766:
case 1519:
case 1630:
case 313:
case 208:
case 3821:
case 3488:
case 2820:
case 1807:
case 790:
case 2163:
case 3487:
case 2785:
case 335:
case 2734:
case 138:
case 1520:
case 2016:
case 3495:
case 2507:
case 674:
case 1808:
case 3223:
case 3461:
case 1478:
case 1905:
case 2265:
case 2460:
case 82:
case 1477:
case 2893:
case 2966:
case 2502:
case 337:
case 860:
case 4025:
case 1611:
case 651:
case 3268:
case 3883:
case 2760:
case 1029:
case 2921:
case 835:
case 3196:
case 3761:
case 2514:
case 1778:
case 3920:
case 3866:
case 3993:
case 2128:
case 644:
case 1251:
case 32:
case 1772:
case 2485:
case 1757:
case 3505:
case 2497:
case 3281:
case 3795:
case 2127:
case 486:
case 2573:
case 673:
case 1758:
case 2939:
case 309:
case 500:
case 3788:
case 2744:
case 3708:
case 2977:
case 508:
case 2151:
case 1466:
case 3473:
case 165:
case 1228:
case 461:
case 3201:
case 3585:
case 602:
case 1640:
case 2405:
case 3597:
case 3069:
case 3534:
case 757:
case 1721:
case 3414:
case 3311:
case 1826:
case 2972:
case 2171:
case 43:
case 1449:
case 2310:
case 167:
case 3453:
case 3919:
case 2958:
case 1575:
case 2:
case 1739:
case 3592:
case 3702:
case 1222:
case 4050:
case 172:
case 3224:
case 3363:
case 2140:
case 2838:
case 927:
case 1704:
case 1594:
case 3942:
case 1025:
case 2837:
case 655:
case 36:
case 1538:
case 215:
case 3386:
case 2489:
case 1532:
case 1418:
case 3947:
case 3799:
case 925:
case 1356:
case 2832:
case 657:
case 2733:
case 2056:
case 3948:
case 2984:
case 217:
case 702:
case 903:
case 2935:
case 438:
case 1136:
case 1264:
case 1323:
case 376:
case 3818:
case 2023:
case 3306:
case 882:
case 3543:
case 3091:
case 3216:
case 2600:
case 1445:
case 1240:
case 2879:
case 3915:
case 421:
case 328:
case 3754:
case 1390:
case 3413:
case 1230:
case 986:
case 467:
case 2917:
case 1484:
case 1169:
case 104:
case 3351:
case 2062:
case 1050:
case 3804:
case 3080:
case 20:
case 1663:
case 1989:
case 1745:
case 465:
case 3110:
case 743:
case 161:
case 3474:
case 1146:
case 2912:
case 2067:
case 2599:
case 1368:
case 2111:
case 1070:
case 828:
case 3979:
case 2246:
case 1211:
case 3994:
case 1542:
case 3129:
case 2433:
case 1606:
case 86:
case 4031:
case 3938:
case 2789:
case 2396:
case 3499:
case 2842:
case 698:
case 2665:
case 3623:
case 3322:
case 2743:
case 1712:
case 2001:
case 1547:
case 1909:
case 3932:
case 2269:
case 2130:
case 3328:
case 3835:
case 1854:
case 79:
case 2848:
case 1548:
case 1404:
case 4029:
case 2847:
case 2513:
case 3327:
case 2524:
case 1730:
case 1395:
case 1946:
case 3357:
case 2911:
case 4059:
case 145:
case 3044:
case 250:
case 2605:
case 1440:
case 180:
case 1388:
case 999:
case 1245:
case 3358:
case 739:
case 3060:
case 3614:
case 3352:
case 147:
case 3536:
case 2117:
case 2209:
case 1969:
case 1683:
case 1382:
case 988:
case 2082:
case 1361:
case 1464:
case 1217:
case 4038:
case 3626:
case 3931:
case 2746:
case 2002:
case 1711:
case 199:
case 1109:
case 2393:
case 2692:
case 980:
case 2930:
case 859:
case 1302:
case 2289:
case 1218:
case 3864:
case 1093:
case 1541:
case 664:
case 1020:
case 3137:
case 2516:
case 1308:
case 2007:
case 2634:
case 2320:
case 258:
case 340:
case 4032:
case 3840:
case 3424:
case 3724:
case 122:
case 1531:
case 1204:
case 359:
case 2964:
case 579:
case 3695:
case 1672:
case 1373:
case 3687:
case 3366:
case 2940:
case 1529:
case 3661:
case 2736:
case 2014:
case 3941:
case 2660:
case 840:
case 3383:
case 3349:
case 2446:
case 1411:
case 2829:
case 3546:
case 1075:
case 1764:
case 1639:
case 3303:
case 848:
case 1133:
case 48:
case 3085:
case 1936:
case 4015:
case 3607:
case 212:
case 707:
case 558:
case 378:
case 2355:
case 471:
case 175:
case 249:
case 3213:
case 1430:
case 3608:
case 607:
case 3193:
case 1406:
case 2633:
case 1277:
case 2332:
case 3768:
case 752:
case 2927:
case 2260:
case 3699:
case 1900:
case 3261:
case 2465:
case 2139:
case 3490:
case 2394:
case 1751:
case 2337:
case 37:
case 1257:
case 3295:
case 3781:
case 1876:
case 4093:
case 2121:
case 1258:
case 3863:
case 3996:
case 941:
case 1094:
case 2244:
case 2172:
case 447:
case 3312:
case 1890:
case 2157:
case 0:
case 3654:
case 1635:
case 1728:
case 3970:
case 1684:
case 3591:
case 591:
case 3701:
case 3119:
case 3476:
case 1144:
case 1727:
case 893:
case 2590:
case 2700:
case 1221:
case 3089:
case 141:
case 4019:
case 2177:
case 3565:
case 962:
case 3317:
case 3674:
case 3043:
case 3806:
case 3318:
case 506:
case 1486:
case 394:
case 480:
case 1160:
case 1823:
case 2103:
case 3756:
case 4055:
case 3253:
case 3214:
case 3175:
case 1249:
case 1427:
case 1862:
case 3580:
case 1763:
case 1198:
case 3304:
case 2581:
case 2205:
case 1965:
case 1881:
case 894:
case 1428:
case 2906:
case 477:
case 1197:
case 154:
case 3155:
case 2347:
case 1048:
case 2298:
case 3462:
case 2986:
case 291:
case 2501:
case 3335:
case 34:
case 2791:
case 1354:
case 3384:
case 2348:
case 1047:
case 2480:
case 3723:
case 136:
case 3822:
case 2765:
case 2896:
case 1203:
case 87:
case 710:
case 2963:
case 1596:
case 3468:
case 1374:
case 2183:
case 1617:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759950001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,];
var gg_b = "1759950001/";

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
