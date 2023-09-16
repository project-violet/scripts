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
case 253:
case 2162:
case 1835:
case 793:
case 1913:
case 1990:
case 1907:
case 3450:
case 3391:
case 3249:
case 1033:
case 3252:
case 2586:
case 617:
case 3708:
case 334:
case 3283:
case 1214:
case 1316:
case 3694:
case 2681:
case 3910:
case 678:
case 91:
case 3119:
case 3892:
case 196:
case 377:
case 1609:
case 455:
case 2231:
case 571:
case 468:
case 1393:
case 550:
case 761:
case 1085:
case 2796:
case 1414:
case 152:
case 1809:
case 2395:
case 1450:
case 166:
case 883:
case 2461:
case 1228:
case 798:
case 1979:
case 1049:
case 1199:
case 1448:
case 1387:
case 2165:
case 3271:
case 3493:
case 3813:
case 1382:
case 2377:
case 2556:
case 1303:
case 156:
case 1141:
case 1539:
case 4081:
case 924:
case 2931:
case 3458:
case 3148:
case 660:
case 3139:
case 462:
case 464:
case 488:
case 491:
case 3951:
case 1160:
case 3079:
case 1962:
case 2685:
case 2375:
case 2183:
case 2615:
case 3596:
case 851:
case 3773:
case 2007:
case 188:
case 137:
case 148:
case 3112:
case 3666:
case 2393:
case 4069:
case 3427:
case 1746:
case 1619:
case 1063:
case 2175:
case 2661:
case 2264:
case 597:
case 2480:
case 3907:
case 1862:
case 1531:
case 3723:
case 360:
case 266:
case 1226:
case 1124:
case 3415:
case 4054:
case 1030:
case 1086:
case 2723:
case 1383:
case 2106:
case 2413:
case 2293:
case 556:
case 1708:
case 3216:
case 315:
case 1113:
case 3534:
case 449:
case 78:
case 3015:
case 987:
case 1807:
case 3397:
case 229:
case 3070:
case 1607:
case 966:
case 1368:
case 2299:
case 995:
case 3897:
case 1496:
case 1745:
case 2616:
case 823:
case 3967:
case 1569:
case 1780:
case 375:
case 2275:
case 1968:
case 1666:
case 396:
case 2427:
case 2859:
case 1926:
case 3040:
case 3354:
case 4086:
case 1989:
case 227:
case 256:
case 2897:
case 63:
case 3914:
case 3042:
case 893:
case 460:
case 3717:
case 271:
case 3569:
case 1760:
case 234:
case 822:
case 1673:
case 962:
case 3065:
case 3900:
case 1305:
case 2289:
case 2035:
case 463:
case 1027:
case 3920:
case 2036:
case 41:
case 2727:
case 1886:
case 1674:
case 1955:
case 852:
case 1573:
case 292:
case 1008:
case 523:
case 3137:
case 3976:
case 3081:
case 2545:
case 1757:
case 382:
case 2085:
case 1006:
case 2992:
case 3211:
case 2599:
case 2067:
case 824:
case 111:
case 3011:
case 3901:
case 132:
case 2736:
case 3041:
case 1043:
case 799:
case 1924:
case 2355:
case 3809:
case 3439:
case 3247:
case 2080:
case 1820:
case 3921:
case 628:
case 2976:
case 1722:
case 1282:
case 699:
case 652:
case 2288:
case 2485:
case 2219:
case 1872:
case 34:
case 3124:
case 2249:
case 3138:
case 2929:
case 1372:
case 2875:
case 643:
case 4093:
case 2767:
case 3651:
case 2482:
case 4025:
case 4095:
case 302:
case 2631:
case 299:
case 2246:
case 2529:
case 2671:
case 3039:
case 3661:
case 3641:
case 280:
case 69:
case 767:
case 785:
case 3349:
case 3565:
case 1735:
case 3373:
case 1777:
case 1961:
case 3505:
case 1800:
case 18:
case 2708:
case 2821:
case 2120:
case 1659:
case 3037:
case 2548:
case 3141:
case 1690:
case 896:
case 634:
case 1891:
case 3224:
case 2323:
case 1984:
case 1821:
case 2052:
case 3851:
case 1225:
case 2606:
case 2843:
case 3880:
case 3844:
case 2533:
case 2113:
case 2657:
case 889:
case 3203:
case 2143:
case 2147:
case 3709:
case 2097:
case 125:
case 2135:
case 716:
case 1917:
case 1841:
case 3075:
case 3992:
case 2966:
case 1727:
case 2317:
case 2720:
case 2061:
case 2519:
case 1206:
case 2361:
case 1219:
case 2190:
case 2799:
case 4085:
case 3998:
case 3375:
case 585:
case 54:
case 2211:
case 19:
case 33:
case 1156:
case 3862:
case 2609:
case 1007:
case 891:
case 353:
case 1062:
case 2208:
case 3365:
case 835:
case 2985:
case 901:
case 1903:
case 534:
case 1445:
case 3355:
case 308:
case 1914:
case 354:
case 3443:
case 2435:
case 3937:
case 2579:
case 3514:
case 4056:
case 1750:
case 1982:
case 3955:
case 1877:
case 1909:
case 2880:
case 358:
case 2152:
case 3461:
case 2520:
case 2881:
case 384:
case 101:
case 1069:
case 2683:
case 448:
case 2891:
case 1011:
case 1411:
case 1975:
case 68:
case 1482:
case 2050:
case 1848:
case 3367:
case 3362:
case 3242:
case 2648:
case 1724:
case 1301:
case 321:
case 378:
case 1204:
case 3284:
case 2677:
case 2202:
case 127:
case 3341:
case 160:
case 48:
case 114:
case 2989:
case 1355:
case 3111:
case 3822:
case 1826:
case 1343:
case 906:
case 1378:
case 670:
case 3398:
case 938:
case 1235:
case 3629:
case 336:
case 3009:
case 2272:
case 3668:
case 3281:
case 4017:
case 1255:
case 2095:
case 1377:
case 3913:
case 3865:
case 174:
case 2223:
case 1108:
case 3157:
case 2622:
case 140:
case 1421:
case 813:
case 1374:
case 648:
case 1534:
case 3494:
case 2104:
case 429:
case 1440:
case 3699:
case 1723:
case 1292:
case 61:
case 3104:
case 3887:
case 4092:
case 2965:
case 1002:
case 635:
case 1473:
case 3670:
case 3984:
case 2960:
case 756:
case 2167:
case 3420:
case 297:
case 768:
case 2169:
case 359:
case 1348:
case 3300:
case 770:
case 1519:
case 2687:
case 587:
case 401:
case 3559:
case 365:
case 753:
case 929:
case 1431:
case 638:
case 2062:
case 2494:
case 368:
case 454:
case 3067:
case 943:
case 1265:
case 2798:
case 1254:
case 1700:
case 1543:
case 2853:
case 2977:
case 3833:
case 102:
case 3671:
case 2384:
case 3621:
case 3631:
case 3720:
case 751:
case 892:
case 30:
case 3777:
case 1946:
case 1188:
case 780:
case 2009:
case 194:
case 300:
case 3240:
case 2690:
case 446:
case 502:
case 4041:
case 3402:
case 911:
case 3392:
case 2560:
case 3194:
case 2717:
case 715:
case 3713:
case 2178:
case 2112:
case 2281:
case 3219:
case 1201:
case 3361:
case 2448:
case 2133:
case 342:
case 1963:
case 2531:
case 3705:
case 1612:
case 3066:
case 294:
case 774:
case 2091:
case 817:
case 84:
case 2780:
case 3330:
case 2436:
case 1998:
case 1340:
case 1728:
case 2613:
case 1247:
case 2506:
case 2469:
case 647:
case 688:
case 3122:
case 226:
case 1380:
case 3243:
case 2225:
case 1714:
case 3707:
case 555:
case 700:
case 2611:
case 1216:
case 3483:
case 1223:
case 4076:
case 2730:
case 915:
case 1076:
case 373:
case 1478:
case 3798:
case 1341:
case 2539:
case 2242:
case 2983:
case 2951:
case 3962:
case 1082:
case 916:
case 1397:
case 134:
case 1066:
case 4049:
case 842:
case 1229:
case 426:
case 2973:
case 776:
case 3711:
case 3507:
case 4033:
case 3020:
case 996:
case 2124:
case 3625:
case 2168:
case 609:
case 3676:
case 563:
case 2056:
case 2955:
case 3418:
case 2787:
case 3982:
case 3706:
case 650:
case 3419:
case 485:
case 729:
case 877:
case 3342:
case 3056:
case 615:
case 658:
case 3861:
case 507:
case 2702:
case 3366:
case 3320:
case 1657:
case 959:
case 601:
case 4004:
case 2827:
case 919:
case 2371:
case 693:
case 2013:
case 1755:
case 3215:
case 3571:
case 2325:
case 2340:
case 2084:
case 506:
case 3097:
case 285:
case 3624:
case 503:
case 4058:
case 190:
case 3038:
case 1335:
case 3094:
case 3364:
case 2662:
case 2738:
case 779:
case 206:
case 432:
case 245:
case 1631:
case 1752:
case 3703:
case 1640:
case 1581:
case 413:
case 2942:
case 76:
case 689:
case 115:
case 3757:
case 398:
case 3915:
case 175:
case 3092:
case 204:
case 286:
case 3990:
case 1130:
case 3017:
case 3109:
case 2031:
case 1245:
case 372:
case 1320:
case 2940:
case 1512:
case 1405:
case 223:
case 663:
case 3082:
case 2334:
case 83:
case 1392:
case 1436:
case 2525:
case 2746:
case 2628:
case 182:
case 1197:
case 3266:
case 3050:
case 1761:
case 3173:
case 1795:
case 394:
case 31:
case 2236:
case 1423:
case 3603:
case 1884:
case 2650:
case 1259:
case 2308:
case 319:
case 1993:
case 2812:
case 994:
case 1412:
case 3455:
case 2102:
case 1965:
case 4060:
case 579:
case 3511:
case 2927:
case 2941:
case 2092:
case 846:
case 554:
case 736:
case 3689:
case 418:
case 3235:
case 387:
case 3817:
case 595:
case 494:
case 3151:
case 2653:
case 1375:
case 2674:
case 869:
case 329:
case 493:
case 2957:
case 3890:
case 2235:
case 2584:
case 4034:
case 971:
case 2034:
case 94:
case 1455:
case 4002:
case 2874:
case 1929:
case 659:
case 2251:
case 2902:
case 2521:
case 2829:
case 4083:
case 1697:
case 3729:
case 2652:
case 2554:
case 1168:
case 2769:
case 1624:
case 904:
case 514:
case 2655:
case 718:
case 2994:
case 1004:
case 2185:
case 1911:
case 1426:
case 248:
case 744:
case 1662:
case 3971:
case 2765:
case 3225:
case 3643:
case 714:
case 3278:
case 2935:
case 3787:
case 2684:
case 1339:
case 2698:
case 3343:
case 75:
case 2954:
case 192:
case 838:
case 3370:
case 195:
case 2046:
case 1257:
case 944:
case 1889:
case 1101:
case 3207:
case 178:
case 1887:
case 900:
case 3592:
case 212:
case 1930:
case 2033:
case 3662:
case 142:
case 1252:
case 654:
case 2944:
case 2634:
case 1600:
case 1221:
case 3554:
case 2752:
case 950:
case 3716:
case 3189:
case 244:
case 1107:
case 2899:
case 1736:
case 150:
case 2055:
case 3669:
case 1997:
case 3590:
case 215:
case 1258:
case 59:
case 2177:
case 3080:
case 2937:
case 872:
case 2804:
case 1572:
case 2833:
case 3490:
case 3289:
case 3760:
case 3936:
case 3863:
case 1035:
case 2290:
case 1652:
case 2483:
case 3501:
case 3639:
case 2841:
case 3182:
case 2066:
case 2118:
case 2794:
case 1805:
case 1876:
case 2121:
case 1799:
case 1518:
case 1861:
case 3336:
case 568:
case 1067:
case 2304:
case 3979:
case 269:
case 3076:
case 2516:
case 2381:
case 141:
case 2692:
case 2300:
case 380:
case 1056:
case 1611:
case 3852:
case 942:
case 3084:
case 70:
case 2597:
case 1244:
case 665:
case 2792:
case 355:
case 4089:
case 2003:
case 143:
case 3872:
case 1563:
case 2453:
case 3491:
case 3273:
case 3653:
case 3732:
case 268:
case 674:
case 4068:
case 2439:
case 596:
case 339:
case 2896:
case 3270:
case 2107:
case 2747:
case 1693:
case 1192:
case 264:
case 3382:
case 3928:
case 3026:
case 1590:
case 2440:
case 4007:
case 2468:
case 733:
case 2900:
case 616:
case 2785:
case 3356:
case 2497:
case 4045:
case 2593:
case 2329:
case 741:
case 3974:
case 3331:
case 3115:
case 2907:
case 3213:
case 3610:
case 1954:
case 2077:
case 775:
case 333:
case 1451:
case 3236:
case 1220:
case 481:
case 4042:
case 3545:
case 2820:
case 112:
case 3499:
case 1515:
case 3917:
case 3605:
case 2234:
case 3824:
case 2447:
case 2045:
case 2123:
case 3013:
case 2596:
case 1578:
case 1860:
case 3894:
case 4090:
case 766:
case 2641:
case 1922:
case 3466:
case 2032:
case 820:
case 77:
case 1784:
case 3537:
case 1283:
case 2537:
case 4074:
case 4012:
case 694:
case 1944:
case 3510:
case 465:
case 1023:
case 3191:
case 3812:
case 3285:
case 2044:
case 1061:
case 1748:
case 748:
case 2026:
case 1479:
case 3969:
case 1483:
case 1618:
case 3985:
case 232:
case 874:
case 243:
case 2184:
case 1706:
case 541:
case 3163:
case 881:
case 2201:
case 1434:
case 2214:
case 3258:
case 247:
case 2693:
case 2892:
case 1289:
case 2705:
case 2128:
case 3597:
case 3256:
case 2850:
case 412:
case 2967:
case 3834:
case 3522:
case 352:
case 1938:
case 2466:
case 2029:
case 1789:
case 903:
case 2365:
case 3690:
case 1980:
case 1669:
case 3180:
case 1740:
case 1202:
case 3828:
case 1077:
case 258:
case 1088:
case 3388:
case 3516:
case 2978:
case 524:
case 1472:
case 1601:
case 316:
case 4037:
case 1912:
case 43:
case 53:
case 2268:
case 1494:
case 3796:
case 3127:
case 1418:
case 237:
case 1500:
case 2514:
case 3656:
case 812:
case 1406:
case 1896:
case 2864:
case 1604:
case 2010:
case 176:
case 3521:
case 24:
case 4043:
case 2518:
case 3051:
case 3044:
case 2890:
case 2637:
case 1859:
case 863:
case 3489:
case 2343:
case 3934:
case 3763:
case 3464:
case 1460:
case 1501:
case 3161:
case 698:
case 3764:
case 1959:
case 3970:
case 3454:
case 2476:
case 1897:
case 3292:
case 1466:
case 547:
case 1334:
case 2496:
case 1459:
case 1169:
case 171:
case 1787:
case 2117:
case 760:
case 2908:
case 1142:
case 808:
case 3636:
case 2800:
case 1181:
case 1867:
case 3816:
case 3805:
case 2835:
case 3771:
case 1613:
case 2846:
case 1471:
case 1817:
case 3197:
case 1370:
case 1109:
case 3648:
case 3634:
case 1972:
case 2459:
case 1506:
case 2724:
case 1562:
case 2314:
case 1365:
case 535:
case 287:
case 1016:
case 3700:
case 885:
case 1756:
case 121:
case 1774:
case 1906:
case 450:
case 2357:
case 3321:
case 2766:
case 2499:
case 1194:
case 2018:
case 2105:
case 810:
case 1139:
case 3295:
case 857:
case 3404:
case 2206:
case 2216:
case 2305:
case 209:
case 3927:
case 2094:
case 1484:
case 3551:
case 2405:
case 1338:
case 1398:
case 1703:
case 3411:
case 3520:
case 1491:
case 3778:
case 2898:
case 2103:
case 217:
case 1095:
case 343:
case 3372:
case 1198:
case 2146:
case 1851:
case 990:
case 1287:
case 1497:
case 2174:
case 3440:
case 1781:
case 85:
case 2813:
case 570:
case 2445:
case 1550:
case 2024:
case 1162:
case 3377:
case 1465:
case 705:
case 109:
case 2972:
case 337:
case 3442:
case 1751:
case 2565:
case 1969:
case 1749:
case 1967:
case 3789:
case 49:
case 2043:
case 512:
case 1246:
case 1138:
case 3667:
case 2928:
case 2854:
case 2188:
case 1157:
case 116:
case 3893:
case 2660:
case 2428:
case 1598:
case 3858:
case 2860:
case 323:
case 1080:
case 361:
case 691:
case 1205:
case 2925:
case 2401:
case 668:
case 1224:
case 2679:
case 704:
case 3588:
case 440:
case 2869:
case 3502:
case 3583:
case 811:
case 2903:
case 1093:
case 520:
case 1044:
case 177:
case 757:
case 1353:
case 1313:
case 1819:
case 710:
case 1672:
case 1390:
case 3946:
case 2006:
case 2569:
case 3578:
case 3627:
case 2479:
case 4087:
case 2320:
case 2418:
case 2210:
case 198:
case 1342:
case 2433:
case 1847:
case 288:
case 2179:
case 1126:
case 1849:
case 2138:
case 3396:
case 1790:
case 788:
case 2801:
case 2633:
case 1179:
case 3896:
case 2647:
case 690:
case 1551:
case 4055:
case 2360:
case 3930:
case 3311:
case 3329:
case 1195:
case 3989:
case 2129:
case 2504:
case 242:
case 3786:
case 139:
case 2530:
case 1614:
case 2523:
case 314:
case 2646:
case 1060:
case 2464:
case 980:
case 2058:
case 1463:
case 1354:
case 2583:
case 3386:
case 3340:
case 3195:
case 873:
case 228:
case 2478:
case 1400:
case 1523:
case 2513:
case 1369:
case 1222:
case 328:
case 2472:
case 3263:
case 2255:
case 3476:
case 2269:
case 4088:
case 1976:
case 2109:
case 1167:
case 1596:
case 62:
case 1663:
case 3673:
case 1098:
case 2669:
case 1516:
case 2089:
case 894:
case 2199:
case 4071:
case 3087:
case 2265:
case 655:
case 3495:
case 764:
case 4008:
case 3506:
case 2187:
case 2467:
case 2157:
case 1681:
case 3199:
case 2099:
case 2651:
case 3218:
case 403:
case 406:
case 3014:
case 1015:
case 164:
case 1312:
case 2734:
case 2614:
case 1730:
case 1407:
case 1409:
case 1854:
case 3389:
case 2426:
case 2134:
case 949:
case 1268:
case 347:
case 1285:
case 6:
case 1636:
case 1744:
case 2707:
case 2457:
case 3619:
case 4022:
case 1410:
case 1075:
case 3527:
case 2423:
case 1679:
case 708:
case 1658:
case 1439:
case 1298:
case 317:
case 2096:
case 2643:
case 2287:
case 1151:
case 1396:
case 3268:
case 749:
case 2542:
case 4091:
case 2865:
case 594:
case 2370:
case 2330:
case 3743:
case 2806:
case 2438:
case 888:
case 1942:
case 2321:
case 2047:
case 211:
case 2777:
case 1654:
case 4028:
case 2939:
case 2808:
case 2803:
case 3170:
case 1815:
case 539:
case 2784:
case 2301:
case 960:
case 976:
case 3016:
case 2014:
case 474:
case 935:
case 1675:
case 3919:
case 1637:
case 2759:
case 672:
case 249:
case 3413:
case 3677:
case 3460:
case 1686:
case 1825:
case 692:
case 3198:
case 734:
case 2732:
case 1498:
case 3053:
case 1555:
case 3954:
case 1616:
case 1866:
case 346:
case 2141:
case 1857:
case 2115:
case 2220:
case 2450:
case 2362:
case 11:
case 559:
case 2374:
case 2358:
case 27:
case 3457:
case 159:
case 2568:
case 3933:
case 657:
case 1135:
case 1988:
case 326:
case 472:
case 3579:
case 151:
case 2604:
case 1642:
case 515:
case 3860:
case 295:
case 3769:
case 1103:
case 417:
case 2844:
case 1915:
case 998:
case 1322:
case 3607:
case 3351:
case 2639:
case 2676:
case 1059:
case 1114:
case 3474:
case 1158:
case 3441:
case 145:
case 3277:
case 86:
case 1119:
case 128:
case 1215:
case 3697:
case 1792:
case 992:
case 257:
case 989:
case 3074:
case 2870:
case 2389:
case 3839:
case 1591:
case 2130:
case 1432:
case 3963:
case 3231:
case 2260:
case 1991:
case 3444:
case 3741:
case 723:
case 3185:
case 3806:
case 2247:
case 3768:
case 747:
case 2406:
case 3472:
case 2974:
case 4050:
case 1953:
case 934:
case 933:
case 961:
case 451:
case 2629:
case 2617:
case 1505:
case 129:
case 3004:
case 1894:
case 1971:
case 3023:
case 3352:
case 3903:
case 3601:
case 2805:
case 167:
case 2731:
case 2991:
case 2271:
case 2434:
case 2559:
case 528:
case 592:
case 1464:
case 3144:
case 2963:
case 219:
case 2191:
case 3704:
case 2441:
case 203:
case 832:
case 208:
case 2828:
case 1452:
case 303:
case 920:
case 3850:
case 1024:
case 3742:
case 284:
case 3036:
case 569:
case 3293:
case 1570:
case 3175:
case 1554:
case 1427:
case 2390:
case 1137:
case 1822:
case 3649:
case 2990:
case 1097:
case 2241:
case 2116:
case 442:
case 1495:
case 1474:
case 2417:
case 2837:
case 153:
case 2493:
case 677:
case 1773:
case 3853:
case 3923:
case 3131:
case 1589:
case 2298:
case 2761:
case 2470:
case 3804:
case 1104:
case 3964:
case 4039:
case 330:
case 3546:
case 1488:
case 2171:
case 10:
case 1718:
case 2861:
case 1813:
case 170:
case 958:
case 497:
case 1719:
case 830:
case 480:
case 3467:
case 1996:
case 3152:
case 3335:
case 2592:
case 461:
case 1910:
case 332:
case 3264:
case 577:
case 3687:
case 703:
case 3561:
case 1588:
case 3162:
case 1227:
case 1956:
case 3983:
case 2204:
case 3492:
case 3102:
case 993:
case 591:
case 2257:
case 3586:
case 2741:
case 921:
case 2830:
case 818:
case 371:
case 2998:
case 1186:
case 2958:
case 1602:
case 1547:
case 2368:
case 1433:
case 3022:
case 3201:
case 1846:
case 2354:
case 3103:
case 1068:
case 3770:
case 828:
case 3574:
case 1090:
case 222:
case 45:
case 2697:
case 639:
case 15:
case 2535:
case 1327:
case 735:
case 3410:
case 2678:
case 3594:
case 532:
case 2791:
case 1325:
case 2981:
case 3358:
case 2868:
case 3632:
case 310:
case 2763:
case 4084:
case 2910:
case 4046:
case 1801:
case 2842:
case 2071:
case 3617:
case 963:
case 2781:
case 3981:
case 3922:
case 80:
case 1958:
case 1510:
case 3153:
case 2394:
case 1779:
case 1042:
case 2142:
case 477:
case 201:
case 3008:
case 1413:
case 4031:
case 1793:
case 675:
case 968:
case 92:
case 293:
case 2776:
case 3724:
case 136:
case 3536:
case 3957:
case 914:
case 1408:
case 3232:
case 383:
case 3740:
case 803:
case 3659:
case 3462:
case 3560:
case 1121:
case 2307:
case 3085:
case 2403:
case 3526:
case 573:
case 2886:
case 2451:
case 2111:
case 3775:
case 14:
case 2383:
case 4075:
case 2905:
case 3380:
case 509:
case 391:
case 2291:
case 954:
case 3010:
case 3012:
case 2790:
case 2322:
case 3229:
case 3647:
case 3204:
case 221:
case 1297:
case 1099:
case 1278:
case 731:
case 2456:
case 4064:
case 3272:
case 3063:
case 827:
case 854:
case 2454:
case 2740:
case 2039:
case 2807:
case 730:
case 2203:
case 1879:
case 3755:
case 1694:
case 231:
case 664:
case 1475:
case 930:
case 3326:
case 3523:
case 2378:
case 3931:
case 3947:
case 1361:
case 3845:
case 2063:
case 531:
case 1233:
case 3959:
case 3064:
case 3305:
case 522:
case 3379:
case 52:
case 3433:
case 2465:
case 1633:
case 1122:
case 307:
case 236:
case 3780:
case 3453:
case 3304:
case 1207:
case 44:
case 3529:
case 2023:
case 1328:
case 1344:
case 3758:
case 1266:
case 974:
case 2217:
case 2714:
case 2017:
case 99:
case 786:
case 2672:
case 3576:
case 261:
case 1476:
case 1333:
case 1073:
case 1901:
case 2551:
case 267:
case 1785:
case 1326:
case 1071:
case 3477:
case 3618:
case 2848:
case 3975:
case 2607:
case 3799:
case 1118:
case 1647:
case 2319:
case 3797:
case 3135:
case 2498:
case 3448:
case 1716:
case 89:
case 3120:
case 1039:
case 1650:
case 1665:
case 1129:
case 2822:
case 809:
case 1623:
case 1527:
case 370:
case 3393:
case 1203:
case 1264:
case 2621:
case 2567:
case 1905:
case 3783:
case 1091:
case 3000:
case 3202:
case 964:
case 1319:
case 2224:
case 3830:
case 2000:
case 1804:
case 783:
case 582:
case 2396:
case 3322:
case 1317:
case 2795:
case 1315:
case 2517:
case 3906:
case 2022:
case 4073:
case 3630:
case 81:
case 2266:
case 3924:
case 2729:
case 1709:
case 3325:
case 138:
case 791:
case 392:
case 3613:
case 2385:
case 1329:
case 1899:
case 1403:
case 878:
case 96:
case 1615:
case 3657:
case 955:
case 1025:
case 2415:
case 2858:
case 131:
case 411:
case 1994:
case 351:
case 364:
case 2336:
case 1017:
case 1402:
case 1435:
case 1677:
case 611:
case 565:
case 3378:
case 1153:
case 3544:
case 2060:
case 3108:
case 871:
case 865:
case 3567:
case 2088:
case 445:
case 1802:
case 3260:
case 721:
case 1127:
case 3623:
case 3508:
case 3835:
case 399:
case 2151:
case 1420:
case 3645:
case 3581:
case 1824:
case 1898:
case 2402:
case 1502:
case 1020:
case 3209:
case 3430:
case 895:
case 2486:
case 3452:
case 3099:
case 1837:
case 1814:
case 2953:
case 2500:
case 1667:
case 3288:
case 910:
case 661:
case 669:
case 3196:
case 274:
case 3877:
case 2995:
case 2153:
case 800:
case 9:
case 2590:
case 3206:
case 3279:
case 216:
case 3482:
case 3712:
case 466:
case 1456:
case 3898:
case 913:
case 3291:
case 3294:
case 2399:
case 3244:
case 341:
case 717:
case 2132:
case 3859:
case 1840:
case 1552:
case 2574:
case 1918:
case 1429:
case 3593:
case 778:
case 782:
case 2901:
case 875:
case 870:
case 804:
case 3473:
case 3803:
case 1111:
case 405:
case 1345:
case 1347:
case 1134:
case 1520:
case 3432:
case 3405:
case 632:
case 2847:
case 3130:
case 3447:
case 3239:
case 2027:
case 956:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1694822402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,];
var gg_b = "1694822402/";

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
