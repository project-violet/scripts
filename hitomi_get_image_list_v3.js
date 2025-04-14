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
case 3668:
case 2893:
case 3068:
case 520:
case 3906:
case 902:
case 1716:
case 2254:
case 1522:
case 2179:
case 3607:
case 910:
case 2487:
case 2381:
case 2560:
case 479:
case 1267:
case 2539:
case 3605:
case 2485:
case 430:
case 778:
case 2280:
case 2855:
case 2070:
case 2996:
case 3578:
case 2095:
case 2422:
case 1864:
case 265:
case 132:
case 2640:
case 2097:
case 996:
case 2697:
case 3138:
case 403:
case 2293:
case 320:
case 1808:
case 3796:
case 166:
case 106:
case 3337:
case 2694:
case 1573:
case 490:
case 244:
case 743:
case 1789:
case 1133:
case 656:
case 96:
case 1342:
case 2728:
case 2981:
case 90:
case 2706:
case 2737:
case 2396:
case 2257:
case 1663:
case 2473:
case 2735:
case 2880:
case 607:
case 3328:
case 936:
case 113:
case 1826:
case 157:
case 2484:
case 604:
case 3249:
case 1520:
case 944:
case 26:
case 1696:
case 3154:
case 3689:
case 2562:
case 947:
case 1995:
case 3358:
case 1940:
case 3411:
case 2586:
case 236:
case 1198:
case 3180:
case 1841:
case 519:
case 1509:
case 3914:
case 1953:
case 2238:
case 2715:
case 2420:
case 3193:
case 3501:
case 2827:
case 210:
case 1768:
case 3849:
case 1736:
case 1707:
case 2452:
case 1491:
case 3879:
case 3915:
case 2714:
case 1395:
case 3958:
case 905:
case 2103:
case 2866:
case 319:
case 1353:
case 989:
case 2838:
case 1081:
case 1271:
case 642:
case 3229:
case 689:
case 942:
case 1597:
case 2245:
case 3192:
case 1595:
case 1570:
case 3436:
case 3791:
case 2685:
case 605:
case 2319:
case 2275:
case 3405:
case 2085:
case 1130:
case 820:
case 3514:
case 1660:
case 2883:
case 1821:
case 2844:
case 4069:
case 3200:
case 2022:
case 1909:
case 2497:
case 2701:
case 267:
case 3515:
case 790:
case 2362:
case 1112:
case 207:
case 3829:
case 629:
case 3517:
case 2845:
case 2494:
case 264:
case 703:
case 880:
case 3901:
case 2875:
case 94:
case 1463:
case 3786:
case 3762:
case 1221:
case 2283:
case 647:
case 2673:
case 716:
case 1594:
case 256:
case 2991:
case 1952:
case 4012:
case 2684:
case 3404:
case 2274:
case 1309:
case 2960:
case 964:
case 701:
case 518:
case 904:
case 3190:
case 2292:
case 3145:
case 1251:
case 636:
case 1731:
case 24:
case 3177:
case 2009:
case 967:
case 1132:
case 907:
case 1343:
case 3175:
case 3011:
case 3506:
case 3537:
case 3528:
case 66:
case 1686:
case 956:
case 60:
case 3978:
case 2100:
case 1987:
case 2596:
case 3099:
case 134:
case 3948:
case 3699:
case 318:
case 696:
case 2581:
case 1110:
case 2778:
case 1973:
case 2892:
case 450:
case 876:
case 1091:
case 988:
case 1984:
case 2748:
case 3378:
case 1876:
case 3144:
case 3183:
case 194:
case 1619:
case 1481:
case 2423:
case 662:
case 1950:
case 1951:
case 776:
case 2992:
case 1480:
case 1567:
case 3498:
case 2260:
case 341:
case 1884:
case 1199:
case 998:
case 1508:
case 2426:
case 1222:
case 2554:
case 3688:
case 1526:
case 2408:
case 1045:
case 3359:
case 1647:
case 1976:
case 187:
case 1047:
case 1690:
case 1675:
case 3248:
case 1111:
case 1677:
case 3632:
case 2465:
case 1083:
case 2021:
case 1273:
case 1683:
case 1351:
case 2839:
case 1457:
case 2392:
case 2702:
case 938:
case 1284:
case 801:
case 350:
case 1074:
case 3119:
case 2464:
case 3610:
case 1564:
case 3302:
case 1376:
case 3878:
case 3792:
case 168:
case 127:
case 108:
case 3959:
case 1493:
case 1346:
case 3848:
case 1250:
case 2557:
case 3503:
case 2945:
case 3579:
case 803:
case 1466:
case 639:
case 863:
case 2262:
case 2947:
case 3160:
case 3139:
case 2990:
case 2076:
case 780:
case 2527:
case 3549:
case 1220:
case 2977:
case 543:
case 2819:
case 1692:
case 1710:
case 1425:
case 2344:
case 959:
case 378:
case 2538:
case 2148:
case 2582:
case 3069:
case 816:
case 2374:
case 1209:
case 2891:
case 2862:
case 2347:
case 3329:
case 2390:
case 2377:
case 2471:
case 1820:
case 4031:
case 343:
case 1061:
case 1661:
case 2944:
case 1131:
case 1788:
case 3745:
case 2983:
case 1921:
case 3012:
case 3747:
case 3612:
case 1571:
case 3433:
case 2291:
case 1680:
case 3724:
case 2135:
case 2927:
case 4089:
case 850:
case 2106:
case 2137:
case 3698:
case 2547:
case 3529:
case 1240:
case 3858:
case 1356:
case 2590:
case 476:
case 3979:
case 173:
case 125:
case 3817:
case 2026:
case 2008:
case 3013:
case 2966:
case 3196:
case 3488:
case 1654:
case 1447:
case 3214:
case 1253:
case 999:
case 1733:
case 2067:
case 1475:
case 1189:
case 2065:
case 3500:
case 3432:
case 1618:
case 2421:
case 3349:
case 1055:
case 3766:
case 2325:
case 2263:
case 718:
case 1657:
case 258:
case 3379:
case 3215:
case 1840:
case 3258:
case 3181:
case 1895:
case 2064:
case 226:
case 1941:
case 2134:
case 148:
case 3814:
case 419:
case 970:
case 1521:
case 2779:
case 843:
case 1066:
case 2703:
case 1082:
case 4007:
case 3206:
case 1682:
case 2476:
case 1967:
case 1823:
case 1638:
case 1551:
case 563:
case 2446:
case 516:
case 1546:
case 12:
case 1025:
case 1492:
case 2357:
case 2318:
case 3303:
case 638:
case 3793:
case 1027:
case 1364:
case 3502:
case 926:
case 3430:
case 1576:
case 3228:
case 1105:
case 1136:
case 182:
case 579:
case 3835:
case 3806:
case 3837:
case 1308:
case 171:
case 2354:
case 3163:
case 1365:
case 1223:
case 1104:
case 2671:
case 2158:
case 1842:
case 1367:
case 420:
case 316:
case 2918:
case 4004:
case 3903:
case 3754:
case 1713:
case 698:
case 3234:
case 2561:
case 2955:
case 3633:
case 122:
case 3722:
case 793:
case 2385:
case 2619:
case 1261:
case 1423:
case 2387:
case 2950:
case 760:
case 2876:
case 252:
case 3931:
case 1652:
case 3787:
case 1052:
case 142:
case 2984:
case 3785:
case 1748:
case 3212:
case 2523:
case 1360:
case 2851:
case 1892:
case 2973:
case 25:
case 1861:
case 1442:
case 4029:
case 1620:
case 733:
case 2985:
case 3406:
case 2062:
case 875:
case 451:
case 3773:
case 823:
case 71:
case 2132:
case 374:
case 2343:
case 3269:
case 4000:
case 946:
case 5:
case 2572:
case 3428:
case 3812:
case 1960:
case 1129:
case 1939:
case 2188:
case 1292:
case 2496:
case 156:
case 417:
case 2952:
case 3311:
case 1684:
case 2799:
case 1043:
case 821:
case 937:
case 3720:
case 1643:
case 3415:
case 2463:
case 95:
case 666:
case 1159:
case 1073:
case 1283:
case 1673:
case 2594:
case 731:
case 2320:
case 657:
case 1877:
case 692:
case 1875:
case 1563:
case 167:
case 654:
case 2112:
case 1386:
case 3210:
case 872:
case 1845:
case 246:
case 1022:
case 1622:
case 1391:
case 3568:
case 2352:
case 952:
case 1874:
case 1440:
case 3911:
case 2553:
case 3176:
case 2060:
case 3505:
case 791:
case 1883:
case 1844:
case 3507:
case 1687:
case 3232:
case 1277:
case 1087:
case 4002:
case 3752:
case 2169:
case 3048:
case 1085:
case 1453:
case 1986:
case 69:
case 188:
case 2597:
case 3151:
case 3678:
case 3288:
case 1245:
case 1962:
case 2595:
case 3164:
case 2353:
case 3795:
case 375:
case 323:
case 460:
case 2081:
case 1023:
case 2271:
case 3336:
case 3740:
case 3307:
case 1623:
case 1882:
case 740:
case 196:
case 1591:
case 1224:
case 932:
case 2241:
case 3770:
case 102:
case 1452:
case 694:
case 4003:
case 3904:
case 3753:
case 235:
case 2370:
case 1963:
case 874:
case 3634:
case 383:
case 3126:
case 3907:
case 1642:
case 2704:
case 1758:
case 41:
case 1238:
case 3905:
case 1420:
case 751:
case 136:
case 3968:
case 3037:
case 3006:
case 1672:
case 2198:
case 3637:
case 3606:
case 1282:
case 1266:
case 2841:
case 3035:
case 1824:
case 433:
case 1409:
case 3165:
case 295:
case 2940:
case 1586:
case 65:
case 3833:
case 3028:
case 906:
case 2520:
case 8:
case 16:
case 2970:
case 2096:
case 1225:
case 10:
case 2696:
case 2113:
case 292:
case 3742:
case 3531:
case 714:
case 1443:
case 431:
case 3058:
case 3015:
case 3658:
case 521:
case 23:
case 1706:
case 3898:
case 2063:
case 3916:
case 1737:
case 1257:
case 381:
case 2663:
case 129:
case 1094:
case 2865:
case 144:
case 1450:
case 2867:
case 1728:
case 2923:
case 2543:
case 2808:
case 1854:
case 3813:
case 2372:
case 206:
case 2226:
case 1422:
case 3989:
case 1095:
case 2864:
case 165:
case 1640:
case 232:
case 1097:
case 1040:
case 1697:
case 2439:
case 321:
case 655:
case 4079:
case 581:
case 1670:
case 2587:
case 29:
case 1280:
case 3316:
case 1855:
case 1818:
case 1179:
case 372:
case 1487:
case 2323:
case 1653:
case 2267:
case 1539:
case 3014:
case 1485:
case 1149:
case 1893:
case 1254:
case 3213:
case 935:
case 2208:
case 57:
case 2326:
case 1056:
case 222:
case 3765:
case 3194:
case 3708:
case 1918:
case 28:
case 4015:
case 1955:
case 1380:
case 591:
case 4017:
case 2365:
case 1115:
case 1071:
case 3512:
case 47:
case 1158:
case 1117:
case 2842:
case 3726:
case 1041:
case 973:
case 2798:
case 3459:
case 271:
case 2308:
case 1354:
case 2364:
case 1114:
case 421:
case 3289:
case 2136:
case 282:
case 853:
case 3079:
case 2625:
case 1980:
case 2492:
case 2025:
case 1357:
case 391:
case 3816:
case 139:
case 909:
case 1881:
case 2038:
case 3197:
case 2965:
case 1592:
case 3195:
case 315:
case 2242:
case 1393:
case 3170:
case 1703:
case 2066:
case 4014:
case 985:
case 3569:
case 1476:
case 472:
case 3402:
case 3530:
case 3805:
case 92:
case 2853:
case 1544:
case 3836:
case 312:
case 2521:
case 51:
case 1574:
case 300:
case 851:
case 649:
case 2116:
case 2093:
case 1749:
case 2897:
case 3204:
case 2474:
case 2956:
case 1064:
case 1327:
case 2483:
case 209:
case 668:
case 3603:
case 608:
case 2655:
case 269:
case 4035:
case 840:
case 2253:
case 1067:
case 2475:
case 1938:
case 333:
case 1665:
case 2894:
case 593:
case 2371:
case 31:
case 1008:
case 1966:
case 1608:
case 2445:
case 1324:
case 922:
case 2490:
case 3429:
case 2447:
case 1547:
case 3804:
case 3771:
case 2240:
case 2297:
case 684:
case 3588:
case 3333:
case 273:
case 2295:
case 225:
case 1026:
case 971:
case 1577:
case 2270:
case 687:
case 1927:
case 1575:
case 777:
case 1863:
case 1974:
case 1524:
case 2252:
case 314:
case 1291:
case 2809:
case 987:
case 2131:
case 671:
case 353:
case 2571:
case 1729:
case 1377:
case 3184:
case 3899:
case 3332:
case 3143:
case 1219:
case 1375:
case 1347:
case 1862:
case 77:
case 2424:
case 3388:
case 3059:
case 3659:
case 1582:
case 1374:
case 831:
case 514:
case 2852:
case 908:
case 1651:
case 2692:
case 3449:
case 1538:
case 2427:
case 1527:
case 2438:
case 1975:
case 949:
case 2220:
case 4078:
case 3299:
case 772:
case 1046:
case 3988:
case 1945:
case 3721:
case 1262:
case 1676:
case 2482:
case 3002:
case 2730:
case 2346:
case 2769:
case 1557:
case 81:
case 224:
case 3152:
case 2887:
case 1961:
case 2564:
case 3231:
case 2376:
case 4001:
case 268:
case 609:
case 227:
case 340:
case 208:
case 669:
case 833:
case 1593:
case 1101:
case 2243:
case 2822:
case 3330:
case 1464:
case 249:
case 2644:
case 1021:
case 648:
case 4:
case 3403:
case 2273:
case 2418:
case 2683:
case 1392:
case 1702:
case 3776:
case 800:
case 673:
case 2285:
case 2075:
case 2111:
case 3598:
case 625:
case 1467:
case 2287:
case 284:
case 783:
case 1465:
case 3109:
case 2645:
case 812:
case 2526:
case 3831:
case 540:
case 287:
case 2047:
case 3029:
case 2843:
case 2199:
case 2884:
case 477:
case 2222:
case 3513:
case 2565:
case 3000:
case 1992:
case 3312:
case 2480:
case 2567:
case 1759:
case 1260:
case 474:
case 1079:
case 745:
case 4070:
case 1153:
case 2502:
case 2430:
case 1816:
case 339:
case 1649:
case 2303:
case 370:
case 3318:
case 3451:
case 4040:
case 2834:
case 3980:
case 1195:
case 115:
case 1764:
case 3592:
case 1197:
case 3881:
case 898:
case 1140:
case 1402:
case 788:
case 1913:
case 678:
case 2718:
case 230:
case 2235:
case 279:
case 2755:
case 1170:
case 3393:
case 1889:
case 1765:
case 3056:
case 429:
case 2559:
case 539:
case 570:
case 2234:
case 2903:
case 2754:
case 3896:
case 216:
case 131:
case 1726:
case 901:
case 764:
case 263:
case 447:
case 961:
case 838:
case 3117:
case 3671:
case 3281:
case 3071:
case 3115:
case 2163:
case 3354:
case 767:
case 444:
case 728:
case 1459:
case 2806:
case 707:
case 3641:
case 3041:
case 2835:
case 1207:
case 1236:
case 4072:
case 436:
case 1205:
case 3938:
case 2214:
case 1429:
case 1268:
case 4042:
case 859:
case 2613:
case 3608:
case 386:
case 3966:
case 2817:
case 2979:
case 3626:
case 1588:
case 40:
case 558:
case 2858:
case 2529:
case 3137:
case 2698:
case 3106:
case 201:
case 1172:
case 3863:
case 2098:
case 261:
case 903:
case 3927:
case 1532:
case 1400:
case 3577:
case 650:
case 3779:
case 112:
case 3544:
case 2727:
case 160:
case 100:
case 3134:
case 2410:
case 2725:
case 3382:
case 742:
case 1204:
case 2181:
case 2258:
case 2215:
case 2379:
case 358:
case 979:
case 3325:
case 1003:
case 2766:
case 3327:
case 3891:
case 705:
case 765:
case 2069:
case 3582:
case 2030:
case 1185:
case 630:
case 3538:
case 3383:
case 1449:
case 278:
case 445:
case 3344:
case 789:
case 3651:
case 488:
case 3819:
case 1122:
case 1932:
case 3646:
case 3977:
case 1299:
case 2549:
case 3527:
case 3990:
case 4087:
case 2139:
case 1002:
case 598:
case 2929:
case 2160:
case 1602:
case 3947:
case 3262:
case 950:
case 2783:
case 1721:
case 2777:
case 3291:
case 3456:
case 114:
case 1150:
case 663:
case 1811:
case 870:
case 3729:
case 2612:
case 2012:
case 117:
case 729:
case 941:
case 467:
case 3219:
case 1143:
case 3471:
case 2201:
case 1184:
case 3377:
case 404:
case 3886:
case 1659:
case 1173:
case 538:
case 1910:
case 1109:
case 3580:
case 3467:
case 1598:
case 2248:
case 1029:
case 2902:
case 601:
case 1831:
case 2278:
case 3408:
case 2413:
case 1513:
case 1969:
case 1120:
case 241:
case 943:
case 858:
case 4009:
case 76:
case 2162:
case 70:
case 1000:
case 359:
case 3555:
case 2503:
case 3518:
case 2959:
case 2878:
case 2010:
case 1231:
case 2302:
case 2610:
case 3464:
case 250:
case 3702:
case 1912:
case 3392:
case 3839:
case 3621:
case 3021:
case 1743:
case 2099:
case 3620:
case 3596:
case 3442:
case 3861:
case 1589:
case 2978:
case 1435:
case 2202:
case 3472:
case 2528:
case 1406:
case 2859:
case 2611:
case 2537:
case 2506:
case 1428:
case 2011:
case 2175:
case 3609:
case 542:
case 174:
case 2489:
case 3009:
case 802:
case 862:
case 3939:
case 177:
case 1812:
case 1001:
case 2174:
case 3423:
case 2534:
case 3261:
case 2348:
case 1722:
case 1121:
case 2144:
case 2259:
case 459:
case 2378:
case 1869:
case 1:
case 1785:
case 1830:
case 342:
case 3892:
case 3360:
case 3581:
case 1212:
case 619:
case 3701:
case 1911:
case 3440:
case 829:
case 3622:
case 556:
case 2200:
case 1536:
case 3844:
case 770:
case 1505:
case 739:
case 847:
case 1048:
case 3275:
case 2405:
case 1752:
case 4076:
case 564:
case 2436:
case 2407:
case 1078:
case 3290:
case 4046:
case 528:
case 3643:
case 3274:
case 1311:
case 2161:
case 889:
case 356:
case 865:
case 3673:
case 620:
case 3073:
case 3244:
case 799:
case 2786:
case 3159:
case 3563:
case 3650:
case 2901:
case 1399:
case 3877:
case 498:
case 3919:
case 364:
case 3845:
case 1888:
case 2631:
case 2517:
case 2558:
case 2829:
case 3362:
case 3847:
case 328:
case 3890:
case 2515:
case 486:
case 3420:
case 4008:
case 183:
case 1126:
case 3042:
case 4067:
case 1635:
case 3824:
case 3282:
case 1511:
case 3072:
case 1833:
case 3586:
case 2411:
case 2317:
case 1167:
case 502:
case 2358:
case 1304:
case 3562:
case 2689:
case 2279:
case 2154:
case 1108:
case 3225:
case 1599:
case 3227:
case 1307:
case 1336:
case 123:
case 1305:
case 175:
case 1795:
case 2314:
case 618:
case 3103:
case 2118:
case 3591:
case 2157:
case 3882:
case 2958:
case 1233:
case 3452:
case 302:
case 362:
case 2917:
case 1634:
case 3519:
case 2849:
case 2016:
case 310:
case 3827:
case 2928:
case 3640:
case 439:
case 305:
case 470:
case 1989:
case 2578:
case 2803:
case 3996:
case 3070:
case 2166:
case 1316:
case 856:
case 3670:
case 3857:
case 2548:
case 3485:
case 1014:
case 3539:
case 2605:
case 3560:
case 3487:
case 2636:
case 172:
case 2607:
case 3179:
case 2007:
case 1478:
case 1213:
case 804:
case 3734:
case 864:
case 2125:
case 2906:
case 280:
case 2668:
case 499:
case 2604:
case 1389:
case 1615:
case 1017:
case 1617:
case 2934:
case 1141:
case 3255:
case 3735:
case 845:
case 2203:
case 2124:
case 181:
case 3396:
case 3257:
case 3737:
case 1898:
case 4056:
case 3981:
case 888:
case 3728:
case 4041:
case 344:
case 3694:
case 3094:
case 2306:
case 1813:
case 4071:
case 2796:
case 347:
case 220:
case 2776:
case 4091:
case 2912:
case 3351:
case 3683:
case 660:
case 3418:
case 3083:
case 873:
case 600:
case 3455:
case 2746:
case 2369:
case 1119:
case 3822:
case 693:
case 3284:
case 735:
case 4019:
case 1959:
case 327:
case 494:
case 2751:
case 2231:
case 3376:
case 3564:
case 584:
case 3887:
case 324:
case 1503:
case 1191:
case 3885:
case 3346:
case 3730:
case 61:
case 1498:
case 3567:
case 3480:
case 2600:
case 1162:
case 3873:
case 885:
case 549:
case 3565:
case 3951:
case 869:
case 0:
case 1761:
case 3199:
case 2969:
case 2029:
case 3047:
case 2629:
case 45:
case 914:
case 568:
case 3647:
case 1902:
case 527:
case 1359:
case 3045:
case 3454:
case 1688:
case 2109:
case 1032:
case 3077:
case 384:
case 3946:
case 3287:
case 917:
case 1632:
case 3677:
case 524:
case 2598:
case 4062:
case 1248:
case 3285:
case 251:
case 2059:
case 2388:
case 2533:
case 3556:
case 706:
case 2910:
case 3661:
case 3061:
case 2143:
case 446:
case 2184:
case 2899:
case 3571:
case 73:
case 217:
case 253:
case 3921:
case 1745:
case 882:
case 951:
case 792:
case 1777:
case 82:
case 3809:
case 2150:
case 1775:
case 2811:
case 1929:
case 2310:
case 1160:
case 2602:
case 3466:
case 1783:
case 2721:
case 2122:
case 2932:
case 2299:
case 455:
case 1774:
case 3321:
case 178:
case 79:
case 822:
case 3692:
case 88:
case 4039:
case 732:
case 1669:
case 3657:
case 915:
case 1766:
case 2003:
case 3444:
case 369:
case 435:
case 2603:
case 3483:
case 640:
case 2510:
case 2204:
case 2123:
case 1258:
case 3897:
case 1379:
case 2933:
case 797:
case 3093:
case 1727:
case 260:
case 3116:
case 752:
case 3941:
case 1410:
case 884:
case 4081:
case 293:
case 2807:
case 212:
case 2805:
case 495:
case 2172:
case 569:
case 2400:
case 3270:
case 2532:
case 2741:
case 509:
case 1817:
case 3295:
case 373:
case 1979:
case 2588:
case 2333:
case 585:
case 3356:
case 3297:
case 1858:
case 3240:
case 2429:
case 548:
case 3490:
case 737:
case 3445:
case 1613:
case 1196:
case 2207:
case 3371:
case 2236:
case 1432:
case 1500:
case 3189:
case 411:
case 931:
case 1214:
case 190:
case 371:
case 3308:
case 3024:
case 1780:
case 617:
case 163:
case 103:
case 3367:
case 3223:
case 466:
case 413:
case 1412:
case 2216:
case 2398:
case 38:
case 933:
case 3713:
case 1903:
case 457:
case 52:
case 116:
case 231:
case 2889:
case 2194:
case 582:
case 2765:
case 43:
case 322:
case 4063:
case 3964:
case 1033:
case 1828:
case 2767:
case 454:
case 571:
case 2402:
case 2530:
case 1237:
case 3682:
case 179:
case 1755:
case 2170:
case 2195:
case 215:
case 3242:
case 2764:
case 3551:
case 2140:
case 3967:
case 2049:
case 3027:
case 1793:
case 2649:
case 58:
case 3492:
case 1834:
case 432:
case 960:
case 2079:
case 382:
case 900:
case 3926:
case 3105:
case 49:
case 1430:
case 2153:
case 1502:
case 3364:
case 1431:
case 27:
case 306:
case 3372:
case 2813:
case 1796:
case 3808:
case 3543:
case 1335:
case 3867:
case 3573:
case 855:
case 471:
case 2156:
case 3865:
case 59:
case 3550:
case 3063:
case 33:
case 2772:
case 2658:
case 2171:
case 2015:
case 2389:
case 532:
case 2058:
case 357:
case 1004:
case 2615:
case 313:
case 3264:
case 2531:
case 2617:
case 1328:
case 506:
case 1935:
case 4038:
case 1125:
case 1906:
case 2448:
case 2014:
case 3267:
case 1005:
case 846:
case 3323:
case 1636:
case 1607:
case 3942:
case 1036:
case 1166:
case 39:
case 3587:
case 1334:
case 3460:
case 3439:
case 975:
case 3585:
case 4025:
case 1138:
case 2723:
case 1781:
case 513:
case 3864:
case 2989:
case 1578:
case 3226:
case 1016:
case 3768:
case 1193:
case 1958:
case 335:
case 2753:
case 4055:
case 3256:
case 4057:
case 3340:
case 2770:
case 3241:
case 2368:
case 1157:
case 727:
case 2740:
case 3271:
case 2401:
case 2336:
case 3081:
case 2305:
case 6:
case 3353:
case 837:
case 2108:
case 3096:
case 425:
case 2599:
case 473:
case 4080:
case 2628:
case 3995:
case 2304:
case 2794:
case 1315:
case 2165:
case 3509:
case 677:
case 3462:
case 3841:
case 1180:
case 3198:
case 2511:
case 2637:
case 787:
case 1763:
case 2037:
case 311:
case 2905:
case 1499:
case 3871:
case 4054:
case 3953:
case 2126:
case 283:
case 852:
case 2888:
case 1031:
case 555:
case 1631:
case 974:
case 1829:
case 3112:
case 1515:
case 1901:
case 2832:
case 3594:
case 3221:
case 78:
case 1800:
case 67:
case 3463:
case 2458:
case 2417:
case 2311:
case 1161:
case 89:
case 3595:
case 9:
case 546:
case 2288:
case 3597:
case 1468:
case 3130:
case 2999:
case 2048:
case 2752:
case 1791:
case 1301:
case 1436:
case 1407:
case 866:
case 3570:
case 813:
case 72:
case 2536:
case 892:
case 3639:
case 2505:
case 2176:
case 3553:
case 857:
case 1514:
case 3039:
case 672:
case 3909:
case 2146:
case 854:
case 3973:
case 709:
case 3851:
case 3523:
case 1416:
case 118:
case 3943:
case 4044:
case 2869:
case 3322:
case 2785:
case 449:
case 675:
case 2787:
case 748:
case 1378:
case 2601:
case 1174:
case 3019:
case 3619:
case 1348:
case 394:
case 3385:
case 2722:
case 3731:
case 3251:
case 835:
case 277:
case 2812:
case 1611:
case 1537:
case 2428:
case 2230:
case 683:
case 2269:
case 773:
case 3132:
case 3384:
case 3662:
case 2773:
case 2589:
case 552:
case 2435:
case 3062:
case 1978:
case 337:
case 2331:
case 2406:
case 1859:
case 2437:
case 2784:
case 1948:
case 3350:
case 487:
case 4090:
case 3246:
case 3987:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744653601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,];
var gg_b = "1744653601/";

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
