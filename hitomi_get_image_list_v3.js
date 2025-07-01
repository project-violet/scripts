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
case 1795:
case 931:
case 3433:
case 599:
case 2929:
case 4051:
case 2360:
case 2372:
case 2662:
case 2117:
case 2670:
case 327:
case 1494:
case 1258:
case 2933:
case 2720:
case 161:
case 1411:
case 400:
case 742:
case 4041:
case 1810:
case 3128:
case 307:
case 1248:
case 1832:
case 2786:
case 511:
case 78:
case 2888:
case 1496:
case 942:
case 3773:
case 2071:
case 1558:
case 1069:
case 3288:
case 3623:
case 1321:
case 3871:
case 1182:
case 2779:
case 1548:
case 2102:
case 3088:
case 3462:
case 2485:
case 2271:
case 763:
case 569:
case 1405:
case 2629:
case 2970:
case 363:
case 615:
case 25:
case 927:
case 6:
case 4053:
case 3247:
case 85:
case 3057:
case 2931:
case 77:
case 106:
case 2886:
case 2396:
case 1498:
case 2847:
case 3020:
case 1150:
case 2134:
case 2230:
case 3220:
case 3124:
case 584:
case 1199:
case 1895:
case 3047:
case 2820:
case 907:
case 3086:
case 469:
case 2421:
case 2857:
case 1554:
case 892:
case 1804:
case 2879:
case 38:
case 646:
case 474:
case 2073:
case 3345:
case 3771:
case 292:
case 82:
case 1046:
case 3279:
case 1460:
case 957:
case 1861:
case 2007:
case 3180:
case 3621:
case 2631:
case 3084:
case 2207:
case 4009:
case 475:
case 1246:
case 3079:
case 500:
case 2788:
case 80:
case 1763:
case 393:
case 411:
case 1056:
case 2273:
case 156:
case 2824:
case 298:
case 566:
case 537:
case 2992:
case 605:
case 1837:
case 624:
case 3681:
case 116:
case 1299:
case 3526:
case 3738:
case 2728:
case 1099:
case 1383:
case 4045:
case 1893:
case 2575:
case 1250:
case 2377:
case 1040:
case 625:
case 3186:
case 3834:
case 2036:
case 2173:
case 3226:
case 3343:
case 145:
case 1540:
case 1651:
case 717:
case 1146:
case 1187:
case 81:
case 3702:
case 3875:
case 3179:
case 1464:
case 21:
case 2349:
case 3184:
case 268:
case 1550:
case 2534:
case 144:
case 596:
case 1401:
case 868:
case 3026:
case 1156:
case 2390:
case 1527:
case 1148:
case 2017:
case 835:
case 521:
case 3476:
case 2828:
case 235:
case 2935:
case 3734:
case 3252:
case 1459:
case 1814:
case 1158:
case 3028:
case 2301:
case 3052:
case 3817:
case 1891:
case 2724:
case 3242:
case 649:
case 2674:
case 2217:
case 1718:
case 2171:
case 2989:
case 330:
case 3736:
case 2974:
case 3341:
case 466:
case 1653:
case 1865:
case 2202:
case 109:
case 748:
case 2676:
case 3542:
case 3351:
case 2483:
case 2315:
case 3294:
case 1671:
case 3190:
case 3458:
case 2245:
case 3596:
case 251:
case 1097:
case 2958:
case 1721:
case 3845:
case 3149:
case 67:
case 2153:
case 33:
case 498:
case 2922:
case 2055:
case 1562:
case 3448:
case 2255:
case 1135:
case 1839:
case 3932:
case 3719:
case 1176:
case 3307:
case 2410:
case 1297:
case 2948:
case 3855:
case 1029:
case 3159:
case 2143:
case 3373:
case 657:
case 2648:
case 1062:
case 2896:
case 914:
case 3963:
case 3177:
case 4036:
case 221:
case 535:
case 3005:
case 3908:
case 821:
case 2463:
case 9:
case 801:
case 915:
case 2622:
case 3205:
case 2320:
case 1597:
case 1885:
case 1971:
case 1395:
case 971:
case 534:
case 1189:
case 2805:
case 2772:
case 1174:
case 3469:
case 41:
case 1912:
case 3819:
case 1739:
case 4038:
case 3298:
case 3454:
case 2406:
case 152:
case 1231:
case 1723:
case 4017:
case 2219:
case 1308:
case 2646:
case 3572:
case 2898:
case 2954:
case 1447:
case 896:
case 2019:
case 296:
case 16:
case 568:
case 2495:
case 642:
case 1031:
case 1420:
case 51:
case 2141:
case 3213:
case 1192:
case 210:
case 3661:
case 3371:
case 1821:
case 2944:
case 2956:
case 2519:
case 3961:
case 2644:
case 3695:
case 314:
case 866:
case 3904:
case 2705:
case 2461:
case 266:
case 598:
case 1785:
case 3513:
case 1332:
case 2796:
case 1630:
case 631:
case 1178:
case 3060:
case 3072:
case 3:
case 820:
case 1365:
case 1292:
case 2418:
case 592:
case 487:
case 1316:
case 2749:
case 1567:
case 3753:
case 2051:
case 1578:
case 3440:
case 3066:
case 3266:
case 2251:
case 1131:
case 2927:
case 2119:
case 3564:
case 2493:
case 2950:
case 2866:
case 3851:
case 749:
case 3743:
case 2041:
case 108:
case 50:
case 3450:
case 1314:
case 1278:
case 2768:
case 3064:
case 2703:
case 2627:
case 1426:
case 1592:
case 250:
case 4071:
case 2541:
case 55:
case 158:
case 304:
case 648:
case 2864:
case 284:
case 3709:
case 1881:
case 1391:
case 3172:
case 884:
case 2342:
case 2551:
case 1480:
case 305:
case 3111:
case 1197:
case 705:
case 1428:
case 3090:
case 1235:
case 2155:
case 3843:
case 2859:
case 724:
case 2053:
case 2766:
case 2890:
case 3577:
case 2682:
case 1133:
case 1442:
case 3249:
case 1076:
case 869:
case 954:
case 462:
case 1300:
case 2491:
case 1602:
case 269:
case 1035:
case 4012:
case 3194:
case 3503:
case 2145:
case 3336:
case 2849:
case 725:
case 477:
case 1825:
case 3741:
case 3991:
case 3077:
case 1576:
case 3068:
case 3482:
case 904:
case 2416:
case 2764:
case 4007:
case 1617:
case 42:
case 1318:
case 1170:
case 1638:
case 1337:
case 617:
case 899:
case 2982:
case 2701:
case 2465:
case 3105:
case 925:
case 2543:
case 587:
case 3559:
case 3916:
case 492:
case 1902:
case 2324:
case 1781:
case 3334:
case 211:
case 905:
case 811:
case 40:
case 1074:
case 1883:
case 3549:
case 3277:
case 2803:
case 2057:
case 2812:
case 3134:
case 3847:
case 3230:
case 1095:
case 263:
case 1206:
case 35:
case 1419:
case 1193:
case 1504:
case 863:
case 2579:
case 1998:
case 2047:
case 3820:
case 1370:
case 1118:
case 2086:
case 1913:
case 524:
case 3857:
case 362:
case 2220:
case 2124:
case 505:
case 666:
case 3573:
case 2257:
case 1137:
case 2921:
case 637:
case 4059:
case 1769:
case 4077:
case 2586:
case 1204:
case 1100:
case 1856:
case 3007:
case 32:
case 3512:
case 2621:
case 2284:
case 3175:
case 88:
case 1960:
case 1972:
case 1613:
case 3136:
case 3073:
case 610:
case 3394:
case 2771:
case 392:
case 787:
case 1846:
case 893:
case 1698:
case 1397:
case 1887:
case 2084:
case 3631:
case 30:
case 554:
case 2355:
case 2685:
case 1445:
case 70:
case 227:
case 743:
case 549:
case 1605:
case 2429:
case 827:
case 95:
case 1994:
case 1858:
case 1744:
case 387:
case 1508:
case 2142:
case 2433:
case 3360:
case 3372:
case 1822:
case 3929:
case 455:
case 2588:
case 3117:
case 1911:
case 3423:
case 2712:
case 1848:
case 2730:
case 621:
case 1696:
case 807:
case 3439:
case 962:
case 2923:
case 72:
case 207:
case 1787:
case 425:
case 992:
case 1746:
case 777:
case 1208:
case 1331:
case 3697:
case 3398:
case 1611:
case 857:
case 2639:
case 1263:
case 3071:
case 3485:
case 75:
case 1063:
case 1756:
case 1532:
case 943:
case 3629:
case 3313:
case 651:
case 1510:
case 2871:
case 2985:
case 1008:
case 27:
case 405:
case 87:
case 2734:
case 1750:
case 611:
case 1565:
case 2683:
case 1132:
case 3976:
case 1727:
case 1603:
case 2228:
case 768:
case 1516:
case 2042:
case 1378:
case 675:
case 1990:
case 2838:
case 2028:
case 3238:
case 3301:
case 3842:
case 1799:
case 2052:
case 334:
case 3724:
case 2925:
case 446:
case 674:
case 1216:
case 669:
case 2474:
case 2528:
case 3171:
case 414:
case 189:
case 2775:
case 1659:
case 1163:
case 3315:
case 1591:
case 3517:
case 1016:
case 2542:
case 1108:
case 3366:
case 1903:
case 4072:
case 2681:
case 248:
case 2120:
case 3034:
case 2492:
case 1601:
case 2157:
case 2738:
case 684:
case 1664:
case 1093:
case 514:
case 1389:
case 3992:
case 165:
case 1915:
case 1106:
case 3377:
case 3678:
case 3667:
case 3368:
case 1500:
case 1850:
case 2147:
case 3728:
case 1966:
case 5:
case 3303:
case 3536:
case 2024:
case 3234:
case 2080:
case 1666:
case 3107:
case 2467:
case 481:
case 1000:
case 1335:
case 3967:
case 600:
case 3173:
case 3036:
case 2343:
case 3359:
case 2524:
case 3275:
case 368:
case 3481:
case 3534:
case 1964:
case 1161:
case 735:
case 3692:
case 3390:
case 2981:
case 179:
case 1104:
case 2179:
case 2836:
case 2353:
case 3349:
case 1782:
case 2184:
case 643:
case 2166:
case 1412:
case 2572:
case 3646:
case 3687:
case 3388:
case 4042:
case 3898:
case 3954:
case 2906:
case 2819:
case 2013:
case 2454:
case 1430:
case 417:
case 2213:
case 310:
case 2661:
case 692:
case 3794:
case 4052:
case 3944:
case 2745:
case 721:
case 62:
case 153:
case 3495:
case 1620:
case 430:
case 1181:
case 214:
case 3860:
case 3872:
case 2101:
case 1358:
case 1770:
case 2260:
case 2164:
case 3644:
case 8:
case 1521:
case 123:
case 215:
case 901:
case 2060:
case 2:
case 2072:
case 2446:
case 751:
case 2487:
case 1473:
case 871:
case 3796:
case 271:
case 2845:
case 197:
case 3894:
case 23:
case 2149:
case 3379:
case 530:
case 3245:
case 2458:
case 2190:
case 1833:
case 2596:
case 3713:
case 2011:
case 2855:
case 3798:
case 996:
case 3948:
case 2159:
case 4024:
case 3255:
case 2448:
case 910:
case 3811:
case 1223:
case 2307:
case 3410:
case 1988:
case 2005:
case 2103:
case 3545:
case 281:
case 3347:
case 966:
case 937:
case 3386:
case 3896:
case 2177:
case 2963:
case 517:
case 3805:
case 2469:
case 3555:
case 3658:
case 1285:
case 1539:
case 2096:
case 2205:
case 1870:
case 1862:
case 2511:
case 3969:
case 301:
case 920:
case 3155:
case 3509:
case 557:
case 463:
case 3859:
case 1123:
case 3053:
case 1928:
case 3766:
case 3414:
case 1835:
case 2111:
case 3243:
case 2259:
case 1876:
case 4020:
case 2914:
case 2090:
case 3145:
case 1942:
case 270:
case 2853:
case 1792:
case 3849:
case 2665:
case 3043:
case 1583:
case 2991:
case 870:
case 2741:
case 2375:
case 3380:
case 4047:
case 3253:
case 2249:
case 2616:
case 1417:
case 369:
case 1185:
case 1889:
case 3982:
case 3543:
case 2916:
case 2105:
case 3465:
case 1083:
case 1874:
case 3324:
case 374:
case 634:
case 399:
case 700:
case 2077:
case 1340:
case 2068:
case 849:
case 527:
case 2965:
case 3764:
case 442:
case 3209:
case 1402:
case 950:
case 1525:
case 3009:
case 4084:
case 3553:
case 2277:
case 635:
case 4079:
case 1283:
case 2590:
case 3877:
case 1628:
case 2203:
case 880:
case 1924:
case 188:
case 58:
case 3418:
case 139:
case 2753:
case 61:
case 3999:
case 2440:
case 1680:
case 2937:
case 668:
case 2113:
case 427:
case 542:
case 2499:
case 775:
case 3437:
case 2427:
case 3866:
case 2501:
case 2743:
case 2993:
case 407:
case 2450:
case 1434:
case 254:
case 1581:
case 3251:
case 3927:
case 3815:
case 2564:
case 799:
case 1735:
case 3328:
case 1878:
case 3703:
case 2001:
case 1867:
case 204:
case 225:
case 531:
case 2064:
case 2618:
case 384:
case 1774:
case 805:
case 2160:
case 3342:
case 911:
case 3801:
case 2566:
case 1475:
case 1624:
case 224:
case 1281:
case 2900:
case 975:
case 3864:
case 2201:
case 3699:
case 1980:
case 2637:
case 1654:
case 1796:
case 883:
case 1946:
case 797:
case 3473:
case 283:
case 4082:
case 936:
case 967:
case 802:
case 2973:
case 409:
case 2612:
case 2310:
case 323:
case 303:
case 2484:
case 429:
case 686:
case 34:
case 1956:
case 822:
case 2479:
case 516:
case 3770:
case 137:
case 3358:
case 3657:
case 166:
case 1461:
case 1705:
case 3322:
case 3620:
case 89:
case 3181:
case 3684:
case 353:
case 3221:
case 3957:
case 26:
case 3733:
case 196:
case 1813:
case 560:
case 3920:
case 3369:
case 1944:
case 2821:
case 818:
case 2192:
case 2420:
case 3797:
case 1711:
case 3430:
case 3947:
case 3986:
case 997:
case 2912:
case 2363:
case 1687:
case 1954:
case 1898:
case 1646:
case 2486:
case 852:
case 459:
case 2308:
case 1219:
case 767:
case 1151:
case 252:
case 1406:
case 2597:
case 3870:
case 460:
case 3539:
case 1622:
case 444:
case 336:
case 3285:
case 2262:
case 1109:
case 2174:
case 1555:
case 1772:
case 3523:
case 632:
case 2395:
case 372:
case 273:
case 1408:
case 445:
case 982:
case 873:
case 1896:
case 2488:
case 1347:
case 2070:
case 1463:
case 1545:
case 559:
case 753:
case 3183:
case 121:
case 3988:
case 3354:
case 94:
case 4040:
case 2135:
case 1255:
case 3897:
case 1811:
case 2570:
case 1798:
case 1948:
case 151:
case 4027:
case 847:
case 4050:
case 2361:
case 723:
case 3356:
case 529:
case 2671:
case 247:
case 490:
case 1669:
case 3125:
case 2304:
case 3829:
case 1153:
case 2233:
case 1384:
case 2721:
case 1894:
case 3628:
case 3327:
case 3283:
case 739:
case 788:
case 533:
case 456:
case 4056:
case 561:
case 1553:
case 2089:
case 2393:
case 3525:
case 2074:
case 1009:
case 1209:
case 2162:
case 2318:
case 2617:
case 1416:
case 2576:
case 4046:
case 3340:
case 174:
case 2781:
case 199:
case 913:
case 1465:
case 1701:
case 1982:
case 2337:
case 169:
case 3417:
case 2035:
case 2076:
case 1682:
case 2938:
case 1890:
case 638:
case 689:
case 3942:
case 1849:
case 3792:
case 1145:
case 1715:
case 2428:
case 591:
case 988:
case 939:
case 2452:
case 1243:
case 2197:
case 3928:
case 1766:
case 2276:
case 1053:
case 3123:
case 2589:
case 4044:
case 1859:
case 2235:
case 3436:
case 1699:
case 640:
case 212:
case 2067:
case 2936:
case 2881:
case 3774:
case 2267:
case 2278:
case 2314:
case 665:
case 313:
case 1777:
case 3081:
case 258:
case 2783:
case 2592:
case 1627:
case 1703:
case 556:
case 3735:
case 1950:
case 1493:
case 1119:
case 3581:
case 208:
case 4058:
case 1759:
case 3626:
case 461:
case 100:
case 808:
case 4022:
case 1866:
case 1790:
case 2636:
case 2365:
case 228:
case 2424:
case 2675:
case 4048:
case 1749:
case 3382:
case 1999:
case 2316:
case 388:
case 694:
case 1788:
case 4089:
case 2708:
case 4074:
case 508:
case 3595:
case 143:
case 2544:
case 3887:
case 856:
case 2339:
case 3846:
case 732:
case 1394:
case 192:
case 1884:
case 2256:
case 3261:
case 3960:
case 941:
case 1512:
case 2861:
case 12:
case 528:
case 2460:
case 2046:
case 2385:
case 682:
case 1573:
case 2199:
case 226:
case 1305:
case 2413:
case 3722:
case 826:
case 1030:
case 3006:
case 2244:
case 2140:
case 1857:
case 3295:
case 1421:
case 162:
case 1507:
case 386:
case 64:
case 3660:
case 3672:
case 3913:
case 2546:
case 741:
case 2587:
case 4076:
case 3118:
case 3998:
case 976:
case 3419:
case 1212:
case 15:
case 2710:
case 3206:
case 2254:
case 1230:
case 1134:
case 1847:
case 806:
case 2732:
case 1396:
case 2556:
case 2806:
case 219:
case 2269:
case 3905:
case 2704:
case 412:
case 819:
case 1633:
case 3008:
case 2321:
case 697:
case 3869:
case 1962:
case 1970:
case 1629:
case 2405:
case 3756:
case 2645:
case 1485:
case 786:
case 2558:
case 1071:
case 458:
case 2496:
case 1398:
case 3611:
case 1888:
case 891:
case 3787:
case 1571:
case 2058:
case 2022:
case 3848:
case 4092:
case 986:
case 2411:
case 233:
case 2706:
case 3114:
case 1423:
case 833:
case 1786:
case 2832:
case 2248:
case 3911:
case 3455:
case 1747:
case 1670:
case 2048:
case 1117:
case 1662:
case 1372:
case 3822:
case 1360:
case 3508:
case 3858:
case 2795:
case 3994:
case 187:
case 332:
case 3744:
case 1720:
case 428:
case 2258:
case 1757:
case 667:
case 1366:
case 740:
case 2082:
case 1676:
case 3016:
case 3591:
case 209:
case 1635:
case 1315:
case 1538:
case 3977:
case 994:
case 3968:
case 979:
case 3065:
case 483:
case 338:
case 1974:
case 3882:
case 765:
case 3690:
case 1202:
case 3409:
case 229:
case 3216:
case 422:
case 2653:
case 2282:
case 3649:
case 1780:
case 3514:
case 2891:
case 965:
case 3799:
case 1842:
case 418:
case 2158:
case 2737:
case 46:
case 1674:
case 3291:
case 2609:
case 1425:
case 1364:
case 1689:
case 2449:
case 3014:
case 3990:
case 135:
case 3378:
case 3677:
case 1828:
case 3214:
case 3668:
case 859:
case 3516:
case 452:
case 1852:
case 3091:
case 2148:
case 2814:
case 3565:
case 779:
case 3443:
case 2459:
case 1935:
case 3901:
case 11:
case 3782:
case 3593:
case 3200:
case 394:
case 379:
case 2527:
case 1880:
case 2156:
case 1236:
case 3161:
case 260:
case 2401:
case 2765:
case 2800:
case 1275:
case 2550:
case 2641:
case 1481:
case 1359:
case 552:
case 1173:
case 2599:
case 3615:
case 3518:
case 2187:
case 473:
case 4062:
case 4070:
case 989:
case 1826:
case 1107:
case 2250:
case 502:
case 2099:
case 2227:
case 2951:
case 3850:
case 3018:
case 583:
case 789:
case 1112:
case 1667:
case 1368:
case 2714:
case 365:
case 613:
case 3451:
case 3915:
case 2040:
case 1678:
case 3106:
case 2240:
case 3899:
case 1992:
case 3389:
case 3664:
case 3093:
case 198:
case 59:
case 2941:
case 3218:
case 2027:
case 3237:
case 3601:
case 1034:
case 3174:
case 1469:
case 872:
case 983:
case 2523:
case 2344:
case 3395:
case 2862:
case 3597:
case 2870:
case 236:
case 1594:
case 1103:
case 1296:
case 922:
case 661:
case 1963:
case 3306:
case 1610:
case 1177:
case 1312:
case 1168:
case 3070:
case 99:
case 1663:
case 1910:
case 1094:
case 1373:
case 3823:
case 1505:
case 3297:
case 96:
case 79:
case 4018:
case 918:
case 465:
case 2346:
case 691:
case 1448:
case 2829:
case 2023:
case 589:
case 3233:
case 13:
case 440:
case 952:
case 1596:
case 2356:
case 3361:
case 702:
case 1294:
case 1458:
case 1072:
case 3612:
case 3973:
case 4016:
case 115:
case 302:
case 223:
case 3178:
case 1606:
case 1513:
case 3332:
case 606:
case 3907:
case 2358:
case 3785:
case 626:
case 39:
case 2322:
case 2979:
case 2620:
case 1598:
case 322:
case 203:
case 24:
case 564:
case 1961:
case 3479:
case 1260:
case 803:
case 2762:
case 1371:
case 1745:
case 594:
case 1661:
case 2729:
case 1213:
case 318:
case 3031:
case 1444:
case 253:
case 36:
case 2733:
case 2369:
case 3930:
case 595:
case 947:
case 1572:
case 1560:
case 3607:
case 352:
case 1166:
case 2430:
case 1454:
case 1013:
case 2986:
case 3739:
case 3912:
case 656:
case 3673:
case 1819:
case 3363:
case 1115:
case 3480:
case 3078:
case 105:
case 312:
case 690:
case 1160:
case 1709:
case 3975:
case 3881:
case 4008:
case 1618:
case 1515:
case 2980:
case 616:
case 2436:
case 2281:
case 124:
case 104:
case 3783:
case 3592:
case 2867:
case 3426:
case 441:
case 1001:
case 813:
case 1693:
case 3267:
case 213:
case 3314:
case 3278:
case 308:
case 1198:
case 1993:
case 2626:
case 1215:
case 1851:
case 1266:
case 3131:
case 3578:
case 2680:
case 1440:
case 839:
case 1753:
case 4010:
case 432:
case 3316:
case 1302:
case 288:
case 1841:
case 2924:
case 4032:
case 1015:
case 3636:
case 1113:
case 3424:
case 3675:
case 644:
case 1918:
case 2778:
case 1277:
case 1268:
case 3089:
case 3883:
case 659:
case 1590:
case 2652:
case 4061:
case 3902:
case 2874:
case 1916:
case 2399:
case 3638:
case 3535:
case 576:
case 3162:
case 3318:
case 149:
case 1691:
case 3576:
case 1077:
case 1375:
case 1741:
case 3129:
case 1059:
case 1665:
case 878:
case 2792:
case 2942:
case 1503:
case 1290:
case 2438:
case 629:
case 2225:
case 2417:
case 4006:
case 1249:
case 3076:
case 1568:
case 3938:
case 1577:
case 541:
case 3589:
case 3276:
case 928:
case 1843:
case 2952:
case 3574:
case 609:
case 3235:
case 1914:
case 2876:
case 3452:
case 1111:
case 2869:
case 3405:
case 2165:
case 3761:
case 2063:
case 3548:
case 956:
case 1470:
case 2116:
case 3704:
case 578:
case 706:
case 2510:
case 726:
case 2331:
case 1319:
case 1623:
case 1707:
case 2996:
case 413:
case 3069:
case 3558:
case 2263:
case 157:
case 4081:
case 3808:
case 841:
case 1773:
case 3496:
case 2611:
case 673:
case 3706:
case 333:
case 1712:
case 3832:
case 2911:
case 1128:
case 107:
case 2232:
case 2696:
case 2754:
case 1497:
case 3411:
case 2848:
case 2032:
case 2563:
case 2445:
case 3258:
case 906:
case 488:
case 439:
case 232:
case 2744:
case 2858:
case 2994:
case 3795:
case 2698:
case 1807:
case 919:
case 2061:
case 193:
case 3287:
case 3246:
case 1873:
case 3619:
case 3323:
case 3544:
case 2595:
case 1180:
case 3861:
case 2100:
case 3460:
case 3046:
case 1586:
case 761:
case 2769:
case 1547:
case 3087:
case 991:
case 733:
case 3256:
case 3804:
case 2329:
case 2972:
case 618:
case 622:
case 3140:
case 961:
case 2913:
case 2660:
case 2118:
case 2370:
case 3587:
case 886:
case 3895:
case 2758:
case 1921:
case 2137:
case 69:
case 3199:
case 326:
case 791:
case 3413:
case 1124:
case 3054:
case 1220:
case 3498:
case 3254:
case 1020:
case 3150:
case 719:
case 3732:
case 306:
case 3919:
case 1812:
case 1057:
case 3127:
case 683:
case 2748:
case 1830:
case 2504:
case 4025:
case 3044:
case 163:
case 2095:
case 602:
case 1431:
case 1584:
case 3401:
case 2161:
case 909:
case 360:
case 1026:
case 467:
case 2964:
case 3550:
case 3641:
case 436:
case 1280:
case 879:
case 894:
case 2901:
case 1353:
case 1836:
case 2104:
case 2593:
case 3716:
case 279:
case 3325:
case 2335:
case 2518:
case 2000:
case 1467:
case 345:
case 3651:
case 3540:
case 1478:
case 2666:
case 1080:
case 4085:
case 895:
case 1343:
case 1226:
case 3599:
case 2537:
case 2615:
case 295:
case 2018:
case 1186:
case 2293:
case 2500:
case 865:
case 2827:
case 3466:
case 2451:
case 658:
case 3250:
case 1024:
case 729:
case 3383:
case 3893:
case 3099:
case 2037:
case 2966:
case 4039:
case 1738:
case 3027:
case 1157:
case 2237:
case 959:
case 864:
case 1492:
case 503:
case 1120:
case 264:
case 2441:
case 148:
case 1681:
case 612:
case 2195:
case 3240:
case 3837:
case 3144:
case 2389:
case 497:
case 2093:
case 582:
case 2218:
case 3941:
case 3791:
case 790:
case 3403:
case 2163:
case 2065:
case 3643:
case 2903:
case 1351:
case 3477:
case 3082:
case 944:
case 1983:
case 2016:
case 423:
case 960:
case 309:
case 44:
case 1625:
case 2216:
case 403:
case 3700:
case 3282:
case 2649:
case 2514:
case 238:
case 1802:
case 2265:
case 3816:
case 597:
case 945:
case 1552:
case 130:
case 838:
case 889:
case 2690:
case 2291:
case 536:
case 567:
case 1242:
case 2014:
case 2990:
case 3891:
case 3381:
case 1052:
case 3122:
case 2799:
case 117:
case 3158:
case 1028:
case 1228:
case 2603:
case 3814:
case 2727:
case 2443:
case 2132:
case 3459:
case 2565:
case 2110:
case 2214:
case 2378:
case 760:
case 2668:
case 2959:
case 2516:
case 744:
case 359:
case 916:
case 2091:
case 3148:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751324402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,];
var gg_b = "1751328001/";

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
