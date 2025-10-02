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
case 1426:
case 3065:
case 1107:
case 1247:
case 2499:
case 1448:
case 1495:
case 1349:
case 511:
case 651:
case 931:
case 2632:
case 1933:
case 4007:
case 1437:
case 772:
case 2756:
case 2846:
case 78:
case 1344:
case 2177:
case 731:
case 3732:
case 3002:
case 834:
case 1473:
case 972:
case 957:
case 3044:
case 98:
case 1866:
case 342:
case 2364:
case 3888:
case 3049:
case 2512:
case 3920:
case 1350:
case 2267:
case 2907:
case 1365:
case 2403:
case 2369:
case 4080:
case 3221:
case 427:
case 1088:
case 2898:
case 1759:
case 3115:
case 204:
case 2872:
case 336:
case 73:
case 1802:
case 40:
case 2346:
case 506:
case 1754:
case 1844:
case 1496:
case 1425:
case 3066:
case 3618:
case 2328:
case 1366:
case 51:
case 875:
case 3291:
case 2718:
case 781:
case 494:
case 3484:
case 687:
case 3914:
case 3158:
case 1865:
case 979:
case 1740:
case 1850:
case 3660:
case 3655:
case 3489:
case 349:
case 3538:
case 2054:
case 3989:
case 3318:
case 2832:
case 3984:
case 444:
case 185:
case 174:
case 366:
case 3414:
case 2788:
case 1060:
case 1129:
case 3490:
case 1001:
case 1925:
case 683:
case 3301:
case 2040:
case 2929:
case 988:
case 574:
case 585:
case 3728:
case 96:
case 3746:
case 3856:
case 1602:
case 2263:
case 2407:
case 3764:
case 4010:
case 2208:
case 1644:
case 2148:
case 4094:
case 2332:
case 3420:
case 3818:
case 1292:
case 1649:
case 1973:
case 408:
case 738:
case 2994:
case 819:
case 3798:
case 2211:
case 2669:
case 3745:
case 3855:
case 4068:
case 3772:
case 658:
case 2999:
case 1243:
case 3356:
case 2664:
case 241:
case 864:
case 535:
case 1168:
case 667:
case 2150:
case 545:
case 1020:
case 3506:
case 231:
case 362:
case 827:
case 1333:
case 1517:
case 643:
case 1164:
case 991:
case 1902:
case 80:
case 748:
case 2102:
case 697:
case 475:
case 484:
case 791:
case 150:
case 2144:
case 145:
case 2275:
case 1626:
case 894:
case 3703:
case 4072:
case 3033:
case 3768:
case 268:
case 3890:
case 1274:
case 1145:
case 1637:
case 1198:
case 28:
case 1251:
case 1786:
case 257:
case 1965:
case 1205:
case 272:
case 2307:
case 1019:
case 281:
case 396:
case 3684:
case 3729:
case 1014:
case 3455:
case 3460:
case 79:
case 2946:
case 3551:
case 3401:
case 2928:
case 1833:
case 3724:
case 2880:
case 904:
case 3574:
case 2223:
case 3689:
case 3390:
case 1128:
case 99:
case 1146:
case 2789:
case 3314:
case 704:
case 434:
case 2058:
case 1696:
case 3562:
case 4028:
case 3820:
case 3319:
case 23:
case 4046:
case 3418:
case 2276:
case 1625:
case 3988:
case 3217:
case 3154:
case 3213:
case 3171:
case 2714:
case 776:
case 3252:
case 2790:
case 2803:
case 3534:
case 3159:
case 3096:
case 37:
case 3384:
case 2719:
case 382:
case 3025:
case 3619:
case 3261:
case 1837:
case 26:
case 2810:
case 2227:
case 1325:
case 3140:
case 3200:
case 2894:
case 419:
case 1084:
case 1826:
case 464:
case 1848:
case 2085:
case 1089:
case 109:
case 2899:
case 2368:
case 2469:
case 1500:
case 2303:
case 2932:
case 3095:
case 502:
case 389:
case 2680:
case 2464:
case 3037:
case 332:
case 3707:
case 1373:
case 2570:
case 3884:
case 1444:
case 1896:
case 371:
case 4032:
case 2394:
case 2607:
case 102:
case 2310:
case 1587:
case 1239:
case 941:
case 693:
case 3956:
case 1449:
case 253:
case 1348:
case 2297:
case 1395:
case 1132:
case 2445:
case 412:
case 2824:
case 3780:
case 2472:
case 1234:
case 3182:
case 3595:
case 577:
case 3776:
case 1730:
case 1000:
case 2717:
case 3284:
case 3157:
case 2783:
case 493:
case 3352:
case 2070:
case 883:
case 3387:
case 3313:
case 329:
case 3537:
case 3289:
case 2897:
case 1013:
case 2224:
case 1296:
case 2041:
case 3361:
case 1225:
case 2327:
case 2676:
case 3617:
case 1839:
case 1273:
case 664:
case 322:
case 867:
case 3525:
case 619:
case 559:
case 4011:
case 2908:
case 3852:
case 2963:
case 3596:
case 1662:
case 2467:
case 858:
case 3704:
case 1584:
case 1679:
case 2836:
case 1163:
case 1226:
case 1334:
case 1108:
case 1248:
case 2397:
case 1447:
case 228:
case 1943:
case 159:
case 1237:
case 1674:
case 2335:
case 2585:
case 1339:
case 2192:
case 2827:
case 1438:
case 3800:
case 2178:
case 4067:
case 2515:
case 1938:
case 1519:
case 2280:
case 634:
case 2393:
case 954:
case 3074:
case 1590:
case 380:
case 3005:
case 1514:
case 2309:
case 851:
case 3921:
case 2408:
case 2463:
case 1374:
case 3220:
case 1351:
case 1639:
case 2876:
case 2697:
case 2342:
case 1806:
case 1181:
case 1478:
case 3062:
case 3687:
case 1770:
case 3006:
case 500:
case 330:
case 85:
case 3577:
case 2761:
case 684:
case 2893:
case 675:
case 1017:
case 497:
case 22:
case 3219:
case 3383:
case 3533:
case 2627:
case 2376:
case 1851:
case 3600:
case 173:
case 100:
case 1805:
case 2636:
case 2713:
case 207:
case 3214:
case 2875:
case 2804:
case 410:
case 3112:
case 2752:
case 1306:
case 1556:
case 4036:
case 1406:
case 1892:
case 1127:
case 3170:
case 458:
case 770:
case 3952:
case 433:
case 3913:
case 1322:
case 3483:
case 1753:
case 3022:
case 903:
case 970:
case 3691:
case 1712:
case 3141:
case 3255:
case 2811:
case 3961:
case 728:
case 2571:
case 2721:
case 1392:
case 2404:
case 3767:
case 2554:
case 2139:
case 3043:
case 1822:
case 1501:
case 1638:
case 1451:
case 2232:
case 6:
case 2559:
case 2134:
case 2308:
case 2409:
case 483:
case 1934:
case 525:
case 2540:
case 3256:
case 3781:
case 623:
case 2935:
case 3092:
case 1462:
case 3621:
case 2663:
case 1962:
case 1202:
case 2381:
case 1175:
case 2608:
case 2531:
case 1338:
case 1104:
case 4009:
case 921:
case 2435:
case 1142:
case 1588:
case 3711:
case 694:
case 4075:
case 3566:
case 1692:
case 2497:
case 556:
case 1021:
case 1678:
case 45:
case 1250:
case 1265:
case 2367:
case 2611:
case 3321:
case 1951:
case 3047:
case 1974:
case 2942:
case 3038:
case 3763:
case 2264:
case 2904:
case 810:
case 721:
case 4093:
case 2975:
case 3891:
case 2162:
case 2923:
case 2427:
case 3461:
case 2881:
case 1091:
case 3550:
case 1782:
case 326:
case 390:
case 1847:
case 1757:
case 707:
case 3130:
case 1176:
case 2976:
case 3413:
case 3288:
case 3917:
case 3983:
case 2867:
case 3544:
case 907:
case 4023:
case 3821:
case 3452:
case 3391:
case 317:
case 1266:
case 1906:
case 2012:
case 3396:
case 853:
case 1901:
case 1619:
case 2615:
case 539:
case 3325:
case 919:
case 1140:
case 2971:
case 3895:
case 3848:
case 964:
case 1690:
case 146:
case 2270:
case 476:
case 3826:
case 2:
case 4040:
case 1252:
case 2431:
case 4059:
case 244:
case 1154:
case 2385:
case 1287:
case 1171:
case 2535:
case 1488:
case 1213:
case 2940:
case 2029:
case 182:
case 1534:
case 546:
case 3873:
case 719:
case 2160:
case 44:
case 3239:
case 3444:
case 888:
case 1073:
case 3402:
case 441:
case 3552:
case 3326:
case 3234:
case 2616:
case 2733:
case 912:
case 3395:
case 532:
case 2885:
case 2777:
case 3633:
case 1048:
case 2099:
case 2156:
case 189:
case 1889:
case 712:
case 3500:
case 1884:
case 395:
case 2094:
case 2536:
case 2010:
case 1037:
case 3695:
case 3648:
case 1703:
case 562:
case 1768:
case 2080:
case 83:
case 2316:
case 3172:
case 3965:
case 3950:
case 3198:
case 201:
case 3274:
case 3145:
case 1819:
case 2523:
case 2815:
case 879:
case 3020:
case 2686:
case 2737:
case 1710:
case 178:
case 448:
case 3944:
case 1799:
case 2748:
case 2858:
case 1077:
case 3262:
case 775:
case 3517:
case 596:
case 3146:
case 2816:
case 3877:
case 49:
case 2440:
case 3128:
case 1390:
case 3206:
case 3966:
case 2593:
case 1418:
case 294:
case 1319:
case 1820:
case 1217:
case 1988:
case 569:
case 2230:
case 868:
case 1562:
case 216:
case 1131:
case 1729:
case 1684:
case 1579:
case 2471:
case 2188:
case 2504:
case 2454:
case 2796:
case 3833:
case 1551:
case 3090:
case 169:
case 1505:
case 3014:
case 2459:
case 2358:
case 831:
case 404:
case 4085:
case 2631:
case 2508:
case 9:
case 488:
case 2563:
case 1688:
case 264:
case 2282:
case 2354:
case 1185:
case 1592:
case 3666:
case 3018:
case 2189:
case 2371:
case 723:
case 2766:
case 3222:
case 1419:
case 944:
case 3129:
case 3001:
case 7:
case 374:
case 385:
case 3060:
case 166:
case 1801:
case 2749:
case 3665:
case 105:
case 438:
case 1860:
case 708:
case 1745:
case 1855:
case 3926:
case 3243:
case 2744:
case 4086:
case 3948:
case 2871:
case 3995:
case 1356:
case 2702:
case 592:
case 3199:
case 1818:
case 1764:
case 461:
case 84:
case 335:
case 2986:
case 3194:
case 3278:
case 670:
case 3110:
case 1769:
case 2765:
case 2840:
case 2750:
case 901:
case 3180:
case 142:
case 1002:
case 48:
case 3977:
case 1732:
case 1044:
case 3365:
case 3350:
case 311:
case 2098:
case 2045:
case 1888:
case 284:
case 2120:
case 542:
case 3448:
case 1050:
case 1065:
case 3426:
case 365:
case 2069:
case 186:
case 3107:
case 3591:
case 701:
case 3344:
case 607:
case 3238:
case 2064:
case 3933:
case 1484:
case 43:
case 2046:
case 536:
case 916:
case 2654:
case 1990:
case 994:
case 3366:
case 1547:
case 2671:
case 1388:
case 149:
case 479:
case 2485:
case 4058:
case 621:
case 1538:
case 3850:
case 3865:
case 1655:
case 306:
case 1660:
case 31:
case 2119:
case 3849:
case 1066:
case 549:
case 90:
case 2190:
case 3521:
case 794:
case 3802:
case 3771:
case 891:
case 2958:
case 2114:
case 3754:
case 3844:
case 4015:
case 848:
case 2253:
case 787:
case 1047:
case 3951:
case 2778:
case 3974:
case 3265:
case 3905:
case 3250:
case 2792:
case 2546:
case 1321:
case 75:
case 2081:
case 1708:
case 1763:
case 2812:
case 3439:
case 3104:
case 3338:
case 3588:
case 3202:
case 3962:
case 679:
case 2743:
case 3244:
case 2067:
case 3678:
case 3021:
case 1711:
case 63:
case 3249:
case 1566:
case 1544:
case 1452:
case 1502:
case 407:
case 737:
case 951:
case 1487:
case 1983:
case 243:
case 3906:
case 3123:
case 1391:
case 2722:
case 2572:
case 3091:
case 4030:
case 1565:
case 2353:
case 1550:
case 297:
case 3622:
case 2312:
case 668:
case 3757:
case 2183:
case 3176:
case 68:
case 657:
case 3782:
case 672:
case 854:
case 751:
case 126:
case 2970:
case 155:
case 470:
case 2187:
case 3753:
case 4041:
case 2271:
case 767:
case 661:
case 113:
case 1201:
case 1260:
case 967:
case 555:
case 2941:
case 540:
case 615:
case 4070:
case 3406:
case 2161:
case 293:
case 3127:
case 2240:
case 3892:
case 2430:
case 1913:
case 2612:
case 1417:
case 958:
case 653:
case 1987:
case 3136:
case 1170:
case 1952:
case 3343:
case 1256:
case 2063:
case 2008:
case 3462:
case 2857:
case 2747:
case 3518:
case 3939:
case 1092:
case 2882:
case 3647:
case 66:
case 325:
case 3378:
case 3560:
case 3451:
case 3197:
case 3638:
case 3501:
case 1043:
case 3822:
case 3474:
case 1220:
case 3374:
case 1883:
case 807:
case 1817:
case 3351:
case 1921:
case 3305:
case 580:
case 3181:
case 3634:
case 2216:
case 3492:
case 3806:
case 25:
case 1079:
case 2075:
case 454:
case 180:
case 3167:
case 2739:
case 1735:
case 2121:
case 3590:
case 4012:
case 373:
case 2580:
case 691:
case 943:
case 2215:
case 3851:
case 3741:
case 3422:
case 1533:
case 1214:
case 3879:
case 530:
case 2191:
case 2507:
case 2953:
case 3862:
case 821:
case 2258:
case 1687:
case 3520:
case 3770:
case 2912:
case 1736:
case 263:
case 3017:
case 2641:
case 743:
case 130:
case 997:
case 3052:
case 1723:
case 2370:
case 1573:
case 793:
case 3087:
case 352:
case 3013:
case 377:
case 2982:
case 1361:
case 2412:
case 1617:
case 3225:
case 2453:
case 828:
case 2957:
case 3296:
case 2503:
case 2341:
case 1526:
case 1157:
case 1284:
case 3061:
case 2599:
case 2027:
case 1595:
case 1182:
case 641:
case 1387:
case 2285:
case 747:
case 3922:
case 698:
case 4057:
case 1313:
case 2594:
case 1352:
case 2706:
case 267:
case 4082:
case 3295:
case 522:
case 3447:
case 803:
case 3584:
case 3108:
case 3334:
case 1800:
case 3674:
case 3237:
case 359:
case 3438:
case 3339:
case 3651:
case 122:
case 2705:
case 2035:
case 283:
case 2286:
case 2751:
case 3978:
case 3111:
case 2774:
case 1742:
case 1852:
case 1421:
case 1034:
case 1596:
case 3662:
case 1887:
case 1525:
case 2529:
case 2779:
case 1894:
case 2396:
case 3615:
case 2325:
case 1227:
case 1810:
case 16:
case 3954:
case 209:
case 2089:
case 188:
case 1085:
case 774:
case 785:
case 2895:
case 2848:
case 2826:
case 3:
case 3270:
case 1324:
case 832:
case 985:
case 1714:
case 3535:
case 466:
case 2466:
case 3597:
case 323:
case 3940:
case 2873:
case 3160:
case 3155:
case 1719:
case 3241:
case 3886:
case 499:
case 846:
case 2337:
case 1235:
case 2513:
case 1607:
case 2402:
case 718:
case 2552:
case 2896:
case 115:
case 3003:
case 3733:
case 1824:
case 1498:
case 138:
case 1445:
case 2395:
case 561:
case 405:
case 1297:
case 735:
case 3156:
case 3099:
case 1680:
case 3885:
case 2633:
case 3527:
case 1469:
case 1368:
case 515:
case 1570:
case 295:
case 3386:
case 918:
case 538:
case 3010:
case 1464:
case 613:
case 168:
case 1242:
case 3080:
case 2695:
case 531:
case 1964:
case 1204:
case 2648:
case 245:
case 1144:
case 1275:
case 172:
case 2965:
case 157:
case 2950:
case 626:
case 2172:
case 1969:
case 1209:
case 1149:
case 301:
case 2198:
case 4002:
case 18:
case 1432:
case 3523:
case 2274:
case 2145:
case 3773:
case 1945:
case 2949:
case 131:
case 2169:
case 3737:
case 3007:
case 1165:
case 557:
case 1016:
case 1603:
case 965:
case 711:
case 2944:
case 486:
case 820:
case 896:
case 4050:
case 2517:
case 2333:
case 58:
case 1530:
case 1058:
case 3816:
case 2785:
case 449:
case 71:
case 1624:
case 2128:
case 2206:
case 3593:
case 581:
case 3315:
case 2625:
case 1629:
case 394:
case 316:
case 3575:
case 3504:
case 3454:
case 3796:
case 181:
case 2019:
case 3471:
case 3188:
case 706:
case 1223:
case 1880:
case 1166:
case 53:
case 1928:
case 3685:
case 91:
case 3459:
case 3358:
case 327:
case 2014:
case 3184:
case 3257:
case 3563:
case 2996:
case 3458:
case 3359:
case 364:
case 3282:
case 622:
case 54:
case 176:
case 2925:
case 2018:
case 3371:
case 3354:
case 2666:
case 4025:
case 3766:
case 892:
case 482:
case 3511:
case 1628:
case 1071:
case 3985:
case 576:
case 1054:
case 3415:
case 1788:
case 439:
case 1196:
case 1059:
case 285:
case 1910:
case 1480:
case 1173:
case 660:
case 3749:
case 2650:
case 2926:
case 141:
case 2948:
case 2995:
case 4073:
case 3032:
case 795:
case 198:
case 3854:
case 1999:
case 2056:
case 2199:
case 866:
case 1195:
case 995:
case 1968:
case 2644:
case 1263:
case 3986:
case 2194:
case 2477:
case 2973:
case 235:
case 3765:
case 3840:
case 2292:
case 4026:
case 2110:
case 598:
case 1137:
case 1364:
case 2180:
case 548:
case 849:
case 2473:
case 3916:
case 1468:
case 950:
case 2365:
case 1403:
case 3831:
case 2350:
case 1553:
case 3098:
case 745:
case 2495:
case 191:
case 750:
case 1499:
case 1398:
case 148:
case 3120:
case 3069:
case 2591:
case 1372:
case 2344:
case 1281:
case 462:
case 1756:
case 2302:
case 1846:
case 3064:
case 2933:
case 2238:
case 3046:
case 504:
case 1864:
case 3654:
case 3485:
case 334:
case 19:
case 3915:
case 1869:
case 206:
case 842:
case 2865:
case 3659:
case 1424:
case 1031:
case 1872:
case 104:
case 2849:
case 1898:
case 21:
case 3119:
case 1760:
case 59:
case 1429:
case 886:
case 2425:
case 2844:
case 2521:
case 1346:
case 3958:
case 3114:
case 4062:
case 817:
case 2974:
case 2193:
case 614:
case 3528:
case 2951:
case 1611:
case 1269:
case 1909:
case 2250:
case 1975:
case 256:
case 3081:
case 1264:
case 1904:
case 1942:
case 2643:
case 2439:
case 3743:
case 2175:
case 2244:
case 1608:
case 1531:
case 1179:
case 2962:
case 1663:
case 2202:
case 2021:
case 2109:
case 1497:
case 1993:
case 1174:
case 1245:
case 1298:
case 3657:
case 310:
case 3231:
case 324:
case 662:
case 3930:
case 3598:
case 1012:
case 2266:
case 3722:
case 3572:
case 678:
case 973:
case 900:
case 3569:
case 1881:
case 1228:
case 2838:
case 1427:
case 430:
case 3312:
case 773:
case 3117:
case 3564:
case 2757:
case 1436:
case 3470:
case 4006:
case 3970:
case 3152:
case 3113:
case 689:
case 2753:
case 3382:
case 977:
case 952:
case 3532:
case 1811:
case 347:
case 2878:
case 3941:
case 1057:
case 777:
case 429:
case 671:
case 2322:
case 3612:
case 1808:
case 1863:
case 1540:
case 959:
case 2343:
case 3008:
case 813:
case 3063:
case 1311:
case 1667:
case 1935:
case 840:
case 855:
case 1404:
case 4034:
case 2647:
case 2479:
case 1475:
case 225:
case 1409:
case 1559:
case 422:
case 2555:
case 2474:
case 2451:
case 2638:
case 2501:
case 3830:
case 2639:
case 2351:
case 2374:
case 3093:
case 1147:
case 1463:
case 2305:
case 1207:
case 4038:
case 956:
case 636:
case 1309:
case 2277:
case 3216:
case 2478:
case 4047:
case 2181:
case 2806:
case 1697:
case 2492:
case 1280:
case 3042:
case 830:
case 35:
case 3734:
case 3004:
case 2233:
case 1981:
case 3075:
case 2362:
case 1411:
case 3009:
case 3739:
case 2590:
case 200:
case 273:
case 686:
case 2851:
case 2741:
case 1376:
case 2422:
case 2874:
case 1842:
case 1804:
case 1875:
case 1787:
case 107:
case 3670:
case 3258:
case 3507:
case 3191:
case 337:
case 3953:
case 1323:
case 2520:
case 880:
case 426:
case 490:
case 3912:
case 3076:
case 1030:
case 363:
case 2083:
case 3641:
case 413:
case 1586:
case 277:
case 2606:
case 2087:
case 2839:
case 440:
case 3412:
case 103:
case 170:
case 455:
case 3630:
case 2225:
case 692:
case 3568:
case 3957:
case 4022:
case 3503:
case 2296:
case 605:
case 1717:
case 2000:
case 3027:
case 358:
case 3599:
case 503:
case 822:
case 3036:
case 1070:
case 699:
case 4078:
case 2447:
case 1299:
case 1397:
case 3762:
case 1675:
case 2226:
case 2163:
case 2584:
case 1178:
case 1294:
case 666:
case 1911:
case 2438:
case 1827:
case 1192:
case 2651:
case 2237:
case 259:
case 383:
case 1693:
case 2111:
case 3774:
case 2273:
case 3286:
case 3841:
case 3751:
case 4043:
case 2978:
case 1203:
case 2662:
case 1963:
case 925:
case 860:
case 3779:
case 1069:
case 673:
case 2050:
case 391:
case 1120:
case 3499:
case 1064:
case 3828:
case 584:
case 3410:
case 81:
case 2116:
case 3846:
case 2044:
case 1916:
case 762:
case 242:
case 3364:
case 806:
case 3133:
case 3512:
case 450:
case 445:
case 778:
case 1098:
case 3267:
case 3403:
case 2115:
case 969:
case 1640:
case 3755:
case 236:
case 4090:
case 1567:
case 1958:
case 1114:
case 914:
case 3328:
case 1028:
case 3864:
case 796:
case 2914:
case 1046:
case 3718:
case 2660:
case 769:
case 2919:
case 1485:
case 2489:
case 2388:
case 2318:
case 1985:
case 835:
case 564:
case 2419:
case 3071:
case 34:
case 299:
case 1511:
case 2414:
case 818:
case 519:
case 659:
case 2543:
case 3125:
case 1340:
case 746:
case 376:
case 2688:
case 4089:
case 739:
case 1257:
case 2355:
case 1184:
case 1631:
case 1359:
case 946:
case 1458:
case 3924:
case 1371:
case 1189:
case 119:
case 2746:
case 2592:
case 2185:
case 3208:
case 3968:
case 3126:
case 3903:
case 2420:
case 495:
case 771:
case 2818:
case 874:
case 652:
case 932:
case 677:
case 989:
case 1750:
case 1765:
case 2769:
case 3137:
case 3698:
case 1986:
case 3211:
case 2745:
case 789:
case 2186:
case 205:
case 1749:
case 1859:
case 3910:
case 2522:
case 3480:
case 112:
case 1702:
case 1871:
case 3664:
case 3999:
case 1854:
case 1744:
case 398:
case 742:
case 3972:
case 3165:
case 3150:
case 1686:
case 2506:
case 3293:
case 331:
case 3380:
case 465:
case 501:
case 3603:
case 986:
case 1795:
case 1748:
case 1858:
case 2799:
case 3668:
case 278:
case 1316:
case 3275:
case 411:
case 1080:
case 2890:
case 368:
case 786:
case 3149:
case 1815:
case 942:
case 2819:
case 1523:
case 3432:
case 38:
case 357:
case 3694:
case 3015:
case 1796:
case 214:
case 1188:
case 1471:
case 381:
case 10:
case 2579:
case 2684:
case 2729:
case 1725:
case 296:
case 1509:
case 516:
case 1358:
case 3946:
case 656:
case 4088:
case 2460:
case 269:
case 2574:
case 2689:
case 594:
case 1685:
case 3166:
case 1593:
case 406:
case 50:
case 949:
case 1816:
case 3058:
case 2314:
case 3789:
case 1931:
case 527:
case 1230:
case 1315:
case 2988:
case 2319:
case 850:
case 2283:
case 845:
case 3629:
case 2213:
case 4060:
case 895:
case 2918:
case 2154:
case 474:
case 1658:
case 3803:
case 4001:
case 3790:
case 2252:
case 3868:
case 27:
case 1886:
case 1241:
case 2534:
case 2096:
case 282:
case 999:
case 2140:
case 36:
case 2901:
case 2261:
case 3329:
case 3810:
case 3446:
case 1959:
case 3894:
case 799:
case 2955:
case 802:
case 3236:
case 3324:
case 1270:
case 246:
case 2690:
case 766:
case 1118:
case 523:
case 3899:
case 2026:
case 3368:
case 3469:
case 108:
case 3932:
case 705:
case 3464:
case 2707:
case 1010:
case 3720:
case 2884:
case 1386:
case 271:
case 2073:
case 3607:
case 3394:
case 809:
case 3829:
case 3310:
case 3235:
case 3399:
case 338:
case 3498:
case 2956:
case 353:
case 3297:
case 1616:
case 1733:
case 3541:
case 1003:
case 1068:
case 2780:
case 755:
case 2595:
case 740:
case 2548:
case 2776:
case 1341:
case 713:
case 3070:
case 1510:
case 229:
case 2289:
case 3122:
case 3897:
case 558:
case 3586:
case 3224:
case 1370:
case 2573:
case 2723:
case 635:
case 1453:
case 1630:
case 370:
case 3327:
case 2361:
case 1524:
case 1751:
case 1841:
case 1035:
case 1779:
case 2525:
case 3203:
case 3467:
case 3908:
case 2421:
case 2852:
case 2742:
case 3675:
case 1870:
case 1762:
case 3397:
case 3827:
case 3210:
case 2793:
case 3294:
case 3178:
case 3911:
case 2800:
case 852:
case 187:
case 3411:
case 15:
case 4021:
case 1734:
case 2051:
case 1121:
case 2005:
case 1739:
case 280:
case 3207:
case 3463:
case 3558:
case 2921:
case 61:
case 1830:
case 3876:
case 2883:
case 1093:
case 873:
case 3342:
case 3304:
case 3697:
case 3375:
case 2613:
case 3323:
case 2006:
case 1482:
case 137:
case 1457:
case 230:
case 2727:
case 3516:
case 2577:
case 1641:
case 163:
case 3700:
case 1330:
case 2533:
case 3627:
case 3376:
case 2661:
case 2219:
case 665:
case 917:
case 537:
case 1670:
case 3713:
case 2214:
case 726:
case 1023:
case 3752:
case 2290:
case 563:
case 3804:
case 3082:
case 1240:
case 929:
case 602:
case 1161:
case 2952:
case 1653:
case 3808:
case 3863:
case 825:
case 2483:
case 2913:
case 1430:
case 4000:
case 1271:
case 1113:
case 2022:
case 593:
case 1187:
case 1970:
case 255:
case 2260:
case 452:
case 2255:
case 4013:
case 3811:
case 695:
case 2201:
case 3423:
case 3554:
case 3139:
case 3442:
case 3721:
case 3232:
case 609:
case 2043:
case 3308:
case 3134:
case 3409:
case 722:
case 1063:
case 3493:
case 3935:
case 2621:
case 2078:
case 1853:
case 1743:
case 980:
case 3663:
case 3381:
case 3179:
case 3435:
case 3993:
case 2566:
case 3497:
case 3151:
case 3298:
case 2711:
case 3174:
case 1067:
case 3269:
case 1792:
case 2763:
case 2038:
case 780:
case 1081:
case 2891:
case 3975:
case 524:
case 2461:
case 1312:
case 3923:
case 3427:
case 1353:
case 4017:
case 2550:
case 197:
case 2400:
case 510:
case 645:
case 4083:
case 1569:
case 930:
case 650:
case 3246:
case 226:
case 290:
case 1117:
case 2130:
case 543:
case 1183:
case 1564:
case 856:
case 2983:
case 124:
case 1682:
case 3976:
case 2288:
case 2502:
case 1657:
case 2544:
case 1231:
case 1441:
case 1572:
case 1598:
case 143:
case 2549:
case 3012:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759424401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,];
var gg_b = "1759424401/";

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
