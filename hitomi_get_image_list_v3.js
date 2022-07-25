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
var o = 1;
switch (g) {
case 703:
case 3227:
case 1761:
case 3891:
case 3348:
case 568:
case 725:
case 2352:
case 3173:
case 1995:
case 915:
case 2687:
case 1916:
case 816:
case 1743:
case 824:
case 1716:
case 1375:
case 386:
case 2040:
case 1882:
case 1732:
case 2873:
case 2003:
case 707:
case 3024:
case 1227:
case 664:
case 440:
case 2403:
case 2490:
case 1581:
case 52:
case 3676:
case 37:
case 1900:
case 3330:
case 2871:
case 2262:
case 826:
case 1556:
case 1643:
case 3444:
case 590:
case 1327:
case 168:
case 3729:
case 1036:
case 401:
case 4020:
case 2158:
case 945:
case 1861:
case 2312:
case 3208:
case 3519:
case 2469:
case 3646:
case 3986:
case 2192:
case 813:
case 1686:
case 1495:
case 3621:
case 2638:
case 3283:
case 1246:
case 2094:
case 2417:
case 2601:
case 2952:
case 20:
case 2071:
case 2345:
case 429:
case 220:
case 836:
case 1664:
case 105:
case 1468:
case 2562:
case 1463:
case 1392:
case 3412:
case 2745:
case 452:
case 1341:
case 2676:
case 3954:
case 3564:
case 407:
case 287:
case 2571:
case 2976:
case 205:
case 1042:
case 1273:
case 1867:
case 11:
case 3632:
case 4037:
case 1340:
case 2183:
case 2479:
case 1522:
case 66:
case 881:
case 3361:
case 3237:
case 122:
case 2897:
case 1775:
case 3580:
case 2066:
case 412:
case 3118:
case 2302:
case 3936:
case 1689:
case 822:
case 3069:
case 3531:
case 1724:
case 264:
case 3860:
case 3442:
case 1606:
case 3740:
case 153:
case 677:
case 772:
case 3516:
case 1986:
case 3650:
case 629:
case 150:
case 1579:
case 3005:
case 2608:
case 1777:
case 1891:
case 1076:
case 148:
case 655:
case 1771:
case 1756:
case 1704:
case 2140:
case 583:
case 2256:
case 2942:
case 539:
case 713:
case 2454:
case 2973:
case 163:
case 2961:
case 3989:
case 924:
case 1179:
case 212:
case 2415:
case 1085:
case 926:
case 1142:
case 437:
case 2402:
case 3142:
case 2522:
case 96:
case 526:
case 1404:
case 187:
case 2867:
case 3004:
case 1405:
case 2139:
case 2032:
case 464:
case 3672:
case 1391:
case 2921:
case 3087:
case 548:
case 736:
case 3764:
case 2668:
case 1517:
case 3475:
case 2751:
case 861:
case 3566:
case 2399:
case 1127:
case 2411:
case 952:
case 990:
case 2658:
case 3870:
case 1665:
case 3181:
case 2505:
case 2357:
case 3463:
case 976:
case 2458:
case 1403:
case 3777:
case 23:
case 3861:
case 1714:
case 635:
case 1807:
case 3253:
case 3926:
case 3738:
case 2393:
case 1723:
case 4053:
case 3045:
case 1198:
case 3626:
case 798:
case 1785:
case 215:
case 3164:
case 825:
case 2893:
case 110:
case 293:
case 1962:
case 1148:
case 1765:
case 815:
case 3100:
case 1722:
case 3962:
case 2173:
case 54:
case 2820:
case 2914:
case 3001:
case 2047:
case 394:
case 2646:
case 2986:
case 408:
case 1607:
case 1681:
case 3585:
case 1482:
case 719:
case 3537:
case 3175:
case 2844:
case 1805:
case 3423:
case 4076:
case 3680:
case 389:
case 2829:
case 2750:
case 2588:
case 3992:
case 2698:
case 1731:
case 2789:
case 194:
case 40:
case 1696:
case 3271:
case 3316:
case 651:
case 1909:
case 1073:
case 871:
case 2869:
case 89:
case 2682:
case 3963:
case 2865:
case 21:
case 1202:
case 238:
case 1869:
case 831:
case 964:
case 692:
case 1499:
case 608:
case 3940:
case 732:
case 3467:
case 3902:
case 1763:
case 896:
case 4048:
case 2771:
case 4000:
case 193:
case 828:
case 1831:
case 2864:
case 1091:
case 1524:
case 3192:
case 1507:
case 1221:
case 975:
case 3706:
case 259:
case 962:
case 1688:
case 3893:
case 292:
case 2573:
case 384:
case 724:
case 2241:
case 3816:
case 2229:
case 1561:
case 3840:
case 2502:
case 1454:
case 1893:
case 1904:
case 2756:
case 1056:
case 3793:
case 1613:
case 3015:
case 938:
case 1000:
case 2953:
case 3397:
case 1016:
case 1544:
case 3724:
case 2647:
case 877:
case 3739:
case 841:
case 536:
case 673:
case 1976:
case 2816:
case 2695:
case 3229:
case 3900:
case 2365:
case 597:
case 1721:
case 2979:
case 1692:
case 1639:
case 3721:
case 4078:
case 3374:
case 88:
case 2363:
case 1203:
case 31:
case 1703:
case 1435:
case 742:
case 3075:
case 2400:
case 3126:
case 1332:
case 2444:
case 1766:
case 334:
case 1119:
case 1472:
case 2546:
case 1820:
case 3704:
case 2466:
case 2538:
case 4024:
case 2783:
case 4077:
case 189:
case 3057:
case 1302:
case 2320:
case 2693:
case 2055:
case 2516:
case 2685:
case 346:
case 3882:
case 2080:
case 4027:
case 3846:
case 1135:
case 3700:
case 3522:
case 2460:
case 1662:
case 1070:
case 1421:
case 556:
case 3461:
case 885:
case 1035:
case 1913:
case 1895:
case 3420:
case 3775:
case 138:
case 1552:
case 2894:
case 2861:
case 127:
case 2028:
case 2286:
case 714:
case 1529:
case 2401:
case 3252:
case 1425:
case 851:
case 2446:
case 3997:
case 1107:
case 141:
case 1908:
case 2679:
case 3099:
case 1321:
case 3806:
case 1243:
case 2136:
case 77:
case 2338:
case 1079:
case 534:
case 2673:
case 3912:
case 1928:
case 3779:
case 3144:
case 2327:
case 3834:
case 1506:
case 1004:
case 2592:
case 545:
case 3590:
case 3878:
case 1593:
case 1783:
case 2916:
case 38:
case 2762:
case 3086:
case 2934:
case 1735:
case 2740:
case 2409:
case 216:
case 1274:
case 25:
case 1276:
case 2293:
case 4028:
case 281:
case 1990:
case 3426:
case 1628:
case 1041:
case 223:
case 2850:
case 2706:
case 1508:
case 840:
case 1287:
case 594:
case 2694:
case 2697:
case 3495:
case 3259:
case 508:
case 1184:
case 416:
case 1595:
case 240:
case 1491:
case 4040:
case 112:
case 1366:
case 3513:
case 2545:
case 347:
case 745:
case 1117:
case 1746:
case 4069:
case 1222:
case 2720:
case 2889:
case 6:
case 1096:
case 42:
case 3480:
case 172:
case 925:
case 299:
case 550:
case 2825:
case 2708:
case 514:
case 3987:
case 225:
case 814:
case 3669:
case 3036:
case 143:
case 585:
case 1192:
case 3617:
case 1532:
case 256:
case 2891:
case 409:
case 3899:
case 1653:
case 3392:
case 1644:
case 1228:
case 2746:
case 1448:
case 3761:
case 1920:
case 2108:
case 626:
case 1806:
case 145:
case 2023:
case 3125:
case 2050:
case 3998:
case 1513:
case 218:
case 2703:
case 2686:
case 737:
case 2342:
case 2413:
case 1520:
case 2936:
case 3943:
case 1345:
case 3903:
case 2888:
case 1675:
case 2298:
case 2808:
case 1407:
case 3368:
case 3784:
case 598:
case 2276:
case 2172:
case 3625:
case 1209:
case 3198:
case 2018:
case 203:
case 490:
case 2376:
case 869:
case 1061:
case 2526:
case 1269:
case 2848:
case 1387:
case 1214:
case 3543:
case 29:
case 2704:
case 69:
case 3689:
case 738:
case 1701:
case 892:
case 328:
case 2753:
case 3829:
case 2488:
case 2301:
case 3315:
case 3107:
case 291:
case 992:
case 488:
case 1114:
case 3159:
case 3460:
case 3707:
case 241:
case 3708:
case 3419:
case 767:
case 3349:
case 2264:
case 2963:
case 2990:
case 2084:
case 3667:
case 769:
case 1690:
case 830:
case 2881:
case 3187:
case 1754:
case 3948:
case 953:
case 3188:
case 1921:
case 385:
case 1420:
case 4015:
case 2900:
case 2035:
case 833:
case 1868:
case 1966:
case 3396:
case 4007:
case 1438:
case 3515:
case 3557:
case 1418:
case 1154:
case 3021:
case 36:
case 3112:
case 2465:
case 159:
case 4072:
case 2550:
case 3691:
case 1965:
case 3820:
case 697:
case 1348:
case 3731:
case 2244:
case 1353:
case 3634:
case 1423:
case 1774:
case 1509:
case 2157:
case 1818:
case 432:
case 87:
case 1540:
case 2959:
case 3218:
case 960:
case 3114:
case 3753:
case 100:
case 1229:
case 1230:
case 226:
case 823:
case 780:
case 3630:
case 3235:
case 1444:
case 2675:
case 1949:
case 1676:
case 2882:
case 2972:
case 502:
case 614:
case 3521:
case 3131:
case 1822:
case 3540:
case 2046:
case 1141:
case 349:
case 84:
case 2455:
case 124:
case 4035:
case 160:
case 296:
case 3663:
case 2632:
case 2806:
case 2998:
case 1406:
case 471:
case 2248:
case 3165:
case 3792:
case 2741:
case 3441:
case 1624:
case 668:
case 1945:
case 633:
case 2367:
case 2628:
case 1294:
case 2304:
case 3660:
case 853:
case 210:
case 1163:
case 2133:
case 120:
case 1734:
case 1238:
case 2617:
case 1364:
case 2970:
case 1933:
case 2926:
case 2776:
case 2650:
case 297:
case 2214:
case 3149:
case 1331:
case 2013:
case 3889:
case 3682:
case 2935:
case 1048:
case 930:
case 2119:
case 1747:
case 1279:
case 654:
case 3327:
case 2374:
case 3797:
case 515:
case 2940:
case 2799:
case 603:
case 499:
case 1548:
case 133:
case 2790:
case 4006:
case 161:
case 1817:
case 3561:
case 1588:
case 2803:
case 3101:
case 720:
case 1025:
case 963:
case 1737:
case 1271:
case 3684:
case 4055:
case 1972:
case 2279:
case 1138:
case 663:
case 3934:
case 1308:
case 3291:
case 3406:
case 1872:
case 1847:
case 2624:
case 2043:
case 95:
case 2800:
case 414:
case 2824:
case 1116:
case 3009:
case 1901:
case 3620:
case 1788:
case 186:
case 3213:
case 859:
case 2355:
case 2788:
case 1177:
case 2414:
case 2996:
case 2605:
case 469:
case 1151:
case 107:
case 39:
case 3913:
case 3029:
case 711:
case 265:
case 2188:
case 3477:
case 806:
case 890:
case 3449:
case 1571:
case 790:
case 1393:
case 2218:
case 2289:
case 2186:
case 3694:
case 1744:
case 2946:
case 690:
case 511:
case 1098:
case 3399:
case 446:
case 581:
case 1697:
case 2239:
case 1560:
case 3113:
case 4003:
case 766:
case 2822:
case 28:
case 2483:
case 4017:
case 1968:
case 1655:
case 2130:
case 3065:
case 3623:
case 402:
case 3040:
case 1174:
case 1503:
case 2315:
case 4018:
case 3602:
case 3394:
case 1915:
case 3512:
case 1860:
case 1679:
case 1347:
case 3425:
case 2392:
case 3842:
case 748:
case 457:
case 1877:
case 672:
case 3819:
case 3831:
case 3031:
case 649:
case 2443:
case 1825:
case 1256:
case 1939:
case 314:
case 939:
case 1794:
case 520:
case 1938:
case 2004:
case 3355:
case 2278:
case 774:
case 310:
case 3116:
case 3290:
case 1621:
case 2733:
case 785:
case 909:
case 2354:
case 3066:
case 7:
case 3658:
case 2266:
case 3196:
case 2356:
case 933:
case 3284:
case 2722:
case 3598:
case 773:
case 3851:
case 1464:
case 267:
case 1080:
case 923:
case 2277:
case 280:
case 3906:
case 3033:
case 2177:
case 3767:
case 3422:
case 329:
case 722:
case 2064:
case 1240:
case 1397:
case 2270:
case 2796:
case 3750:
case 1951:
case 1494:
case 3737:
case 3859:
case 768:
case 1300:
case 3494:
case 1272:
case 175:
case 1930:
case 147:
case 358:
case 3083:
case 2534:
case 1193:
case 2759:
case 3255:
case 1634:
case 1210:
case 1521:
case 3875:
case 2360:
case 4058:
case 2242:
case 2997:
case 3324:
case 894:
case 549:
case 2268:
case 2486:
case 4010:
case 185:
case 3845:
case 1190:
case 1008:
case 1842:
case 2761:
case 3305:
case 1024:
case 4064:
case 1833:
case 1718:
case 775:
case 1325:
case 993:
case 3976:
case 4026:
case 1303:
case 108:
case 3115:
case 2995:
case 617:
case 644:
case 2853:
case 1373:
case 3171:
case 2419:
case 1587:
case 237:
case 3243:
case 3595:
case 1985:
case 3280:
case 2470:
case 15:
case 2899:
case 3258:
case 1224:
case 907:
case 1476:
case 605:
case 3248:
case 366:
case 2810:
case 1157:
case 3607:
case 3450:
case 1026:
case 3984:
case 582:
case 453:
case 996:
case 1155:
case 1948:
case 1441:
case 2426:
case 3484:
case 847:
case 3499:
case 2818:
case 3627:
case 1603:
case 879:
case 2969:
case 3528:
case 345:
case 652:
case 2503:
case 4065:
case 2960:
case 2070:
case 3726:
case 1824:
case 3287:
case 1123:
case 759:
case 51:
case 3944:
case 3041:
case 4011:
case 1241:
case 1988:
case 2760:
case 1143:
case 2737:
case 2645:
case 783:
case 3212:
case 3120:
case 1657:
case 901:
case 2069:
case 1886:
case 2769:
case 2305:
case 3201:
case 8:
case 1693:
case 2250:
case 3807:
case 3329:
case 1629:
case 1501:
case 3872:
case 196:
case 674:
case 740:
case 4091:
case 1161:
case 3530:
case 3202:
case 2085:
case 455:
case 739:
case 958:
case 1249:
case 4071:
case 2782:
case 3006:
case 3865:
case 611:
case 3880:
case 2498:
case 376:
case 3996:
case 3601:
case 2614:
case 2794:
case 3018:
case 2169:
case 1796:
case 3910:
case 341:
case 2501:
case 1609:
case 3288:
case 1257:
case 1631:
case 3091:
case 2438:
case 2846:
case 2:
case 3542:
case 2870:
case 2166:
case 284:
case 3800:
case 2227:
case 183:
case 1671:
case 625:
case 2126:
case 3717:
case 2989:
case 445:
case 3618:
case 1483:
case 3688:
case 2773:
case 1176:
case 2217:
case 338:
case 609:
case 4013:
case 3264:
case 1471:
case 2087:
case 1748:
case 1498:
case 2179:
case 3077:
case 3152:
case 3163:
case 3817:
case 1046:
case 612:
case 1925:
case 2582:
case 3017:
case 19:
case 2429:
case 1474:
case 2489:
case 2263:
case 844:
case 3697:
case 756:
case 966:
case 1101:
case 3272:
case 3673:
case 1586:
case 3504:
case 0:
case 2663:
case 231:
case 1530:
case 3409:
case 1007:
case 2727:
case 2876:
case 950:
case 1226:
case 2165:
case 1411:
case 154:
case 257:
case 2267:
case 2208:
case 2627:
case 363:
case 3453:
case 123:
case 104:
case 615:
case 2059:
case 700:
case 4001:
case 634:
case 900:
case 305:
case 954:
case 3025:
case 2966:
case 1021:
case 995:
case 2823:
case 2718:
case 709:
case 1970:
case 14:
case 2091:
case 390:
case 3342:
case 3973:
case 1768:
case 1255:
case 808:
case 2014:
case 1635:
case 4041:
case 2944:
case 197:
case 1372:
case 1017:
case 2941:
case 3185:
case 1554:
case 1129:
case 3381:
case 541:
case 2145:
case 2309:
case 229:
case 3310:
case 3931:
case 2552:
case 1705:
case 3261:
case 2477:
case 1591:
case 3160:
case 1481:
case 106:
case 3719:
case 3916:
case 2977:
case 2890:
case 4023:
case 204:
case 749:
case 4047:
case 1998:
case 3194:
case 2211:
case 1175:
case 3824:
case 3671:
case 2224:
case 3093:
case 1134:
case 273:
case 151:
case 2578:
case 4014:
case 2156:
case 1225:
case 734:
case 797:
case 2471:
case 636:
case 562:
case 2785:
case 843:
case 2537:
case 3603:
case 286:
case 1827:
case 1167:
case 1580:
case 1890:
case 758:
case 342:
case 3465:
case 4032:
case 688:
case 2287:
case 1311:
case 2731:
case 3745:
case 1223:
case 1738:
case 618:
case 1288:
case 4083:
case 3929:
case 2001:
case 2427:
case 3592:
case 3003:
case 2314:
case 2334:
case 1789:
case 509:
case 263:
case 2053:
case 2564:
case 3042:
case 3350:
case 4084:
case 3826:
case 3668:
case 1291:
case 1636:
case 2362:
case 3296:
case 155:
case 443:
case 1147:
case 1977:
case 2226:
case 3743:
case 1312:
case 1557:
case 2734:
case 1974:
case 3594:
case 1479:
case 1720:
case 566:
case 2635:
case 2182:
case 396:
case 3331:
case 1800:
case 2643:
case 4086:
case 518:
case 3546:
case 2258:
case 2838:
case 983:
case 478:
case 3562:
case 2928:
case 458:
case 3345:
case 3930:
case 1185:
case 2593:
case 2353:
case 86:
case 1318:
case 2052:
case 255:
case 419:
case 3781:
case 2903:
case 3527:
case 450:
case 1781:
case 3466:
case 1656:
case 3597:
case 3353:
case 3377:
case 1523:
case 3128:
case 3371:
case 3932:
case 79:
case 2930:
case 529:
case 2902:
case 3094:
case 3325:
case 3293:
case 78:
case 592:
case 3183:
case 45:
case 586:
case 1217:
case 1414:
case 2863:
case 1171:
case 750:
case 2058:
case 2061:
case 165:
case 3942:
case 1144:
case 1108:
case 669:
case 1162:
case 1310:
case 3768:
case 743:
case 2433:
case 855:
case 3122:
case 1841:
case 969:
case 978:
case 2543:
case 3549:
case 3064:
case 2758:
case 261:
case 3586:
case 335:
case 3266:
case 1848:
case 920:
case 2843:
case 2350:
case 3538:
case 2232:
case 371:
case 2015:
case 3639:
case 425:
case 116:
case 580:
case 2233:
case 2090:
case 2660:
case 222:
case 782:
case 3517:
case 3326:
case 260:
case 3503:
case 1923:
case 2625:
case 553:
case 3553:
case 3060:
case 3:
case 3873:
case 48:
case 3439:
case 128:
case 1742:
case 3157:
case 3119:
case 1180:
case 2329:
case 1328:
case 2370:
case 484:
case 895:
case 449:
case 1542:
case 2340:
case 3472:
case 312:
case 1850:
case 3214:
case 2202:
case 482:
case 2002:
case 819:
case 2076:
case 3322:
case 391:
case 2929:
case 1027:
case 1277:
case 68:
case 667:
case 3550:
case 558:
case 1650:
case 2945:
case 2878:
case 977:
case 1661:
case 3524:
case 2518:
case 3730:
case 2839:
case 434:
case 2765:
case 3754:
case 2951:
case 2983:
case 1863:
case 475:
case 3158:
case 3273:
case 943:
case 3085:
case 2114:
case 70:
case 1120:
case 300:
case 1038:
case 982:
case 2636:
case 2743:
case 2317:
case 1493:
case 285:
case 1137:
case 4060:
case 2804:
case 2406:
case 1871:
case 1730:
case 81:
case 1012:
case 735:
case 4068:
case 2837:
case 4073:
case 3311:
case 33:
case 2282:
case 1194:
case 2933:
case 2817:
case 493:
case 554:
case 2840:
case 2361:
case 2253:
case 2947:
case 3062:
case 1357:
case 678:
case 2435:
case 2659:
case 2441:
case 3134:
case 3782:
case 3407:
case 571:
case 468:
case 1821:
case 1083:
case 778:
case 4038:
case 698:
case 3579:
case 1770:
case 3825:
case 3239:
case 2038:
case 1239:
case 2602:
case 691:
case 188:
case 3323:
case 4002:
case 587:
case 2542:
case 1285:
case 935:
case 1907:
case 3765:
case 209:
case 251:
case 428:
case 3140:
case 3154:
case 2449:
case 173:
case 9:
case 3981:
case 3615:
case 2475:
case 1758:
case 1727:
case 2440:
case 56:
case 902:
case 282:
case 730:
case 3883:
case 2586:
case 3637:
case 3274:
case 1615:
case 3799:
case 928:
case 2967:
case 4039:
case 3473:
case 3486:
case 1543:
case 3923:
case 2073:
case 1852:
case 2246:
case 2159:
case 3862:
case 3901:
case 3760:
case 3156:
case 3445:
case 2418:
case 1278:
case 3788:
case 250:
case 317:
case 356:
case 1642:
case 1242:
case 3456:
case 1932:
case 2757:
case 1270:
case 3133:
case 1677:
case 191:
case 3373:
case 26:
case 3508:
case 1936:
case 3741:
case 2513:
case 3881:
case 1515:
case 4082:
case 1764:
case 3492:
case 1801:
case 3787:
case 3483:
case 821:
case 1691:
case 757:
case 2391:
case 1575:
case 1826:
case 1779:
case 1009:
case 2251:
case 3141:
case 3785:
case 2109:
case 2683:
case 2669:
case 67:
case 3391:
case 3728:
case 2713:
case 3610:
case 874:
case 2310:
case 367:
case 50:
case 3693:
case 2118:
case 1931:
case 648:
case 2613:
case 1258:
case 980:
case 85:
case 818:
case 3795:
case 214:
case 2254:
case 3651:
case 1156:
case 278:
case 718:
case 53:
case 1478:
case 3191:
case 1795:
case 918:
case 162:
case 3222:
case 2856:
case 696:
case 3957:
case 1215:
case 1109:
case 1043:
case 3313:
case 891:
case 3536:
case 1978:
case 1546:
case 166:
case 589:
case 2556:
case 1961:
case 3505:
case 794:
case 3858:
case 1280:
case 531:
case 3143:
case 2886:
case 3105:
case 2025:
case 1150:
case 2859:
case 3352:
case 3366:
case 1497:
case 717:
case 230:
case 1700:
case 1342:
case 3812:
case 10:
case 985:
case 93:
case 3510:
case 542:
case 929:
case 2412:
case 3978:
case 3446:
case 249:
case 510:
case 1088:
case 2535:
case 1957:
case 2184:
case 2068:
case 4022:
case 595:
case 1453:
case 3138:
case 2609:
case 2459:
case 3690:
case 863:
case 174:
case 2922:
case 71:
case 3879:
case 3489:
case 2180:
case 1819:
case 1477:
case 1093:
case 3251:
case 2558:
case 3428:
case 2956:
case 3108:
case 1301:
case 3922:
case 1206:
case 1967:
case 3723:
case 1136:
case 4093:
case 2163:
case 3132:
case 365:
case 1858:
case 2532:
case 3574:
case 3581:
case 3451:
case 1326:
case 3640:
case 1855:
case 113:
case 90:
case 3318:
case 3951:
case 3431:
case 3828:
case 2291:
case 3947:
case 1646:
case 3657:
case 2493:
case 1422:
case 807:
case 3268:
case 601:
case 2045:
case 252:
case 2874:
case 3895:
case 1152:
case 1213:
case 2421:
case 1371:
case 519:
case 1559:
case 3317:
case 3184:
case 353:
case 1678:
case 2079:
case 2604:
case 2732:
case 3124:
case 3732:
case 343:
case 1201:
case 2849:
case 1072:
case 1672:
case 2544:
case 1549:
case 3525:
case 3678:
case 2662:
case 3127:
case 3977:
case 388:
case 3856:
case 2189:
case 2220:
case 406:
case 206:
case 3096:
case 2918:
case 1504:
case 3541:
case 199:
case 2319:
case 799:
case 1200:
case 3853:
case 3681:
case 3835:
case 860:
case 2054:
case 2738:
case 2395:
case 1512:
case 1910:
case 817:
case 3319:
case 1394:
case 1633:
case 3776:
case 1063:
case 1536:
case 646:
case 2092:
case 3578:
case 323:
case 865:
case 1728:
case 1360:
case 3053:
case 1844:
case 1745:
case 746:
case 2618:
case 2680:
case 1296:
case 2830:
case 2280:
case 364:
case 2595:
case 3647:
case 3205:
case 2629:
case 2524:
case 1778:
case 59:
case 752:
case 2167:
case 2138:
case 3822:
case 4085:
case 2696:
case 1853:
case 872:
case 904:
case 1888:
case 1068:
case 908:
case 1019:
case 2283:
case 3172:
case 46:
case 1165:
case 2062:
case 2021:
case 2999:
case 2591:
case 882:
case 1602:
case 951:
case 1570:
case 5:
case 1211:
case 1926:
case 981:
case 1991:
case 1992:
case 2005:
case 3611:
case 2390:
case 2225:
case 2855:
case 2579:
case 1183:
case 3285:
case 2819:
case 3877:
case 2467:
case 149:
case 266:
case 3340:
case 1419:
case 244:
case 3583:
case 2428:
case 2699:
case 2379:
case 3359:
case 1011:
case 3755:
case 2346:
case 886:
case 460:
case 4080:
case 1033:
case 1999:
case 2285:
case 3307:
case 3887:
case 1583:
case 999:
case 2574:
case 3145:
case 2322:
case 1398:
case 876:
case 1960:
case 1055:
case 3789:
case 3372:
case 686:
case 3994:
case 3408:
case 2437:
case 1982:
case 1317:
case 1462:
case 1641:
case 2381:
case 702:
case 1849:
case 2519:
case 1047:
case 1994:
case 771:
case 622:
case 1829:
case 1864:
case 1937:
case 2688:
case 436:
case 304:
case 2125:
case 4067:
case 2651:
case 3102:
case 3068:
case 1652:
case 1018:
case 989:
case 731:
case 3058:
case 838:
case 470:
case 381:
case 1145:
case 1266:
case 3711:
case 875:
case 3109:
case 98:
case 118:
case 302:
case 2560:
case 326:
case 1386:
case 2905:
case 1955:
case 1128:
case 661:
case 1358:
case 1487:
case 3927:
case 2194:
case 701:
case 2098:
case 2237:
case 1461:
case 97:
case 3007:
case 3752:
case 3219:
case 1648:
case 2540:
case 1382:
case 2689:
case 466:
case 288:
case 2131:
case 3059:
case 3013:
case 1674:
case 1740:
case 3539:
case 716:
case 1964:
case 3633:
case 1823:
case 2152:
case 3791:
case 1518:
case 181:
case 1533:
case 1911:
case 2913:
case 442:
case 2199:
case 3256:
case 1379:
case 3071:
case 3387:
case 599:
case 277:
case 456:
case 2828:
case 2041:
case 2330:
case 2410:
case 2619:
case 537:
case 4012:
case 812:
case 2777:
case 2037:
case 1899:
case 1857:
case 3975:
case 360:
case 2325:
case 2439:
case 3593:
case 1415:
case 2378:
case 2204:
case 3379:
case 3155:
case 283:
case 1577:
case 3523:
case 198:
case 2030:
case 1959:
case 3554:
case 848:
case 1567:
case 2724:
case 3698:
case 1292:
case 3599:
case 1281:
case 2892:
case 811:
case 131:
case 934:
case 1220:
case 665:
case 1699:
case 3703:
case 1475:
case 3382:
case 3571:
case 1232:
case 2910:
case 2702:
case 1090:
case 884:
case 1519:
case 1638:
case 2971:
case 893:
case 322:
case 3117:
case 2129:
case 3928:
case 557:
case 2190:
case 1811:
case 2333:
case 94:
case 1903:
case 3054:
case 3852:
case 3790:
case 2249:
case 294:
case 4089:
case 4034:
case 3552:
case 1941:
case 3052:
case 1100:
case 2710:
case 1168:
case 1786:
case 3692:
case 501:
case 1568:
case 3588:
case 2725:
case 500:
case 3854:
case 1343:
case 315:
case 613:
case 3137:
case 2010:
case 591:
case 3886:
case 465:
case 1237:
case 3924:
case 3628:
case 234:
case 2377:
case 2019:
case 856:
case 3043:
case 3179:
case 2768:
case 1118:
case 1329:
case 538:
case 763:
case 418:
case 2102:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1658750402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,];
var gg_b = "1658750402/";

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
