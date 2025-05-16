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
case 1976:
case 1176:
case 2766:
case 2907:
case 1939:
case 1866:
case 3662:
case 1588:
case 700:
case 3076:
case 2723:
case 2610:
case 2979:
case 2126:
case 2926:
case 199:
case 119:
case 1833:
case 2572:
case 2216:
case 4085:
case 2733:
case 3759:
case 1145:
case 1532:
case 2648:
case 41:
case 2963:
case 2163:
case 1219:
case 1644:
case 3367:
case 1929:
case 2697:
case 1608:
case 1386:
case 2105:
case 2905:
case 3150:
case 2161:
case 941:
case 2604:
case 515:
case 1831:
case 1355:
case 1050:
case 3272:
case 2731:
case 1870:
case 1477:
case 1160:
case 2770:
case 631:
case 2012:
case 4087:
case 2406:
case 506:
case 2721:
case 3301:
case 1947:
case 2051:
case 1147:
case 2830:
case 2994:
case 3887:
case 2194:
case 1998:
case 1198:
case 778:
case 835:
case 3365:
case 91:
case 2695:
case 1730:
case 2460:
case 1290:
case 2177:
case 927:
case 3373:
case 1106:
case 2385:
case 3037:
case 263:
case 3451:
case 1359:
case 2498:
case 2840:
case 707:
case 3412:
case 1937:
case 1137:
case 2356:
case 2909:
case 2109:
case 2447:
case 1494:
case 2264:
case 466:
case 785:
case 1081:
case 4092:
case 2699:
case 2502:
case 1927:
case 2291:
case 3369:
case 1217:
case 3593:
case 3981:
case 1814:
case 3027:
case 2803:
case 1718:
case 2714:
case 262:
case 1696:
case 1703:
case 3258:
case 2175:
case 2975:
case 2558:
case 3183:
case 1678:
case 3035:
case 1426:
case 2865:
case 1701:
case 2743:
case 1554:
case 1463:
case 533:
case 2429:
case 1135:
case 1935:
case 1542:
case 966:
case 625:
case 2445:
case 751:
case 3202:
case 2439:
case 3564:
case 1800:
case 1215:
case 281:
case 532:
case 1624:
case 2476:
case 171:
case 876:
case 1407:
case 3755:
case 2946:
case 2:
case 2146:
case 2682:
case 1479:
case 3371:
case 3049:
case 3786:
case 2158:
case 2958:
case 2575:
case 3724:
case 3583:
case 3828:
case 2689:
case 902:
case 2281:
case 3882:
case 1308:
case 1535:
case 1142:
case 1686:
case 722:
case 1313:
case 3991:
case 3191:
case 4028:
case 3054:
case 3164:
case 1525:
case 3209:
case 3665:
case 3874:
case 2422:
case 723:
case 2090:
case 3778:
case 74:
case 1549:
case 1064:
case 3838:
case 3734:
case 903:
case 2488:
case 57:
case 2068:
case 402:
case 1657:
case 1506:
case 2310:
case 3246:
case 683:
case 3796:
case 2509:
case 3618:
case 382:
case 1527:
case 2902:
case 248:
case 564:
case 2348:
case 206:
case 383:
case 403:
case 3581:
case 2283:
case 1093:
case 3275:
case 563:
case 4095:
case 198:
case 1334:
case 384:
case 2561:
case 2019:
case 2687:
case 3630:
case 3916:
case 308:
case 646:
case 3620:
case 608:
case 3236:
case 3804:
case 684:
case 145:
case 95:
case 1576:
case 1212:
case 2507:
case 2656:
case 3752:
case 988:
case 137:
case 436:
case 670:
case 3673:
case 779:
case 3744:
case 1988:
case 3711:
case 3490:
case 233:
case 2184:
case 2579:
case 2526:
case 2172:
case 1762:
case 2862:
case 581:
case 370:
case 1545:
case 3417:
case 3810:
case 2250:
case 2442:
case 2747:
case 1252:
case 1794:
case 1847:
case 2798:
case 654:
case 3375:
case 3187:
case 3021:
case 2130:
case 3751:
case 919:
case 1211:
case 2297:
case 1467:
case 1970:
case 870:
case 1244:
case 1619:
case 507:
case 2414:
case 2441:
case 3262:
case 585:
case 3457:
case 2861:
case 2920:
case 3031:
case 3850:
case 2971:
case 120:
case 3510:
case 2863:
case 19:
case 1829:
case 2973:
case 3377:
case 279:
case 1726:
case 3309:
case 30:
case 551:
case 2295:
case 733:
case 2826:
case 3156:
case 3956:
case 3066:
case 1736:
case 3486:
case 1208:
case 460:
case 1923:
case 732:
case 2836:
case 2169:
case 2969:
case 3548:
case 2776:
case 1166:
case 1839:
case 1966:
case 141:
case 2739:
case 3023:
case 2807:
case 1746:
case 1089:
case 2299:
case 1469:
case 3361:
case 2846:
case 3305:
case 2350:
case 3000:
case 2055:
case 3189:
case 1849:
case 1825:
case 2749:
case 211:
case 471:
case 2086:
case 1100:
case 967:
case 3459:
case 3043:
case 223:
case 1775:
case 2165:
case 882:
case 1668:
case 2433:
case 1143:
case 1943:
case 3883:
case 365:
case 3192:
case 3992:
case 1615:
case 2228:
case 2431:
case 2118:
case 1914:
case 3881:
case 1224:
case 1941:
case 1141:
case 2903:
case 1092:
case 3379:
case 1471:
case 971:
case 652:
case 1827:
case 1353:
case 3336:
case 1278:
case 1430:
case 3326:
case 2140:
case 2940:
case 166:
case 2274:
case 861:
case 926:
case 2167:
case 2470:
case 3363:
case 2421:
case 2877:
case 1806:
case 103:
case 3201:
case 376:
case 763:
case 825:
case 1680:
case 4093:
case 1702:
case 393:
case 313:
case 207:
case 3384:
case 755:
case 612:
case 2802:
case 285:
case 2681:
case 1099:
case 175:
case 2540:
case 3715:
case 613:
case 3408:
case 1286:
case 2567:
case 2096:
case 102:
case 3999:
case 676:
case 430:
case 3413:
case 1074:
case 3444:
case 3790:
case 2078:
case 3240:
case 2034:
case 3675:
case 1038:
case 3864:
case 3891:
case 1257:
case 2024:
case 781:
case 2742:
case 3717:
case 1028:
case 1842:
case 3203:
case 1758:
case 930:
case 7:
case 2565:
case 1854:
case 2501:
case 4091:
case 3218:
case 1082:
case 2858:
case 3128:
case 3928:
case 2754:
case 2732:
case 3271:
case 3910:
case 3220:
case 3679:
case 2573:
case 200:
case 522:
case 335:
case 511:
case 591:
case 2962:
case 3424:
case 3556:
case 3663:
case 54:
case 2884:
case 523:
case 2052:
case 1888:
case 3302:
case 1784:
case 1566:
case 2287:
case 918:
case 2044:
case 3478:
case 77:
case 3626:
case 136:
case 1048:
case 1822:
case 1004:
case 3358:
case 694:
case 2530:
case 3587:
case 1317:
case 2391:
case 3269:
case 1521:
case 3605:
case 2256:
case 1612:
case 3195:
case 2364:
case 347:
case 188:
case 937:
case 3719:
case 314:
case 3273:
case 1095:
case 2520:
case 4016:
case 1651:
case 278:
case 760:
case 2533:
case 432:
case 2315:
case 100:
case 3639:
case 1962:
case 1162:
case 2772:
case 1573:
case 1732:
case 3482:
case 25:
case 669:
case 3474:
case 369:
case 2048:
case 2822:
case 527:
case 1044:
case 1011:
case 2097:
case 1052:
case 3645:
case 3944:
case 1788:
case 3629:
case 1393:
case 3270:
case 3908:
case 3108:
case 2570:
case 2521:
case 828:
case 1650:
case 3342:
case 2317:
case 3499:
case 3913:
case 3223:
case 932:
case 1008:
case 758:
case 342:
case 1530:
case 3266:
case 1013:
case 62:
case 3354:
case 643:
case 1520:
case 2651:
case 178:
case 1571:
case 288:
case 2531:
case 3698:
case 3233:
case 1256:
case 4019:
case 1802:
case 344:
case 3793:
case 107:
case 2514:
case 1503:
case 386:
case 3322:
case 203:
case 934:
case 397:
case 697:
case 1096:
case 202:
case 275:
case 2099:
case 1540:
case 1289:
case 3200:
case 2255:
case 3196:
case 2500:
case 906:
case 3178:
case 856:
case 4090:
case 151:
case 3764:
case 589:
case 1316:
case 1034:
case 51:
case 3635:
case 434:
case 4068:
case 1078:
case 2319:
case 2074:
case 3448:
case 3890:
case 3134:
case 4017:
case 1858:
case 3625:
case 541:
case 1292:
case 1754:
case 3241:
case 2758:
case 1565:
case 3924:
case 3214:
case 3410:
case 2842:
case 915:
case 995:
case 1024:
case 111:
case 191:
case 3155:
case 2100:
case 1086:
case 2900:
case 1846:
case 1350:
case 3186:
case 55:
case 1055:
case 2746:
case 1299:
case 2469:
case 1664:
case 1901:
case 1101:
case 963:
case 1965:
case 1165:
case 3398:
case 601:
case 3783:
case 3456:
case 536:
case 1433:
case 3001:
case 14:
case 123:
case 805:
case 3485:
case 2690:
case 1735:
case 2827:
case 2353:
case 3157:
case 3003:
case 2092:
case 2420:
case 1727:
case 1282:
case 639:
case 2471:
case 9:
case 2114:
case 2224:
case 462:
case 1103:
case 2941:
case 3781:
case 1228:
case 1118:
case 357:
case 588:
case 3040:
case 949:
case 2777:
case 1967:
case 4080:
case 1421:
case 3329:
case 1693:
case 455:
case 339:
case 2837:
case 266:
case 2278:
case 1737:
case 3851:
case 2170:
case 2970:
case 3508:
case 2619:
case 2244:
case 4012:
case 880:
case 368:
case 2860:
case 1248:
case 798:
case 718:
case 2847:
case 1798:
case 1894:
case 1383:
case 1616:
case 2898:
case 2440:
case 3812:
case 2252:
case 1920:
case 1120:
case 1210:
case 1971:
case 1171:
case 2761:
case 745:
case 3750:
case 86:
case 1861:
case 2705:
case 2931:
case 668:
case 1414:
case 1441:
case 2465:
case 1295:
case 1826:
case 2085:
case 2133:
case 2933:
case 1059:
case 179:
case 2726:
case 1562:
case 2763:
case 2845:
case 2056:
case 1729:
case 3306:
case 737:
case 3959:
case 350:
case 29:
case 47:
case 21:
case 2829:
case 1739:
case 2876:
case 1807:
case 650:
case 2839:
case 2166:
case 4053:
case 1400:
case 1204:
case 2123:
case 2213:
case 1836:
case 1969:
case 874:
case 759:
case 3511:
case 2208:
case 2378:
case 1019:
case 567:
case 2402:
case 218:
case 478:
case 2334:
case 3245:
case 3229:
case 1505:
case 374:
case 3621:
case 3493:
case 2324:
case 674:
case 2598:
case 245:
case 1594:
case 3813:
case 850:
case 900:
case 2560:
case 629:
case 3551:
case 4052:
case 3748:
case 1984:
case 36:
case 1579:
case 2988:
case 3553:
case 1685:
case 2539:
case 3084:
case 237:
case 3247:
case 526:
case 2212:
case 978:
case 4044:
case 1507:
case 2122:
case 4011:
case 3633:
case 71:
case 1250:
case 1563:
case 1442:
case 2132:
case 3710:
case 3072:
case 741:
case 3666:
case 132:
case 400:
case 1526:
case 1454:
case 1172:
case 2762:
case 1972:
case 2313:
case 3117:
case 3917:
case 985:
case 3227:
case 560:
case 3058:
case 2308:
case 4024:
case 2142:
case 2942:
case 2154:
case 2954:
case 2472:
case 1158:
case 2655:
case 3600:
case 727:
case 2064:
case 2484:
case 599:
case 519:
case 3237:
case 1422:
case 1090:
case 3168:
case 2549:
case 907:
case 3774:
case 2525:
case 3643:
case 1692:
case 3915:
case 3115:
case 1509:
case 673:
case 3896:
case 485:
case 2537:
case 3641:
case 1310:
case 3416:
case 316:
case 396:
case 672:
case 766:
case 373:
case 1348:
case 1909:
case 1447:
case 155:
case 2494:
case 1264:
case 2268:
case 3180:
case 2937:
case 2137:
case 163:
case 656:
case 1867:
case 1977:
case 1460:
case 2290:
case 598:
case 2906:
case 2106:
case 1080:
case 1385:
case 1714:
case 162:
case 4057:
case 3792:
case 63:
case 2814:
case 3254:
case 356:
case 2841:
case 3450:
case 3323:
case 1699:
case 1502:
case 2127:
case 1291:
case 2461:
case 3517:
case 1445:
case 44:
case 2634:
case 423:
case 2463:
case 1638:
case 1429:
case 1674:
case 149:
case 226:
case 2554:
case 1801:
case 1558:
case 1387:
case 2436:
case 3590:
case 1946:
case 1:
case 491:
case 3568:
case 2949:
case 817:
case 897:
case 1700:
case 3046:
case 2125:
case 1584:
case 2769:
case 82:
case 843:
case 3007:
case 2939:
case 1425:
case 3314:
case 2176:
case 3341:
case 75:
case 1963:
case 1163:
case 2773:
case 2219:
case 3859:
case 424:
case 2129:
case 3785:
case 736:
case 28:
case 3026:
case 2145:
case 2945:
case 328:
case 3483:
case 1733:
case 1926:
case 479:
case 299:
case 2652:
case 1216:
case 3481:
case 2355:
case 2613:
case 1961:
case 2608:
case 1105:
case 1871:
case 1905:
case 2998:
case 3112:
case 1695:
case 2730:
case 2947:
case 1051:
case 2147:
case 788:
case 924:
case 2477:
case 2160:
case 979:
case 890:
case 3951:
case 3094:
case 2838:
case 2734:
case 509:
case 1834:
case 3068:
case 334:
case 1774:
case 2164:
case 2601:
case 1878:
case 2209:
case 1237:
case 2665:
case 2874:
case 3395:
case 1168:
case 2882:
case 3432:
case 1117:
case 1917:
case 2054:
case 634:
case 2042:
case 2828:
case 1824:
case 3017:
case 1728:
case 1002:
case 2581:
case 2640:
case 277:
case 196:
case 938:
case 3283:
case 2275:
case 3102:
case 348:
case 615:
case 283:
case 444:
case 2419:
case 1614:
case 2796:
case 1580:
case 1641:
case 1915:
case 3509:
case 1225:
case 2618:
case 648:
case 2899:
case 823:
case 84:
case 3310:
case 2246:
case 2415:
case 1631:
case 3594:
case 3328:
case 879:
case 1512:
case 3382:
case 2279:
case 1551:
case 1813:
case 3687:
case 2630:
case 3374:
case 208:
case 2895:
case 129:
case 1670:
case 1229:
case 3505:
case 1119:
case 1919:
case 1621:
case 2263:
case 1245:
case 284:
case 3561:
case 270:
case 490:
case 410:
case 1623:
case 2417:
case 3399:
case 2261:
case 2810:
case 2205:
case 3526:
case 3454:
case 3972:
case 1666:
case 332:
case 525:
case 632:
case 2673:
case 2022:
case 2711:
case 1260:
case 1797:
case 3536:
case 1844:
case 1811:
case 3984:
case 3579:
case 943:
case 1852:
case 3507:
case 3656:
case 1298:
case 2752:
case 469:
case 1084:
case 1026:
case 3873:
case 128:
case 2885:
case 1859:
case 1785:
case 3435:
case 3126:
case 2045:
case 2856:
case 4073:
case 968:
case 2029:
case 878:
case 735:
case 3936:
case 1953:
case 3723:
case 3179:
case 1314:
case 3766:
case 1036:
case 3449:
case 3053:
case 3107:
case 4069:
case 2662:
case 2301:
case 1343:
case 3830:
case 3994:
case 2887:
case 794:
case 2060:
case 950:
case 2480:
case 3437:
case 2284:
case 1151:
case 583:
case 1951:
case 3770:
case 747:
case 3721:
case 664:
case 1005:
case 231:
case 2272:
case 1481:
case 4020:
case 4071:
case 3820:
case 3105:
case 3871:
case 3905:
case 1519:
case 3161:
case 3961:
case 1232:
case 2181:
case 1792:
case 156:
case 901:
case 1366:
case 2892:
case 3714:
case 362:
case 2258:
case 1323:
case 721:
case 3699:
case 3502:
case 792:
case 1450:
case 4003:
case 2757:
case 713:
case 793:
case 1980:
case 2412:
case 1333:
case 3356:
case 439:
case 355:
case 3460:
case 662:
case 3385:
case 584:
case 1009:
case 363:
case 3867:
case 13:
case 2025:
case 3682:
case 1886:
case 2049:
case 401:
case 1590:
case 1046:
case 1331:
case 2564:
case 1855:
case 381:
case 3476:
case 2755:
case 939:
case 1321:
case 1517:
case 681:
case 2591:
case 3445:
case 3975:
case 2983:
case 2183:
case 2330:
case 885:
case 349:
case 3743:
case 2999:
case 1627:
case 1332:
case 554:
case 1815:
case 849:
case 212:
case 3681:
case 607:
case 2372:
case 1388:
case 1557:
case 685:
case 144:
case 2201:
case 416:
case 197:
case 117:
case 496:
case 276:
case 3503:
case 487:
case 2265:
case 1495:
case 1241:
case 2203:
case 855:
case 1924:
case 1649:
case 1214:
case 3501:
case 2218:
case 3292:
case 3754:
case 651:
case 1817:
case 863:
case 240:
case 2646:
case 1791:
case 2982:
case 1410:
case 2717:
case 972:
case 2974:
case 1764:
case 2452:
case 3316:
case 3034:
case 3683:
case 1555:
case 50:
case 1978:
case 1178:
case 138:
case 1448:
case 1890:
case 2938:
case 1635:
case 2790:
case 2267:
case 2411:
case 2230:
case 3011:
case 2626:
case 1474:
case 1152:
case 974:
case 4084:
case 1221:
case 1629:
case 1270:
case 1111:
case 929:
case 1911:
case 1645:
case 2948:
case 3569:
case 2148:
case 600:
case 1639:
case 1231:
case 1428:
case 3162:
case 3732:
case 190:
case 110:
case 2910:
case 2679:
case 1062:
case 3573:
case 480:
case 2636:
case 2719:
case 474:
case 3520:
case 378:
case 1698:
case 3256:
case 2195:
case 2995:
case 1716:
case 1647:
case 552:
case 3391:
case 2269:
case 2661:
case 1908:
case 87:
case 1342:
case 3013:
case 1354:
case 3008:
case 1266:
case 2457:
case 254:
case 3120:
case 2346:
case 2850:
case 3971:
case 3805:
case 3171:
case 4005:
case 1492:
case 4061:
case 1071:
case 512:
case 592:
case 2751:
case 3248:
case 2504:
case 4094:
case 593:
case 1851:
case 3760:
case 1508:
case 746:
case 3616:
case 3747:
case 2070:
case 3798:
case 2375:
case 928:
case 3894:
case 576:
case 3130:
case 2021:
case 3776:
case 770:
case 624:
case 2455:
case 3400:
case 3739:
case 3381:
case 1552:
case 2023:
case 2672:
case 4079:
case 1544:
case 3879:
case 2597:
case 1511:
case 1632:
case 1327:
case 679:
case 2548:
case 3059:
case 379:
case 2309:
case 3443:
case 20:
case 1073:
case 3295:
case 1337:
case 2956:
case 4026:
case 1959:
case 3863:
case 3745:
case 428:
case 3973:
case 2185:
case 3729:
case 815:
case 1783:
case 1456:
case 2883:
case 4075:
case 2459:
case 323:
case 4046:
case 3725:
case 2574:
case 2658:
case 535:
case 3466:
case 322:
case 1578:
case 311:
case 1155:
case 3423:
case 2361:
case 761:
case 848:
case 777:
case 3421:
case 3238:
case 2602:
case 1040:
case 43:
case 4077:
case 2780:
case 3737:
case 783:
case 3140:
case 3274:
case 834:
case 2014:
case 782:
case 1157:
case 2041:
case 1957:
case 265:
case 2992:
case 1781:
case 3228:
case 1339:
case 456:
case 2881:
case 2307:
case 3903:
case 3351:
case 1043:
case 2360:
case 2485:
case 3690:
case 2347:
case 1528:
case 1883:
case 2524:
case 2398:
case 3312:
case 590:
case 201:
case 2642:
case 4049:
case 2986:
case 3746:
case 2534:
case 3469:
case 3825:
case 2578:
case 1574:
case 3709:
case 239:
case 3837:
case 366:
case 2487:
case 4006:
case 152:
case 2596:
case 3430:
case 1602:
case 3806:
case 787:
case 3777:
case 4037:
case 2329:
case 3114:
case 3224:
case 3941:
case 3141:
case 2781:
case 1992:
case 2339:
case 542:
case 3827:
case 1014:
case 2003:
case 2157:
case 2957:
case 1041:
case 925:
case 3092:
case 3420:
case 153:
case 3931:
case 837:
case 1031:
case 1346:
case 3761:
case 3705:
case 154:
case 4060:
case 1712:
case 597:
case 3898:
case 3440:
case 586:
case 3252:
case 2812:
case 774:
case 3794:
case 3211:
case 3970:
case 3467:
case 3244:
case 3121:
case 2030:
case 3921:
case 2513:
case 268:
case 544:
case 1504:
case 4039:
case 3923:
case 3123:
case 2853:
case 3779:
case 931:
case 898:
case 2544:
case 1066:
case 3736:
case 689:
case 1597:
case 2511:
case 1753:
case 61:
case 2552:
case 1023:
case 1672:
case 3166:
case 3966:
case 1455:
case 3845:
case 2688:
case 641:
case 1985:
case 1185:
case 1033:
case 2306:
case 2159:
case 1684:
case 3829:
case 2073:
case 389:
case 845:
case 4029:
case 3085:
case 76:
case 3133:
case 3933:
case 1309:
case 3888:
case 2645:
case 1302:
case 1948:
case 1148:
case 2438:
case 1663:
case 2944:
case 858:
case 2629:
case 946:
case 1626:
case 2474:
case 2952:
case 2152:
case 65:
case 3048:
case 3566:
case 1230:
case 984:
case 1636:
case 3653:
case 1585:
case 290:
case 210:
case 2482:
case 1271:
case 1110:
case 1220:
case 501:
case 2062:
case 2676:
case 1424:
case 3533:
case 1556:
case 3315:
case 4032:
case 2639:
case 3010:
case 2231:
case 2428:
case 3772:
case 2716:
case 3531:
case 2647:
case 147:
case 446:
case 2698:
case 2233:
case 539:
case 304:
case 3612:
case 3368:
case 1195:
case 3259:
case 2660:
case 860:
case 1719:
case 114:
case 3390:
case 3095:
case 970:
case 1358:
case 819:
case 242:
case 1496:
case 2354:
case 2908:
case 2342:
case 3317:
case 1269:
case 2913:
case 1661:
case 1104:
case 375:
case 3099:
case 1372:
case 192:
case 2996:
case 1999:
case 2627:
case 961:
case 2404:
case 1408:
case 3286:
case 302:
case 756:
case 3514:
case 3541:
case 1609:
case 1592:
case 1201:
case 871:
case 477:
case 297:
case 217:
case 2388:
case 483:
case 568:
case 2557:
case 3702:
case 113:
case 675:
case 140:
case 1646:
case 2410:
case 3028:
case 4054:
case 3842:
case 2817:
case 982:
case 2625:
case 3082:
case 1218:
case 1128:
case 1928:
case 1203:
case 3758:
case 2124:
case 461:
case 2214:
case 1444:
case 550:
case 2586:
case 2635:
case 2497:
case 1790:
case 977:
case 3319:
case 2890:
case 2934:
case 2134:
case 1675:
case 3038:
case 2178:
case 1768:
case 1174:
case 983:
case 2868:
case 1240:
case 4014:
case 1593:
case 3405:
case 2450:
case 4041:
case 2323:
case 3081:
case 667:
case 453:
case 3127:
case 1369:
case 2857:
case 1892:
case 3696:
case 1981:
case 3814:
case 1027:
case 3718:
case 2009:
case 23:
case 786:
case 3767:
case 3906:
case 717:
case 797:
case 2515:
case 3740:
case 3494:
case 3268:
case 2180:
case 2333:
case 3937:
case 3137:
case 529:
case 803:
case 3949:
case 2568:
case 3149:
case 3407:
case 1755:
case 2331:
case 3925:
case 1564:
case 3800:
case 2855:
case 1049:
case 3436:
case 2590:
case 1453:
case 1320:
case 1025:
case 2886:
case 1371:
case 3479:
case 626:
case 3426:
case 3701:
case 3554:
case 875:
case 1983:
case 1183:
case 3678:
case 3634:
case 1202:
case 802:
case 3463:
case 2075:
case 671:
case 56:
case 3083:
case 2063:
case 2756:
case 1340:
case 319:
case 3219:
case 769:
case 1367:
case 3129:
case 3929:
case 1759:
case 109:
case 2026:
case 3145:
case 3945:
case 228:
case 3939:
case 4023:
case 804:
case 954:
case 1662:
case 2079:
case 1318:
case 2314:
case 3976:
case 710:
case 790:
case 1303:
case 888:
case 699:
case 3769:
case 3823:
case 1076:
case 2153:
case 3477:
case 3160:
case 573:
case 90:
case 1284:
case 2151:
case 1047:
case 3998:
case 3198:
case 1060:
case 1480:
case 4021:
case 516:
case 596:
case 3409:
case 2343:
case 3947:
case 1887:
case 3613:
case 4031:
case 3771:
case 2232:
case 3608:
case 454:
case 2519:
case 572:
case 3355:
case 2300:
case 836:
case 3050:
case 2005:
case 131:
case 3253:
case 2813:
case 1804:
case 81:
case 1279:
case 2551:
case 1713:
case 1620:
case 1671:
case 1207:
case 3324:
case 3598:
case 2276:
case 2512:
case 3547:
case 1415:
case 2239:
case 318:
case 398:
case 3334:
case 184:
case 645:
case 2670:
case 2493:
case 108:
case 1895:
case 2666:
case 3396:
case 1032:
case 1205:
case 3545:
case 3932:
case 1417:
case 2623:
case 637:
case 1261:
case 1669:
case 1752:
case 2464:
case 3539:
case 994:
case 2084:
case 2247:
case 337:
case 750:
case 2852:
case 2844:
case 3659:
case 2811:
case 1897:
case 659:
case 1673:
case 1744:
case 3188:
case 3988:
case 820:
case 1022:
case 947:
case 1711:
case 2260:
case 1848:
case 1490:
case 993:
case 2237:
case 1665:
case 1874:
case 3280:
case 1778:
case 2968:
case 1601:
case 2878:
case 528:
case 976:
case 2990:
case 3064:
case 1838:
case 2824:
case 3091:
case 701:
case 3954:
case 3472:
case 1724:
case 161:
case 3655:
case 440:
case 3313:
case 2117:
case 2917:
case 1991:
case 921:
case 1054:
case 2058:
case 3142:
case 3942:
case 3344:
case 1667:
case 183:
case 3311:
case 413:
case 287:
case 3093:
case 1275:
case 2002:
case 216:
case 296:
case 3657:
case 757:
case 3506:
case 2915:
case 1362:
case 2896:
case 940:
case 2614:
case 272:
case 1603:
case 2641:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747375201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,];
var gg_b = "1747375201/";

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
